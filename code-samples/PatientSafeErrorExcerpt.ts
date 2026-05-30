export function toPatientSafeError(error: unknown): PatientSafeError {
  if (isOrderingWindowError(error)) {
    return {
      status: 409,
      message: "This meal is no longer available for ordering.",
      code: "MEAL_PERIOD_CLOSED",
    };
  }

  if (isSessionError(error)) {
    return {
      status: 401,
      message: "Your session expired. Please start again.",
      code: "SESSION_EXPIRED",
    };
  }

  if (isHostUnavailableError(error)) {
    return {
      status: 503,
      message: "Ordering is temporarily unavailable. Please try again shortly.",
      code: "ORDERING_UNAVAILABLE",
    };
  }

  return {
    status: 500,
    message: "Something went wrong. Please ask staff for help.",
    code: "UNKNOWN",
  };
}

type PatientSafeError = {
  status: number;
  message: string;
  code: string;
};

function isOrderingWindowError(error: unknown) { return false; }
function isSessionError(error: unknown) { return false; }
function isHostUnavailableError(error: unknown) { return false; }
