import React, { useEffect, useState } from 'react';
import icon from "../assets/i.png"
import './imageDisplay.css'

const ImageDisplay: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [renderTime, setRenderTime] = useState<number>(0);

  useEffect(() => {
    const startTime = performance.now(); // Démarrage du chrono
    const newImages = Array(100000).fill(icon);
    setImages(newImages);

    const endTime = performance.now(); // Fin du chrono
    setRenderTime(endTime - startTime);
    console.log(renderTime);
  }, []); // Le tableau vide [] permet de n'exécuter cet effet qu'une seule fois au montage du composant

  return (
    <div className="image-container">
      <div>Temps de rendu React: {renderTime.toFixed(2)} ms</div>
      {images.map((img, index) => (
        <img key={index} src={img} alt="Test image" />
      ))}
    </div>
  );
};

export default ImageDisplay;
