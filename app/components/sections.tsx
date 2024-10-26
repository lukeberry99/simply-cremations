import Image from "next/image";

export default function Sections() {
  const sections = [1, 2, 3];
  return (
    <>
      {sections.map((i) => (
        <section
          key={i}
          className={`px-4 py-12 md:py-24 ${i % 2 === 0 ? "bg-gray-50" : ""}`}
        >
          <div
            className={`mx-auto max-w-5xl md:flex md:items-center md:space-x-12 ${i % 2 === 0 ? "md:flex-row-reverse md:space-x-reverse" : ""}`}
          >
            <div className="mb-8 md:mb-0 md:w-1/2 md:px-6">
              <h2 className="mb-4 text-3xl font-bold">Section Title {i}</h2>
              <p className="text-gray-600">
                Section description goes here. This is where you would put more
                detailed information about your services or offerings.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt={`Placeholder image for section ${i}`}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
