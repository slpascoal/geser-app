import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavLinks() {
    const navItems = [
        { label: "Profissionais", href: "#profissionais" }
      ];
    
    return (
      <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          className="text-black bg-transparent hover:bg-transparent shadow-none"
        >
          <Link href={item.href}>
            {item.label}
          </Link>
        </Button>
      ))}
      </>
    )
}