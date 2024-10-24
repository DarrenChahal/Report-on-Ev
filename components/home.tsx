'use client'

import { Battery, TrendingUp, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function HomeComponent() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Electric Vehicles in India</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the rapid growth and future potential of the EV market in India
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Battery className="mr-2" />
              What are EVs?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Electric Vehicles (EVs) are automobiles that use one or more electric motors for propulsion. 
              They are powered by rechargeable batteries and produce zero direct emissions, making them 
              an environmentally friendly alternative to traditional internal combustion engine vehicles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2" />
              Recent Rise in India
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The EV market in India has seen significant growth in recent years, driven by government 
              initiatives, increasing environmental awareness, and advancements in technology. Sales of 
              electric vehicles in India increased by 218% in 2021, with over 300,000 units sold.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Key Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Growing Infrastructure</h3>
              <p>Rapid expansion of charging stations across the country</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Market Growth</h3>
              <p>Projected CAGR of 44% from 2020 to 2027</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Battery className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Diverse Offerings</h3>
              <p>Increasing variety of EV models across segments</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}