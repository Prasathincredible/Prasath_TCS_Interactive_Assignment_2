import LeadersSpeak from "./LeardersSpeak"
import BrandHub from "./BrandHub"
import EventCalendar from "./EventCalender"
import HallOfFame from "./HallOfFame"

function RightSidebar() {
  return (
    <aside className="space-y-5">
      <LeadersSpeak />

      <BrandHub />

      <EventCalendar />

      <HallOfFame />
    </aside>
  )
}

export default RightSidebar