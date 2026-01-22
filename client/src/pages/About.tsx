
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aboutOfficeImage from "@/assets/images/about-office.jpg";
import { Handshake, Heart, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">About PVT Partners</h1>
            <p className="text-gold italic font-serif text-xl">Strategy Into Action</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl text-slate-blue mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Payne, Vaughan & Theobald Partners is a Consultancy and Development business, exclusively for the Financial Planning & Wealth Management sector, boasting nearly 100 years of collective knowledge, skills and experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Business, founded by Paolo Payne, Graeme Vaughan & Rob Theobald in 2025 was borne out of a simple premise that traditional business consultancy seeks to inform rather than inform and implement.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Having worked together in Executive and Senior Roles for 2 decades in one of the UK's largest Wealth Management Firms an opportunity to step away from the corporate world presented itself. As a result, we decided to combine forces to deliver a complimentary and focused proposition to the businesses that choose to work with us.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are passionate about people, value and growth, and are now focused on providing independent support to both new and established financial advice firms.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/Picture2.jpg" 
                alt="PVT Partners Founders" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="/images/Cutting_Cake.png" 
                alt="PVT Partners Celebration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-3xl text-slate-blue mb-6">Core Focus Areas</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Whilst not an exhaustive list, our core focus areas are:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Business Planning & Implementation of Core Strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">People & Team Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Longer Term Succession Planning & Exit Planning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Leadership Coaching & Mentoring</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-gray-600 text-lg mb-4">
                  If you would like to find out more you can contact us here.
                </p>
                <a href="/contact.html">
                  <Button className="bg-slate-blue hover:bg-slate-blue/90 text-white font-semibold px-8 py-4">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-slate-blue">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">Our Approach</h2>
            <p className="text-gold italic font-serif text-xl">Partnership, authenticity, and action</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Partnership</h3>
              <p className="text-white/80">
                We become part of your team, invested in your success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Authenticity</h3>
              <p className="text-white/80">
                Real relationships, genuine advice, no corporate jargon
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Action</h3>
              <p className="text-white/80">
                Strategy is only valuable when it's implemented
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Excellence</h3>
              <p className="text-white/80">
                We bring our best to every engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can help your business achieve its full potential.
            </p>
            <a href="/contact.html">
              <Button className="bg-white text-slate-blue hover:bg-white/90 font-semibold px-10 py-6 text-lg">
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
