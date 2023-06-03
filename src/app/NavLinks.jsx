"use client"
import LINKS from "../../constants";
import NavLink from "./NavLink";
import {usePathname} from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname();
  
  function isActive(path) {
    return pathname.split("/").pop() === path
  }
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-sm md:text-base max-w-7xl pb-4 mx-auto px-4 gap-4 border-b">
      {LINKS.map((link) => {
        return <NavLink key={link} category={link} isActive={isActive(link)} />;
      })}
    </nav>
  );
}
