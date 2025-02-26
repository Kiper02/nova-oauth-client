import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { url, cookies } = request;

    const session = cookies.get('session')?.value;

    const isAuthPage = url.includes('auth');

    
    if(isAuthPage) {
        if(session) {
            return NextResponse.redirect(new URL("/applications", url));   
        }
        return NextResponse.next();
    }
    
    if(!session) {
        return NextResponse.redirect(new URL("/auth/login", url));
    }
}

export const config = {
  matcher: ["/auth/:path*", "/applications/:path*"],
};
