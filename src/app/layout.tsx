import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import RootClientProviders from "@/components/AuthComponents/RootClientProviders";

export const metadata: Metadata = {
  title: "Bank App",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <RootClientProviders session={session}>{children}</RootClientProviders>
      </body>
    </html>
  );
};