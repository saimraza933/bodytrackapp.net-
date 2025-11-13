import { useState } from "react";
import Layout from "./layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [checkoutProduct, setCheckoutProduct] = useState<any>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Product data
  const products = [
    {
      id: "1",
      name: "Beginner Workout Guide",
      description: "Perfect for those just starting their fitness journey",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      category: "guides"
    },
    {
      id: "2",
      name: "Intermediate Workout Guide",
      description: "Take your fitness to the next level with advanced exercises",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&q=80",
      category: "guides"
    },
    {
      id: "3",
      name: "Advanced Workout Guide",
      description: "Expert-level workouts for maximum results",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
      category: "guides"
    },
    {
      id: "4",
      name: "Weekly Meal Plan",
      description: "7-day meal plan with macro breakdowns and shopping list",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
      category: "nutrition"
    },
    {
      id: "5",
      name: "Monthly Meal Plan",
      description: "30-day comprehensive meal plan with recipe variations",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
      category: "nutrition"
    },
    {
      id: "6",
      name: "Fitness Progress Tracker",
      description: "Excel/Google Sheets template for tracking your progress",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
      category: "tools"
    },
    {
      id: "7",
      name: "Workout Log Templates",
      description: "Customizable templates for tracking your workouts",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80",
      category: "tools"
    },
    {
      id: "8",
      name: "Video Training: Core Strength",
      description: "10 video tutorials focusing on core strength and stability",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
      category: "videos"
    },
    {
      id: "9",
      name: "Video Training: Flexibility",
      description: "8 video tutorials to improve flexibility and mobility",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      category: "videos"
    },
    {
      id: "10",
      name: "AI Meal Planner Access",
      description: "1-month access to our AI-powered meal planning tool",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&q=80",
      category: "tools"
    },
    {
      id: "11",
      name: "30-Day Fitness Challenge",
      description: "Complete program with daily workouts and nutrition guide",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      category: "challenges"
    },
    {
      id: "12",
      name: "Weight Loss Challenge",
      description: "Specialized 30-day program focused on healthy weight loss",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
      category: "challenges"
    },
    {
      id: "13",
      name: "Motivational Audio Pack",
      description: "10 MP3 tracks of fitness affirmations and guided coaching",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=600&q=80",
      category: "audio"
    },
    {
      id: "14",
      name: "Premium Community Access",
      description: "1-month access to our private online fitness community",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
      category: "community"
    },
    {
      id: "15",
      name: "Macro & Calorie Calculator",
      description: "Digital access to our advanced nutrition calculator",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=600&q=80",
      category: "tools"
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "guides", name: "Workout Guides" },
    { id: "nutrition", name: "Meal Plans" },
    { id: "tools", name: "Fitness Tools" },
    { id: "videos", name: "Video Training" },
    { id: "challenges", name: "Challenges" },
    { id: "audio", name: "Audio" },
    { id: "community", name: "Community" }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleBuyNow = (product: any) => {
    setCheckoutProduct({
      id: product.id,
      title: product.name,
      price: product.price,
      imageUrl: product.image
    });
    setIsCheckoutOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-fitlytic-black text-white py-16">
        <div className="fitlytic-container">
          <div className="max-w-3xl">
            <h1 className="fitlytic-heading text-4xl md:text-5xl mb-4">Digital Fitness Products</h1>
            <p className="text-gray-300 text-lg mb-6">
              Explore our comprehensive range of digital fitness tools designed to help you achieve your health and fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="fitlytic-section bg-white">
        <div className="fitlytic-container">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-fitlytic-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="bg-fitlytic-green/10 text-fitlytic-green text-sm font-medium px-2 py-1 rounded">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="fitlytic-button w-full py-2 flex items-center justify-center"
                  >
                    Buy Now <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {checkoutProduct && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          product={checkoutProduct}
        />
      )}
    </Layout>
  );
}

export default Products;