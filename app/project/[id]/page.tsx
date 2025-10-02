"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectDetails = {
  1: {
    title: "E-Commerce Mobile App",
    category: "React Native",
    description:
      "A comprehensive e-commerce mobile application built with React Native, featuring seamless shopping experience, secure payment integration, and real-time order tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React Native", "Redux Toolkit", "Stripe API", "Firebase", "AsyncStorage", "React Navigation"],
    gradient: "from-purple-400 to-pink-400",
    duration: "6 months",
    team: "4 developers",
    rating: "4.8/5",
    overview:
      "This e-commerce application revolutionizes mobile shopping with its intuitive interface and robust functionality. Built using React Native for cross-platform compatibility, the app serves thousands of users daily with seamless performance.",
    challenges: [
      "Implementing secure payment processing with multiple payment gateways",
      "Optimizing app performance for large product catalogs",
      "Creating a responsive design that works across different screen sizes",
      "Integrating real-time inventory management",
    ],
    solutions: [
      "Integrated Stripe and PayPal APIs with robust error handling and security measures",
      "Implemented lazy loading and image optimization techniques",
      "Used Flexbox and responsive design principles with React Native",
      "Built real-time sync with Firebase Firestore for inventory updates",
    ],
    features: [
      "User authentication with social login options",
      "Product catalog with advanced search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment processing with multiple gateways",
      "Order tracking and history",
      "Push notifications for order updates",
      "Wishlist and favorites functionality",
      "Customer reviews and ratings system",
    ],
    results: [
      "50,000+ downloads in the first 3 months",
      "4.8/5 average rating on app stores",
      "35% increase in mobile sales for the client",
      "99.9% uptime with robust error handling",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
  },
  2: {
    title: "Fitness Tracking App",
    category: "Flutter",
    description:
      "An AI-powered fitness tracking application that monitors health metrics, provides personalized workout plans, and offers intelligent insights for better health outcomes.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Flutter", "Dart", "TensorFlow Lite", "SQLite", "HealthKit", "Google Fit API"],
    gradient: "from-green-400 to-blue-400",
    duration: "8 months",
    team: "5 developers",
    rating: "4.9/5",
    overview:
      "A comprehensive fitness tracking solution that combines AI-powered insights with intuitive user experience. The app helps users achieve their fitness goals through personalized recommendations and detailed analytics.",
    challenges: [
      "Integrating with multiple health data sources and APIs",
      "Implementing machine learning models for personalized recommendations",
      "Creating accurate activity recognition algorithms",
      "Ensuring data privacy and security compliance",
    ],
    solutions: [
      "Built unified health data layer supporting HealthKit, Google Fit, and manual input",
      "Implemented TensorFlow Lite models for on-device AI processing",
      "Used sensor fusion techniques for accurate activity detection",
      "Implemented end-to-end encryption and HIPAA compliance measures",
    ],
    features: [
      "Activity tracking with automatic detection",
      "Heart rate monitoring and analysis",
      "Personalized workout plans with AI recommendations",
      "Nutrition tracking with barcode scanning",
      "Sleep pattern analysis and insights",
      "Social features for motivation and challenges",
      "Integration with wearable devices",
      "Detailed progress analytics and reports",
    ],
    results: [
      "100,000+ active users within 6 months",
      "Featured in App Store's Health & Fitness category",
      "92% user retention rate after 30 days",
      "Average 15% improvement in user fitness metrics",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
  },
  // Add more project details as needed...
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectDetails[Number.parseInt(params.id)] || projectDetails[1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.duration}</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl">
                    <Users className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Team Size</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.team}</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl">
                    <Star className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.rating}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-xl`}
                />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.section>

          {/* Project Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Project Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.overview}</p>
            </div>
          </motion.section>

          {/* Screenshots */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    width={300}
                    height={600}
                    className="rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Challenges & Solutions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-600 dark:text-red-400">Challenges</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Solutions</h3>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/20 dark:bg-gray-800/20 rounded-xl"
                  >
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
