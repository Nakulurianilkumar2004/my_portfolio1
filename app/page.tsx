"use client";

import { motion, Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

// Data for sections
const projects = [
  {
    title: "Kisan Service Portal",
    description: "Developed an AI-powered Agri Assistant for real-time crop disease detection, soil testing, and multilingual query support. Integrated image processing and chatbots to improve agricultural decision-making.",
    link: "https://github.com/Nakulurianilkumar2004/kisan_services_portal", 
    image: "/kisan.jpg",
  },
  {
    title: "Health Assistant",
    description: "Designed an AI-based Virtual Health Assistant for rural communities to analyze symptoms, offer basic diagnoses, and recommend home remedies. Features include multilingual support and emergency SOS.",
    link: "https://github.com/Nakulurianilkumar2004/Health_based_chatbot_and_diabeties_prediction",
    image: "/health.jpeg",
  },
];

const skills = [
  "React.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Python", "ML", "DeepLearning", "TensorFlow", "Project Management", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Flask", "Pandas", "Numpy"
];

// --- Animation Variants for Sections ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const experience = [
  {
    role: "Software Developer",
    company: "Tooclarity Private Limited",
    dates: "Sept 2025 - Present",
    description: [
      "Developed and maintained full-stack applications using the MERN stack.",
      "Designed and managed databases with MongoDB and PostgreSQL.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions."
    ]
  },
  {
    role: "AI & ML Intern",
    company: "Pantech Solutions",
    dates: "Feb 2024 - May 2024",
    description: [
      "Gained hands-on exposure to ML, DL, and Computer Vision concepts.",
      "Trained and evaluated models using Python, Numpy, Pandas, and Tensorflow.",
      "Enhanced problem-solving skills through projects and mentorship."
    ]
  },
  {
    role: "GAP Dev 2.O Project Mentor",
    company: "KGReddy College of Engineering and Technology",
    dates: "Jan 2025 - May 2025",
    description: [
      "Guided students through practical projects, helping them design and implement AI-driven products.",
      "Provided mentorship and feedback to students, ensuring alignment with industry standards."
    ]
  },
  {
    role: "Summer Intern - Strategy, Marketing, and Community Building",
    company: "Student Tribe",
    dates: "May 2025 - Present",
    description: [
      "Led engagement strategies and promoted the St School Summer Program.",
      "Coordinated product cycles, marketing, and growth activities.",
      "Gained experience in leadership, community building, and team management."
    ]
  },
];

export default function HomePage() {
  return (
    <motion.main initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="bg-black">

      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center bg-black transition-colors duration-500"
        variants={sectionVariants}
      >
        <Avatar className="h-40 w-40 mb-6 border-8 border-gray-800 shadow-xl ring-2 ring-primary">
          <AvatarImage src="/portfol1.png" alt="Nakuluri Anilkumar" className="object-cover" />
          <AvatarFallback className="bg-primary/20 text-primary">NA</AvatarFallback>
        </Avatar>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white">
          Nakuluri Anilkumar
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-light text-gray-400 max-w-3xl leading-snug">
          A passionate AI Engineer with a solid foundation in machine learning, deep learning, and data analysis. Committed to crafting impactful, real-world solutions.
        </p>
        <div className="mt-10 flex gap-6 justify-center">
          <Button variant="outline" size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-transparent hover:bg-gray-800 text-white" asChild><a href="https://github.com/Nakulurianilkumar2004" target="_blank"><Github className="mr-2 h-5 w-5" />GitHub</a></Button>
          <Button variant="outline" size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-transparent hover:bg-gray-800 text-white" asChild><a href="https://linkedin.com/in/nakuluri-anilkumar-a46139292" target="_blank"><Linkedin className="mr-2 h-5 w-5" />LinkedIn</a></Button>
          <Button variant="outline" size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-transparent hover:bg-gray-800 text-white" asChild><a href="mailto:nakulurianilkumar66@gmail.com"><Mail className="mr-2 h-5 w-5" />Contact Me</a></Button>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="py-24 px-4 bg-black transition-colors duration-500"
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
              <Image src="/portfol1.png" alt="About Me" layout="fill" objectFit="cover" />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              I am a driven and detail-oriented aspiring AI Engineer with a solid foundation in machine learning, deep learning, and data analysis. I am proficient in Python and AI frameworks, with a strong commitment to continuous learning and applying AI to impactful real-world solutions. I have hands-on experience as an AI Intern at Pantech Solutions and have guided students as a project mentor at KGReddy College. I was also honored with the "KGR Change Maker Award" for outstanding innovation and leadership.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-24 px-4 bg-gray-950 transition-colors duration-500"
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white">Experience</h2>
          <div className="grid gap-12">
            {experience.map((job, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 text-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">{job.role}</CardTitle>
                  <CardDescription className="text-gray-400 mt-1">{job.company} • {job.dates}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Bento Grid */}
      <motion.section 
        id="projects" 
        className="py-24 px-4 bg-black transition-colors duration-500"
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-gray-900 text-white border-gray-800 transform transition-transform duration-300 hover:scale-[1.01]">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl font-semibold flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-6 w-6 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><a href={project.link} target="_blank">View Project</a></Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-24 bg-black px-4 transition-colors duration-500"
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="inline-block rounded-full bg-blue-900 text-blue-200 px-6 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-24 px-4 bg-black transition-colors duration-500"
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
            I'm currently seeking new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out. I'm always open to discussing new ideas.
          </p>
          <Button size="lg" className="px-8 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="mailto:nakulurianilkumar66@gmail.com">
              <Mail className="mr-3 h-6 w-6" />Contact me
            </a>
          </Button>
        </div>
      </motion.section>
    </motion.main>
  );
} 