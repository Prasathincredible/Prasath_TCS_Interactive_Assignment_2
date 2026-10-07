import {
  Link,
  GraduationCap,
  Users,
  Monitor,
  ArrowRight,
} from "lucide-react"

const quickLinks = [
  {
    title: "Ultimatix",
    icon: Link,
  },
  {
    title: "Learning",
    icon: GraduationCap,
  },
  {
    title: "HR Services",
    icon: Users,
  },
  {
    title: "IT Services",
    icon: Monitor,
  },
]

function QuickLinks() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-[17px] font-semibold text-gray-800">
          Quick Links
        </h2>
      </div>

      <div className="px-5">
        {quickLinks.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.title}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                border-b
                border-gray-100
                py-3.5
                text-left
                transition
                last:border-b-0
                hover:text-blue-600
              "
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="text-gray-500 transition group-hover:text-blue-600"
                />

                <span className="text-[13px] text-gray-700">
                  {item.title}
                </span>
              </div>

              <ArrowRight
                size={15}
                className="
                  text-gray-400
                  transition
                  group-hover:translate-x-1
                  group-hover:text-blue-600
                "
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickLinks