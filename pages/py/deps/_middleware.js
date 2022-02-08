// pages/_middleware.ts

//import type { NextFetchEvent, NextRequest } from 'next/server'

//export function middleware(req: NextRequest, ev: NextFetchEvent) {
//   return new Response({
//     ip: req.ip,
//     geo: req.geo, // this will spin the globe!
//     ua: req.ua
//   })
//}
// pages/_middleware.js

export default function middleware (req, ev) {
  return new Response(JSON.stringify({
    baseUrl: req.baseUrl,
    cookies: req.cookies,
    geo: req.geo,
    host: req.host,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    nextUrl: req.nextUrl,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    route: req.route,
    secure: req.secure,
    signedCookies: req.signedCookies,
    stale: req.stale,
    subdomains: req.subdomains,
    ua: req.ua
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
  },
  })
}
