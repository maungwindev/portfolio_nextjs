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
    title: "Shwe Nyar Myay App",
    category: "Flutter",
    description:
      "Welcome to your all-in-one Grocery Shopping App!",
    image: "/shwenyarmyay.png?height=400&width=600",
    tech: ["Flutter", "Dart", "GetX", "SQLite", "Flutter Secure Storage", "Laravel"],
    gradient: "from-green-400 to-blue-400",
    duration: "8 months",
    team: "2 developers",
    rating: "4.9/5",
    overview:
      "Enjoy a smooth and secure shopping experience with our easy-to-use app, designed for your daily needs. Whether you're stocking up your kitchen or placing a quick order, we make grocery shopping simple, fast, and hassle-free.",
    challenges: [
      "Integrating with real-time data fetching from api",
      "Manage deliver address by making dynamic",
      "Handling order to smooth",
      "Ensuring data privacy and security compliance",
    ],
    solutions: [
      "Implemented quick email-based authentication for instant sign-up and login",
      "Built address management system for fast and accurate doorstep delivery",
      "Developed seamless cart and checkout flow with multiple payment options including COD",
      "Integrated real-time order tracking and history management under 'My Orders'",
      "Enabled secure user account management with data privacy controls and easy account deletion",
    ],
    features: [
      "Register using just your email and start shopping in seconds. No complex forms or phone verification needed.",
      "Easily enter and manage your delivery address to get your orders delivered to your doorstep without delays.",
      "Browse products, add to your cart, and proceed to checkout in just a few taps. Choose from multiple payment options, including Cash on Delivery (COD).",
      "Your order is handled smoothly with clear confirmation, delivery info, and product details.",
      "Access your order history and current orders from the “My Orders” page anytime.",
      "Update your delivery address and personal info",
      "Change your password securely",
      "Delete your account whenever you want, directly from the app — your data, your control",
      "Connect directly on chatbox",
    ],
    results: [
      "1,000+ active users within 6 months",
      "Featured in Play Store & App Store's Food & Drink Category",
      "92% user retention rate after 30 days",
    ],
    screenshots: [
      "/shwenyarmyay-1.png?height=600&width=300",
      "/shwenyarmyay-2.png?height=600&width=300",
      "/shwenyarmyay-3.png?height=600&width=300",
      "/shwenyarmyay-4.png?height=600&width=300",
    ],
    links: [
      "https://play.google.com/store/apps/details?id=com.codexmyanmar.shwenyarmyay&hl=en",
      "https://apps.apple.com/us/app/shwe-nyar-myay/id6744032473"

    ]
  },
  3: {
    title: "Yin Thway Nae A Tu App",
    category: "Flutter",
    description:
      "Manage your child's care with our app",
    image: "/maymay.png?height=400&width=600",
    tech: ["Flutter", "Dart", "GetX", "SQLite", "Flutter Secure Storage", "Laravel", "Audio", "Video Streaming"],
    gradient: "from-green-400 to-blue-400",
    duration: "1 year 4 months",
    team: "3 developers",
    rating: "4.9/5",
    overview:
      "Easily manage your child's care with our app. Create accounts for your children and babysitters, explore expert childcare articles and guides, enjoy a collection of stories and music for kids, and discover fun activities to bond with your little ones. ",
    challenges: [
      "Integrating with real-time data fetching from api for audio",
      "Manage data for helping child",
      "Handling streaming audio to smooth",
      "Ensuring data privacy and security compliance",
    ],
    solutions: [
      "Integrated WebSocket and REST APIs to enable reliable real-time audio data streaming",
      "Built structured data management and caching system to support personalized child-focused content",
      "Implemented adaptive audio buffering and compression for smooth, low-latency playback",
      "Applied end-to-end encryption and secure storage practices to ensure data privacy and compliance",
    ],
    features: [
      "Register quickly using your phone number with secure OTP verification.",
      "Create detailed child profiles to personalize recommendations and track development.",
      "Add and manage babysitter accounts for seamless coordination and care scheduling.",
      "Access expert childcare articles, guides, and tips tailored to your child’s needs.",
      "Solve daily childcare questions through an interactive Q&A section.",
      "Listen to calming music and bedtime stories designed to help children sleep and relax.",
      "Explore engaging learning activities and fun games for kids of all ages.",
      "Track your child’s milestones and care history for better insights and planning.",
      "Enjoy a smooth, user-friendly interface built for parents and caregivers alike.",
    ],
    results: [
      "1,00+ active users within 4 months",
      "Featured in Play Store & App Store's Health Category",
      "92% user retention rate after 30 days",
    ],
    screenshots: [
      "/maymay-1.png?height=600&width=300",
      "/maymay-2.png?height=600&width=300",
      "/maymay-3.png?height=600&width=300",
      "/maymay-4.png?height=600&width=300",
    ],
    links: [
      "https://play.google.com/store/apps/details?id=com.yinthwaynaeatu.app&hl=en",
      "https://apps.apple.com/us/app/yin-thway-nae-a-tu/id6670179400"
    ]
  },
  4: {
    title: "SAFE Delivery App",
    category: "Flutter",
    description:
      "Manage delivery service in local",
    image: "/safe_delivery.png?height=400&width=600",
    tech: ["Flutter", "Dart", "Bloc", "SQLite", "Shared Preference",],
    gradient: "from-green-400 to-blue-400",
    duration: "6 months",
    team: "3 developers",
    rating: "4.9/5",
    overview:
      "SAFE Delivery App is simple and easy to use. Send and Track. All your shipping requirements in one App.Whether you want to send a parcel, pickup cash for an e-commerce sales order, SAFE will make it.",
    challenges: [
      "Implemented UI with Flutter and integrated Google Maps API ",
      "Worked on scheduling and delivery management features",
    ],
    solutions: [
      "Developed responsive and dynamic UI components using Flutter’s widget-based architecture for a seamless user experience",
      "Integrated Google Maps API to enable precise location tracking, route visualization, and real-time delivery updates",
      "Implemented efficient scheduling logic with Firebase and local notifications to manage deliveries and reminders",
      "Optimized backend communication using RESTful APIs and caching to ensure fast and reliable data sync between users and delivery agents",
    ],
    features: [
      "Register and log in securely with role-based access for Merchant, Delivery, and Admin users.",
      "Generate and manage unique parcel tracking IDs for every shipment.",
      "Merchants can create, update, and monitor delivery requests in real time.",
      "Delivery personnel can view optimized delivery routes with integrated map navigation.",
      "Access customer contact details directly within the app for smooth communication.",
      "Admins can monitor all deliveries, user activities, and parcel statuses from a centralized dashboard.",
      "Real-time tracking updates with automatic status changes for pickup, transit, and delivery.",
      "Manual override options for admin to adjust or verify parcel information when needed.",
      "Built-in analytics and reporting tools to review delivery performance and user efficiency.",
      "Simple, intuitive interface designed for quick access and clear data visibility.",
    ],
    results: [
      "100,000+ active users within 2 years",
      "Featured in Play Store & App Store's Business Category",
      "92% user retention rate after 30 days",
    ],
    screenshots: [
      "/safe-1.png?height=600&width=300",
      "/safe-2.png?height=600&width=300",
      "/safe-3.png?height=600&width=300",
      "/safe-4.png?height=600&width=300",
    ],
    links: [
      "https://play.google.com/store/apps/details?id=com.gigagates.client.safe&hl=en",
      "https://apps.apple.com/mm/app/safe-delivery-myanmar/id6473803850"
    ]
  },
  5: {
    title: "Golden Thailand App",
    category: "Flutter",
    description:
      "Manage POS system for restaurant",
    image: "/golden_thailand.png?height=400&width=600",
    tech: ["Flutter", "Dart", "Bloc", "SQLite", "Shared Preference",],
    gradient: "from-green-400 to-blue-400",
    duration: "4 months",
    team: "5 developers",
    rating: "4.9/5",
    overview:
      "GoldenThailand POS – A specialized POS system designed for buffet-style restaurants. Includes dynamic buffet pricing, customer time tracking, and integrated printing—optimized for smooth and efficient buffet management.",
    challenges: [

    ],
    solutions: [

    ],
    features: [
      "Manage shop tables with real-time status updates for dine-in and takeaway orders.",
      "Add and organize products with detailed pricing, tax configuration, and inventory tracking.",
      "Categorize items efficiently for faster browsing and checkout.",
      "Create and manage buffet menus with flexible pricing and easy availability control.",
      "View comprehensive sales and report history with daily, weekly, and monthly insights.",
      "Multi-language support to make the system accessible for different regions and staff.",
      "Track and manage business expenses directly from the integrated expense panel.",
      "Perform fast and accurate checkout with built-in print receipt functionality.",
      "Seamless integration with POS hardware like printers and barcode scanners.",
      "Clean, intuitive interface optimized for both tablet and mobile use.",
    ],

    results: [
      "0+ active users ",
      "Featured in Local App",
      "92% user retention rate after 30 days",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],

  },
  6: {
    title: "Reader Paradise App",
    category: "Flutter",
    description:
      "Read & Listen About Popular Books",
    image: "/reader_paradise.png?height=400&width=600",
    tech: ["Flutter", "Dart", "MobX", "Firebase Notification", "Shared Preference", "Deep Linking"],
    gradient: "from-green-400 to-blue-400",
    duration: "6 months, I worked in as a freelencer",
    team: "2 developers",
    rating: "4.9/5",
    overview:
      "Reader's Paradise offers the world's best nonfiction books for learning, listening audio and applying knowledge anytime, anywhere. For a new reading experience, we introduce you to integrating innovative ideas and knowledge tailored to your needs into your busy life.",
    challenges: [

    ],
    solutions: [

    ],
    features: [
      "Manage shop tables with real-time status updates for dine-in and takeaway orders.",
      "Add and organize products with detailed pricing, tax configuration, and inventory tracking.",
      "Categorize items efficiently for faster browsing and checkout.",
      "Create and manage buffet menus with flexible pricing and easy availability control.",
      "View comprehensive sales and report history with daily, weekly, and monthly insights.",
      "Multi-language support to make the system accessible for different regions and staff.",
      "Track and manage business expenses directly from the integrated expense panel.",
      "Perform fast and accurate checkout with built-in print receipt functionality.",
      "Seamless integration with POS hardware like printers and barcode scanners.",
      "Clean, intuitive interface optimized for both tablet and mobile use.",
    ],

    results: [
      "0+ active users ",
      "Featured in Local App",
      "92% user retention rate after 30 days",
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
  const project = projectDetails[Number.parseInt(params.id)];

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
                  {project.links?.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {link.includes("play.google") ? "Play Store" : "App Store"}
                      </Button>
                    </a>
                  ))}
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
