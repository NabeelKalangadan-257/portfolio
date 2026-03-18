import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Muhammed <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Nabeel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">Java & Android Developer</h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed">
            Building scalable POS systems, ERP-integrated apps, and offline-first mobile solutions
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-indigo-500/50">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border border-gray-700">
              <Download size={18} /> Download Resume
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:muhammednabeel@example.com"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-gray-300 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 space-y-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-purple-400">public class <span className="text-yellow-400">Developer</span> {'{'}</div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-blue-400">String</span> name = <span className="text-green-400">"Muhammed Nabeel"</span>;
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-blue-400">String</span> role = <span className="text-green-400">"Android Developer"</span>;
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-blue-400">int</span> experience = <span className="text-green-400">3</span>;
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
