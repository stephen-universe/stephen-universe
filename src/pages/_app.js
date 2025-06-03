import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import appData from "@content/data/setting.json";
import "../styles/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieBanner from "../../components/cookie-banner"; // Adjust path as needed

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    function hasConsent(category) {
      const savedPreferences = localStorage.getItem("consent-preferences");
      if (!savedPreferences) return false;
      
      const preferences = JSON.parse(savedPreferences);
      return preferences[category];
    }

    function loadScript({ src, async = true, textContent }) {
      const s = document.createElement("script");
      if (src) s.src = src;
      if (textContent) s.text = textContent;
      s.async = async;
      document.body.appendChild(s);
    }

    function getCampaignFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("utm_campaign") || params.get("campaign") || "none";
    }

    function loadTrackers() {
      // Only load analytics if consented
      if (hasConsent("analytics") && GA_ID) {
        loadScript({ src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}` });
        loadScript({
          textContent: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        });
      }
      const campaign = getCampaignFromUrl();
        if (hasConsent("analytics") && GA_ID) {
          window.gtag('config', GA_ID, {
            campaign: campaign
          });
        }
      // Only load marketing if consented
      if (hasConsent("marketing")) {
        if (FB_ID) {
          loadScript({
            textContent: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_ID}');
              fbq('track', 'PageView');`,
          });
        }

        if (LINKEDIN_ID) {
          loadScript({
            textContent: `(function(l) {
              if (!l) {
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);`,
          });
        }
      }

      if (hasConsent("analytics") && CLARITY_ID) {
        loadScript({
          textContent: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");`,
        });
      }

      // No-script fallback
      setTimeout(() => {
        if (hasConsent("marketing") && FB_ID) {
          const fbImg = document.createElement("img");
          fbImg.src = `https://www.facebook.com/tr?id=${FB_ID}&ev=PageView&noscript=1`;
          fbImg.height = 1;
          fbImg.width = 1;
          fbImg.style.display = "none";
          document.body.appendChild(fbImg);
        }

        if (hasConsent("marketing") && LINKEDIN_ID) {
          const liImg = document.createElement("img");
          liImg.src = `https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_ID}&fmt=gif`;
          liImg.height = 1;
          liImg.width = 1;
          liImg.style.display = "none";
          document.body.appendChild(liImg);
        }
      }, 1000);
    }

    // Check if we have any consent at all
    const consentGiven = localStorage.getItem("tracking-consent");
    if (consentGiven === "true") {
      loadTrackers();
    }

    window.addEventListener("cookie-consent-given", loadTrackers);

    // Event tracking functions (modified to check consent)
    const handleClick = (e) => {
      if (!hasConsent("analytics")) return;
      
      const target = e.target.closest("button, a");
      if (!target) return;

      const label =
        target.getAttribute("data-label") ||
        target.id ||
        target.name ||
        target.textContent?.trim() ||
        target.href ||
        "unknown_click";

      if (typeof window.gtag === "function") {
        window.gtag("event", "click", {
          event_category: "engagement",
          event_label: label,
        });
      }
    };
document.addEventListener("click", handleClick);
    // ... (keep all your other tracking functions, but add consent checks at the start)
    // For example, at the start of handleScroll, handleFormSubmit, etc. add:
    // if (!hasConsent("analytics")) return;

    // Add to cleanup
    return () => {
      // ... (keep your existing cleanup code)
      window.removeEventListener("cookie-consent-given", loadTrackers);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{appData.siteSettings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;