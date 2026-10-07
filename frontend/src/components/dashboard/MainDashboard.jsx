import LeftSidebar from "./LeftSidebar"
import NewsSection from "./NewsSection"
import RightSidebar from "./RightSidebar"

function MainDashboard() {
  return (
    <main className="bg-[#f4f5f7] px-4 py-8 sm:px-6 lg:px-8">
     
      <div
        className="
          mx-auto
          grid
          max-w-[1600px]
          grid-cols-1
          gap-5
          lg:grid-cols-[235px_minmax(0,1fr)_285px]
          xl:grid-cols-[250px_minmax(0,1fr)_300px]
        "
      >
        {/* Left */}
        <LeftSidebar />

        {/* Center */}
        <NewsSection />

        {/* Right */}
        <RightSidebar />
      </div>
    </main>
  )
}

export default MainDashboard