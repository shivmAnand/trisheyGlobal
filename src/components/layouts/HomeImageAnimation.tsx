import React, { useState, useEffect, useRef } from 'react';

const CircularImageCarousel = () => {
  const images = [
    '/construction1.jpg',
    '/billboard.png',
    '/eventManagement.png',
    '/itHardware.png',
    '/tourandTravel.png',
    '/tourAndTravel1.avif',
  ];


  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sceneRef = useRef(null);
  const isScrollingRef = useRef(false);

  const totalImages = images.length;
  const angleStep = 360 / totalImages;
  const radius = 260;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Mouse wheel scroll rotation
  useEffect(() => {
    const element = sceneRef.current;
    if (!element) return;

    const handleWheel = (e) => {
      // Prevent the whole webpage from scrolling while rotating the carousel
      e.preventDefault();

      // Throttle rapid trackpad/wheel events so it steps cleanly one image at a time
      if (isScrollingRef.current) return;

      // Support both vertical (deltaY) and horizontal (deltaX) scrolling
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 10) return;

      isScrollingRef.current = true;
      setActiveIndex((prev) => (delta > 0 ? prev + 1 : prev - 1));

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 350); // Cooldown in ms between scroll steps
    };

    // passive: false is required so e.preventDefault() stops page scrolling
    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      ref={sceneRef}
      style={styles.scene}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        style={{
          ...styles.carousel,
          transform: `translateZ(-${radius}px) rotateY(-${activeIndex * angleStep}deg)`,
        }}
      >
        {images.map((src, index) => {
          const normalizedActive = ((activeIndex % totalImages) + totalImages) % totalImages;
          const isFront = normalizedActive === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                ...styles.card,
                transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                opacity: isFront ? 1 : 0.65,
                boxShadow: isFront
                  ? '0 20px 35px rgba(0, 0, 0, 0.4)'
                  : '0 8px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img src={src} alt={`Slide ${index + 1}`} style={styles.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  scene: {
    width: '220px',
    height: '280px',
    margin: '80px auto',
    perspective: '1000px',
    position: 'relative',
    userSelect: 'none',
  },
  carousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
  },
  card: {
    position: 'absolute',
    width: '200px',
    height: '260px',
    left: '10px',
    top: '10px',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'opacity 0.6s ease, box-shadow 0.6s ease',
    backgroundColor: '#111',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};

export default CircularImageCarousel;
