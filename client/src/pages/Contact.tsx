import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg">
              Let's discuss how we can help your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-slate-blue mb-6">Start a Conversation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're looking to develop your advisory team, create a strategic plan, or transform your business operations, we'd love to hear from you. Get in touch to arrange an initial conversation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-blue mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@pvtpartners.co.uk" 
                      className="text-gold hover:text-gold/80 transition-colors"
                    >
                      info@pvtpartners.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-blue mb-1">What to Expect</h3>
                    <p className="text-gray-600">
                      We typically respond within 24 hours and will arrange a convenient time for an initial discovery call.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-slate-blue mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-blue">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-blue">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-slate-blue">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-blue">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[150px]"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold/90 text-slate-blue font-semibold py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mauve">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gold italic font-serif text-xl mb-6">Strategy Into Action</p>
            <p className="text-white/90 text-lg">
              Take the first step towards achieving your business goals. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
