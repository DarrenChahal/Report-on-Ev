
import { Card, CardContent,  CardHeader, CardTitle } from '@/components/ui/card'
import { Battery, Leaf, Zap, TrendingUp } from 'lucide-react'

export function InitiativesComponent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Government Initiatives for EVs in India</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Battery className="mr-2" />
              FAME India Scheme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Faster Adoption and Manufacturing of (Hybrid &) Electric Vehicles (FAME) scheme 
              provides incentives for the purchase of electric and hybrid vehicles. FAME II, launched 
              in 2019, aims to support 1 million electric two-wheelers, 500,000 electric three-wheelers, 
              55,000 electric four-wheelers, and 7,000 electric buses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2" />
              National Electric Mobility Mission Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The National Electric Mobility Mission Plan (NEMMP) 2020 aims to achieve national fuel 
              security by promoting hybrid and electric vehicles. It set a target of 6-7 million sales 
              of hybrid and electric vehicles by 2020.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2" />
              Charging Infrastructure Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Ministry of Power has released guidelines for charging infrastructure, aiming to 
              ensure at least one charging station in a grid of 3km x 3km in cities and one charging 
              station every 25km on both sides of highways.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2" />
              Production Linked Incentive (PLI) Scheme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The PLI scheme for the automotive sector, with a budget outlay of ₹25,938 crore, aims to 
              boost domestic manufacturing of advanced automotive technology products, including EVs 
              and their components.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}