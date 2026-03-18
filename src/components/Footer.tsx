import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © {new Date().getFullYear()} Muhammed Nabeel. All rights reserved.
            </p>
          </div>

          <div className="text-gray-400 flex items-center gap-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
