import { motion } from 'motion/react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and SOLID principles',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, responsive interfaces with Material Design and modern UI/UX',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing apps for speed, smooth animations, and excellent user experiences',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver production-ready features',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flutter Developer with over 4 years of experience building high-quality mobile and web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
            <p className="text-slate-600 mb-4">
              I am a Flutter Developer with over 4 years of experience in building high-quality and scalable mobile
              applications. My passion for creating seamless user experiences has driven me to work on a wide
              range of projects, from startups to established enterprises.
            </p>
            <p className="text-slate-600 mb-4">
              I have a strong foundation in <strong>Dart</strong>, along with a solid understanding of <strong>state management</strong>, 
              <strong> RESTful APIs</strong>, and <strong>responsive design</strong>.
            </p>
            <p className="text-slate-600 mb-4">
              Currently, I'm expanding my expertise by working as a <strong>Frontend Developer</strong> using <strong>React.js</strong> and 
              <strong> Next.js</strong>, where I focus on building modern, responsive, and high-performance web applications.
            </p>
            <p className="text-slate-600">
              I've worked on notable projects including Namaa for the Saudi Ministry of Agriculture and Vision 2030 initiatives,
              delivering production-ready features with seamless UI/UX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Mobile Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'Native Android', 'Kotlin', 'Java', 'iOS & Android'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Firebase', 'RESTful APIs', 'State Management', 'Git', 'CI/CD'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Design & UI/UX</h4>
                <div className="flex flex-wrap gap-2">
                  {['Material Design', 'Responsive Design', 'UI/UX', 'Figma'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}