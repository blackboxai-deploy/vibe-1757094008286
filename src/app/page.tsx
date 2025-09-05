import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/ServiceCard"
import Testimonials from "@/components/Testimonials"

export default function HomePage() {
  const featuredServices = [
    {
      title: "Swedish Massage",
      description: "Classic relaxation massage using long, flowing strokes to promote deep relaxation and stress relief.",
      duration: "60-90 minutes",
      price: "400-550 MAD",
      benefits: [
        "Deep relaxation and stress relief",
        "Improved blood circulation",
        "Muscle tension release",
        "Better sleep quality"
      ]
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to address chronic pain and tension.",
      duration: "75-90 minutes",
      price: "500-650 MAD",
      benefits: [
        "Chronic pain relief",
        "Muscle knot release",
        "Improved mobility",
        "Injury recovery support"
      ]
    },
    {
      title: "Relaxation Massage",
      description: "Gentle, soothing massage designed to promote complete relaxation and mental well-being.",
      duration: "60 minutes",
      price: "350-450 MAD",
      benefits: [
        "Stress reduction",
        "Mental relaxation",
        "Improved mood",
        "Enhanced well-being"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Professional Massage Therapy
              <span className="block text-emerald-600">in Casablanca</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Experience healing and relaxation with Rabha's expert massage therapy. 
              Dedicated to your wellness journey with personalized care and professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                <Link href="/booking">Book Your Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Image Placeholder */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                    Meet Rabha
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    With over 8 years of experience in massage therapy, Rabha brings a passionate 
                    commitment to healing and wellness. Trained in various massage techniques and 
                    dedicated to creating a peaceful, therapeutic environment for every client.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">8+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">Happy Clients</div>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Link href="/about">Learn More About Rabha</Link>
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://placehold.co/400x600?text=Professional+massage+therapist+Rabha+in+serene+treatment+room+Casablanca" 
                    alt="Professional massage therapist Rabha in serene treatment room Casablanca"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Featured Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover our most popular massage therapies designed to address your specific wellness needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Why Choose Rabha Massage Therapy?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Experience the difference with our personalized approach to wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">🧘</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Personalized Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Every session is tailored to your specific needs, ensuring maximum therapeutic benefit and comfort.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">⭐</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Expert Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Professionally trained in multiple massage modalities with continuous education and skill development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">🌿</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Peaceful Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Relax in our serene treatment space designed to promote healing and complete relaxation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Book your appointment today and take the first step towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Link href="/booking">Schedule Your Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}