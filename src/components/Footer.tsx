export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Rabha Massage Therapy</h3>
              <p className="text-slate-600 text-sm">
                Professional massage therapy services in the heart of Casablanca. 
                Dedicated to your wellness and relaxation.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contact Info</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Phone:</span>
                <span>+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Email:</span>
                <span>contact@rabhamassage.ma</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium">Address:</span>
                <span>Casablanca, Morocco</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Business Hours</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Rabha Massage Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}