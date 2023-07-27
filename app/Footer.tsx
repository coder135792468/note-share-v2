"use-client";
import "./globals.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div
        style={{
          position: "relative",
          top: "40px",
          left: "40px",
          color: "#fff",
          maxWidth: "95%",
        }}
      >
        <h2>Welcome to Note-share</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "10px",
            fontWeight: 200,
            marginTop: 10,
            
          }}
        >
          <u>Privacy Policy</u>
          <u>Study Tips</u>
          <u>Latest Updates</u>
          <u>Subscribe to Newsletter</u>
          <u>Follow Us</u>
        </div>
      </div>
    </div>
  );
};
