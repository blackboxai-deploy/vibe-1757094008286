"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  review: string
  rating: number
  service: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amina K.",
    review: "Rabha's massage therapy is exceptional. I feel completely rejuvenated after each session. Her technique is perfect and the atmosphere is so relaxing.",
    rating: 5,
    service: "Deep Tissue Massage"
  },
  {
    name: "Hassan M.",
    review: "After months of back pain, Rabha's therapeutic massage has been a game-changer. Professional, skilled, and truly caring.",
    rating: 5,
    service: "Therapeutic Massage"
  },
  {
    name: "Layla R.",
    review: "The best massage experience in Casablanca! Rabha is incredibly professional and creates such a peaceful environment.",
    rating: 5,
    service: "Swedish Massage"
  },
  {
    name: "Omar B.",
    review: "Highly recommend! Rabha's expertise in sports massage helped me recover faster from my training injuries.",
    rating: 5,
    service: "Sports Massage"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
        <p className="text-slate-600">Real experiences from satisfied clients</p>
      </div>

      <Card className="bg-white shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          
          <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed">
            "{currentTestimonial.review}"
          </blockquote>
          
          <div className="space-y-1">
            <p className="font-semibold text-slate-800">{currentTestimonial.name}</p>
            <p className="text-sm text-emerald-600">{currentTestimonial.service}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-emerald-600' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}