import { Check } from "lucide-react";
import { PricingPlan } from "./pricing";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <p className="text-4xl font-bold mb-6">{plan.price}</p>
        <ul className="space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 mt-auto">
        <button className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
