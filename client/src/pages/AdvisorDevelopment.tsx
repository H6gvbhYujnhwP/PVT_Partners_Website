
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import mentorshipImage from "@/assets/images/mentorship.jpg";
import { Users, CheckCircle, Target, Award, TrendingUp, BookOpen, MessageSquare, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Improved Performance",
    description: "Measurable improvements in client acquisition, retention, and overall business growth."
  },
  {
    icon: Users,
    title: "Stronger Client Relationships",
    description: "Enhanced communication skills and deeper understanding of client needs."
  },
  {
    icon: Award,
    title: "Professional Confidence",
    description: "Advisors gain confidence in their abilities and decision-making."
  },
  {
    icon: Target,
    title: "Clear Career Progression",
    description: "Structured development pathways with defined milestones and goals."
  }
];

const programFeatures = [
  "One-to-one mentorship with experienced industry professionals",
  "Customised development plans tailored to individual strengths and goals",
  "Regular progress reviews and performance feedback",
  "Access to proprietary frameworks and best practice methodologies",
  "Peer learning groups and collaborative workshops",
  "Ongoing support and coaching between formal sessions"
];

const deliveryFormats = [
  {
    title: "Individual Coaching",
    description: "Personalised one-to-one sessions focused on specific development needs and career goals.",
    duration: "Typically 6-12 months"
  },
  {
    title: "Team Programmes",
    description: "Group training and development for advisory teams, building collective capability.",
    duration: "Customised to team size"
  },
  {
    title: "Intensive Workshops",
    description: "Focused skill-building sessions on specific topics like client communication or business development.",
    duration: "1-3 day sessions"
  }
];

export default function AdvisorDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mentorshipImage})` }}
        >
          <div className="absolute inset-0 bg-slate-blue/80"></div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Advisor Development</h1>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Comprehensive training and mentorship programmes designed to elevate advisor capabilities, enhance client relationships, and drive sustainable business growth.
            </p>
            <a href="/contact.html">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg">
                Discuss Your Needs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-slate-blue mb-6">Developing Excellence in Advisory</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Great advisors aren't born – they're developed. Our Advisor Development programme combines proven methodologies with personalised mentorship to help advisors at all stages of their careers reach their full potential.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Whether you're looking to develop new talent, enhance the skills of experienced advisors, or create a culture of continuous improvement across your team, we have the expertise and frameworks to deliver lasting results.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is hands-on and practical. We don't just teach theory – we work alongside your advisors to embed new skills and behaviours that translate directly into improved client outcomes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-slate-blue mb-6">Programme Features</h3>
              <ul className="space-y-4">
                {programFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">The Benefits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our development programmes deliver measurable improvements across key performance areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-slate-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Delivery Formats</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible options to suit your needs and circumstances
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryFormats.map((format) => (
              <div key={format.title} className="border border-gray-200 rounded-lg p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-2xl text-slate-blue mb-3">{format.title}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>
                <p className="text-gold font-medium text-sm">{format.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">Our Approach</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-slate-blue">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Assess</h3>
              <p className="text-white/80 text-sm">Understand current capabilities and identify development priorities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-slate-blue">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Design</h3>
              <p className="text-white/80 text-sm">Create customised development plans aligned with goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-slate-blue">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Develop</h3>
              <p className="text-white/80 text-sm">Deliver training, coaching, and hands-on mentorship</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-slate-blue">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Measure</h3>
              <p className="text-white/80 text-sm">Track progress and refine approach for continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-4">Ready to Develop Your Team?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our Advisor Development programme can help elevate your team's capabilities and drive better outcomes for your clients.
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
