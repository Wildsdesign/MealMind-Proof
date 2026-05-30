import crypto from "crypto";

const rawKey = process.env.ENCRYPTION_KEY;

if (!rawKey && process.env.NODE_ENV === "production") {
  throw new Error("ENCRYPTION_KEY must be set in production");
}

const key = rawKey ? Buffer.from(rawKey, "hex") : null;

export function encrypt(plaintext: string): string {
  if (!key) {
    return plaintext;
  }

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  return [
    iv.toString("base64"),
    authTag.toString("base64"),
    encrypted.toString("base64"),
  ].join(":");
}

export function decrypt(stored: string | null): string | null {
  if (!stored) return null;
  if (!key || !stored.includes(":")) return stored;

  try {
    const [ivBase64, authTagBase64, ciphertextBase64] = stored.split(":");
    const decipher = crypto.createDecipheriv(
      "aes-256-gcm",
      key,
      Buffer.from(ivBase64, "base64"),
    );

    decipher.setAuthTag(Buffer.from(authTagBase64, "base64"));

    return Buffer.concat([
      decipher.update(Buffer.from(ciphertextBase64, "base64")),
      decipher.final(),
    ]).toString("utf8");
  } catch {
    return null;
  }
}
