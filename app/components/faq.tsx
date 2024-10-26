import FaqCard from "./faq-card";

export default function Faq() {
  const faq = [1, 2, 3];
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        {faq.map((i) => (
          <FaqCard key={i} faq={i} />
        ))}
      </div>
    </section>
  );
}
