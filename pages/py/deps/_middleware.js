// pages/_middleware.js

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return new Response({
    ip: req.ip,
    geo: req.geo, // this will spin the globe!
    ua: req.ua
  })
}
