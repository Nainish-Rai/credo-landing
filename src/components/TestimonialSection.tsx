"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    role: "Small Business Owner",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Credo made invoicing effortless. No more chasing payments!",
  },
  {
    name: "Jane Doe",
    role: "Freelancer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Fast, simple, and no awkward follow-ups. Love Credo!",
  },
  {
    name: "John Smith",
    role: "Consultant",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Send invoices in seconds. Clients pay on time now.",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Credo keeps my cash flow smooth. Highly recommend!",
  },
  {
    name: "Richard Doe",
    role: "Startup Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "No more invoice stress. Credo just works.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Quick setup, instant results. Credo is a game changer.",
  },
  {
    name: "Richard Smith",
    role: "Agency Owner",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    content: "Clients pay faster with Credo. Super easy!",
  },
  {
    name: "Gordon Smith",
    role: "Accountant",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    content: "Credo saves me hours every week. Highly efficient.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-32  w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">Testimonials</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Why businesses choose Credo
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Fast invoicing. No more awkward follow-ups.
          </p>
        </div>
        <div className="relative mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t after:from-background">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card
                    key={idx}
                    className={cn(
                      "p-5 shadow-md rounded-2xl w-full",
                      idx > 3 && idx <= 5 && "hidden md:block",
                      idx > 5 && "hidden lg:block"
                    )}
                  >
                    <div className="flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 leading-7 text-foreground/70">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };
