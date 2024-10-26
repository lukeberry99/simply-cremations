import Feature from "./feature";

export default function Features() {
  const features = [1, 2, 3];
  return (
    <section className="relative bg-gray-200 px-4 py-12 md:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50%] md:rounded-t-[100%]"></div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need, from £995
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((i) => (
            <Feature key={i} feature={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
