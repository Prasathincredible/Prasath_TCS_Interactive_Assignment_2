import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

import PortalPage from "../components/PortalPage"

function ValuesEthics() {
  const values = [
    "Integrity",
    "Respect",
    "Excellence",
    "Learning",
    "Accountability",
    "Collaboration",
  ]

  return (
    <PortalPage
      title="Values & Ethics Hub"
      subtitle="Learn about values, ethics and responsible workplace practices."
    >
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
            <ShieldCheck
              size={25}
              className="text-blue-600"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Our Values
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Principles that guide our workplace and decisions.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="flex items-center gap-3 rounded-md border border-gray-100 bg-gray-50 px-4 py-4"
            >
              <CheckCircle2
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-medium text-gray-700">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PortalPage>
  )
}

export default ValuesEthics