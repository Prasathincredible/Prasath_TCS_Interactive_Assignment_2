import { BookOpen, ArrowRight } from "lucide-react"
import PortalPage from "../components/PortalPage"

function Magazine() {
  return (
    <PortalPage
      title="@TCS Magazine"
      subtitle="Explore articles, stories, ideas and updates from across the organization."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-44 items-center justify-center bg-blue-50">
            <BookOpen size={48} strokeWidth={1.4} className="text-blue-600" />
          </div>

          <div className="p-5">
            <p className="text-xs font-medium text-blue-600">
              Featured Story
            </p>

            <h2 className="mt-2 text-lg font-semibold text-gray-800">
              Innovation and technology
            </h2>

            <p className="mt-2 text-sm leading-5 text-gray-500">
              Discover stories about innovation, technology and
              transformation.
            </p>

            <button className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600">
              Read More
              <ArrowRight size={15} />
            </button>
          </div>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-xs font-medium text-blue-600">
            People
          </p>

          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            Stories from our people
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Read experiences, achievements and inspiring stories.
          </p>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-xs font-medium text-blue-600">
            Ideas
          </p>

          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            Ideas that create impact
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Explore ideas and perspectives shaping the digital future.
          </p>
        </article>

      </div>
    </PortalPage>
  )
}

export default Magazine