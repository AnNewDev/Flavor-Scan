import { pixel } from "@/lib/fonts"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-center flex-col h-screen">
        <section className="space-y-4">
          <h1 className={`text-6xl ${pixel.className}`}>MAIN</h1>
          <p> test default content </p>
        </section>
      </div>
    </main>
  )
}