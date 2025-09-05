import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  duration: string
  price: string
  benefits: string[]
}

export default function ServiceCard({ title, description, duration, price, benefits }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-slate-800">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-slate-700">Duration:</span>
          <span className="text-slate-600">{duration}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-slate-700">Price:</span>
          <span className="text-emerald-600 font-semibold">{price}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-slate-700 text-sm">Benefits:</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-emerald-500 mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
            <Link href="/booking">Book This Service</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}