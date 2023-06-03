import Link from "next/link";
import {motion} from "framer-motion"

export default function NavLink({category, isActive}) {
  return (
    <Link href={`news/${category}`} className={`navLink relative ${isActive && "font-bold"}`}>
      {category}
      {isActive && <motion.span layoutId="underline" className="absolute left-[25%] bottom-0 w-1/2 h-1 bg-orange-400"></motion.span>}
    </Link>
  )
}