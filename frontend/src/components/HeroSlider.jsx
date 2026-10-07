import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import heroData from "../data/heroData"

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        return (previousSlide + 1) % heroData.length
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setCurrentSlide((previousSlide) => {
      if (previousSlide === 0) {
        return heroData.length - 1
      }

      return previousSlide - 1
    })
  }

  const handleNext = () => {
    setCurrentSlide((previousSlide) => {
      return (previousSlide + 1) % heroData.length
    })
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  const currentHero = heroData[currentSlide]

  return (
    <section className="relative h-[650px] w-full overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-black" />


      {/* =====================================================
          BLUE DECORATIVE SHAPE
      ====================================================== */}

      <div
        className="
          absolute
          -right-[12%]
          top-0
          h-full
          w-[58%]
          bg-[#0078D4]
          opacity-90
          [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%,18%_55%)]
          lg:w-[55%]
        "
      />


      {/* =====================================================
          IMAGE CONTAINER
      ====================================================== */}

      <div
        className="
          absolute
          right-[4%]
          top-[9%]
          z-10
          h-[74%]
          w-[48%]
          overflow-hidden
          lg:right-[6%]
          lg:w-[47%]
        "
      >

        <img
          src={currentHero.image}
          alt={currentHero.title}
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-700
          "
        />

      </div>


      {/* =====================================================
          TOP LOGOS
      ====================================================== */}

      <div
        className="
          absolute
          left-8
          top-8
          z-20
          flex
          items-center
          gap-8
          lg:left-14
        "
      >

        {/* Temporary TCS text logo */}
        <div
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          tcs
        </div>


        {/* Temporary Tata text logo */}
        <div
          className="
            text-2xl
            font-semibold
            tracking-wide
          "
        >
          TATA
        </div>

      </div>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          h-full
          w-full
          items-center
        "
      >

        <div
          className="
            ml-8
            mt-[-20px]
            w-[48%]
            lg:ml-14
            lg:w-[44%]
          "
        >

          {/* Heading */}

          <h1
            className="
              max-w-[600px]
              text-4xl
              font-normal
              leading-[1.12]
              tracking-tight
              sm:text-5xl
              lg:text-[54px]
            "
          >
            {currentHero.title}
          </h1>


          {/* Description */}

          <p
            className="
              mt-7
              max-w-[570px]
              text-[16px]
              leading-7
              text-gray-200
              lg:text-[17px]
            "
          >
            {currentHero.description}
          </p>


          {/* CTA */}

          <button
            className="
              mt-8
              text-[16px]
              font-semibold
              text-white
              underline
              decoration-1
              underline-offset-4
              transition
              hover:text-blue-300
            "
          >
            {currentHero.buttonText}
          </button>

        </div>

      </div>


      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      <button
        onClick={handlePrevious}
        aria-label="Previous slide"
        className="
          absolute
          left-4
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          rounded-full
          bg-black/40
          p-2
          transition
          hover:bg-black/70
          md:block
        "
      >
        <ChevronLeft size={28} />
      </button>


      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="
          absolute
          right-4
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          rounded-full
          bg-black/40
          p-2
          transition
          hover:bg-black/70
          md:block
        "
      >
        <ChevronRight size={28} />
      </button>


      {/* =====================================================
          SLIDER INDICATORS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >

        {heroData.map((hero, index) => (
          <button
            key={hero.id}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[9px]
              w-[9px]
              rounded-full
              border
              border-white
              transition-all
              duration-300

              ${
                currentSlide === index
                  ? "scale-125 bg-white"
                  : "bg-transparent hover:bg-white/60"
              }
            `}
          />
        ))}

      </div>

    </section>
  )
}

export default HeroSlider