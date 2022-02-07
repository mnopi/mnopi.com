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

export function middleware (req, ev) {
  console.log('Edit and run at the edge!')
  return new Response({
    middelware: {
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
      ip: req.ip,
      ua: req.ua
    }
  })
 }
