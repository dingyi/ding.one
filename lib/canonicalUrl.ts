/**
 * Absolute self-referencing URL for a Pages Router location.
 * The homepage stays the bare origin. Query strings and hashes are omitted.
 */
export function canonicalUrl(origin: string, asPath: string): string {
  const pathOnly = (asPath || '/').split(/[?#]/)[0] || '/'

  if (pathOnly === '/') {
    return origin
  }

  const withLeadingSlash = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`
  const withoutTrailingSlash =
    withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')
      ? withLeadingSlash.slice(0, -1)
      : withLeadingSlash

  return `${origin}${withoutTrailingSlash}`
}
