import {
  Palette,
  ArrowRight,
} from "lucide-react"

function BrandHub() {
  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Brand Hub
        </h2>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            <Palette
              size={20}
              className="text-blue-600"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">
              Brand resources
            </p>

            <p className="text-xs text-gray-500">
              Guidelines & assets
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-5 text-gray-600">
          Access brand guidelines, resources and
          communication assets.
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
            hover:text-blue-800
          "
        >
          Explore

          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}

export default BrandHub