import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammednabeelk570@gmail.com',
      link: 'mailto:muhammednabeelk570@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8590535628',
      link: 'tel:+918590535628'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muhammednabeel',
      link: 'https://www.linkedin.com/in/muhammed-nabeel-k-584561289'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/muhammednabeel',
      link: 'https://github.com/NabeelKalangadan-257'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kerala, India',
      link: null
    }
  ];

  return (
    <section className="py-20 bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and new opportunities. Let's discuss how I can help bring your project to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                  {info.link ? (
                    <a href={info.link}
                       target={info.link.startsWith('http') ? '_blank' : undefined}
                       rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                       className="text-white hover:text-indigo-400 transition-colors break-all">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/50">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
