import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Truck } from "lucide-react";

const truckData = [
  {
    id: 1,
    name: "BBMP-T-01",
    route: "Hebbal Main Road",
    time: "8:00 AM - 9:00 AM",
  },
  {
    id: 2,
    name: "BBMP-T-02",
    route: "Kempapura",
    time: "9:00 AM - 10:00 AM",
  },
  {
    id: 3,
    name: "BBMP-T-03",
    route: "Esteem Mall Vicinity",
    time: "10:00 AM - 11:00 AM",
  },
  {
    id: 4,
    name: "BBMP-T-04",
    route: "Nagavara",
    time: "11:00 AM - 12:00 PM",
  },
];

export function TruckTimings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-primary" />
          <span>Garbage Truck Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Truck ID</TableHead>
              <TableHead>Route / Area</TableHead>
              <TableHead className="text-right">Expected Arrival</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {truckData.map((truck) => (
              <TableRow key={truck.id}>
                <TableCell className="font-medium">{truck.name}</TableCell>
                <TableCell>{truck.route}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary" className="font-mono">
                    <Clock className="mr-2 h-4 w-4" />
                    {truck.time}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
