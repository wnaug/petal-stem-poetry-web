
import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; delay: number; left: string }>>([]);

  useEffect(() => {
    const petalData = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 1.6,
      left: `${10 + i * 20}%`,
    }));
    setPetals(petalData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 bg-dusty/30 rounded-full animate-petal-fall"
          style={{
            left: petal.left,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
