import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Restaurant POS & KOT System',
      description: 'Complete point-of-sale solution with Kitchen Order Ticket system, inventory management, and real-time order tracking. Built for high-volume restaurants.',
      tags: ['Java', 'Android', 'SQLite', 'Firebase'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Van Sales App with ERP Integration',
      description: 'Mobile sales application integrated with ERP systems for field sales teams. Features offline mode, route optimization, and real-time sync.',
      tags: ['Android', 'REST API', 'MySQL', 'Node.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Billing Desktop + Android Sync System',
      description: 'Unified billing platform with desktop and mobile apps. Real-time synchronization, invoice generation, and payment tracking across devices.',
      tags: ['Java', 'Android', 'SQLite', 'MVC'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Management App',
      description: 'Comprehensive business management solution featuring inventory control, employee management, sales tracking, and analytics dashboard.',
      tags: ['Android', 'Firebase', 'REST API', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index}
                 className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">{'{ }'}</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}
                          className="px-3 py-1 bg-gray-900 text-indigo-400 text-sm rounded-full border border-indigo-500/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm">View Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
