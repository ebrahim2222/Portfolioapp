import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Namaa',
    description:
      'Application for the Ministry of Environment, Water and Agriculture. Comprehensive platform with services for organic products, agricultural licenses, well drilling inquiries, and appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcyMjQwNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'Dart', 'RESTful APIs', 'State Management'],
    playStore: 'https://play.google.com',
    appStore: 'https://apps.apple.com',
  },
  {
    title: 'Vision 2030',
    description:
      'Working on Saudi Vision 2030 projects, developing modern web applications using Next.js and React.js. Implementing responsive, accessible, and optimized user interfaces aligned with Saudi Vision 2030 goals.',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIyMTU0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Responsive Design'],
    playStore: 'https://play.google.com',
    appStore: null,
  },
  {
    title: '8Orders Delivery',
    description:
      'Food delivery and vegetable & fruits shopping app built with Flutter. Features include real-time order tracking, menu browsing, and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzcyMTE5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'Firebase', 'Real-time Updates', 'iOS & Android'],
    playStore: 'https://play.google.com',
    appStore: 'https://apps.apple.com',
  },
  {
    title: 'iRecycle Business',
    description:
      'Streamline waste management with iRecycle Business. Comprehensive tool for managing waste efficiently and sustainably, offering seamless solutions for businesses to handle recycling needs.',
    image: 'https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMjA3MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'Business Solutions', 'Scheduling', 'Reports'],
    playStore: 'https://play.google.com',
    appStore: 'https://apps.apple.com',
  },
  {
    title: 'Jenak Food Delivery',
    description:
      'Third-party delivery services platform for restaurants and retailers. Features menu showcase, real-time tracking, and seamless ordering experience revolutionizing the food delivery industry.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMTIxMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'Multi-platform', 'Real-time', 'Google Maps'],
    playStore: 'https://play.google.com',
    appStore: null,
  },
  {
    title: 'Money Master ERP',
    description:
      'Accflex wallet application for financial management. Fast and efficient way to view all transactions with comprehensive ERP system integration.',
    image: 'https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MjEyNzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'ERP Integration', 'Financial', 'Secure'],
    playStore: 'https://play.google.com',
    appStore: 'https://apps.apple.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of mobile and web applications I've built for various industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Google Play</span>
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>App Store</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}