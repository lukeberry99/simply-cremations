import { APP_DESCRIPTION } from "@/lib/consts";

export default function Hero() {
  return (
    <section className="bg-gray-100 px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {APP_DESCRIPTION}
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Everything you need, from £995
        </p>
        <button className="rounded bg-gray-800 px-6 py-3 text-white hover:bg-gray-700">
          Get a quote
        </button>
      </div>
    </section>
  );
}
