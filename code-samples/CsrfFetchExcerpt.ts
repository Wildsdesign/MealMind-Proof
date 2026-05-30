type RequestOptions = RequestInit & {
  skipCsrf?: boolean;
};

export async function csrfFetch(url: string, options: RequestOptions = {}) {
  const method = (options.method || "GET").toUpperCase();
  const needsToken = !options.skipCsrf && ["POST", "PUT", "PATCH", "DELETE"].includes(method);

  const headers = new Headers(options.headers);
  headers.set("Content-Type", headers.get("Content-Type") || "application/json");

  if (needsToken) {
    const token = readCookie("csrf_token");
    if (!token) {
      throw new Error("Missing CSRF token");
    }
    headers.set("X-CSRF-Token", token);
  }

  return fetch(url, {
    ...options,
    method,
    headers,
    credentials: "include",
  });
}

function readCookie(name: string): string | null {
  return document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${name}=`))
    ?.split("=")[1] ?? null;
}
