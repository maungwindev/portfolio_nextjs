"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { SiFlutter, SiDart,SiGit,SiGithub,SiBitbucket,SiKotlin ,SiFirebase,SiSupabase ,SiAmazon ,SiNodedotjs,SiExpress,SiMongodb,SiSqlite,SiHive,SiMysql,SiPostgresql} from "react-icons/si";
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
    title: "E-Commerce Mobile App",
    category: "React Native",
    description: "Full-featured shopping app with payment integration",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Redux", "Stripe", "Firebase"],
    gradient: "from-purple-400 to-pink-400",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Flutter",
    description: "Health monitoring with AI-powered insights",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Flutter", "Dart", "TensorFlow", "SQLite"],
    gradient: "from-green-400 to-blue-400",
  },
  {
    id: 3,
    title: "Social Media Platform",
    category: "React Native",
    description: "Real-time messaging and content sharing",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Socket.io", "MongoDB", "AWS"],
    gradient: "from-orange-400 to-red-400",
  },
  {
    id: 4,
    title: "Banking Mobile App",
    category: "Native iOS",
    description: "Secure financial transactions with biometric auth",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Swift", "Core Data", "TouchID", "Keychain"],
    gradient: "from-blue-400 to-purple-400",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "React Native",
    description: "Real-time tracking and order management",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Google Maps", "PayPal", "Node.js"],
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    id: 6,
    title: "Travel Booking App",
    category: "Flutter",
    description: "Hotel and flight booking with AR features",
    image: "/placeholder.svg?height=300&width=400",
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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Outstanding mobile developer! Delivered our e-commerce app ahead of schedule with exceptional quality. The user experience is phenomenal.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Incredible attention to detail and technical expertise. The fitness app exceeded all our expectations and has received amazing user feedback.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder at HealthTech",
    company: "HealthTech",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Professional, reliable, and innovative. The AI-powered features implemented were beyond what we initially envisioned. Highly recommended!",
    rating: 5,
  },
]

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "California, USA",
    year: "2016 - 2018",
    description: "Specialized in Mobile Computing and Human-Computer Interaction",
    logo: "/placeholder.svg?height=80&width=80",
    gradient: "from-red-500 to-orange-500",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    location: "Massachusetts, USA",
    year: "2012 - 2016",
    description: "Focus on Mobile Application Development and Software Architecture",
    logo: "/placeholder.svg?height=80&width=80",
    gradient: "from-blue-500 to-purple-500",
  },
]

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialId: "AWS-PSA-12345",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "AWS Services", "DevOps"],
    gradient: "from-orange-400 to-yellow-400",
  },
  {
    title: "Google Professional Mobile Developer",
    issuer: "Google",
    date: "October 2023",
    credentialId: "GOOGLE-MD-67890",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://google.com/verification",
    skills: ["Android Development", "Kotlin", "Jetpack Compose"],
    gradient: "from-blue-400 to-green-400",
  },
  {
    title: "Meta React Native Certification",
    issuer: "Meta (Facebook)",
    date: "August 2023",
    credentialId: "META-RN-11223",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://meta.com/verification",
    skills: ["React Native", "JavaScript", "Mobile UI"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Apple Certified iOS Developer",
    issuer: "Apple Inc.",
    date: "June 2023",
    credentialId: "APPLE-IOS-44556",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://apple.com/verification",
    skills: ["Swift", "SwiftUI", "iOS SDK"],
    gradient: "from-gray-500 to-gray-700",
  },
  {
    title: "Flutter Advanced Certification",
    issuer: "Google Flutter Team",
    date: "May 2023",
    credentialId: "FLUTTER-ADV-78901",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://flutter.dev/verification",
    skills: ["Flutter", "Dart", "Cross-platform"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    date: "March 2023",
    credentialId: "CSM-23456",
    logo: "/placeholder.svg?height=60&width=60",
    verifyUrl: "https://scrumalliance.org/verification",
    skills: ["Agile", "Scrum", "Project Management"],
    gradient: "from-teal-400 to-green-500",
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
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
        className="fixed top-0 left-0 right-0 z-50 glass glass-light dark:glass-dark transition-theme backdrop-transition"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Maung Win
          </motion.div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden fade-in">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center mb-16">
            <motion.div variants={fadeInUp} className="relative inline-block mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 p-1 glow"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full"
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
              <br />
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
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Mobile Developer with 2+ years of experience building and publishing Flutter applications on the Play Store and App Store. Currently expanding into full-stack development. Passionate about creating scalable, user-friendly applications, with strong problem-solving skills and a commitment to continuous learning.
            </motion.p>

            {/* Social Links with Enhanced Animations */}
            <motion.div variants={staggerContainer} className="flex justify-center gap-4 mb-12">
              {[
                { icon: Github, href: "https://github.com/maungwindev", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/maungwin?utm_source=share&utm_campaign=share_via&utm_content=profile", label: "LinkedIn" },
                // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:mgwin.developer.2000@gmail  .com", label: "Email" },
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my portfolio of mobile applications built with cutting-edge technologies
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
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <Link href={`/project/${project.id}`}>
                  <div className="relative overflow-hidden rounded-2xl glass glass-light dark:glass-dark transition-theme backdrop-transition hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-500">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 dark:opacity-20`}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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

                    {/* Project Content */}
                    <div className="p-6">
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

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

                      {/* View Project Link */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
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

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-8 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.gradient} p-1`}>
                      <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{edu.degree}</h3>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{edu.institution}</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise and commitment to continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl overflow-hidden hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 group"
              >
                {/* Certificate Header with Gradient */}
                <div className={`h-24 bg-gradient-to-r ${cert.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative h-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <motion.h3
                    whileHover={{ x: 3 }}
                    className="text-lg font-bold mb-2 text-gray-800 dark:text-white line-clamp-2"
                  >
                    {cert.title}
                  </motion.h3>

                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-4 font-mono">
                    <BookOpen className="w-3 h-3" />
                    <span>ID: {cert.credentialId}</span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-2 py-1 text-xs rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Verify Button */}
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                  >
                    <span className="mr-2">Verify Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="glass glass-light dark:glass-dark transition-theme backdrop-transition rounded-2xl p-6 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full overflow-hidden mr-4"
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-gray-600 dark:text-gray-300 italic"
                >
                  "{testimonial.content}"
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-4xl mx-auto">
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
                      <p className="text-gray-600 dark:text-gray-300">contact@example.com</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
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
                      className="w-full px-4 py-3 rounded-xl glass glass-light dark:glass-dark transition-theme backdrop-transition border border-white/30 dark:border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
      <footer className="py-12 px-6 border-t border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © 2025 Senior Mobile Developer Portfolio. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
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
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
