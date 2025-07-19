"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Banknote, CalendarCheck2, ChartNoAxesCombined, ChevronLeft, ChevronRight, Folder, List, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import geserLogo from "../../../../../public/geserLogo.png";
import geserIcon from "../../../../../public/geserIcon.png";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

interface SideBarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathName: string;
    isCollapsed: boolean;
}

function SideBarLink(
    { href, icon, label, pathName, isCollapsed }: SideBarLinkProps
) {
    return (
       <Link 
            href={href}
        >
            <div className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                {
                    "text-white bg-blue-500": pathName === href,
                    "text-gray-700 hover:bg-gray-100": pathName !== href
                }
            )}>
                <span className="w-6 h-6">{icon}</span>
                {!isCollapsed && <span>{label}</span>}
            </div>
        </Link>
    )
}

export function SideBarDashboard(
    {children} : {children: React.ReactNode}
) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen w-full">
            {/* Desktop */}
            <aside className={clsx(
                "flex flex-col border-r bg-background transition-all duration-300 p-4 h-full",
                {
                    "w-20": isCollapsed,
                    "w-64": !isCollapsed,
                    "hidden md:flex md:fixed": true
                }
            )}>
                <div>
                    {!isCollapsed && (
                        <Image 
                            src={geserLogo}
                            alt="Logo Geser"
                            priority
                            quality={100}
                            style={{ width: "auto", height: "auto" }}
                        />                        
                    )}
                </div>

                <div className="flex flex-col items-center">
                    {isCollapsed &&
                        <Image 
                            src={geserIcon}
                            alt="Icone Geser"
                            priority
                            quality={100}
                            style={{ width: "47px", height: "auto" }}
                            className="mb-2"
                        />
                    }
                </div>
                <Button 
                    className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2 cursor-pointer"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? <ChevronRight className="w-12 h-12" /> : <ChevronLeft className="w-12 h-12" />}
                </Button>

                { /* Sidebar Recolhida */}
                {isCollapsed && (
                    <nav className="flex flex-col gap-1 overflow-hidden">
                        <SideBarLink 
                            href="/dashboard"
                            icon={<CalendarCheck2 />}
                            label="Agendamentos"
                            pathName={pathname}
                            isCollapsed={isCollapsed}
                        />
                        <SideBarLink 
                            href="/dashboard/services"
                            icon={<Folder />}
                            label="Serviços"
                            pathName={pathname}
                            isCollapsed={isCollapsed}
                        />
                        <SideBarLink 
                            href="/dashboard/finance"
                            icon={<ChartNoAxesCombined />}
                            label="Finanças"
                            pathName={pathname}
                            isCollapsed={isCollapsed}
                        />
                        <SideBarLink 
                            href="/dashboard/profile"
                            icon={<Settings />}
                            label="Perfil"
                            pathName={pathname}
                            isCollapsed={isCollapsed}
                        />
                        <SideBarLink 
                            href="/dashboard/plans"
                            icon={<Banknote />}
                            label="Planos"
                            pathName={pathname}
                            isCollapsed={isCollapsed}
                        />
                    </nav>
                )}

                { /* Sidebar não recolhida */}
                <Collapsible open={!isCollapsed}>
                    <CollapsibleContent>
                        <nav className="flex flex-col gap-1 overflow-hidden">
                            <span className="text-sm text-gray-400 font-medium uppercase">
                                Painel
                            </span>
                            <SideBarLink 
                                href="/dashboard"
                                icon={<CalendarCheck2 />}
                                label="Agendamentos"
                                pathName={pathname}
                                isCollapsed={isCollapsed}
                            />
                            <SideBarLink 
                                href="/dashboard/services"
                                icon={<Folder />}
                                label="Serviços"
                                pathName={pathname}
                                isCollapsed={isCollapsed}
                            />
                            <span className="text-sm text-gray-400 font-medium uppercase">
                                Financeiro
                            </span>
                            <SideBarLink 
                                href="/dashboard/finance"
                                icon={<ChartNoAxesCombined />}
                                label="Finanças"
                                pathName={pathname}
                                isCollapsed={isCollapsed}
                            />
                            <span className="text-sm text-gray-400 font-medium uppercase">
                                Conta
                            </span>
                            <SideBarLink 
                                href="/dashboard/profile"
                                icon={<Settings />}
                                label="Perfil"
                                pathName={pathname}
                                isCollapsed={isCollapsed}
                            />
                            <SideBarLink 
                                href="/dashboard/plans"
                                icon={<Banknote />}
                                label="Planos"
                                pathName={pathname}
                                isCollapsed={isCollapsed}
                            />
                        </nav>
                    </CollapsibleContent>
                </Collapsible>
            </aside>

            {/* Mobile */}
            <div className={clsx(
                "flex flex-1 flex-col transition-all duration-300", 
                {
                    "md:ml-20": isCollapsed,
                    "md:ml-64": !isCollapsed
                }
            )}>

                <header className="md:hidden flex items-center justify-between border-b shadow-md px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
                    <Sheet>
                        <div className="flex items-center gap-4">
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <List className="w-5 h-5"/>
                                </Button>
                            </SheetTrigger>

                            <h1 className="text-base md:text-lg font-semibold">
                                Dashboard
                            </h1>
                        </div>
                    
                        <SheetContent side="left" className="sm:max-w-sx text-black py-6 px-4">
                            <SheetTitle>Geser</SheetTitle>
                            <SheetDescription>
                                Painel de controle
                            </SheetDescription>
                            
                            <nav className="grid gap-2 text-base pt-5">
                                <SideBarLink 
                                    href="/dashboard"
                                    icon={<CalendarCheck2 />}
                                    label="Agendamentos"
                                    pathName={pathname}
                                    isCollapsed={isCollapsed}
                                />
                                <SideBarLink 
                                    href="/dashboard/services"
                                    icon={<Folder />}
                                    label="Serviços"
                                    pathName={pathname}
                                    isCollapsed={isCollapsed}
                                />
                                <SideBarLink 
                                    href="/dashboard/profile"
                                    icon={<Settings />}
                                    label="Perfil"
                                    pathName={pathname}
                                    isCollapsed={isCollapsed}
                                />
                                <SideBarLink 
                                    href="/dashboard/plans"
                                    icon={<Banknote />}
                                    label="Planos"
                                    pathName={pathname}
                                    isCollapsed={isCollapsed}
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 py-4 px-2 md:p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}