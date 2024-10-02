'use client'
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { label: "Dashboard", path: "/app/dashboard" },
  { label: "Account", path: "/app/account" },
];

export default function AppHeader() {
    const activePathname= usePathname()
  return (
    <header className="flex justify-between justify-items border-b border-white/10 py-2 ">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-sm mt-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link className={cn("text-white/70 rounded-sm hover:text-white focus:text-white py-2 px-2 transition",{
                "text-white bg-black/10": activePathname === route.path
              })}   href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
