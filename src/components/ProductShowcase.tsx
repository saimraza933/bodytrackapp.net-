import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
}

interface ProductShowcaseProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products = [
    {
      id: "1",
      title: "Beginner Workout Guide",
      description:
        "Perfect for those just starting their fitness journey. Includes 12 weeks of progressive workouts.",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "guide",
      features: ["12-week program", "Video tutorials", "Progress tracking", "Beginner-friendly"],
    },
    {
      id: "2",
      title: "Advanced Strength Program",
      description:
        "Take your strength to the next level with this 8-week intensive program.",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
      category: "guide",
      features: ["8-week intensive", "Advanced techniques", "Strength focus", "Expert guidance"],
    },
    {
      id: "3",
      title: "Monthly Meal Plan",
      description:
        "Four weeks of balanced meals with complete macro breakdowns and shopping lists.",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80",
      category: "meal",
      features: ["4-week plan", "Macro breakdowns", "Shopping lists", "Balanced nutrition"],
    },
    {
      id: "4",
      title: "Fitness Tracker Template",
      description: "Track your progress with our comprehensive Excel template.",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      category: "template",
      features: ["Excel template", "Progress tracking", "Easy to use", "Customizable"],
    },
    {
      id: "5",
      title: "Video Training Bundle",
      description:
        "Over 50 instructional videos covering all major exercises and techniques.",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
      category: "video",
      features: ["50+ videos", "HD quality", "All exercises", "Expert instruction"],
    },
    {
      id: "6",
      title: "AI Meal Planner",
      description:
        "Generate custom meal plans based on your preferences and nutritional goals.",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      category: "tool",
      features: ["AI-powered", "Custom plans", "Goal-based", "Preference matching"],
    },
  ],
  title = "Digital Fitness Products",
  subtitle = "Transform your fitness journey with our premium digital tools",
}) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Group products by category for filtering (could be used for tabs in the future)
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Optional category filter - could be implemented as tabs */}
        {/* 
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map(category => (
            <button 
              key={category} 
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-green-500 hover:text-white transition-colors"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
                category={product.category}
                features={product.features}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#subscription"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;