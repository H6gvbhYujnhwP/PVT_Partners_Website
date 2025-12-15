import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-slate-blue mb-6">Our Journey</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PVT Partners was founded by three experienced professionals who share a passion for helping businesses succeed. With over 20 years of combined experience working with entrepreneurs, financial advisors, and growing businesses, we understand the challenges you face.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We've walked the path ourselves – we know that starting and growing a business isn't easy. That's why we don't just offer advice from the sidelines. We roll up our sleeves and work alongside you, becoming a true extension of your team.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is simple: we listen, we understand, and we act. Through our discovery sessions, we get to know your business inside and out. Then we create tailored strategic plans that aren't just documents gathering dust – they're living roadmaps that we help you implement.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/about-office.jpg" 
                alt="PVT Partners Office" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
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
            <Link href="/contact">
              <Button className="bg-white text-slate-blue hover:bg-white/90 font-semibold px-10 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
