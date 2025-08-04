import React from "react";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handleAddToCart = () => {
    // Simulate add to cart functionality
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/200x200?text=No+Image";
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{truncateText(product.title, 50)}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">
          {truncateText(product.description, 100)}
        </p>
        <div className="product-rating">
          <span className="rating-stars">⭐ {product.rating.rate}</span>
          <span className="rating-count">({product.rating.count} reviews)</span>
        </div>
        <button
          className="product-button"
          onClick={handleAddToCart}
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
