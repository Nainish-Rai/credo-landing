import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const MainFeatureSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary text-white to-violet-500 relative w-screen overflow-hidden pb-0">
      <div className=" w-full pl-32 py-12 sm:py-32 ">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-7">
          <div className="">
            <span className="mb-4 block font-mono text-lg font-medium">
              Fast Invoicing
            </span>
            <h1 className="text-7xl font-medium tracking-tight text-white">
              Get paid on time, every time
            </h1>
            <p className="pt-10 text-lg leading-8 text-gray-100">
              The ridiculously fast invoice app. No more awkward follow-ups.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#">Get a demo</a>
              </Button>
            </div>
          </div>
          <div>
            <div className="relative  overflow-hidden rounded-l-lg bg-primary shadow-lg lg:mx-0">
              <div className="overflow-hidden w-full object-cover rounded-tl-md">
                <video
                  // alt=""
                  src="https://cdn.dribbble.com/userupload/8073511/file/original-a5de25ece991e2bdcc96991b3ae48719.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainFeatureSection };
