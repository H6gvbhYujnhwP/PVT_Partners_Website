
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import consultingImage from "@/assets/images/consulting.jpg";
import heroTeamImage from "@/assets/images/hero-team.jpg";
import aboutOfficeImage from "@/assets/images/about-office.jpg";
import { Briefcase, CheckCircle, Settings, TrendingUp, Users, Zap, Shield, ArrowRight } from "lucide-react";

const consultingAreas = [
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Streamline processes, improve efficiency, and reduce costs while maintaining quality and client satisfaction."
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Identify and capitalise on growth opportunities, whether through market expansion, new services, or acquisitions."
  },
  {
    icon: Users,
    title: "Organisational Development",
    description: "Build high-performing teams, develop leadership capability, and create cultures that drive success."
  },
  {
    icon: Zap,
    title: "Change Management",
    description: "Navigate complex transformations with structured approaches that ensure successful adoption."
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description: "Strengthen governance frameworks and ensure regulatory compliance without compromising agility."
  },
  {
    icon: Briefcase,
    title: "M&A Integration",
    description: "Successfully integrate acquisitions and realise synergies through careful planning and execution."
  }
];

const approach = [
  {
    title: "Embedded Partnership",
    description: "We don't just advise from the sidelines. We embed with your team, working alongside you to understand the nuances of your business and ensure solutions are practical and implementable."
  },
  {
    title: "Results-Focused",
    description: "Every engagement is designed around achieving specific, measurable outcomes. We define success criteria upfront and track progress throughout."
  },
  {
    title: "Knowledge Transfer",
    description: "We build your team's capability as we work together, ensuring you're not dependent on consultants and can sustain improvements long after we've gone."
  },
  {
    title: "Flexible Engagement",
    description: "From short diagnostic projects to long-term transformation programmes, we tailor our involvement to your needs and budget."
  }
];

const engagementTypes = [
  {
    title: "Diagnostic Assessment",
    description: "A focused review of a specific area of your business to identify issues, opportunities, and recommendations for improvement.",
    typical: "2-4 weeks",
    ideal: "When you need clarity on a specific challenge or opportunity"
  },
  {
    title: "Project-Based Consulting",
    description: "Hands-on support to deliver a defined project or initiative, from planning through to implementation.",
    typical: "1-6 months",
    ideal: "When you need expert support to deliver a specific outcome"
  },
  {
    title: "Transformation Programme",
    description: "Comprehensive support for major business transformations, including strategy, implementation, and change management.",
    typical: "6-18 months",
    ideal: "When you're undertaking significant organisational change"
  },
  {
    title: "Ongoing Advisory",
    description: "Regular access to experienced advisors for guidance, challenge, and support on an ongoing basis.",
    typical: "Retained relationship",
    ideal: "When you want a trusted external perspective on tap"
  }
];

export default function BusinessConsulting() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${consultingImage})` }}
        >
          <div className="absolute inset-0 bg-slate-blue/80"></div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Business Consulting</h1>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Expert guidance on business development, operational efficiency, and growth strategies – delivered through hands-on partnership, not just advice.
            </p>
            <a href="/contact.html">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-slate-blue mb-6">Consulting That Makes a Difference</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe consulting should deliver real, lasting value – not just reports and recommendations. Our approach is fundamentally different: we work as an extension of your team, rolling up our sleeves to help you solve problems and capture opportunities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With decades of experience in financial services and advisory businesses, we bring deep expertise combined with practical, hands-on support. The result? Solutions that work in the real world and teams that are stronger for having worked with us.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide consulting support across a range of business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-slate-blue mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-slate-blue mb-8">Our Approach</h2>
              <div className="space-y-8">
                {approach.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-blue mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={heroTeamImage} 
                alt="Business Consulting Team" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">Ways to Work Together</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Flexible engagement models to suit your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {engagementTypes.map((type) => (
              <div key={type.title} className="bg-white p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-slate-blue mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-gray-100 px-3 py-1 rounded">
                    <span className="text-gray-500">Duration:</span>{" "}
                    <span className="text-slate-blue font-medium">{type.typical}</span>
                  </div>
                </div>
                <p className="text-gold text-sm mt-4 italic">Ideal: {type.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={aboutOfficeImage} 
                alt="Business Results" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-slate-blue mb-6">Delivering Real Results</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our consulting engagements consistently deliver measurable improvements:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">30-50% improvement in operational efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Significant cost savings through process optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Accelerated growth through strategic initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced team capability and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Successful delivery of complex change programmes</span>
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
            <h2 className="font-serif text-4xl text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our consulting expertise can help you overcome challenges and capture opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact.html">
                <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg">
                  Get in Touch
                </Button>
              </a>
              <a href="/case-studies.html">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  View Case Studies
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
