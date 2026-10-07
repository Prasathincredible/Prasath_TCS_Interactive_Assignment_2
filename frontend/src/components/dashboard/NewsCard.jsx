import { ArrowUpRight } from "lucide-react"

function NewsCard({ news }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-lg
        border
        border-gray-200
        bg-white
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden bg-gray-200">
        <img
          src={news.image}
          alt={news.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-blue-600">
            {news.category}
          </span>

          <span className="text-xs text-gray-400">
            {news.date}
          </span>
        </div>

        <h3
          className="
            mt-3
            line-clamp-2
            text-base
            font-semibold
            leading-6
            text-gray-800
          "
        >
          {news.title}
        </h3>

        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-5
            text-gray-500
          "
        >
          {news.description}
        </p>

        <button
          className="
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

          <ArrowUpRight
            size={16}
            className="
              transition
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </button>
      </div>
    </article>
  )
}

export default NewsCard