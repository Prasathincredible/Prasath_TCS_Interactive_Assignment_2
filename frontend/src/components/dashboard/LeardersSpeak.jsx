import { ArrowRight, Quote } from "lucide-react"

function LeadersSpeak() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Leaders Speak
        </h2>
      </div>

      <div className="p-5">
        <div className="relative h-32 overflow-hidden rounded-lg bg-gray-200">
          <img
            src="/images/leaders/leader-1.jpg"
            alt="Leader"
            className="h-full w-full object-cover"
          />

          <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
            <Quote
              size={16}
              className="text-blue-600"
            />
          </div>
        </div>

        <h3 className="mt-4 text-sm font-semibold leading-5 text-gray-800">
          Building a culture of innovation and collaboration
        </h3>

        <p className="mt-2 text-xs leading-5 text-gray-500">
          Insights and messages from our leadership team.
        </p>

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
            transition
            hover:text-blue-800
          "
        >
          Read More

          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}

export default LeadersSpeak