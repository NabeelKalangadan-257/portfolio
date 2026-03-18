import { Code, Database, Server, GitBranch, Smartphone, Cloud } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: Code,
      name: 'Java',
      level: 95
    },
    {
      icon: Smartphone,
      name: 'Android SDK',
      level: 90
    },
    {
      icon: Database,
      name: 'SQLite',
      level: 88
    },
    {
      icon: Cloud,
      name: 'Firebase',
      level: 85
    },
    {
      icon: Server,
      name: 'Node.js',
      level: 80
    },
    {
      icon: Server,
      name: 'REST APIs',
      level: 92
    },
    {
      icon: Database,
      name: 'MySQL',
      level: 87
    },
    {
      icon: GitBranch,
      name: 'Git',
      level: 90
    },
    {
      icon: Code,
      name: 'MVC Architecture',
      level: 93
    }
  ];

  return (
    <section className="py-20 bg-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index}
                 className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              </div>
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-2">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
