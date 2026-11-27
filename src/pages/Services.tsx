import React, { useState } from 'react';
import HomeImageAnimation from '../components/layouts/HomeImageAnimation';

const services = [
  {
    title: 'Skilled Manpower',
    description: 'Vetted, trained professionals deployed across operations, administration, and technical roles.',
    image: 'https://unsplash.com',
  },
  {
    title: 'Security & Surveillance',
    description: '24/7 on-site guarding, CCTV monitoring, and access control systems for complete facility safety.',
    image: 'https://unsplash.com',
  },
  {
    title: 'IT Hardware',
    description: 'Enterprise laptops, servers, networking gear, and ongoing hardware maintenance.',
    image: 'https://unsplash.com',
  },
  {
    title: 'Civil Construction',
    description: 'End-to-end commercial renovation, structural work, and turnkey facility build-outs.',
    image: 'https://unsplash.com',
  },
  {
    title: 'Event Management',
    description: 'Corporate conferences, exhibitions, and institutional events executed down to every detail.',
    image: 'https://unsplash.com',
  },
  {
    title: 'Advertising & Travel',
    description: 'Brand visibility campaigns alongside seamless corporate travel and logistics coordination.',
    image: 'https://unsplash.com',
  },
];

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
      

      {/* Embedded Image Card Grid Section */}
      <section style={styles.servicesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Core Services</h2>
          <p style={styles.sectionSubtitle}>
            Reliable execution across every operational requirement
          </p>
        </div>

        <div style={styles.cardGrid}>
          {services.map((service, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...styles.card,
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 16px 32px rgba(0, 123, 255, 0.14)'
                    : '0 4px 16px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Embedded Top Image */}
                <div style={styles.imageWrapper}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      ...styles.cardImage,
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Card Content */}
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardText}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 24px 80px',
  },
  heroWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
    flexWrap: 'wrap',
    marginBottom: '80px',
  },
  leftColumn: {
    flex: '1 1 480px',
    textAlign: 'left',
  },
  heading: {
    color: '#007bff',
    fontSize: '2.75rem',
    fontWeight: '700',
    lineHeight: 1.2,
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: 1.65,
    color: '#333',
    marginBottom: '16px',
  },
  list: {
    paddingLeft: '20px',
    marginTop: '12px',
    color: '#222',
    lineHeight: 1.8,
    fontWeight: '500',
  },
  listItem: {
    marginBottom: '6px',
  },
  rightColumn: {
    flex: '1 1 420px',
    minHeight: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '16px',
  },
  servicesSection: {
    marginTop: '40px',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '8px',
  },
  sectionSubtitle: {
    fontSize: '1.05rem',
    color: '#666',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden', // Clips the embedded image cleanly to the card's rounded top corners
    border: '1px solid #eaeaea',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  cardBody: {
    padding: '24px',
    textAlign: 'left',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#007bff',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '0.96rem',
    lineHeight: 1.6,
    color: '#4b5563',
    margin: 0,
  },
};

export default Services;
