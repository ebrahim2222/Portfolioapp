import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "E-asyLearn",
    description:
      "Educational learning app designed to make learning easy and accessible. Features comprehensive learning modules, progress tracking, and an intuitive user interface built with Flutter and BLoC architecture.",
    image: "/images/pic02.jpg",
    tags: ["Flutter", "Dart", "BLoC", "RESTful APIs"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.sdex.easy_learn&hl=en",
    appStore: "https://apps.apple.com/eg/app/e-asylearn/id1594343823",
  },
  {
    title: "Vision 2030",
    description:
      "Working on Saudi Vision 2030 projects, developing modern web applications using Next.js and React.js. Implementing responsive, accessible, and optimized user interfaces aligned with Saudi Vision 2030 goals.",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIyMTU0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "React.js", "TypeScript", "Responsive Design"],
    website: "https://www.vision2030.gov.sa/en",
    playStore: null,
    appStore: null,
  },
  {
    title: "8Orders Delivery",
    description:
      "Food delivery and vegetable & fruits shopping app built with Flutter. Features include real-time order tracking, menu browsing, and seamless checkout experience.",
    image: "/images/pic01.png",
    tags: ["Flutter", "Firebase", "Real-time Updates", "iOS & Android"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.HadafSolutions.Otlobly&hl=en",
    appStore: "https://apps.apple.com/eg/app/8orders-food-grocery/id1263923913",
  },
  {
    title: "KHRS HR",
    description:
      "KHRS1981 is a cutting-edge application designed to streamline and optimize cleaning operations for companies and organizations. Whether you manage office spaces, commercial buildings, or residential complexes, this app helps you ensure spotless rooms and floors with greater efficiency and organization.",
    image: "/images/hr.webp",
    tags: [
      "Flutter",
      "Business Solutions",
      "Operations Management",
      "Efficiency",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.sddexx.khrs&hl=en",
    appStore: "https://apps.apple.com/eg/app/khrs1981/id6743096309",
  },
  {
    title: "Ragwa",
    description:
      "Modern mobile application for Ragwa services. Features comprehensive service offerings, intuitive user interface, and seamless customer experience for all your needs.",
    image: "/images/ragwa.webp",
    tags: ["Flutter", "Services", "Mobile App", "Customer Experience"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.ra8wa.ra8wa&hl=en",
    appStore: null,
  },
  {
    title: "Money Master AccFlex",
    description:
      "Accflex wallet application for financial management. Fast and efficient way to view all transactions with comprehensive ERP system integration.",
    image: "/images/money.webp",
    tags: ["Flutter", "ERP Integration", "Financial", "Secure"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.accflex.money_master&hl=en",
    appStore: "https://apps.apple.com/eg/app/money-master-accflex/id6476456997",
  },
  {
    title: "iRecycle",
    description:
      "Streamline waste management with iRecycle. Comprehensive tool for managing waste efficiently and sustainably, offering seamless solutions for businesses and individuals to handle recycling needs.",
    image: "/images/iRe.webp",
    tags: ["Flutter", "Environmental", "Waste Management", "Sustainability"],
    playStore:
      "https://play.google.com/store/apps/details?id=net.hadafsolutions.irecycle&hl=en",
    appStore: "https://apps.apple.com/eg/app/irecycle/id1480568125",
  },
  {
    title: "iRecycle Business (Mostadam)",
    description:
      "Business-focused recycling management solution for companies and organizations. Streamline waste operations, track recycling metrics, and manage sustainable waste disposal efficiently.",
    image: "/images/iRe.webp",
    tags: ["Flutter", "B2B Solutions", "Waste Management", "Sustainability"],
    playStore:
      "https://play.google.com/store/apps/details?id=hadafsolutions.irecycle.B2B_customer",
    appStore: "https://apps.apple.com/eg/app/irecycle-business/id6504727850",
  },
  {
    title: "Souq Mazad",
    description:
      "Online auction and marketplace platform for buying and selling goods. Features real-time bidding, secure transactions, and a user-friendly interface for seamless auction experiences.",
    image: "/images/pic05.webp",
    tags: ["Flutter", "E-commerce", "Auction Platform", "Real-time Bidding"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.engazTech.mazad&hl=en",
    appStore: "https://apps.apple.com/eg/app/souq-mazad/id1644750171",
  },
  {
    title: "Coctail",
    description:
      "Cocktail recipe and mixing guide app. Discover amazing drink recipes, learn mixing techniques, and become a master bartender with comprehensive cocktail collection.",
    image: "/images/pic03.png",
    tags: ["Flutter", "Lifestyle", "Recipes", "Educational"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.sdex.coctail&hl=en",
    appStore: null,
  },
  {
    title: "Abu Sliem",
    description:
      "Mobile application for Abu Sliem services and products. Features comprehensive service offerings, user-friendly interface, and seamless customer experience.",
    image: "/images/pic07.png",
    tags: ["Flutter", "Services", "Business", "Customer Experience"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.sdex.abo_sliem",
    appStore: null,
  },
  {
    title: "Native Talk Academy",
    description:
      "Educational academy platform for language learning and communication skills. Interactive courses, expert instructors, and comprehensive learning materials for effective language acquisition.",
    image: "/images/pic09.webp",
    tags: ["Flutter", "Education", "Language Learning", "Communication"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.appnormal.native_talk_academy",
    appStore: null,
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
            A selection of mobile and web applications I've built for various
            industries
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
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Website</span>
                    </a>
                  )}
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
