import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tracking-consent");
    if (consent === null) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("tracking-consent", "true");
    window.dispatchEvent(new Event("cookie-consent-given"));
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("tracking-consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerContent}>
        <div style={styles.textContent}>
          <h4 style={styles.heading}>We respect your privacy</h4>
          <p style={styles.description}>
            We use cookies to enhance your experience, analyze traffic, and serve tailored ads. You can accept or decline tracking.
          </p>
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={handleAccept} style={{ ...styles.button, ...styles.accept }}>
            Accept
          </button>
          <button onClick={handleReject} style={{ ...styles.button, ...styles.reject }}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: "fixed",
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    borderRadius: "16px",
    padding: "1.5rem",
    zIndex: 9999,
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "slideIn 0.5s ease-in-out",
  },
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-start",
    width: "100%",
  },
  textContent: {
    flex: 1,
  },
  heading: {
    margin: 0,
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#1a1a1a",
  },
  description: {
    margin: "0.5rem 0 0",
    fontSize: "0.95rem",
    color: "#444",
    lineHeight: 1.5,
  },
  buttonGroup: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1rem",
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  accept: {
    backgroundColor: "#1a73e8",
    color: "#fff",
  },
  reject: {
    backgroundColor: "#e0e0e0",
    color: "#333",
  },
};

export default CookieBanner;
