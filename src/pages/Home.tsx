import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home: React.FC = () => {
  const { products, loading, error } = useProducts(6);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-description">
          Discover amazing products with our beautiful theme switcher.
          Experience how different themes can completely transform the look and
          feel of the same content. Switch between minimal, dark, and colorful
          themes to see the magic happen!
        </p>
        <button className="hero-button" onClick={scrollToProducts}>
          Explore Products
        </button>
      </section>

      <section id="products-section" className="products-section">
        <h2 className="section-title">Featured Products</h2>

        {loading && <LoadingSpinner />}

        {error && (
          <div className="error-message">
            <p>Error loading products: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="no-products">
            <p>No products available at the moment.</p>
          </div>
        )}
      </section>

      <section className="features-section">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Three Beautiful Themes</h3>
            <p>Each theme has distinct personality and design language</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Perfect experience on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Theme Persistence</h3>
            <p>Your theme choice is saved across page reloads</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Smooth Animations</h3>
            <p>Beautiful transitions when switching between themes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>TypeScript</h3>
            <p>Built with TypeScript for type safety and reliability</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Vite Powered</h3>
            <p>Lightning-fast development with Vite build tool</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
