"use client";

import { ReactNode } from "react";
import AuthGuard from "./AuthGuard";
import { SessionProvider } from "next-auth/react";

export default function RootClientProviders({
    children,
    session,
}: {
    children: ReactNode;
    session: any;
}) {
    return (
        <SessionProvider session={session}>
            <AuthGuard>
                {children}
            </AuthGuard>
        </SessionProvider>
    );
};