import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full  ">
      <div className="flex w-full items-center justify-center border bg-[url('https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg')] bg-cover bg-center py-20   md:py-32 text-center md:p-24">
        <div className="w-full">
          <div className=" w-full">
            <h1 className="mb-4 text-balance text-white text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg text-white/90   font-medium max-w-2xl mx-auto">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="outline">
                Get Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
