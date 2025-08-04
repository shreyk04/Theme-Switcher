import React from "react";

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading products...",
}) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner" role="status" aria-label="Loading"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
