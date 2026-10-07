import {
  Activity,
  CircleHelp,
  LogOut,
  Search,
  UserCircle,
  ListChecks,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function RightActions() {

  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/")
  }

  return (
    <div className="flex items-center gap-5 text-white">

      {/* Search */}
      <button
        className="hover:text-blue-400 transition"
        title="Search"
      >
        <Search size={23} strokeWidth={2} />
      </button>

      {/* Activity */}
      <button
        className="hover:text-blue-400 transition"
        title="Activity"
      >
        <Activity size={23} strokeWidth={2} />
      </button>

      {/* Tasks */}
      <button
        className="hover:text-blue-400 transition"
        title="Tasks"
      >
        <ListChecks size={23} strokeWidth={2} />
      </button>

      {/* Divider */}
      <div className="h-7 w-px bg-gray-600" />

      {/* Help */}
      <button
        className="hover:text-blue-400 transition"
        title="Help"
      >
        <CircleHelp size={23} strokeWidth={2} />
      </button>

      {/* Profile */}
      <button
        className="hover:text-blue-400 transition"
        title="Profile"
      >
        <UserCircle size={25} strokeWidth={2} />
      </button>

      {/* Logout */}
      <button
        className="hover:text-red-400 transition"
        title="Logout"
        onClick={handleLogout}
      >
        <LogOut size={23} strokeWidth={2} />
      </button>

    </div>
  )
}

export default RightActions