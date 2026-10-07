import {
  HeartHandshake,
  ArrowRight,
} from "lucide-react"

function TcsCares() {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
          <HeartHandshake
            size={18}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-[16px] font-semibold text-gray-800">
            TCS Cares
          </h2>

          <p className="mt-0.5 text-xs text-gray-500">
            We're here for you
          </p>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-5 text-gray-500">
        Explore resources and support programs
        focused on employee wellbeing.
      </p>

      <button
        className="
          group
          mt-4
          flex
          items-center
          gap-1
          text-[13px]
          font-medium
          text-blue-600
          transition
          hover:text-blue-800
        "
      >
        Know More

        <ArrowRight
          size={14}
          className="transition group-hover:translate-x-1"
        />
      </button>
    </div>
  )
}

export default TcsCares