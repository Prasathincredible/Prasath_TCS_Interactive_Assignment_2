import QuickLinks from "./QuickLinks"
import Helpline from "./Helpline"
import TcsCares from "./TcsCares"

function LeftSidebar() {
  return (
    <aside className="space-y-6">
      <QuickLinks />

      <Helpline />

      <TcsCares />
    </aside>
  )
}

export default LeftSidebar