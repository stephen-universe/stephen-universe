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
            gtag('config', 'GA4_MEASUREMENT_ID');          
          `,
        }}
      />
      <script
        key="ga-src"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=GA4_MEASUREMENT_ID`}
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
            fbq('init', 'FB_PIXEL_ID'); 
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
          twq('init','TWITTER_PIXEL_ID');
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
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");`,
        }}
      />
      {/* LinkedIn Insight Tag */}
      <script
        key="linkedin"
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
        }}
      />
      <script
        key="linkedin-loader"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })();
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=LINKEDIN_PARTNER_ID&fmt=gif"
        />
      </noscript>
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
