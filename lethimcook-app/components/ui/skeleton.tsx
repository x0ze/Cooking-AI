import React from 'react';
import { cn } from "@/lib/utils";

// Image path for images in the `public` folder should be relative to the public root
const imagePath = "/generate.png";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  // Styles pour l'image avec bordures arrondies et effet de survol
  const imageStyles: React.CSSProperties = {
    borderRadius: '20px', // Bords arrondis
    transition: 'transform 0,3s ease', // Transition pour l'effet de survol
    cursor: 'pointer' // Curseur pointer au survol
  };

  // Styles pour l'image au survol
  const hoverStyles: React.CSSProperties = {
    transform: 'scale(1.1)' // Agrandissement au survol
  };

  return (
    <div className={cn("skeleton-container", className)} {...props}>
      <img
        src={imagePath}
        alt="Description de l'image"
        style={imageStyles}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.010)')} // Gérer le survol avec JS
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}  // Retour à la taille normale
      />
    </div>
  );
};

export { Skeleton };
