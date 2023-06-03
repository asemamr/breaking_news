"use client"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {

  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (!mounted) {
    return null
  }
  else {
    return (
      <div className="mr-4 transition-all">
        {currentTheme === "dark" ? (
          <button onClick={()=> setTheme("light")}>
          <SunIcon className="text-yellow-400 w-12" />
          </button>
        
        ) : (
            <button onClick={ ()=> setTheme("dark")}>
              <MoonIcon className="text-gray-500 w-12"  />
            </button>
        )  
        }
      </div>
    );
  }
}

export default DarkModeButton;