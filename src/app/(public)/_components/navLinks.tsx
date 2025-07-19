import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

type Props = {
  setIsOpen?: () => void;
};

export function NavLinks({ setIsOpen }: Props) {
    const navItems = [
        { label: "Profissionais", href: "#profissionais" }
      ];

    const session = null;
    
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

      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2"
        >
          Dashboard
        </Link>
      ) : (
        <Button>
          <LogIn />
          Login
        </Button>
      )}  
      </>
    )
}