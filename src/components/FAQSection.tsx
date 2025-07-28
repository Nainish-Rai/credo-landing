import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What is Credo?",
    answer: "Credo is a fast invoicing app. Send invoices in seconds.",
  },
  {
    question: "How does Credo help with payments?",
    answer: "No more awkward follow-ups. Get paid faster, every time.",
  },
  {
    question: "Is Credo easy to use?",
    answer: "Yes, create and send invoices in just a few taps.",
  },
  {
    question: "Can I track my invoices?",
    answer: "Track sent invoices and payment status instantly.",
  },
  {
    question: "Who is Credo for?",
    answer: "Perfect for freelancers, small businesses, and pros.",
  },
  {
    question: "How do I get started?",
    answer: "Sign up and send your first invoice in minutes.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-32 w-full bg-[url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')] bg-cover bg-no-repeat">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Frequently Asked About Credo
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Fast invoices. No awkward follow-ups. Get paid, stress-free.
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
