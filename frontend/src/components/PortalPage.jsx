function PortalPage({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-[#f4f5f7]">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-blue-600">
            Employee Portal
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Page Content */}
      <section className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 lg:px-8">
        {children}
      </section>
    </main>
  )
}

export default PortalPage