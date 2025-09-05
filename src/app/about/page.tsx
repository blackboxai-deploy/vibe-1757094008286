import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const qualifications = [
    "Certified Massage Therapist (CMT)",
    "Swedish Massage Certification",
    "Deep Tissue Massage Specialization",
    "Sports Massage Therapy Certificate",
    "Prenatal Massage Training",
    "Hot Stone Therapy Certification"
  ]

  const specializations = [
    {
      area: "Therapeutic Massage",
      description: "Specialized techniques for pain relief and muscle recovery"
    },
    {
      area: "Relaxation Therapy",
      description: "Gentle approaches focused on stress reduction and mental wellness"
    },
    {
      area: "Sports Massage",
      description: "Performance enhancement and injury prevention for active individuals"
    },
    {
      area: "Prenatal Care",
      description: "Safe, comfortable massage therapy for expecting mothers"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  About Rabha
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Dedicated to healing, wellness, and your journey to better health through 
                  the therapeutic power of professional massage therapy.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md h-96 bg-emerald-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://placehold.co/400x600?text=Professional+portrait+of+Rabha+massage+therapist+in+white+coat+smiling+warmly" 
                    alt="Professional portrait of Rabha massage therapist in white coat smiling warmly"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-xl">
                  Welcome! I'm Rabha, a certified massage therapist with over 8 years of experience 
                  helping people achieve better health and wellness through therapeutic massage.
                </p>
                
                <p>
                  My journey in massage therapy began with a personal passion for healing and wellness. 
                  After experiencing the transformative power of massage therapy in my own life, I knew 
                  I wanted to dedicate my career to helping others discover the same benefits.
                </p>
                
                <p>
                  Located in the heart of Casablanca, I've had the privilege of working with hundreds 
                  of clients, each with unique needs and wellness goals. From busy professionals seeking 
                  stress relief to athletes recovering from training, I've learned that every person 
                  deserves personalized care and attention.
                </p>
                
                <p>
                  My approach combines traditional massage techniques with modern therapeutic methods, 
                  always adapted to your specific needs and comfort level. I believe in creating a 
                  safe, peaceful environment where healing can truly take place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                My Philosophy
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Holistic wellness through personalized therapeutic care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">💆</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Personalized Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Every session is tailored to your unique needs, ensuring the most effective 
                    therapeutic outcome for your individual wellness journey.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">🌱</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Holistic Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    I believe in treating the whole person, addressing not just physical symptoms 
                    but also mental and emotional well-being through therapeutic touch.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-emerald-600">🤝</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">Collaborative Healing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Your healing journey is a partnership. I work closely with each client to 
                    understand their goals and develop effective treatment plans.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Certifications & Training
                </h2>
                <div className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-slate-700">{qualification}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Continuing Education
                  </h3>
                  <p className="text-slate-600">
                    I regularly attend workshops and training sessions to stay current with 
                    the latest techniques and best practices in massage therapy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Areas of Specialization
                </h2>
                <div className="space-y-6">
                  {specializations.map((spec, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-emerald-600">{spec.area}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600">
                          {spec.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              I'd love to work with you to achieve your health and wellness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Link href="/booking">Book an Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}