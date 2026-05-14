
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const aboutOfficeImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/yvMDtCszEAUDpsrf.jpg";
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
                PVT Partners is a Consultancy and Development business, exclusively supporting the Financial Planning and Wealth Management sector. Together, we bring nearly 100 years of collective knowledge, skills, and experience to the firms we work with.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The business was founded in 2025 by Paolo Payne, Graeme Vaughan, and Rob Theobald, built on a simple belief: that traditional consultancy often stops at advice, when real progress comes from both insight and implementation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Having worked together in Executive and Senior roles for two decades within one of the UK’s largest Wealth Management firms, an opportunity arose to step away from the corporate world and create something more personal, more practical, and more aligned with our shared values. That vision became PVT Partners — a collaborative, focused proposition for forward‑thinking financial planning businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Graeme played an important role in shaping our early journey. His warmth, integrity, and commitment to doing the right thing remain part of the foundations of PVT. Graeme sadly passed away in 2026, and he is deeply missed by all who knew him.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue the work we began together. We are passionate about people, value, and growth, and we remain dedicated to providing independent, hands‑on support to both new and established financial advice firms.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/ALZKaMX8FhGZweLFFkyP2M/about_option_1-d2vNTtwxnVhHmTu8hWiTNi.webp" 
                alt="PVT Partners Team Collaboration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">
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
