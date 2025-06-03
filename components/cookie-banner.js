import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consentPreferences, setConsentPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  // Load saved preferences on component mount
  useEffect(() => {
    const savedConsent = localStorage.getItem("tracking-consent");
    const savedPreferences = localStorage.getItem("consent-preferences");

    if (savedConsent === null) {
      setVisible(true);
    }

    if (savedPreferences) {
      setConsentPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setConsentPreferences(allAccepted);
    localStorage.setItem("tracking-consent", "true");
    localStorage.setItem("consent-preferences", JSON.stringify(allAccepted));
    window.dispatchEvent(new Event("cookie-consent-given"));
    setVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // necessary cookies can't be rejected
      analytics: false,
      marketing: false
    };
    setConsentPreferences(rejected);
    localStorage.setItem("tracking-consent", "false");
    localStorage.setItem("consent-preferences", JSON.stringify(rejected));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("tracking-consent", "true");
    localStorage.setItem("consent-preferences", JSON.stringify(consentPreferences));
    window.dispatchEvent(new Event("cookie-consent-given"));
    setShowPreferences(false);
    setVisible(false);
  };

  const togglePreference = (key) => {
    setConsentPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!visible) return null;

  return (
    <>
      <div style={styles.bannerContainer}>
        <div style={styles.bannerContent}>
          <div style={styles.textContent}>
            <h4 style={styles.heading}>We respect your privacy</h4>
            <p style={styles.description}>
              We use cookies to enhance your experience, analyze traffic, and serve tailored ads. 
              You can manage your preferences or accept all cookies.
            </p>
          </div>
          <div style={styles.buttonGroup}>
            <button 
              data-label="accept all cookies" 
              onClick={handleAcceptAll} 
              style={{ ...styles.button, ...styles.accept }}
            >
              Accept All
            </button>
            <button 
              data-label="reject all cookies" 
              onClick={handleRejectAll} 
              style={{ ...styles.button, ...styles.reject }}
            >
              Reject All
            </button>
            <button 
              data-label="manage cookie preferences" 
              onClick={() => setShowPreferences(true)} 
              style={{ ...styles.button, ...styles.manage }}
            >
              Manage
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h4 style={styles.modalHeading}>Cookie Preferences</h4>
            
            <div style={styles.preferenceItem}>
              <div>
                <h5 style={styles.preferenceTitle}>Necessary Cookies</h5>
                <p style={styles.preferenceDescription}>
                  Essential for the website to function properly.
                </p>
              </div>
              <label style={styles.toggleSwitch}>
                <input 
                  type="checkbox" 
                  checked={true} 
                  disabled 
                  style={styles.toggleInput}
                />
                <span style={styles.toggleSlider} />
              </label>
            </div>
            
            <div style={styles.preferenceItem}>
              <div>
                <h5 style={styles.preferenceTitle}>Analytics Cookies</h5>
                <p style={styles.preferenceDescription}>
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <label style={styles.toggleSwitch}>
                <input 
                  type="checkbox" 
                  checked={consentPreferences.analytics} 
                  onChange={() => togglePreference('analytics')}
                  style={styles.toggleInput}
                />
                <span style={styles.toggleSlider} />
              </label>
            </div>
            
            <div style={styles.preferenceItem}>
              <div>
                <h5 style={styles.preferenceTitle}>Marketing Cookies</h5>
                <p style={styles.preferenceDescription}>
                  Used to track visitors across websites for advertising purposes.
                </p>
              </div>
              <label style={styles.toggleSwitch}>
                <input 
                  type="checkbox" 
                  checked={consentPreferences.marketing} 
                  onChange={() => togglePreference('marketing')}
                  style={styles.toggleInput}
                />
                <span style={styles.toggleSlider} />
              </label>
            </div>
            
            <div style={styles.modalButtons}>
              <button 
                onClick={() => setShowPreferences(false)} 
                style={{ ...styles.button, ...styles.reject }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePreferences} 
                style={{ ...styles.button, ...styles.accept }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
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
    width: "100%",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flex: 1,
    minWidth: "120px",
  },
  accept: {
    backgroundColor: "#1a73e8",
    color: "#fff",
  },
  reject: {
    backgroundColor: "#e0e0e0",
    color: "#333",
  },
  manage: {
    backgroundColor: "transparent",
    color: "#1a73e8",
    border: "1px solid #1a73e8",
  },
  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  },
  modalHeading: {
    margin: "0 0 1.5rem",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#1a1a1a",
  },
  preferenceItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "1px solid #eee",
  },
  preferenceTitle: {
    margin: "0 0 0.25rem",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#1a1a1a",
  },
  preferenceDescription: {
    margin: 0,
    fontSize: "0.875rem",
    color: "#666",
    lineHeight: 1.5,
  },
  toggleSwitch: {
    position: "relative",
    display: "inline-block",
    width: "50px",
    height: "24px",
    minWidth: "50px",
    marginLeft: "1rem",
  },
  toggleInput: {
    opacity: 0,
    width: 0,
    height: 0,
    position: "absolute",
  },
  toggleSlider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    transition: ".4s",
    borderRadius: "24px",
  },
  toggleSliderActive: {
    backgroundColor: "#1a73e8",
  },
  toggleSliderFocus: {
    boxShadow: "0 0 1px #1a73e8",
  },
  toggleSliderBefore: {
    position: "absolute",
    content: '""',
    height: "16px",
    width: "16px",
    left: "4px",
    bottom: "4px",
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: "50%",
  },
  toggleSliderBeforeActive: {
    transform: "translateX(26px)",
  },
  modalButtons: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "2rem",
    justifyContent: "flex-end",
  },
};

export default CookieBanner;