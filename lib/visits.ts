export function maskIP(ip?: string | null): string {
  if (!ip) return "-";
  const clean = ip.replace(/^::ffff:/i, ""); // IPv4-mapped IPv6

  if (clean.includes(".") && !clean.includes(":")) {
    const p = clean.split(".");
    return p.length === 4 ? `${p[0]}.${p[1]}.***.***` : "-";
  }
  if (clean.includes(":")) {
    const head = clean.split("::")[0].split(":").filter(Boolean).slice(0, 2);
    return head.length === 2 ? `${head.join(":")}:****` : "****";
  }
  return "-";
}

export function isLocalIP(ip?: string | null): boolean {
  if (!ip || ip === "Unknown") return true;
  return ip === "::1" || ip.startsWith("127.") || ip.startsWith("::ffff:127.");
}
