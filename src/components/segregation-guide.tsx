import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Recycle, Biohazard, Info } from "lucide-react";

const segregationData = [
  {
    value: "wet",
    title: "Wet Waste",
    icon: <Droplets className="h-5 w-5 text-primary" />,
    description: "These are biodegradable wastes from your kitchen.",
    examples: [
      "Vegetable peels",
      "Fruit scraps",
      "Leftover food",
      "Eggshells",
      "Tea bags & coffee grounds",
      "Flowers & leaves",
    ],
  },
  {
    value: "dry",
    title: "Dry Waste",
    icon: <Recycle className="h-5 w-5 text-[hsl(var(--chart-2))]" />,
    description:
      "Non-biodegradable, non-soiled waste that can be recycled.",
    examples: [
      "Plastic bottles",
      "Paper & cardboard",
      "Glass jars",
      "Metal cans",
      "Tetra Paks",
      "Old clothes",
    ],
  },
  {
    value: "hazardous",
    title: "Hazardous Waste",
    icon: <Biohazard className="h-5 w-5 text-destructive" />,
    description:
      "Waste that is harmful to people or the environment. Handle with care.",
    examples: [
      "Batteries",
      "Expired medicines",
      "Light bulbs & CFLs",
      "Paint cans",
      "Pesticides",
      "Used syringes",
    ],
  },
];

export function SegregationGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-6 w-6 text-primary" />
          <span>Waste Segregation Guide</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full" defaultValue="wet">
          {segregationData.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11">
                <p className="mb-4 text-muted-foreground">
                  {item.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {item.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
