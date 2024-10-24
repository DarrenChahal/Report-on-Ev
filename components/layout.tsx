'use client'

import Link from 'next/link'
import { Battery, BarChart, GanttChartSquare, Users, Plug } from 'lucide-react'

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/" className="text-2xl font-bold flex items-center">
                <Battery className="mr-2" />
                EV India Report
              </Link>
            </li>
            <li className="flex space-x-4">
              <Link href="/analytics" className="flex items-center hover:underline">
                <BarChart className="mr-1" size={18} />
                Analytics
              </Link>
              <Link href="/initiatives" className="flex items-center hover:underline">
                <GanttChartSquare className="mr-1" size={18} />
                Initiatives
              </Link>
              <Link href="/leaders" className="flex items-center hover:underline">
                <Users className="mr-1" size={18} />
                Key Leaders
              </Link>
              <Link href="/charging-stations" className="flex items-center hover:underline">
                <Plug className="mr-1" size={18} />
                Charging Stations
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 EV India Report. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
