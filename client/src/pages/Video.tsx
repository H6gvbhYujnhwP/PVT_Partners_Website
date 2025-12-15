import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Video as VideoIcon } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Welcome to PVT Partners",
    description: "An introduction to who we are and how we help businesses transform strategy into action.",
    thumbnail: "/hero-team.jpg",
    duration: "3:45",
    category: "About Us"
  },
  {
    id: 2,
    title: "Our Approach to Strategic Planning",
    description: "Learn about our discovery process and how we create actionable roadmaps for success.",
    thumbnail: "/strategic-planning.jpg",
    duration: "5:20",
    category: "Services"
  },
  {
    id: 3,
    title: "Advisor Development Programme",
    description: "Discover how our mentorship and training programmes elevate advisor capabilities.",
    thumbnail: "/mentorship.jpg",
    duration: "4:15",
    category: "Services"
  },
  {
    id: 4,
    title: "Client Success Story: Mitchell Financial",
    description: "Hear how we helped Mitchell Financial Advisors transform their practice.",
    thumbnail: "/consulting.jpg",
    duration: "6:30",
    category: "Testimonials"
  },
  {
    id: 5,
    title: "Meet the Directors",
    description: "Get to know Graeme, Paolo, and Rob - the team behind PVT Partners.",
    thumbnail: "/about-office.jpg",
    duration: "4:50",
    category: "About Us"
  },
  {
    id: 6,
    title: "Business Consulting in Action",
    description: "See how we embed with teams to drive real, measurable change.",
    thumbnail: "/consulting.jpg",
    duration: "5:10",
    category: "Services"
  }
];

export default function Video() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Video Resources</h1>
            <p className="text-gray-600 text-lg">
              Explore our video content to learn more about PVT Partners and how we can help your business
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/hero-team.jpg" 
                alt="Featured Video" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button className="w-20 h-20 bg-gold rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors group">
                  <Play className="w-10 h-10 text-slate-blue ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-gold text-sm font-medium">Featured</span>
                <h2 className="font-serif text-3xl text-white mt-1">Welcome to PVT Partners</h2>
                <p className="text-white/80 mt-2">An introduction to who we are and how we help businesses succeed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-serif text-3xl text-slate-blue mb-8 text-center">All Videos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-slate-blue ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-gold text-slate-blue text-xs font-medium px-2 py-1 rounded">
                    {video.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-slate-blue mb-2 group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <VideoIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="font-serif text-4xl text-white mb-4">Want to See More?</h2>
            <p className="text-white/90 text-lg mb-8">
              Get in touch to arrange a personal consultation and learn how we can help your business.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-slate-blue hover:bg-white/90 font-semibold px-10 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
