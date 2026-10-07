import {
  MessageCircle,
  ArrowRight,
} from "lucide-react"

import PortalPage from "../components/PortalPage"

function CEOConnect() {
  return (
    <PortalPage
      title="CEO Connect"
      subtitle="Connect with leadership and explore leadership insights, messages and initiatives."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        <div className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
              <MessageCircle
                size={23}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Leadership Connect
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Hear directly from leadership about organizational
                priorities, technology, people and the future.
              </p>

              <button className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600">
                Explore Messages
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-xs font-medium text-blue-600">
            Latest
          </p>

          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            Leadership Updates
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Stay updated with the latest leadership communication.
          </p>
        </div>

      </div>
    </PortalPage>
  )
}

export default CEOConnect