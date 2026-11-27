const footerCss: React.CSSProperties = 
{ display: 'flex', 
          flexDirection: 'row', gap: '0.5rem',justifyContent: "center",
          flexWrap: "wrap", alignItems: "center" };


export const Footer = () => {
  
  return (
    <div className="site-footer" style={{ padding: '1rem', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ ...footerCss, fontWeight: 'bold' , fontSize: '1.5rem'}}>Trishrey Global Pvt. Ltd.</h3>
        <div style={{ ...footerCss ,fontSize: '0.9rem'}}>
          <p>Address: 123 Main Street, City, Country |</p>
          <p>Phone: +1 (123) 456-7890 |</p>
          <p>Email: info@Trishreyglobal.com</p>
          

        </div>
      </div>
      <div >
        <h3 style={{  color: 'white', fontSize: '0.9rem', justifyContent: "center",
          flexWrap: "wrap", alignItems: "center" , textAlign: "center"}}>Follow Us :</h3>
        <div style={{  color: 'white', fontSize: '0.9rem',
          flexWrap: "wrap", alignItems: "center" , textAlign: "center", gap:'1rem'}}>
          <img src="/facebook-svgrepo-com.svg" alt="Facebook" style={{ width: '20px', height: '20px' }} />
          <img src="/twitter-color-svgrepo-com.svg" alt="Twitter" style={{ width: '20px', height: '20px', marginLeft: '1rem' }} />
          <img src="/instagram-1-svgrepo-com.svg" alt="Instagram" style={{ width: '20px', height: '20px' , marginLeft: '1rem'}} />
        </div>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem' }}>
         <p>© 2026 Trishrey Global Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}
