import Header from "@/components/Header";
import Footer from "@/components/Footer";
import graemeImage from "@/assets/images/Graeme.png";

export default function Tribute() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl text-slate-blue mb-4">Tribute to Graeme Vaughan</h1>
            <p className="text-gold italic font-serif text-xl">In Memory of Graeme Vaughan</p>
          </div>
        </div>
      </section>

      {/* Tribute Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/images/Graeme.png" 
                    alt="Graeme Vaughan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6 text-xl leading-relaxed">
                    Graeme was a respected colleague, director, and friend whose influence helped shape PVT Partners in its formative months. His warmth, integrity, and commitment to doing the right thing left a lasting mark on the people he worked with and the business he helped build.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Graeme passed away in 2026, and he is deeply missed by all who knew him. His contribution remains an important part of our story, and his values continue to guide the way we support advisers and their clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
