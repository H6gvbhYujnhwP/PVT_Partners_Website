
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroTeamImage from "@/assets/images/hero-team.jpg";

const directors = [
  {
    name: "Paolo Payne",
    title: "Director",
    bio: (
      <>
        <p className="mb-4">I began my career with Norwich Union (now Aviva) back in 1992 as a 22-year-old adviser in what was a very different industry to today. The opportunity to build long term relationships helping clients was a natural fit for me and I loved it.</p>
        <p className="mb-4">After a few years, I felt I needed a different challenge and took on my first Sales Management Role in the Midlands. The next few years were a steep learning curve as the industry and Norwich Union grappled with Internal and Regulatory change. What was clear was that the more diverse challenge of Leading teams, along with the joy of helping others make the most of their talent was an environment in which I thrived and found meaning.</p>
        <p className="mb-4">In late 2005 I was invited to join St James's Place, initially in a Senior Sales Manager role, supporting New and Experienced Financial Planning professionals. This was my first exposure to Business Owners, rather than employed advisers and I quickly learnt the difference between influence and authority.</p>
        <p className="mb-4">As my experience grew, opportunities to develop my career started to present themselves. Learning from and working alongside some of the most influential leaders in the sector, I held Senior Leadership roles across numerous Locations, predominantly in the East, Southeast and London. My final role was as Business Partnering Director, where I was responsible for all aspects of Business Development, Support and Regulatory oversight for over 500 advisers, working with nearly 70,000 clients, managing assets of more than £17 Billion.</p>
        <p>The purpose I found in the very early days of my management career in helping others succeed has never left me and in October 2025, along with 2 long standing colleagues and friends I founded PVT Partners with the sole aim of providing consultancy and development support to Financial Services Professionals.</p>
      </>
    ),
    image: "/images/PaoloPayne.jpg"
  },
  {
    name: "Graeme Vaughan",
    title: "Director",
    bio: (
      <>
        <p className="mb-4">With over 35 years in Financial Services, my career has included 29 years in a range of bancassurance roles leading to 8 years in both development and leadership roles at St James's Place Wealth Management.</p>
        <p className="mb-4">During my time, I've really loved the coaching and leadership side of my roles, and truly believe that providing individuals with the environment, knowledge and skills to fulfil their potential is absolutely critical. I am delighted to have recently joined forces with 2 longstanding friends and colleagues to launch PVT Partners, where will be doing precisely that.</p>
        <p>Away from the work I am an 'Essex Boy' born and bred, happily married with 2 grown up daughters and love spending time socialising and having fun with family and friends. I am also a lifelong West Ham sufferer (and season ticket holder) and enjoy watching all kinds of sports. My own sporting ability (and agility!) has waned over the years, but I still try to keep reasonably fit and swing the odd golf club as much as I can.</p>
      </>
    ),
    image: "/images/GraemeVaughan.jpg"
  },
  {
    name: "Rob Theobald",
    title: "Director",
    bio: (
      <>
        <p className="mb-4">With over 30 years of experience in financial services, I have built a career dedicated to driving growth, transformation, and excellence. Most recently serving as a Regional Director within a FTSE 100 company, I have led at the highest levels of corporate governance and strategy.</p>
        <p className="mb-4">My passion lies in leading, coaching, and developing businesses to unlock their true potential and strengthen their capabilities. I specialise in guiding organisations through change, empowering teams, and fostering sustainable success.</p>
        <p className="mb-4">Throughout my career, I have consistently delivered results by combining strategic vision with hands-on leadership, ensuring businesses not only meet but exceed their goals.</p>
        <p>When I'm not working, you'll usually find me cheering on Billericay Town FC most weekends—because someone must keep the ref honest! If I'm not at the pitch, I'm probably losing golf balls faster than I can swing a club. At home, I'm happily married and kept on my toes by two young daughters who make life wonderfully chaotic (and remind me daily who's really in charge).</p>
      </>
    ),
    image: "/images/RobTheobald.jpg"
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
          <div className="space-y-20">
            {directors.map((director, index) => (
              <div key={director.name} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="font-serif text-3xl text-slate-blue mb-2">{director.name}</h3>
                  <p className="text-gold font-medium text-xl mb-6">{director.title}</p>
                  <div className="text-gray-600 leading-relaxed text-lg">
                    {director.bio}
                  </div>
                </div>
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
