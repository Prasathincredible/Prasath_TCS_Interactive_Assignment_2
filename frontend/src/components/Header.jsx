import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import HamburgerMenu from "./HamburgerMenu"
import RightActions from "./RightActions"
import SideMenu from "./SideMenu"

const navItems = [
  {
    name: "Home",
    path: "/dashboard",
  },
  {
    name: "@TCS Magazine",
    path: "/magazine",
  },
  {
    name: "CEO Connect",
    path: "/ceo-connect",
  },
  {
    name: "Values & Ethics Hub",
    path: "/values",
  },
  {
    name: "Unit News",
    path: "/unit-news",
  },
  {
    name: "tcsAI",
    path: "/tcs-ai",
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  return (
    <>
      <header className="sticky top-0 z-50 h-[72px] bg-black text-white shadow-md">
        <div className="mx-auto flex h-full max-w-[1600px] items-center px-5 lg:px-8">

          {/* Left side */}
          <div className="flex items-center gap-6">
            <HamburgerMenu
              onClick={() => setIsMenuOpen(true)}
            />

            <Link
              to="/"
              className="text-xl font-semibold tracking-wide"
            >
              Ultimatix
            </Link>
          </div>

          {/* Navigation */}
          <nav className="ml-10 hidden h-full items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative flex h-full items-center text-sm
                    transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-500" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="ml-auto">
            <RightActions />
          </div>
        </div>
      </header>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}

export default Header