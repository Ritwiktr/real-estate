/**
 * NEXT_PUBLIC_API_BASE must be the backend *origin* (e.g. https://example.com), not …/api.
 * Code always prefixes paths with /api/…. If the env already ends with /api, strip it.
 */
export function apiOriginFromPublicBase(raw: string | undefined, whenEmpty: string): string {
  const trimmed = (raw ?? "").trim();
  const base = trimmed === "" ? whenEmpty.trim() : trimmed;
  if (base === "") return "";
  const noTrail = base.replace(/\/+$/, "");
  if (noTrail.endsWith("/api")) {
    return noTrail.slice(0, -4).replace(/\/+$/, "");
  }
  return noTrail;
}
