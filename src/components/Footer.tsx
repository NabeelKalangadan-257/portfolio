import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start mb-2">
              © {new Date().getFullYear()} Muhammed Nabeel. All rights reserved.
            </p>
            <p className="text-sm">
              <a href="mailto:muhammednabeelk570@gmail.com" className="hover:text-indigo-400 transition-colors">
                muhammednabeelk570@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/NabeelKalangadan-257" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammed-nabeel-k-584561289" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:muhammednabeelk570@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-gray-400 flex items-center gap-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
