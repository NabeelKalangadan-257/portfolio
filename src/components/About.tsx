import { Award, Briefcase, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: '3+ Years Experience',
      description: 'Professional development experience'
    },
    {
      icon: Code2,
      title: 'Android & Java Specialist',
      description: 'Expert in mobile & backend development'
    },
    {
      icon: Briefcase,
      title: 'ERP Integration Expert',
      description: 'Seamless business system integration'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            I'm a passionate Java and Android developer with expertise in building robust, scalable applications.
            Specializing in POS systems, ERP integrations, and offline-first mobile solutions, I bring technical
            excellence and business understanding to every project. My focus is on creating efficient, user-friendly
            applications that solve real-world business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index}
                 className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
