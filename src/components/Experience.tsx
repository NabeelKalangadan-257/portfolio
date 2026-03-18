import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Wizzo Technologies',
      role: 'Java & Android Developer',
      period: '2023 - Present',
      description: 'Leading development of enterprise mobile applications and POS systems. Specializing in ERP integrations, offline-first architecture, and scalable Android solutions.',
      achievements: [
        'Developed multiple POS systems serving 50+ restaurants',
        'Built van sales application with real-time ERP sync',
        'Implemented offline-first architecture reducing sync errors by 80%',
        'Led team of 3 developers on business management platform'
      ]
    },
    {
      company: 'Previous Experience',
      role: 'Android Developer',
      period: '2021 - 2023',
      description: 'Focused on mobile application development, API integrations, and database management for various business applications.',
      achievements: [
        'Delivered 10+ Android applications for diverse clients',
        'Optimized app performance improving load times by 60%',
        'Integrated REST APIs and third-party services',
        'Maintained legacy codebases and implemented new features'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <Briefcase size={24} className="text-white" />
              </div>

              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-transparent"></div>
              )}

              <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-indigo-400 mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h5 className="text-white font-semibold">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-gray-400">
                        <span className="text-indigo-500 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
