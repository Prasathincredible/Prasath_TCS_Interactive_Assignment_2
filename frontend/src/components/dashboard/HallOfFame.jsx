import {
  Trophy,
  ArrowRight,
} from "lucide-react"

function HallOfFame() {
  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <Trophy
            size={19}
            className="text-blue-600"
          />

          <h2 className="text-lg font-semibold text-gray-800">
            Hall of Fame
          </h2>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50">
            <Trophy
              size={21}
              className="text-blue-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Celebrating Excellence
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Recognizing achievements, innovation and
              outstanding contributions.
            </p>
          </div>
        </div>

        <button
          className="
            group
            mt-4
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-blue-600
            hover:text-blue-800
          "
        >
          View More

          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}

export default HallOfFame