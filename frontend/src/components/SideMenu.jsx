import {
  X,
  Home,
  BookOpen,
  MessageCircle,
  ShieldCheck,
  Newspaper,
  Sparkles,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react"

import { Link } from "react-router-dom"

const menuItems = [
  {
    name: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "@TCS Magazine",
    path: "/magazine",
    icon: BookOpen,
  },
  {
    name: "CEO Connect",
    path: "/ceo-connect",
    icon: MessageCircle,
  },
  {
    name: "Values & Ethics Hub",
    path: "/values",
    icon: ShieldCheck,
  },
  {
    name: "Unit News",
    path: "/unit-news",
    icon: Newspaper,
  },
  {
    name: "tcsAI",
    path: "/tcs-ai",
    icon: Sparkles,
  },
]

function SideMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed left-0 top-0 z-[70] h-full w-[300px] bg-white
          shadow-2xl transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex h-[72px] items-center justify-between border-b border-gray-200 px-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Menu
            </h2>
            <p className="text-xs text-gray-500">
              Explore portal
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main menu */}
        <nav className="px-3 py-5">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="
                  flex items-center gap-4 rounded-md px-4 py-3
                  text-sm text-gray-700 transition
                  hover:bg-blue-50 hover:text-blue-600
                "
              >
                <Icon
                  size={19}
                  strokeWidth={1.8}
                />

                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom menu */}
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 px-3 py-4">
          <button
            className="
              flex w-full items-center gap-4 rounded-md px-4 py-3
              text-sm text-gray-700 transition
              hover:bg-gray-100
            "
          >
            <Settings size={19} strokeWidth={1.8} />
            <span>Settings</span>
          </button>

          <button
            className="
              flex w-full items-center gap-4 rounded-md px-4 py-3
              text-sm text-gray-700 transition
              hover:bg-gray-100
            "
          >
            <CircleHelp size={19} strokeWidth={1.8} />
            <span>Help</span>
          </button>

          <button
            className="
              flex w-full items-center gap-4 rounded-md px-4 py-3
              text-sm text-red-600 transition
              hover:bg-red-50
            "
          >
            <LogOut size={19} strokeWidth={1.8} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default SideMenu