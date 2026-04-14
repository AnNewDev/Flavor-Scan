import IntroPixel from "@/components/ui/IntroPixel"
import * as fonts from "@/lib/fonts";
export default function HomePage() {
  return (
    <main>
      <IntroPixel />

      <section className="min-h-screen">
        {/* your landing page */}
       <div className={`flex items-center justify-center h-screen`}>
          <h1 className={`text-5xl font-bold text-center ${fonts.pixel.className}`}>
            FlavorScan
          </h1>
        </div>
      </section>
    </main>
  )
}