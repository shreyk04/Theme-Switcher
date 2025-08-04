import React from "react";

const About: React.FC = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1 className="hero-title">About Our Theme System</h1>
        <p className="hero-description">
          Our multi-theme application demonstrates the power of CSS custom
          properties and class-based theming. Each theme provides a unique
          visual experience while maintaining the same functionality and
          content.
        </p>
      </section>

      <section className="theme-showcase">
        <h2 className="section-title">Theme Showcase</h2>
        <div className="theme-cards">
          <div className="theme-card">
            <div className="theme-preview minimal-preview"></div>
            <h3>Theme 1 - Minimal</h3>
            <p>
              Clean, light design with simple typography and plenty of
              whitespace. Perfect for users who prefer a distraction-free,
              professional interface.
            </p>
            <ul className="theme-features">
              <li>Light color scheme</li>
              <li>Inter font family</li>
              <li>Centered layout</li>
              <li>Subtle shadows</li>
              <li>Professional appearance</li>
            </ul>
          </div>

          <div className="theme-card">
            <div className="theme-preview dark-preview"></div>
            <h3>Theme 2 - Dark</h3>
            <p>
              Professional dark mode with sidebar layout and bold serif fonts.
              Ideal for users who work in low-light environments or prefer dark
              interfaces.
            </p>
            <ul className="theme-features">
              <li>Dark color scheme</li>
              <li>Georgia serif fonts</li>
              <li>Sidebar navigation</li>
              <li>Bold design elements</li>
              <li>Eye-friendly for night use</li>
            </ul>
          </div>

          <div className="theme-card">
            <div className="theme-preview colorful-preview"></div>
            <h3>Theme 3 - Colorful</h3>
            <p>
              Vibrant, playful design with card-based layouts and fun
              typography. Great for creative users who enjoy bold, expressive
              interfaces.
            </p>
            <ul className="theme-features">
              <li>Vibrant color palette</li>
              <li>Pacifico & Nunito fonts</li>
              <li>Card-based layout</li>
              <li>Creative animations</li>
              <li>Playful interactions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h4>React 18</h4>
            <p>Modern React with hooks and functional components</p>
          </div>
          <div className="tech-item">
            <h4>TypeScript</h4>
            <p>Type-safe development with full IntelliSense support</p>
          </div>
          <div className="tech-item">
            <h4>Vite</h4>
            <p>Lightning-fast build tool and development server</p>
          </div>
          <div className="tech-item">
            <h4>React Router</h4>
            <p>Client-side routing for single-page application</p>
          </div>
          <div className="tech-item">
            <h4>CSS Custom Properties</h4>
            <p>Dynamic theming with CSS variables</p>
          </div>
          <div className="tech-item">
            <h4>Context API</h4>
            <p>Global state management for theme switching</p>
          </div>
        </div>
      </section>

      <section className="implementation-section">
        <h2 className="section-title">Implementation Highlights</h2>
        <div className="implementation-grid">
          <div className="implementation-item">
            <h4>CSS-Based Theming</h4>
            <p>
              All theme logic is handled through CSS classes applied to the body
              element, making theme switching smooth and efficient.
            </p>
          </div>
          <div className="implementation-item">
            <h4>Theme Persistence</h4>
            <p>
              User theme preferences are automatically saved to localStorage and
              restored on subsequent visits.
            </p>
          </div>
          <div className="implementation-item">
            <h4>Responsive Design</h4>
            <p>
              Mobile-first approach ensures perfect rendering across all device
              sizes and orientations.
            </p>
          </div>
          <div className="implementation-item">
            <h4>Performance Optimized</h4>
            <p>
              Lazy loading, efficient re-renders, and optimized bundle size for
              fast loading times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
