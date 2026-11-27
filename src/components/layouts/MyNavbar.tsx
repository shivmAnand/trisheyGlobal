import BsNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

export const MyNavbar = () => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'About Us', to: '/about' },
  ];

  return (
    <>
      <BsNavbar expand="md" className="pt-0 mt-0 mx-0 px-2 px-md-4 shadow-sm w-100">
        <Container fluid className="px-0">
          <BsNavbar.Brand  className="py-1 m-0 d-flex align-items-center">
            <img
              src="/tg-icon.svg"
              alt="Logo"
              style={{
                width: "clamp(40px, 8vw, 110px)",
                height: "auto",
                transition: "width 0.2s ease",
              }}
            />
            <img
              src="/logo-name-light.svg"
              alt="Logo"
              className="ms-2 ms-md-3"
              style={{
                width: "clamp(95px, 15vw, 200px)",
                height: "auto",
                transition: "width 0.2s ease",
              }}
            />
          </BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="main-nav" className="ms-auto" />
          <BsNavbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-start align-items-md-center gap-2 gap-md-3 py-2 py-md-0">
              {links.map(({ label, to }) => (
                <Nav.Link
                  key={to}
                  as={NavLink}
                  to={to}
                  eventKey={to}
                  end={to === '/'}
                >
                  {label}
                </Nav.Link>
              ))}
              <Button
                // variant={}
                size="sm"
                // onClick={}
                aria-label="Toggle theme"
                className="ms-md-2"
              >
                ☀️
              </Button>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </>
  );
};
