import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import CheckoutModal from "./CheckoutModal";
import CheckoutFlow from "./CheckoutFlow";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  imageUrl: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Premium Workout Guide",
  price = 29.99,
  originalPrice,
  description = "Complete workout guide with detailed instructions and video demonstrations.",
  features = ["30+ exercises", "Video tutorials", "Progress tracking", "Nutrition tips"],
  imageUrl = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  category = "Workout Guides",
  rating = 4.8,
  reviewCount = 124,
  featured = false
}) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          {featured && (
            <Badge
              variant="default"
              className="absolute top-3 right-3 bg-green-600 hover:bg-green-700"
            >
              Featured
            </Badge>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-xs font-medium">
              {category}
            </Badge>
            <span className="font-bold text-lg text-green-600">
              ${price.toFixed(2)}
            </span>
          </div>
          <h3 className="font-bold text-xl mt-2">{title}</h3>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>

        <CardFooter className="pt-2">
          <button
            onClick={handleBuyNow}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Buy Now - ${price}
          </button>
        </CardFooter>
      </div>

      {/* Checkout Flow */}
      {showCheckout && (
        <CheckoutFlow
          productName={title}
          productPrice={price}
          onClose={handleCloseCheckout}
        />
      )}
    </>
  );
};

export default ProductCard;