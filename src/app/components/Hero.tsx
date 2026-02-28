import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a");
    link.href = "/cv/Ebrahim_Elbitawy_CV.pdf";
    link.download = "Ebrahim_Elbitawy_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold mx-auto">
                EE
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Ebrahim Elbitawy
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-purple-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Flutter Developer | Native Android | React JS
            </motion.p>

            <motion.p
              className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building high-quality, scalable mobile and web applications with
              over 4 years of experience. Passionate about creating seamless
              user experiences.
            </motion.p>

            <motion.div
              className="flex gap-6 justify-center mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-purple-900 rounded-full hover:bg-purple-100 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors"
              >
                View Projects
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://github.com/elbitawy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/ebrahim-elbitawy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:elbitawy@gmail.com"
                className="text-white hover:text-purple-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-white text-sm opacity-75">Scroll Down</span>
        <ArrowDown className="w-6 h-6 text-white opacity-75" />
      </motion.div>
    </section>
  );
}
