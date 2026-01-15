
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroTeamImage from "@/assets/images/hero-team.jpg";

const directors = [
  {
    name: "Graeme Vaughan",
    title: "Director",
    bio: "Graeme brings extensive experience in strategic advisory and business development. With a passion for helping businesses grow, he focuses on creating practical strategies that deliver real results. His approach combines deep industry knowledge with a genuine commitment to client success.",
    initials: "GV"
  },
  {
    name: "Paolo Payne",
    title: "Director",
    bio: "Paolo specialises in advisor development and operational excellence. With over 20 years working with entrepreneurs and financial advisors, he understands the challenges of building and scaling a successful practice. His hands-on approach ensures clients receive practical, actionable guidance.",
    initials: "PP"
  },
  {
    name: "Rob Theobald",
    title: "Director",
    bio: "Rob is an expert in strategic planning and business transformation. He leads our discovery and planning processes, helping clients uncover opportunities and create clear paths to their goals. His focus on measurable outcomes ensures every engagement delivers tangible value.",
    initials: "RT"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Meet the Directors</h1>
            <p className="text-gold italic font-serif text-xl">The expertise behind PVT Partners</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div key={director.name} className="text-center">
                <div className="w-32 h-32 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-serif text-3xl">{director.initials}</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-blue mb-1">{director.name}</h3>
                <p className="text-gold font-medium mb-4">{director.title}</p>
                <p className="text-gray-600 leading-relaxed">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={heroTeamImage} 
                alt="PVT Partners Team" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl text-white mb-6">Working Together</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                As a team, we bring complementary skills and perspectives to every engagement. Our collaborative approach means you benefit from the combined expertise of all three directors, ensuring comprehensive support for your business.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                We believe in building genuine relationships with our clients. When you work with PVT Partners, you're not just getting consultants – you're gaining trusted advisors who are invested in your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-6">Let's Start a Conversation</h2>
            <p className="text-white/80 text-lg mb-8">
              We'd love to learn more about your business and discuss how we can help you achieve your goals.
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
