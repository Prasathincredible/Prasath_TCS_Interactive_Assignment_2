import { CalendarDays, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    day: "07",
    month: "OCT",
    title: "Technology Connect",
  },
  {
    id: 2,
    day: "12",
    month: "OCT",
    title: "Learning & Innovation Day",
  },
  {
    id: 3,
    day: "18",
    month: "OCT",
    title: "Employee Connect",
  },
]

function EventCalendar() {
  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <CalendarDays
            size={19}
            className="text-blue-600"
          />

          <h2 className="text-lg font-semibold text-gray-800">
            Event Calendar
          </h2>
        </div>
      </div>

      <div className="px-5">
        {events.map((event) => (
          <div
            key={event.id}
            className="
              flex
              items-center
              gap-4
              border-b
              py-4
              last:border-b-0
            "
          >
            <div className="flex w-12 flex-col items-center">
              <span className="text-xl font-semibold text-gray-800">
                {event.day}
              </span>

              <span className="text-[10px] font-semibold tracking-wider text-blue-600">
                {event.month}
              </span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-800">
                {event.title}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                View event details
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 px-5 py-4">
        <button
          className="
            group
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-blue-600
            hover:text-blue-800
          "
        >
          View Calendar

          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}

export default EventCalendar