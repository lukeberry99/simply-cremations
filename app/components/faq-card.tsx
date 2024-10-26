export default function FaqCard({ faq }: { faq: number }) {
  return (
    <details key={faq} className="mb-4 rounded-lg border p-4">
      <summary className="cursor-pointer text-lg font-semibold">
        Question {faq}
      </summary>
      <p className="mt-2 text-gray-600">
        Answer to question {faq} goes here. This is where you would provide more
        detailed information in response to common questions.
      </p>
    </details>
  );
}
