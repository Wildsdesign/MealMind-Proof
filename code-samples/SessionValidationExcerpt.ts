import type { Request, Response, NextFunction } from "express";

export async function requirePatientSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const sessionId = req.cookies?.patient_session;

  if (!sessionId) {
    return res.status(401).json({ error: "Session expired. Please sign in again." });
  }

  const session = await loadSession(sessionId);

  if (!session || session.expiresAt < new Date()) {
    return res.status(401).json({ error: "Session expired. Please sign in again." });
  }

  req.patientSession = {
    internalPatientId: session.internalPatientId,
    tenantId: session.tenantId,
    activeMealPeriodId: session.activeMealPeriodId,
  };

  return next();
}

async function loadSession(sessionId: string) {
  return {
    internalPatientId: "internal-only-id",
    tenantId: "tenant-id",
    activeMealPeriodId: "meal-period-id",
    expiresAt: new Date(Date.now() + 60_000),
  };
}

declare global {
  namespace Express {
    interface Request {
      patientSession?: {
        internalPatientId: string;
        tenantId: string;
        activeMealPeriodId: string;
      };
    }
  }
}
