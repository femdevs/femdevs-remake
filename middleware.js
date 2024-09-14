import { NextResponse } from 'next/server';
import * as Supabase from '@supabase/supabase-js';
import User from '#/src/userMgr';
import { sendError } from '#/src/error';
import * as CORS from '#/src/cors';

const headers = CORS.Headers({
    CORS: CORS.WebSecurity.CORS(
        {
            maxAge: 864e2,
            allowCredentials: true,
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-HTTP-Method-Override', 'Accept', 'Origin'],
        },
        {
            embedderPolicy: 'unsafe-none',
            resourcePolicy: 'cross-origin',
            openerPolicy: 'same-origin',
        }
    ),
    CSP: CORS.WebSecurity.CSP(
        new CORS.CSPObj('imgSrc', false, [], false, true, []),
        new CORS.CSPObj('fontSrc', false, [], false, true, []),
        new CORS.CSPObj('mediaSrc', false, [], false, true, []),
        new CORS.CSPObj('childSrc', false, [], false, true, []),
        new CORS.CSPObj('objectSrc', true, [], false, false, []),
        new CORS.CSPObj('defaultSrc', false, [], false, true, []),
        new CORS.CSPObj('connectSrc', false, [], false, true, []),
        new CORS.CSPObj('formAction', false, [], false, true, []),
        new CORS.CSPObj('prefetchSrc', false, [], false, true, []),
        new CORS.CSPObj('manifestSrc', false, [], true, false, []),
        new CORS.CSPObj('blockAllMixedContent', false, [], false, false, []),
        new CORS.CSPObj('styleSrc', false, ['unsafe-inline'], false, true, []),
        new CORS.CSPObj('upgradeInsecureRequests', false, [], false, false, []),
        new CORS.CSPObj('baseUri', false, [], true, false, ['thefemdevs.com', 'security.thefemdevs.com', 'cdn.thefemdevs.com']),
        new CORS.CSPObj('scriptSrc', false, ['unsafe-inline'], true, false,
            ['blob:', ['thefemdevs.com', 'google.com', 'fontawesome.com', 'jsdelivr.net', 'preline.co'].map(CORS.WebSecurity.CD)].flat(2),
        ),
    ),
    PermissionPolicy: CORS.WebSecurity.PermissionPolicy(
        new CORS.PermissionPolicy('hid', { none: true }),
        new CORS.PermissionPolicy('usb', { none: true }),
        new CORS.PermissionPolicy('midi', { none: true }),
        new CORS.PermissionPolicy('camera', { none: true }),
        new CORS.PermissionPolicy('serial', { none: true }),
        new CORS.PermissionPolicy('battery', { none: true }),
        new CORS.PermissionPolicy('gamepad', { none: true }),
        new CORS.PermissionPolicy('autoplay', { none: true }),
        new CORS.PermissionPolicy('webShare', { self: true }),
        new CORS.PermissionPolicy('bluetooth', { none: true }),
        new CORS.PermissionPolicy('gyroscope', { none: true }),
        new CORS.PermissionPolicy('fullscreen', { self: true }),
        new CORS.PermissionPolicy('magnetometer', { none: true }),
        new CORS.PermissionPolicy('accelerometer', { none: true }),
        new CORS.PermissionPolicy('idleDetection', { none: true }),
        new CORS.PermissionPolicy('browsingTopics', { none: true }),
        new CORS.PermissionPolicy('localFonts', { wildcard: true }),
        new CORS.PermissionPolicy('screenWakeLock', { none: true }),
        new CORS.PermissionPolicy('display-capture', { none: true }),
        new CORS.PermissionPolicy('document-domain', { none: true }),
        new CORS.PermissionPolicy('encrypted-media', { none: true }),
        new CORS.PermissionPolicy('windowManagement', { none: true }),
        new CORS.PermissionPolicy('xrSpacialTracking', { none: true }),
        new CORS.PermissionPolicy('ambientLightSensor', { none: true }),
        new CORS.PermissionPolicy('executionWhileNotRendered', { none: true }),
        new CORS.PermissionPolicy('executionWhileOutOfViewport', { none: true }),
        new CORS.PermissionPolicy('microphone', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('storageAccess', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('otpCredentials', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('pictureInPicture', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('speakerSelection', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('identityCredentialsGet', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('publickeyCredentialsGet', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('publickeyCredentialsCreate', { self: true, domains: CORS.WebSecurity.CD('thefemdevs.com') }),
        new CORS.PermissionPolicy('geolocation', { self: true, domains: ['googleapis.com', 'thefemdevs.com'].map(CORS.WebSecurity.CD) }),
        new CORS.PermissionPolicy('payment', { self: true, domains: [CORS.WebSecurity.CD('thefemdevs.com'), CORS.WebSecurity.CD('stripe.com')] }),
    ),
    HSTS: CORS.WebSecurity.HSTS({ ma: 31536e3, iSD: true, pl: true }),
});

const supabase = Supabase.createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export const config = {
    matcher: '/api/:path*',
};

/** @type {import('next/server').NextMiddleware} */
export async function middleware(request) {
    const response = new NextResponse(null);
    const path = request.nextUrl.pathname;
    if (path.startsWith('/api')) {
        if (path.length === 0) return sendError(6);
        if (!request.headers.get('authorization')) return sendError(3);
        const token = request.headers.get('authorization').split(' ')[1];
        if (!token) return sendError(3);
        const { data, error } = await supabase.from('apitokens').select('*').eq('token', token).single();
        if (error || !data) return sendError(4);
        const { data: data2 } = await supabase.from('apiusage').select('totaluses').eq('apitoken', token).single();
        await supabase.from('apiUsage').update({ totaluses: data2.totaluses + 1 }).eq('apitoken', token);
        if (data.disabled) return sendError(5);
        if (data.blocked) return sendError(2);
        const { data: userData, error: userError } = await supabase.from('users').select('permissions').eq('firebaseuid', data.associatedfirebaseuid).single();
        if (userError || !userData) return sendError(0);
        const user = User.fromFullPermissionBitString(userData.permissions);
        const { data: routesPermissions } = await supabase.from('permissions').select('*');
        /** @type {{route: string, permissions: string, allowmgr: boolean}} */
        const routeData = routesPermissions.find(v => path.startsWith(`/api${v.route}`));
        if (!routeData) return sendError(0);
        const perms = routeData.permissions.split(',');
        const allowMgr = routeData.allowmgr;
        if (!user.hasPermissions(allowMgr, ...perms)) return sendError(1);
    }
    for (const [key, val] of headers) response.headers.set(key, val);
    return NextResponse.next();
};
