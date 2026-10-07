import { Menu } from "lucide-react"

function HamburgerMenu({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white transition hover:text-blue-400"
      title="Menu"
      aria-label="Open menu"
    >
      <Menu size={27} strokeWidth={2} />
    </button>
  )
}

export default HamburgerMenu