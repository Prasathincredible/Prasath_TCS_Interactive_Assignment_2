import {
  Sparkles,
  Brain,
  Lightbulb,
  ArrowRight,
} from "lucide-react"

import PortalPage from "../components/PortalPage"

function TcsAI() {
  return (
    <PortalPage
      title="tcsAI"
      subtitle="Explore AI-powered learning, tools and innovation."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Brain
            size={25}
            className="text-blue-600"
          />

          <h2 className="mt-5 text-lg font-semibold text-gray-800">
            AI Learning
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Build your understanding of artificial intelligence
            and emerging technologies.
          </p>

          <button className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600">
            Explore
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Lightbulb
            size={25}
            className="text-blue-600"
          />

          <h2 className="mt-5 text-lg font-semibold text-gray-800">
            AI Innovation
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Discover ideas and solutions powered by artificial
            intelligence.
          </p>

          <button className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600">
            Discover
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Sparkles
            size={25}
            className="text-blue-600"
          />

          <h2 className="mt-5 text-lg font-semibold text-gray-800">
            AI Resources
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Access resources and information to improve your AI
            skills.
          </p>

          <button className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600">
            View Resources
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </PortalPage>
  )
}

export default TcsAI