import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== "production") return;

  const trackingScripts = (
    <>
      <script
        key="ga-tag"
        dangerouslySetInnerHTML={{
          __html: `            
        window.dataLayer = window.dataLayer || [];          
        function gtag(){dataLayer.push(arguments);}           
        gtag('js', new Date());          
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');          
        `,
        }}
      />
      <script
        key="ga-src"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID`}
      />
      <script
        key="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `            
          !function(f,b,e,v,n,t,s) { 
            if(f.fbq)return; 
            n=f.fbq=function(){n.callMethod? 
            n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
            if(!f._fbq)f._fbq=n; 
            n.push=n; 
            n.loaded=!0; 
            n.version='2.0'; 
            n.queue=[]; 
            t=b.createElement(e); 
            t.async=!0; 
            t.src=v; 
            s=b.getElementsByTagName(e)[0]; 
            s.parentNode.insertBefore(t,s)
          }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); 
          fbq('init', 'YOUR_FB_PIXEL_ID'); 
          fbq('track', 'PageView');`,
        }}
      />
      <script
        key="twitter-pixel"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n,s,u,a){ 
            e.twq||(s=e.twq=function(){
              s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            }, 
            s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
            u.src='//static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
          }(window,document,'script');
          twq('init','YOUR_TWITTER_PIXEL_ID');
          twq('track','PageView');`,
        }}
      />
      {/* Microsoft Clarity */}
      <script
        key="clarity"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){ 
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; 
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
          })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");`,
        }}
      />
    </>
  );

  const consentLogic = (
    <script
      key="consent-handler"
      dangerouslySetInnerHTML={{
        __html: `
        function hasConsent() {
          return localStorage.getItem('cookies-accepted') === 'true';
        }

        window.addEventListener('cookie-consent-given', function () {
          localStorage.setItem('cookies-accepted', 'true');
          loadTrackers();
        });

        if (hasConsent()) {
          loadTrackers();
        }

        function loadTrackers() {
          const fragment = document.createRange().createContextualFragment(\`
            ${trackingScripts.props.children
              .filter(script => script.props?.dangerouslySetInnerHTML)
              .map(script => script.props.dangerouslySetInnerHTML.__html)
              .join('')}
          \`);
          document.body.appendChild(fragment);
        }
        `,
      }}
    />
  );

  setPostBodyComponents([consentLogic]);
};
