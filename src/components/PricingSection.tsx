"use client";

import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const PRICING_PLANS = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly: "Send invoices instantly. Always free.",
      yearly: "Send invoices instantly. Always free.",
    },
    buttonText: "Start Free",
    highlighted: false,
    features: [
      "Unlimited invoices",
      "Basic reminders",
      "Email support",
      "100MB storage",
      "All platforms",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$15",
    yearlyPrice: "$150",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly: "Automate follow-ups. Get paid faster.",
      yearly: "Automate follow-ups. Get paid faster.",
    },
    buttonText: "Upgrade Now",
    highlighted: true,
    features: [
      "Unlimited invoices",
      "Smart reminders",
      "Priority support",
      "1GB storage",
      "Multi-device sync",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly: "Custom workflows. Dedicated support.",
      yearly: "Custom workflows. Dedicated support.",
    },
    buttonText: "Contact Sales",
    highlighted: false,
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated manager",
      "Advanced analytics",
      "API access",
    ],
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-gradient-to-t whites to-70% to-background via-white w-full py-32 pt-0">
      <div className="container mx-auto flex flex-col gap-13">
        <h1 className="text-center text-6xl font-bold tracking-tighter text-foreground">
          Simple Pricing Plans
        </h1>

        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="rounded-lg bg-muted p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-7">
          {PRICING_PLANS.map((plan, index) => (
            <Card
              key={index}
              className={`max-w-sm  rounded-3xl ${
                plan.highlighted ? "" : ""
              } shadow-lg`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <div className="text-5xl font-semibold tracking-tight text-muted-foreground">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {billingCycle === "monthly"
                      ? plan.period.monthly
                      : plan.period.yearly}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-7 pt-6">
                <p className="text-sm text-muted-foreground">
                  {billingCycle === "monthly"
                    ? plan.description.monthly
                    : plan.description.yearly}
                </p>

                <Button className="mt-6 w-full">{plan.buttonText}</Button>

                <div className="relative mt-12 mb-4 flex items-center justify-center overflow-hidden">
                  <Separator />
                  <span className="px-3 text-xs text-muted-foreground opacity-50">
                    FEATURES
                  </span>
                  <Separator />
                </div>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <BadgeCheck className="size-5 text-muted-foreground" />
                      <span className="ml-3 text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PricingSection };
