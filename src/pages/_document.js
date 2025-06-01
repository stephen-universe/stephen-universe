import Document, { Html, Head, Main, NextScript } from "next/document";
// pages/_document.js


class MyDocument extends Document {
  render() {
    
    const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const TWITTER_ID = process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID;
    const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    return (
      <Html>
        <Head>{/* You can add head-specific tags here */}
 {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.ico" />
          <link rel="manifest" href="/favicon/manifest.json" />
          {/* favicon */}
 {/* public assets begin */}

          {/* public assets end */}

        </Head>
        <body>
          <Main />
          <NextScript />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function() {
                  const GA_ID = "${GA_ID}";
                  const FB_ID = "${FB_ID}";
                  const TWITTER_ID = "${TWITTER_ID}";
                  const LINKEDIN_ID = "${LINKEDIN_ID}";
                  const CLARITY_ID = "${CLARITY_ID}";

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

                  function loadScript({ src, async = true, textContent }) {
                    const s = document.createElement('script');
                    if (src) {
                      s.src = src;
                      s.async = async;
                    }
                    if (textContent) {
                      s.text = textContent;
                    }
                    document.body.appendChild(s);
                  }

                  function loadTrackers() {
                    if (GA_ID) {
                      loadScript({ src: "https://www.googletagmanager.com/gtag/js?id=" + GA_ID });
                      loadScript({
                        textContent: \`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '\${GA_ID}');
                        \`
                      });
                    }

                    if (FB_ID) {
                      loadScript({
                        textContent: \`!function(f,b,e,v,n,t,s)
                          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                          n.queue=[];t=b.createElement(e);t.async=!0;
                          t.src=v;s=b.getElementsByTagName(e)[0];
                          s.parentNode.insertBefore(t,s)}(window, document,'script',
                          'https://connect.facebook.net/en_US/fbevents.js');
                          fbq('init', '\${FB_ID}');
                          fbq('track', 'PageView');\`
                      });
                    }

                    if (TWITTER_ID) {
                      loadScript({
                        textContent: \`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                        twq('config','\${TWITTER_ID}');\`
                      });
                    }

                    if (CLARITY_ID) {
                      loadScript({
                        textContent: \`(function(c,l,a,r,i,t,y){
                          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "\${CLARITY_ID}");\`
                      });
                    }

                    if (LINKEDIN_ID) {
                      loadScript({
                        textContent: \`(function(l) {
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
                        })(window.lintrk);\`
                      });
                    }

                    setTimeout(() => {
                      if (FB_ID) {
                        const fbImg = document.createElement("img");
                        fbImg.src = "https://www.facebook.com/tr?id=" + FB_ID + "&ev=PageView&noscript=1";
                        fbImg.height = 1;
                        fbImg.width = 1;
                        fbImg.style.display = "none";
                        document.body.appendChild(fbImg);
                      }

                      if (LINKEDIN_ID) {
                        const liImg = document.createElement("img");
                        liImg.src = "https://px.ads.linkedin.com/collect/?pid=" + LINKEDIN_ID + "&fmt=gif";
                        liImg.height = 1;
                        liImg.width = 1;
                        liImg.style.display = "none";
                        document.body.appendChild(liImg);
                      }
                    }, 1000);
                  }
                })();
              `,
              }}
            />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

