import { NextResponse } from 'next/server';
import * as Supabase from '@supabase/supabase-js';
import User from '#/src/userMgr';
import { sendError } from './src/error';

const supabase = Supabase.createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export const config = {
    paths: ['*'],
};

/** @type {import('next/server').NextMiddleware} */
export default async function middleware(request, ev) {
    const path = request.nextUrl.pathname;
    if (path.startsWith('/api/')) {
        if (path.length === 0) return sendError(6);
        if (!request.headers.get('authorization')) return sendError(3);
        const token = request.headers.get('authorization').split(' ')[1];
        if (!token) return sendError(3);
        const { data, error } = await supabase.from('apitokens').select('*').eq('token', token).single();
        if (error || !data) return sendError(4);
        const { data: data2 } = await supabase.from('apiUsage').select('totaluses').eq('apitoken', token).single();
        await supabase.from('apiUsage').update({ totaluses: data2.totaluses + 1 }).eq('apitoken', token);
        if (data.disabled) return sendError(5);
        if (data.blocked) return sendError(2);
        const { data: userData, error: userError } = await supabase.from('users').select('permissions').eq('firebaseuid', data.associatedfirebaseuid).single();
        if (userError || !userData) return sendError(0);
        const user = User.fromFullPermissionBitString(userData.permissions);
        const { data: routesPermissions } = await supabase.from('permissions').select('*');
        /** @type {{route: string, permissions: string, allowmgr: boolean}} */
        const routeData = routesPermissions.find(v => path.startsWith(v.route));
        if (!routeData) return sendError(0);
        const perms = routeData.permissions.split(',');
        const allowMgr = routeData.allowmgr;
        if (!user.hasPermissions(allowMgr, ...perms)) return sendError(1);
    }
    return NextResponse.next();
};
