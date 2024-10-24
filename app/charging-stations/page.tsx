import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function ChargingStations() {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">EV Charging Stations</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Charging Station Network</CardTitle>
            <CardDescription>Overview of EV charging infrastructure in India</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[500px]"> {/* Increased height */}
              <Image
                src="/images/What_to_expect_2030_4_1a5f1fd3f9.jpg" // Leading slash added here
                alt="Map of EV charging stations in India"
                layout="fill" // Fill the parent container
                objectFit="contain" // Change to contain to maintain aspect ratio
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Find Nearest Charging Station</CardTitle>
            <CardDescription>Locate charging stations near you using Tata Motors charging locator</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Use the Tata Motors charging locator to find the nearest EV charging station in your area. 
              This tool provides up-to-date information on charging station locations, types of chargers available, 
              and their current status.
            </p>
            <Button asChild>
              <a href="https://ev.tatamotors.com/charging-locator.html" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Find Nearest Charging Station
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
