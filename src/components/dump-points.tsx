"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { MapPin, Droplets, Recycle, Biohazard } from "lucide-react";

const dumpPointsData = [
  {
    id: "dp1",
    name: "Hebbal Flyover Collection Point",
    description: "Under the main flyover, near the bus stop.",
    type: ["wet", "dry"],
    position: { lat: 13.0358, lng: 77.5973 },
  },
  {
    id: "dp2",
    name: "Kempapura Dry Waste Center",
    description: "Specialized in dry and recyclable materials.",
    type: ["dry"],
    position: { lat: 13.045, lng: 77.601 },
  },
  {
    id: "dp3",
    name: "Nagavara Community Bin",
    description: "General waste bin for residents of ward 24.",
    type: ["wet", "dry", "general"],
    position: { lat: 13.0428, lng: 77.6224 },
  },
  {
    id: "dp4",
    name: "Esteem Mall Hazardous Waste Drop-off",
    description: "Accepts e-waste and batteries on weekends.",
    type: ["hazardous"],
    position: { lat: 13.0498, lng: 77.599 },
  },
];

const typeIcons: { [key: string]: JSX.Element } = {
  wet: <Droplets className="mr-1 h-4 w-4 text-primary" />,
  dry: <Recycle className="mr-1 h-4 w-4 text-[hsl(var(--chart-2))]" />,
  hazardous: <Biohazard className="mr-1 h-4 w-4 text-destructive" />,
  general: <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />,
};

export function DumpPoints() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  const handleMarkerClick = (pointId: string) => {
    setSelectedPoint(pointId);
    document.getElementById(pointId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleCardClick = (pointId: string) => {
    setSelectedPoint(pointId);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span>Waste Collection Points</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {apiKey ? (
          <div className="h-[400px] w-full overflow-hidden rounded-lg border">
            <APIProvider apiKey={apiKey}>
              <Map
                defaultCenter={{ lat: 13.042, lng: 77.605 }}
                defaultZoom={13}
                mapId="hebbal-waste-map"
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                {dumpPointsData.map((point) => (
                  <AdvancedMarker
                    key={point.id}
                    position={point.position}
                    onClick={() => handleMarkerClick(point.id)}
                  >
                    <Pin
                      background={"hsl(var(--primary))"}
                      glyphColor={"hsl(var(--primary-foreground))"}
                      borderColor={"hsl(var(--primary-foreground))"}
                    />
                  </AdvancedMarker>
                ))}
              </Map>
            </APIProvider>
          </div>
        ) : (
          <div className="p-4 text-center border-dashed rounded-lg bg-muted border">
            <p className="text-muted-foreground">Map view is unavailable.</p>
            <p className="text-sm text-muted-foreground/80">
              Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable maps.
            </p>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {dumpPointsData.map((point) => (
            <Card
              id={point.id}
              key={point.id}
              onClick={() => handleCardClick(point.id)}
              className={`cursor-pointer transition-all ${
                selectedPoint === point.id
                  ? "border-primary ring-2 ring-primary"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{point.name}</CardTitle>
                <CardDescription>{point.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {point.type.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="flex items-center pointer-events-none"
                    >
                      {typeIcons[t]}
                      <span className="capitalize">{t} Waste</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
