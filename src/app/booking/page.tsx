"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    duration: "",
    preferredDate: "",
    preferredTime: "",
    specialRequests: "",
    isFirstTime: "yes",
    healthConditions: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const services = [
    { value: "swedish", label: "Swedish Massage", price: "400-550 MAD" },
    { value: "deep-tissue", label: "Deep Tissue Massage", price: "500-650 MAD" },
    { value: "relaxation", label: "Relaxation Massage", price: "350-450 MAD" },
    { value: "sports", label: "Sports Massage", price: "450-600 MAD" },
    { value: "prenatal", label: "Prenatal Massage", price: "400-500 MAD" },
    { value: "hot-stone", label: "Hot Stone Therapy", price: "550-700 MAD" }
  ]

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: "", email: "", phone: "", service: "", duration: "",
        preferredDate: "", preferredTime: "", specialRequests: "",
        isFirstTime: "yes", healthConditions: ""
      })
    }, 2000)
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-emerald-600 text-3xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Booking Request Submitted!</h2>
              <p className="text-slate-600 leading-relaxed">
                Thank you for your booking request. We'll contact you within 2 hours to confirm 
                your appointment details and answer any questions you may have.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-sm text-slate-500">What happens next:</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <div>• Confirmation call within 2 hours</div>
                  <div>• Final appointment details via SMS</div>
                  <div>• Reminder 24 hours before your session</div>
                </div>
              </div>
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Book Another Session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Book Your Appointment
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Schedule your massage therapy session with Rabha. We'll create a personalized 
              treatment plan to meet your wellness goals.
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800">Appointment Details</CardTitle>
                <CardDescription>
                  Please provide your information and preferences for your massage therapy session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      Service Selection
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Preferred Service *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label} - {service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Session Duration</Label>
                      <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration (we'll recommend based on service)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="75">75 minutes</SelectItem>
                          <SelectItem value="90">90 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Appointment Scheduling */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      Preferred Schedule
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Health & Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      Health Information & Preferences
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <Label>Is this your first massage therapy session? *</Label>
                        <RadioGroup 
                          value={formData.isFirstTime} 
                          onValueChange={(value) => handleInputChange("isFirstTime", value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="first-yes" />
                            <label htmlFor="first-yes" className="text-sm">Yes, this is my first time</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="first-no" />
                            <label htmlFor="first-no" className="text-sm">No, I've had massage therapy before</label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="healthConditions">Health Conditions or Concerns</Label>
                        <Textarea
                          id="healthConditions"
                          value={formData.healthConditions}
                          onChange={(e) => handleInputChange("healthConditions", e.target.value)}
                          placeholder="Please mention any injuries, medical conditions, areas of concern, or allergies we should be aware of..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests or Preferences</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                          placeholder="Any specific areas you'd like us to focus on, pressure preferences, or other requests..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-200">
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting Your Booking..." : "Submit Booking Request"}
                    </Button>
                    <p className="text-sm text-slate-500 text-center mt-3">
                      We'll contact you within 2 hours to confirm your appointment details.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}