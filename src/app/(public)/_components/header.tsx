"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import { NavLinks } from "./navLinks";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
        className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
            href="/"
            className="font-bold text-3xl text-zinc-900"
        >
            Ge<span className="text-blue-500">ser</span>
        </Link>

      <nav 
        className="hidden md:flex items-center space-x-4"
      >
        <NavLinks />
      </nav>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button 
            className="text-black hover:bg-transparent"
            variant="ghost"
            size="icon"
          >
            <Menu className="w-6 h-6"/>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[240px] p-4 sm:w-[300px] z-[9999]">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
                Veja nossos links
            </SheetDescription>

            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks setIsOpen={() => setIsOpen(false)}/>
            </nav>
        </SheetContent>
      </Sheet>

      </div>
    </header>
  );
}