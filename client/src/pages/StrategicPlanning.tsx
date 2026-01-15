
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import strategicPlanningImage from "@/assets/images/strategic-planning.jpg";
import aboutOfficeImage from "@/assets/images/about-office.jpg";
import { Target, CheckCircle, Compass, Map, BarChart3, Lightbulb, Clock, ArrowRight } from "lucide-react";

const outcomes = [
  {
    icon: Compass,
    title: "Clear Direction",
    description: "A well-defined vision and strategic priorities that align your entire organisation."
  },
  {
    icon: Map,
    title: "Actionable Roadmap",
    description: "Detailed implementation plans with milestones, timelines, and accountability."
  },
  {
    icon: BarChart3,
    title: "Measurable Goals",
    description: "KPIs and metrics that allow you to track progress and demonstrate success."
  },
  {
    icon: Lightbulb,
    title: "New Opportunities",
    description: "Identification of growth opportunities and competitive advantages."
  }
];

const processSteps = [
  {
    phase: "Discovery",
    title: "Understanding Your Business",
    description: "We begin with a comprehensive discovery process to understand your current position, challenges, aspirations, and the market landscape. This includes stakeholder interviews, data analysis, and competitive assessment.",
    duration: "2-3 weeks"
  },
  {
    phase: "Analysis",
    title: "Strategic Assessment",
    description: "Using proven frameworks, we analyse your findings to identify strategic options, evaluate opportunities, and assess risks. This phase uncovers insights that inform your strategic choices.",
    duration: "1-2 weeks"
  },
  {
    phase: "Planning",
    title: "Strategy Development",
    description: "Working collaboratively with your leadership team, we develop a comprehensive strategic plan that defines your vision, priorities, and the initiatives required to achieve your goals.",
    duration: "2-3 weeks"
  },
  {
    phase: "Implementation",
    title: "Putting Strategy Into Action",
    description: "We help you translate strategy into action with detailed implementation plans, resource allocation, and governance frameworks. We can also provide ongoing support during execution.",
    duration: "Ongoing"
  }
];

const deliverables = [
  "Strategic vision and mission statements",
  "3-5 year strategic plan document",
  "Priority initiatives and action plans",
  "Financial projections and resource requirements",
  "Risk assessment and mitigation strategies",
  "Implementation roadmap with milestones",
  "KPI dashboard and measurement framework",
  "Governance and review processes"
];

export default function StrategicPlanning() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${strategicPlanningImage})` }}
        >
          <div className="absolute inset-0 bg-slate-blue/80"></div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Strategic Planning</h1>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Bespoke strategic planning that aligns your business objectives with actionable roadmaps, turning vision into measurable results.
            </p>
            <a href="/contact.html">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg">
                Start Planning
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
              <h2 className="font-serif text-4xl text-slate-blue mb-6">Strategy That Delivers Results</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In today's fast-moving business environment, having a clear strategic direction is more important than ever. But strategy is only valuable if it leads to action and results.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our strategic planning process is designed to be practical and action-oriented. We work with you to develop strategies that are ambitious yet achievable, with clear implementation pathways and measurable outcomes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're looking to grow, transform, or simply gain clarity on your direction, we bring the frameworks, facilitation skills, and external perspective to help you develop a winning strategy.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-slate-blue mb-6">What You'll Receive</h3>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Strategic Outcomes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our strategic planning engagements deliver tangible outcomes that drive business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-slate-blue mb-3">{outcome.title}</h3>
                <p className="text-gray-600 text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-slate-blue mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A structured approach that delivers comprehensive, actionable strategies
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.phase} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <span className="font-serif text-xl text-slate-blue">{index + 1}</span>
                    </div>
                    <div>
                      <span className="text-gold font-medium text-sm uppercase tracking-wider">{step.phase}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-2xl text-slate-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="lg:col-span-2 text-right">
                  <div className="inline-flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-white mb-6">Why Choose PVT Partners?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Practical, Not Theoretical</h3>
                  <p className="text-white/80">We focus on strategies that can actually be implemented, not impressive documents that gather dust.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Collaborative Approach</h3>
                  <p className="text-white/80">We work alongside your team, building capability and ownership throughout the process.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Implementation Support</h3>
                  <p className="text-white/80">We don't just hand over a plan – we can support you through execution to ensure success.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Industry Expertise</h3>
                  <p className="text-white/80">Deep experience in financial services and advisory businesses means relevant, applicable insights.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aboutOfficeImage} 
                alt="Strategic Planning Session" 
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
            <h2 className="font-serif text-4xl text-white mb-4">Ready to Define Your Strategy?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our strategic planning process can help you achieve clarity, alignment, and results.
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
