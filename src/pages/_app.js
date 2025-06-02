import { useRouter } from "next/router"; // make sure to import router
import React, { useEffect } from "react";
import Head from "next/head";
import appData from "@content/data/setting.json";
import "../styles/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const TWITTER_ID = process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID;
    const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    function hasConsent() {
      return localStorage.getItem("cookies-accepted") === "true";
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
      if (GA_ID) {
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

      if (TWITTER_ID) {
        loadScript({
          textContent: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
            s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
          u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}
          (window,document,'script');
          twq('config','${TWITTER_ID}');`,
        });
      }

      if (CLARITY_ID) {
        loadScript({
          textContent: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");`,
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

      // No-script fallback
      setTimeout(() => {
        if (FB_ID) {
          const fbImg = document.createElement("img");
          fbImg.src = `https://www.facebook.com/tr?id=${FB_ID}&ev=PageView&noscript=1`;
          fbImg.height = 1;
          fbImg.width = 1;
          fbImg.style.display = "none";
          document.body.appendChild(fbImg);
        }

        if (LINKEDIN_ID) {
          const liImg = document.createElement("img");
          liImg.src = `https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_ID}&fmt=gif`;
          liImg.height = 1;
          liImg.width = 1;
          liImg.style.display = "none";
          document.body.appendChild(liImg);
        }
      }, 1000);
    }

    if (hasConsent()) loadTrackers();

    window.addEventListener("cookie-consent-given", () => {
      localStorage.setItem("cookies-accepted", "true");
      loadTrackers();
    });

    // Click tracking (general)
    const handleClick = (e) => {
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
        console.log(`GA4 tracked click: ${label}`);
      }
    };
document.addEventListener("click", handleClick);
    // Scroll depth tracking
    const scrollThresholds = [25, 50, 75, 100];
    const firedScrollEvents = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !firedScrollEvents.has(threshold)) {
          firedScrollEvents.add(threshold);
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              event_category: "engagement",
              event_label: `${threshold}%`,
              value: threshold,
            });
            console.log(`GA4 scroll depth: ${threshold}%`);
          }
        }
      });
    };

    // Time on page tracking
    const timeEvents = [
      { seconds: 15, label: "15s_engaged" },
      { seconds: 30, label: "30s" },
      { seconds: 60, label: "60s" },
      { seconds: 180, label: "3min" },
    ];

    timeEvents.forEach(({ seconds, label }) => {
      setTimeout(() => {
        if (typeof window.gtag === "function") {
          window.gtag("event", "time_on_page", {
            event_category: "engagement",
            event_label: label,
            value: seconds,
          });
          console.log(`GA4 time on page: ${label}`);
        }
      }, seconds * 1000);
    });

    // Route Change Tracking with enhanced labels
    const handleRouteChange = (url) => {
      if (typeof window.gtag === "function") {
        const userRole = window.userRole || "guest"; // example: replace with your actual user data
        window.gtag("event", "page_view", {
          page_path: url,
          page_location: window.location.href,
          page_title: document.title,
          user_role: userRole,
          custom_campaign: getCampaignFromUrl(),
        });
        console.log(`GA4 route change: ${url}`);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Form Submission Tracking with enhanced labels
    const handleFormSubmit = (e) => {
      const form = e.target.closest("form");
      if (!form) return;

      const label = form.getAttribute("data-label") || form.name || form.id || "form_submission";
      const formType = form.getAttribute("data-form-type") || "generic";
      const page = window.location.pathname;

      if (typeof window.gtag === "function") {
        window.gtag("event", "form_submit", {
          event_category: "engagement",
          event_label: label,
          form_type: formType,
          page_location: page,
        });
        console.log(`GA4 form submitted: ${label} on ${page}`);
      }
    };

    document.addEventListener("submit", handleFormSubmit);

    // Outbound Link Tracking with enhanced labels
    const handleOutboundClick = (e) => {
      const link = e.target.closest("a");
      if (!link || !link.href) return;

      const isOutbound = !link.href.includes(window.location.hostname);
      if (isOutbound) {
        const url = link.href;
        const domain = new URL(url).hostname;
        const linkText = link.textContent.trim() || "no_text";

        if (typeof window.gtag === "function") {
          window.gtag("event", "click", {
            event_category: "outbound",
            event_label: url,
            outbound_domain: domain,
            link_text: linkText,
            transport_type: "beacon",
          });
          console.log(`GA4 outbound link: ${url}`);
        }
      }
    };

    document.addEventListener("click", handleOutboundClick);

    // Add to cleanup
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("submit", handleFormSubmit);
      document.removeEventListener("click", handleOutboundClick);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{appData.siteSettings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
