import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
        name: "Sign In",
        credentials: {
            email: {
                label: "Email",
                type: "email",
                placeholder: "example@example.com",
            },
            password: { label: "Password", type: "password" },
        }, async authorize(credentials) {
            if (!credentials || !credentials.email || !credentials.password) return null;

            // TODO: REMPLIR LE LOGIN BASE PYTHON
            return null;
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
}

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/login/auth");
}
  
