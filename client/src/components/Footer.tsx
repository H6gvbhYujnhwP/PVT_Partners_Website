

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-white py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-4">
            <span className="text-gold font-serif text-xl font-semibold">PVT</span>
          </div>
          
          <h3 className="font-serif text-2xl mb-2">PVT Partners Ltd</h3>
          <p className="text-gold italic font-serif text-lg mb-8">Strategy Into Action</p>
          
          {/* Contact */}
          <p className="text-white/80 mb-6">
            <a href="mailto:info@pvtpartners.co.uk" className="hover:text-gold transition-colors">
              info@pvtpartners.co.uk
            </a>
          </p>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="/index.html" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="/about.html" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="/services.html" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="/team.html" className="text-white/80 hover:text-white transition-colors">Team</a>
            <a href="/contact.html" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <a href="/case-studies.html" className="text-white/80 hover:text-white transition-colors">Case Studies</a>

          </nav>
          
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © 2026 PVT Partners Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
