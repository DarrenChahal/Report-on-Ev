import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const leaders = [
  {
    name: "Bhavish Aggarwal",
    company: "Ola Electric",
    segment: "Two-wheelers",
    image: "/placeholder.svg?height=100&width=100",
    description: "Leading the charge in electric scooters with ambitious plans for a mega-factory."
  },
  {
    name: "Tarun Mehta",
    company: "Ather Energy",
    segment: "Two-wheelers",
    image: "/placeholder.svg?height=100&width=100",
    description: "Pioneering premium electric scooters with a focus on performance and technology."
  },
  {
    name: "Chetan Maini",
    company: "Sun Mobility",
    segment: "Battery swapping",
    image: "/placeholder.svg?height=100&width=100",
    description: "Innovating in battery swapping technology for various EV segments."
  },
  {
    name: "Naveen Munjal",
    company: "Hero Electric",
    segment: "Two-wheelers",
    image: "/placeholder.svg?height=100&width=100",
    description: "Driving mass-market adoption of electric two-wheelers in India."
  },
  {
    name: "Suman Mishra",
    company: "Mahindra Electric",
    segment: "Four-wheelers",
    image: "/placeholder.svg?height=100&width=100",
    description: "Spearheading electric vehicle initiatives for one of India's largest automakers."
  },
  {
    name: "Shailesh Chandra",
    company: "Tata Motors",
    segment: "Four-wheelers",
    image: "/placeholder.svg?height=100&width=100",
    description: "Leading Tata's electric vehicle strategy and expanding the EV portfolio in India."
  },
]

export function LeadersComponent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Key Leaders in Indian EV Industry</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {leaders.map((leader, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription>{leader.company}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Segment: {leader.segment}</p>
              <p>{leader.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
