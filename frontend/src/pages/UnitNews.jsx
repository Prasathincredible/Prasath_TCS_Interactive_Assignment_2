import {
  Newspaper,
  ArrowRight,
} from "lucide-react"

import PortalPage from "../components/PortalPage"

const updates = [
  {
    id: 1,
    category: "Announcements",
    title: "Latest organizational updates",
  },
  {
    id: 2,
    category: "Technology",
    title: "New technology initiatives",
  },
  {
    id: 3,
    category: "People",
    title: "Employee initiatives and activities",
  },
]

function UnitNews() {
  return (
    <PortalPage
      title="Unit News"
      subtitle="Stay updated with the latest news, announcements and activities."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {updates.map((update) => (
          <article
            key={update.id}
            className="group rounded-lg border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
              <Newspaper
                size={19}
                className="text-blue-600"
              />
            </div>

            <p className="mt-5 text-xs font-medium text-blue-600">
              {update.category}
            </p>

            <h2 className="mt-2 text-lg font-semibold text-gray-800">
              {update.title}
            </h2>

            <button className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600">
              Read More
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </article>
        ))}
      </div>
    </PortalPage>
  )
}

export default UnitNews