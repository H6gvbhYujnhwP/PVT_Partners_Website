import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Award, ArrowRight, Quote } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Mitchell Financial Advisors",
    industry: "Financial Advisory",
    challenge: "Struggling with advisor retention and inconsistent client service delivery across a growing team of 12 advisors.",
    solution: "Implemented our comprehensive Advisor Development Programme with tailored mentorship and standardised client service frameworks.",
    results: [
      "95% advisor retention rate (up from 70%)",
      "40% increase in client satisfaction scores",
      "25% growth in assets under management"
    ],
    testimonial: "PVT Partners transformed our approach to team development. The results speak for themselves.",
    author: "Sarah Mitchell, Managing Director",
    image: "/mentorship.jpg",
    service: "Advisor Development"
  },
  {
    id: 2,
    client: "Henderson Wealth Management",
    industry: "Wealth Management",
    challenge: "Needed a clear strategic direction after rapid growth left the business without a cohesive long-term plan.",
    solution: "Conducted in-depth discovery sessions and developed a comprehensive 3-year strategic plan with quarterly milestones.",
    results: [
      "Clear roadmap with measurable KPIs",
      "30% revenue growth in first year",
      "Successful expansion into two new market segments"
    ],
    testimonial: "The strategic planning process uncovered opportunities we'd completely overlooked. Exceptional ROI.",
    author: "James Henderson, CEO",
    image: "/strategic-planning.jpg",
    service: "Strategic Planning"
  },
  {
    id: 3,
    client: "Clarke Advisory Group",
    industry: "Business Consulting",
    challenge: "Operational inefficiencies were limiting growth potential and causing client delivery delays.",
    solution: "Embedded with the team to redesign core processes, implement new systems, and train staff on best practices.",
    results: [
      "50% reduction in project delivery time",
      "35% improvement in operational efficiency",
      "Client satisfaction increased to 98%"
    ],
    testimonial: "They don't just advise – they roll up their sleeves and work alongside you. Game-changing.",
    author: "David Clarke, Founder",
    image: "/consulting.jpg",
    service: "Business Consulting"
  }
];

const stats = [
  { value: "50+", label: "Clients Served", icon: Users },
  { value: "95%", label: "Client Retention", icon: Award },
  { value: "£2B+", label: "Assets Influenced", icon: TrendingUp },
  { value: "100%", label: "Recommendation Rate", icon: Target }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Case Studies</h1>
            <p className="text-gold italic font-serif text-xl mb-4">Real Results for Real Businesses</p>
            <p className="text-gray-600 text-lg">
              Discover how we've helped businesses like yours achieve transformational results through strategic partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-blue">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-serif text-4xl text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section 
          key={study.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-gold font-medium text-sm uppercase tracking-wider">{study.service}</span>
                <h2 className="font-serif text-3xl text-slate-blue mt-2 mb-4">{study.client}</h2>
                <p className="text-gray-500 text-sm mb-6">{study.industry}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-blue mb-2">The Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-blue mb-2">Our Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-blue mb-2">The Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                  <Quote className="w-6 h-6 text-gold mb-2" />
                  <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                  <p className="text-slate-blue font-medium text-sm">{study.author}</p>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can help your business achieve similar transformational results.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-slate-blue hover:bg-white/90 font-semibold px-10 py-6 text-lg">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
