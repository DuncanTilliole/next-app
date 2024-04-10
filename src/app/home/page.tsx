import Navbar from "@/components/navbar"
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session: Session | null = await getServerSession(authConfig);
  
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar session={session} />
      <h1>You are Signed!!!!!!!!</h1>
    </div>
  );
}