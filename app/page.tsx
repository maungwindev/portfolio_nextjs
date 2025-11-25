"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { SiFlutter, SiDart, SiGit, SiGithub, SiBitbucket, SiKotlin, SiFirebase, SiSupabase, SiAmazon, SiNodedotjs, SiExpress, SiMongodb, SiSqlite, SiHive, SiMysql, SiPostgresql } from "react-icons/si";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Download,
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Zap,
  MessageCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Roootel Mobile App",
    category: "Flutter",
    description: "Full-featured shopping app with payment integration",
    image: "/roootel.png?height=200&width=200",
    tech: ["Flutter", "Bloc", "Dinger", "Firebase","Flutter Secure Storage"],
    gradient: "from-purple-400 to-pink-400",
  },
  {
    id: 2,
    title: "Shwe Nyar Myay App",
    category: "Flutter",
    description: "Enjoy a smooth and secure shopping experience with our easy-to-use app, designed for your daily needs. Whether you're stocking up your kitchen or placing a quick order, we make grocery shopping simple, fast, and hassle-free.",
    image: "/shwenyarmyay.png?height=300&width=400",
    tech: ["Flutter", "Dart", "TensorFlow", "SQLite"],
    gradient: "from-green-400 to-blue-400",
  },
  {
    id: 3,
    title: "Yin Thway Nae Atu App",
    category: "Flutter",
    description: "Real-time messaging and content sharing",
    image: "/maymay.png?height=200&width=200",
    tech: ["Flutter", "Socket.io", "MongoDB", "AWS"],
    gradient: "from-orange-400 to-red-400",
  },
  {
    id: 4,
    title: "SAFE Delivery App",
    category: "Flutter",
    description: "Secure financial transactions with biometric auth",
    image: "/safe_delivery.png?height=300&width=400",
    tech: ["Flutter", "Core Data", "TouchID", "Keychain"],
    gradient: "from-blue-400 to-purple-400",
  },
  {
    id: 5,
    title: "Golden Thailand App",
    category: "Flutter",
    description: "Real-time tracking and order management",
    image: "/golden_thailand.png?height=300&width=400",
    tech: ["Flutter", "Google Maps", "PayPal", "Node.js"],
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    id: 6,
    title: "Reader Paradise App",
    category: "Flutter",
    description: "Hotel and flight booking with AR features",
    image: "/reader_paradise.png?height=300&width=400",
    tech: ["Flutter", "ARCore", "Firebase", "Stripe"],
    gradient: "from-teal-400 to-green-400",
  },
]

const skills = [
  { name: "Flutter", level: 90, icon: SiFlutter, color: "from-blue-600 to-indigo-600" },
  { name: "Dart", level: 90, icon: SiDart, color: "from-blue-400 to-blue-700" },
  { name: "UI/UX Design", level: 60, icon: Palette, color: "from-pink-500 to-rose-500" },
  { name: "Firebase", level: 70, icon: SiFirebase, color: "from-orange-500 to-red-500" },
  { name: "Supabase", level: 65, icon: SiSupabase, color: "from-green-700 to-green-500" },
  { name: "Node JS", level: 40, icon: SiNodedotjs, color: "from-green-900 to-green-900" },
  { name: "Express JS", level: 40, icon: SiExpress, color: "from-gray-900 to-gray-900" },
  { name: "MySQL", level: 70, icon: SiMysql, color: "from-blue-900 to-blue-900" },
  { name: "SQLite", level: 40, icon: SiSqlite, color: "from-blue-300 to-blue-500" },
  { name: "PostgreSQL", level: 50, icon: SiPostgresql, color: "from-blue-600 to-blue-300" },
  { name: "Moongo DB", level: 50, icon: SiMongodb, color: "from-blue-600 to-gray-800" },
  { name: "Kotlin/Android", level: 25, icon: SiKotlin, color: "from-green-500 to-emerald-500" },
  { name: "Git", level: 85, icon: SiGit, color: "from-orange-600 to-yellow-600" },
  { name: "Github", level: 85, icon: SiGithub, color: "from-gray-900 to-gray-900" },
  { name: "Bitbucket", level: 25, icon: SiGit, color: "from-blue-500 to-blue-600" },
  { name: "Performance Optimization", level: 92, icon: Zap, color: "from-yellow-500 to-amber-500" },
]



const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Greenwich",
    location: "London, England",
    year: "2019 - 2020",
    description: "Specialized in Mobile Computing and Human-Computer Interaction",
    logo: "/placeholder.svg?height=80&width=80",
    gradient: "from-red-500 to-orange-500",
  },
  {
    degree: "Degree in Computer Science",
    institution: "KMD College",
    location: "Massachusetts, USA",
    year: "2017 - 2019",
    description: "Focus on Software Development and Program Management",
    logo: "/placeholder.svg?height=80&width=80",
    gradient: "from-blue-500 to-purple-500",
  },
]



// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0], ["0%", "50%"])
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", contactForm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-theme animate-gradient">
      {/* Animated Background Elements */}
      <motion.div style={{ y }} className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-float animation-delay-4000"></div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed rounded-b-xl top-0 left-0 right-0 z-50 glass glass-light dark:glass-dark transition-theme backdrop-transition"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Maung Win Logo"
              width={40}   // adjust size
              height={40}
              className="rounded-lg" // optional: rounded logo
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Maung Win
            </span>
          </motion.div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 min-h-screen flex items-center overflow-hidden fade-in">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center mb-16 flex flex-col items-center justify-center">
            <motion.div variants={fadeInUp} className="relative inline-block mb-8">
              <motion.div
                animate={{ rotate: 0 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 p-1 glow"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile.png"   // no query params
                    alt="Profile"
                    width={120}
                    height={120}
                    priority   // ensures it loads immediately without lazy loading
                    className="rounded-full object-cover"
                  />
                </div>

              </motion.div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 dark:from-purple-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent text-shadow"
              >
                Mobile
              </motion.span>
              <motion.span>{' '}</motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-gradient-to-r from-teal-600 via-green-600 to-purple-600 dark:from-teal-400 dark:via-green-400 dark:to-purple-400 bg-clip-text text-transparent text-shadow"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-center md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Mobile Developer with 3+ years of experience building and publishing Flutter applications on the Play Store and App Store. Currently expanding into full-stack development. Passionate about creating scalable, user-friendly applications, with strong problem-solving skills and a commitment to continuous learning.
            </motion.p>

            {/* Social Links with Enhanced Animations */}
            <motion.div variants={staggerContainer} className="flex justify-center gap-4 mb-12">
              {[
                { icon: Github, href: "https://github.com/maungwindev", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/maungwin?utm_source=share&utm_campaign=share_via&utm_content=profile", label: "LinkedIn" },
                // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:mgwin.developer.2000@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-4 rounded-full glass glass-light dark:glass-dark transition-theme backdrop-transition hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <motion.div {...scaleOnHover}>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white px-8 py-3 glow">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  className="glass glass-light dark:glass-dark transition-theme backdrop-transition border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-700/30 px-8 py-3 text-gray-800 dark:text-gray-200 bg-transparent"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expertise across the full mobile development stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-6 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Animations */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing mobile applications and website created with modern technologies
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
                className="group relative h-full"
              >
                <Link href={`/project/${project.id}`}>
                  <div className="relative flex flex-col h-full overflow-hidden rounded-2xl glass glass-light dark:glass-dark transition-theme backdrop-transition hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-500">

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div whileHover={{ scale: 0.0 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <span className="px-3 py-1 text-xs font-medium rounded-full glass glass-light dark:glass-dark transition-theme backdrop-transition text-white border border-white/30">
                          {project.category}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <motion.h3
                          whileHover={{ x: 5 }}
                          className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              className="px-2 py-1 text-xs rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* View Project */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors mt-auto"
                      >
                        <span className="mr-2">View Project</span>
                        <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic foundation in computer science and software engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 gap-y-2 max-w-8xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="flex flex-col h-full glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-6 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.gradient} p-1`}>
                        <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                          <GraduationCap className="w-10 h-10 text-gray-700 dark:text-gray-300" />
                        </div>
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{edu.degree}</h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mt-auto line-clamp-3">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>





      {/* Contact Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss your project!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>

                <div className="space-y-4">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">mgwin.developer.2000@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+959 785 181 355</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Yangon, Myanmar</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form
                onSubmit={handleContactSubmit}
                className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-6"
              >
                <div className="space-y-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass glass-light dark:glass-dark transition-theme backdrop-transition border light:border-gray dark:border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass glass-light dark:glass-dark transition-theme backdrop-transition border border-white/30 dark:border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl glass glass-light dark:glass-dark transition-theme backdrop-transition border border-white/30 dark:border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all resize-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.div {...scaleOnHover}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white py-3 glow"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2 px-2 border-t border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © 2025 Maung Win Portfolio. All rights reserved.
            </p>
            {/* <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
