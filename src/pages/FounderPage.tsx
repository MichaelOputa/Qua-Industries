import { Quote } from 'lucide-react';

export default function FounderPage() {
  return (
    <section
      id="founder"
      className="py-24 relative overflow-hidden min-h-screen pt-28"
      style={{
        backgroundImage: 'url(/Timfon.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55 z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Note from the Founder</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/85 rounded-2xl shadow-2xl p-10 md:p-16 relative backdrop-blur-sm">
            <Quote className="h-16 w-16 text-blue-200 absolute top-8 left-8 opacity-50" />

            <div className="relative z-10 space-y-6 text-lg text-white font-medium leading-relaxed">
              <p>
                Hello, I&apos;m <strong className="text-white">Timfon Aqua</strong>. Growing up in Nigeria, I&apos;ve seen firsthand how small challenges can make everyday life harder for ordinary people. I&apos;ve always believed that with vision, determination, and creativity, we can build solutions that truly make a difference.
              </p>

              <p>
                That belief led me to start Qua Industries—a company created to design projects and businesses that solve real problems, create opportunities, and inspire others to dream bigger. Every initiative we launch is guided by purpose, integrity, and the desire to make a lasting impact.
              </p>

              <p>
                Thank you for visiting our site and for believing in this journey. Together, we can turn vision into action and make meaningful change possible.
              </p>

              <p className="text-blue-300 font-semibold italic text-xl pt-4">Designed for impact.</p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">Timfon Aqua</p>
                  <p className="text-slate-300">Founder &amp; CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
