import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Search, Layout, Settings, Users, Target, Briefcase } from "lucide-react";
import mentorshipImage from "@/assets/images/mentorship.jpg";
import strategicPlanningImage from "@/assets/images/strategic-planning.jpg";
import consultingImage from "@/assets/images/consulting.jpg";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Our Services</h1>
            <p className="text-gold italic font-serif text-xl mb-6">Turning Strategy into Action</p>
            <p className="text-gray-600 text-lg">
              At PVT, we provide tailored consultancy and implementation support to help individuals and businesses transform vision into measurable results. Our flexible approach ensures strategies don't just stay on paper—they become reality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-serif text-xl text-slate-blue mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Professional consultancy with actionable advice.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-serif text-xl text-slate-blue mb-3">Hands-On Support</h3>
              <p className="text-gray-600">We help implement strategies when time, expertise, or willpower are limited.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-serif text-xl text-slate-blue mb-3">Adaptable Solutions</h3>
              <p className="text-gray-600">Our six core focus areas can be customized to your needs.</p>
            </div>
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
              <ul className="space-y-3 mb-8">
                {["One-to-one mentorship and coaching", "Practice management training", "Client relationship enhancement", "Business development strategies"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/advisor-development.html">
                <Button variant="link" className="text-gold hover:text-gold/80 text-lg font-semibold p-0">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div>
              <img 
                src={mentorshipImage} 
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
                src={strategicPlanningImage} 
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
              <ul className="space-y-3 mb-8">
                {["Discovery sessions and corporate fact-find", "SWOT analysis and diagnostic work", "Strategic plan with clear milestones", "Implementation support and guidance"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/strategic-planning.html">
                <Button variant="link" className="text-gold hover:text-gold/80 text-lg font-semibold p-0">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
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
              <ul className="space-y-3 mb-8">
                {["Operational efficiency and process improvement", "Business development and growth strategies", "Change management and transformation", "Leadership and team development"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/business-consulting.html">
                <Button variant="link" className="text-gold hover:text-gold/80 text-lg font-semibold p-0">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div>
              <img 
                src={consultingImage} 
                alt="Business Consulting" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Discover Session */}
      <section className="py-20 bg-mauve text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-4xl mb-2">Discover Session</h2>
              <p className="text-white italic font-serif text-lg mb-6 font-medium">£1000 per day</p>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Two of our directors spend 1–2 days in your business to conduct a deep dive into your operations, strategy, and team dynamics.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Conduct a strategic discovery session with leaders",
                  "Facilitate a SWOT analysis with the entire team",
                  "Hold adviser meetings to understand personal journeys and priorities"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <h4 className="font-serif text-xl text-white mb-2 font-medium">The Outcome</h4>
                <p className="text-white/90">
                  A comprehensive report with insights, opportunities for growth, and tailored recommendations. We walk you through the findings and discuss ongoing support options.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={strategicPlanningImage} 
                alt="Strategic Discovery Session" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Ongoing Support Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you need light-touch strategic guidance or ongoing implementation support, we have a package to suit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quarterly Support */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-slate-blue">
              <div className="w-14 h-14 bg-slate-blue/10 rounded-full flex items-center justify-center mb-6">
                <Layout className="w-7 h-7 text-slate-blue" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-2">Quarterly Support</h3>
              <p className="text-gold font-medium mb-4">1 day per quarter</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ideal for businesses that need regular strategic check-ins and planning sessions to stay on track.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Strategy review & planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Accountability check-ins</span>
                </li>
              </ul>
            </div>

            {/* Monthly Support */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform md:-translate-y-4 border-t-4 border-gold relative">
              <div className="absolute top-0 right-0 bg-gold text-slate-blue text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                Most Popular
              </div>
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-2">Monthly Support</h3>
              <p className="text-gold font-medium mb-4">Up to 2 days per month</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive support for strategy, planning, and hands-on implementation assistance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Strategy & planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Implementation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Team development</span>
                </li>
              </ul>
            </div>

            {/* Bespoke Options */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-slate-blue">
              <div className="w-14 h-14 bg-slate-blue/10 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-slate-blue" />
              </div>
              <h3 className="font-serif text-2xl text-slate-blue mb-2">Bespoke Options</h3>
              <p className="text-gold font-medium mb-4">Customized to you</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tailored packages designed to fit your unique business needs and specific challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Flexible duration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Specific project focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to book your Discover Session and start turning strategy into action.
            </p>
            <a href="/contact.html">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-10 py-6 text-lg">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
