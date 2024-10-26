export default function Feature({ feature }: { feature: number }) {
  return (
    <div
      key={feature}
      className="bg-white rounded-lg p-6 text-center shadow-lg"
    >
      <div className="mb-4 h-32 w-32 mx-auto bg-gray-100 rounded-full" />
      <h3 className="mb-2 text-xl font-semibold">Feature {feature}</h3>
      <p className="text-gray-600">Description of feature {feature}</p>
    </div>
  );
}
