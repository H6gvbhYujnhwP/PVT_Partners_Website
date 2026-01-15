import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeamImage from "@/assets/images/hero-team.jpg";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroTeamImage})` }}
      >
        <div className="absolute inset-0 bg-slate-blue/90"></div>
      </div>

      <div className="container relative z-10 flex-grow flex flex-col items-center justify-center text-center py-20">
        {/* Logo Area */}
        <div className="mb-12">
          <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="font-serif text-3xl text-white tracking-widest">PVT</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 tracking-wide">
            PARTNERS LTD.
          </h1>
          <p className="text-gold italic font-serif text-xl md:text-2xl">
            Strategy Into Action
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Website Coming Soon
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12">
            We are currently building a new digital experience to better serve our clients. 
            PVT Partners specialises in advisor development, strategic planning, and business consulting.
          </p>

          {/* Contact Action */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-white font-serif text-xl mb-4">Get in Touch</h3>
            <p className="text-white/70 mb-6">
              While our site is under construction, we are fully operational and ready to help.
            </p>
            <a href="mailto:info@pvtpartners.co.uk">
              <Button className="bg-gold hover:bg-gold/90 text-slate-blue font-semibold px-8 py-6 text-lg w-full md:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-6 text-center border-t border-white/10">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} PVT Partners Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
