import ContactForm from "@/components/ContactForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Phone",
      value: "+212 6XX XXX XXX",
      description: "Call or WhatsApp for immediate response"
    },
    {
      title: "Email",
      value: "contact@rabhamassage.ma",
      description: "We'll respond within 24 hours"
    },
    {
      title: "Location",
      value: "Casablanca, Morocco",
      description: "Central location with easy access"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Get in touch to schedule your appointment or ask any questions about our services.
              We're here to help you on your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We're here to answer your questions and help you book your perfect massage therapy session
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">{info.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-sm">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-emerald-600">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Business Hours & Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Business Hours</CardTitle>
                    <CardDescription>
                      We're open 7 days a week for your convenience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                          <span className="font-medium text-slate-700">{schedule.day}</span>
                          <span className="text-slate-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Location & Directions</CardTitle>
                    <CardDescription>
                      Convenient location in central Casablanca
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-slate-600">
                        Our massage therapy center is located in the heart of Casablanca, 
                        easily accessible by car or public transportation.
                      </p>
                      
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-start space-x-2">
                          <span className="font-medium">Parking:</span>
                          <span>Free parking available on-site</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="font-medium">Public Transport:</span>
                          <span>Metro and bus stops within walking distance</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="font-medium">Accessibility:</span>
                          <span>Wheelchair accessible facilities</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">What to Expect</CardTitle>
                    <CardDescription>
                      Your first visit with us
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>Brief health consultation and intake form</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>Discussion of your wellness goals and preferences</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>Customized treatment plan based on your needs</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>Relaxing environment with professional care</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>Post-treatment care recommendations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Skip the contact form and book directly online for faster scheduling.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="text-2xl font-semibold text-emerald-600">Quick Booking</div>
                <p className="text-slate-600">
                  Choose your preferred service, select a convenient time, and we'll confirm your appointment.
                </p>
                <div className="pt-4">
                  <a 
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                  >
                    Book Your Session Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}