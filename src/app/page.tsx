import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TruckTimings } from "@/components/truck-timings"
import { DumpPoints } from "@/components/dump-points"
import { SegregationGuide } from "@/components/segregation-guide"
import { Recycle } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-5xl">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
            <Recycle className="h-10 w-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Hebbal Helper
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your guide to smart waste management in Hebbal, Bengaluru.
          </p>
        </header>

        <Tabs defaultValue="timings" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-primary/10">
            <TabsTrigger value="timings">Truck Timings</TabsTrigger>
            <TabsTrigger value="points">Dump Points</TabsTrigger>
            <TabsTrigger value="guide">Segregation Guide</TabsTrigger>
          </TabsList>
          <TabsContent value="timings" className="mt-6">
            <TruckTimings />
          </TabsContent>
          <TabsContent value="points" className="mt-6">
            <DumpPoints />
          </TabsContent>
          <TabsContent value="guide" className="mt-6">
            <SegregationGuide />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
