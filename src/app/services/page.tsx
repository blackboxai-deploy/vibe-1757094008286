import ServiceCard from "@/components/ServiceCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Swedish Massage",
      description: "Classic relaxation massage using long, flowing strokes to promote deep relaxation and stress relief. Perfect for first-time clients or those seeking general wellness.",
      duration: "60-90 minutes",
      price: "400-550 MAD",
      benefits: [
        "Deep relaxation and stress relief",
        "Improved blood circulation",
        "Muscle tension release",
        "Better sleep quality",
        "Enhanced mood and well-being"
      ]
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to address chronic pain, muscle knots, and tension. Uses slower strokes and deeper pressure.",
      duration: "75-90 minutes",
      price: "500-650 MAD",
      benefits: [
        "Chronic pain relief",
        "Muscle knot release",
        "Improved mobility and flexibility",
        "Injury recovery support",
        "Postural improvement"
      ]
    },
    {
      title: "Relaxation Massage",
      description: "Gentle, soothing massage designed to promote complete relaxation and mental well-being. Light pressure with focus on comfort and tranquility.",
      duration: "60 minutes",
      price: "350-450 MAD",
      benefits: [
        "Stress and anxiety reduction",
        "Mental relaxation",
        "Improved mood",
        "Enhanced well-being",
        "Better emotional balance"
      ]
    },
    {
      title: "Sports Massage",
      description: "Specialized massage for athletes and active individuals. Combines techniques to prevent injury, enhance performance, and speed recovery.",
      duration: "60-75 minutes",
      price: "450-600 MAD",
      benefits: [
        "Enhanced athletic performance",
        "Injury prevention",
        "Faster recovery time",
        "Reduced muscle soreness",
        "Improved flexibility"
      ]
    },
    {
      title: "Prenatal Massage",
      description: "Safe, gentle massage specifically designed for expecting mothers. Helps alleviate pregnancy-related discomfort and promotes relaxation.",
      duration: "60 minutes",
      price: "400-500 MAD",
      benefits: [
        "Relief from pregnancy discomfort",
        "Reduced swelling",
        "Better sleep quality",
        "Stress reduction",
        "Improved circulation"
      ]
    },
    {
      title: "Hot Stone Therapy",
      description: "Luxurious massage using heated stones to relax muscles and promote deep relaxation. The warmth penetrates deeply for ultimate comfort.",
      duration: "75-90 minutes",
      price: "550-700 MAD",
      benefits: [
        "Deep muscle relaxation",
        "Enhanced circulation",
        "Stress relief",
        "Pain reduction",
        "Luxurious spa experience"
      ]
    }
  ]

  const packages = [
    {
      name: "Wellness Package",
      description: "3 sessions of your choice within 2 months",
      price: "1200 MAD",
      savings: "Save 200 MAD"
    },
    {
      name: "Monthly Maintenance",
      description: "4 sessions per month with flexible scheduling",
      price: "1500 MAD",
      savings: "Save 300 MAD"
    },
    {
      name: "Ultimate Relaxation",
      description: "6 sessions including hot stone therapy",
      price: "2800 MAD",
      savings: "Save 500 MAD"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Massage Therapy Services
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover our comprehensive range of therapeutic massage services, 
              each designed to address your specific wellness needs and goals.
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/booking">Book Your Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Professional massage therapy tailored to your individual needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Wellness Packages
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Save money with our specially designed packages for regular wellness maintenance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-slate-800">{pkg.name}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-emerald-600">{pkg.price}</div>
                      <div className="text-sm text-emerald-600 font-medium">{pkg.savings}</div>
                    </div>
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/booking">Choose Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Experience the difference with our professional approach to massage therapy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-emerald-600">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Customized Treatment</h3>
                <p className="text-sm text-slate-600">
                  Every session is tailored to your specific needs and preferences
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-emerald-600">⚕️</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Therapeutic Focus</h3>
                <p className="text-sm text-slate-600">
                  Professional techniques focused on healing and wellness outcomes
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-emerald-600">🌿</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Natural Approach</h3>
                <p className="text-sm text-slate-600">
                  Using natural techniques to promote your body's healing abilities
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-emerald-600">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Proven Results</h3>
                <p className="text-sm text-slate-600">
                  Years of experience helping clients achieve their wellness goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Book your appointment today and discover the perfect massage therapy for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}