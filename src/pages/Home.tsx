
import HomeImageAnimation from '../components/layouts/HomeImageAnimation';

export const Home = () => {
  return (
    <div className="container mt-5" style={styles.wrapper}>
      {/* Left Column: Hero Text */}
      <div style={styles.leftColumn}>
        <h1 style={styles.heading}>
          One partner for the services your business runs on
        </h1>

        <p style={styles.paragraph}>
          Trishey Global Pvt. Ltd. brings together the practical services that
          businesses and institutions depend on: skilled manpower, security and
          surveillance, IT hardware, civil construction, event management,
          advertising, and travel. Instead of coordinating a different vendor
          for every need, you work with one accountable team.
        </p>

        <p style={styles.paragraph}>
          We begin by understanding what you actually need, agree the scope and
          pricing with you up front, and stay involved until the work is done
          properly.
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>One point of contact for multiple services</li>
          <li style={styles.listItem}>Clear scope and pricing before work begins</li>
          <li style={styles.listItem}>Responsive support after delivery</li>
        </ul>
      </div>

      {/* Right Column: Image Animation */}
      <div style={styles.rightColumn}>
        <HomeImageAnimation />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
    flexWrap: 'wrap', // Stacks cleanly on smaller screens
  },
  leftColumn: {
    flex: '1 1 480px',
    textAlign: 'left',
  },
  heading: {
    color: '#0D2447',
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
};

export default Home;
