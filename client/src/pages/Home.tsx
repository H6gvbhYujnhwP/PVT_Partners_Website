import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-team.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              PARTNERS LTD.
            </h1>
            <p className="font-serif text-gold text-2xl md:text-3xl italic mb-6">
              Strategy Into Action
            </p>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Empowering advisors and businesses through expert strategic planning and development. We transform vision into measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-slate-blue mb-6">About PVT Partners</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At PVT Partners, we bring together decades of experience in business advisory and strategic planning. Our journey as a collective has been built on trust, expertise, and a genuine commitment to helping businesses and advisors achieve their full potential.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We believe in creating lasting partnerships that drive sustainable growth and success. We don't just advise from the sidelines – we roll up our sleeves and work alongside you.
            </p>
            <Link href="/about">
              <Button variant="link" className="text-gold hover:text-gold/80 text-lg font-semibold">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">Our Services</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Practical, action-focused support designed to move your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-4">Advisor Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training and mentorship programs designed to elevate advisor capabilities and enhance client relationships.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-4">Strategic Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Bespoke strategic planning sessions that align your business objectives with actionable roadmaps for success.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-4">Business Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on business development, operational efficiency, and growth strategies tailored to your unique needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-white text-slate-blue hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-4">Let's Work Together</h2>
            <p className="text-gold italic font-serif text-xl mb-6">
              Ready to transform your business strategy into action?
            </p>
            <p className="text-white/80 text-lg mb-8">
              Whether you're looking to develop your advisory team, create a strategic plan, or transform your business operations, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-10 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
