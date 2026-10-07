import { useState } from "react"
import NewsCard from "./NewsCard"
import newsData from "../../data/newsData"

function NewsSection() {
  const [selectedRegion, setSelectedRegion] = useState("Global")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Headlines",
    "In Focus",
    "Organizational Announcements",
    "Ultimatix & Internal IT",
  ]

  const filteredNews = newsData.filter((news) => {
    const matchesRegion =
      news.region === selectedRegion

    const matchesCategory =
      selectedCategory === "All" ||
      news.category === selectedCategory

    return matchesRegion && matchesCategory
  })

  return (
    <section>
      <div className="overflow-hidden rounded-md border border-gray-200 bg-white">

        {/* Region Tabs */}
        <div className="border-b border-gray-200 px-5 pt-5">
          <div className="flex gap-6">
            <button
              onClick={() => {
                setSelectedRegion("Global")
                setSelectedCategory("All")
              }}
              className={`
                border-b-2
                pb-3
                text-sm
                font-semibold
                transition
                ${
                  selectedRegion === "Global"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }
              `}
            >
              Global
            </button>

            <button
              onClick={() => {
                setSelectedRegion("India")
                setSelectedCategory("All")
              }}
              className={`
                border-b-2
                pb-3
                text-sm
                font-semibold
                transition
                ${
                  selectedRegion === "India"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }
              `}
            >
              India
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-200 px-5 py-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  transition
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="p-4 sm:p-5">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {filteredNews.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
              <p className="text-sm text-gray-500">
                No news available for this category.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default NewsSection