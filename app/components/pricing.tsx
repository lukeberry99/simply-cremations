import PricingCard from "./pricing-card";

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export default function Pricing() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      price: "£995",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard",
      price: "£1,495",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Premium",
      price: "£1,995",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
