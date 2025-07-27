import { Button } from "@/components/ui/button";
import { Loader2Icon, LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { login } from "../_actions/login";

type Props = {
  setIsOpen?: () => void;
};

export function NavLinks({ setIsOpen }: Props) {
  const {data: session, status} = useSession();
  
  async function handleLogin() {
    await login("github");
  }

  const navItems = [
      { label: "Profissionais", href: "#profissionais" }
    ];
  
  return (
    <>
    {navItems.map((item) => (
      <Button
        onClick={setIsOpen}
        key={item.href}
        asChild
        className="text-black bg-transparent hover:bg-transparent shadow-none"
      >
        <Link 
          href={item.href}
          className="text-base"
        >
          {item.label}
        </Link>
      </Button>
    ))}

    {status === 'loading' ? (
      <Button disabled>
        <Loader2Icon className="animate-spin" />
      </Button>
    ) : session ? (
      <Link
        href="/dashboard"
        className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 px-4 rounded-md"
      >
        Dashboard
      </Link>
    ) : (
      <Button 
        className="cursor-pointer"
        onClick={handleLogin}
      >
        <LogIn />
        Login
      </Button>
    )}  
    </>
  )
}