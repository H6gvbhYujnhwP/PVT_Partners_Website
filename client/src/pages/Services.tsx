import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Briefcase, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Our Services</h1>
            <p className="text-gray-600 text-lg">
              Practical, action-focused support designed to move your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Advisor Development */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-4xl text-slate-blue mb-2">Advisor Development</h2>
              <p className="text-gold italic font-serif text-lg mb-6">Elevating capabilities, enhancing relationships</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Comprehensive training and mentorship programs designed to elevate advisor capabilities and enhance client relationships. We work alongside you to build stronger practices through expert guidance and proven frameworks.
              </p>
              <ul className="space-y-3">
                {["One-to-one mentorship and coaching", "Practice management training", "Client relationship enhancement", "Business development strategies"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="/mentorship.jpg" 
                alt="Advisor Development" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/strategic-planning.jpg" 
                alt="Strategic Planning" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-4xl text-slate-blue mb-2">Strategic Planning</h2>
              <p className="text-gold italic font-serif text-lg mb-6">From discovery to implementation</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bespoke strategic planning sessions that align your business objectives with actionable roadmaps for success. Our discovery process uncovers opportunities and creates clear paths to achieving your goals.
              </p>
              <ul className="space-y-3">
                {["Discovery sessions and corporate fact-find", "SWOT analysis and diagnostic work", "Strategic plan with clear milestones", "Implementation support and guidance"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Consulting */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-4xl text-slate-blue mb-2">Business Consulting</h2>
              <p className="text-gold italic font-serif text-lg mb-6">Hands-on expertise for real results</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Expert guidance on business development, operational efficiency, and growth strategies tailored to your unique needs. We embed with your team to drive real, measurable change.
              </p>
              <ul className="space-y-3">
                {["Operational efficiency and process improvement", "Business development and growth strategies", "Change management and transformation", "Leadership and team development"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="/consulting.jpg" 
                alt="Business Consulting" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss which services are right for your business and create a tailored plan for success.
            </p>
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-10 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
