function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true; // async 속성 추가
    script.src = url;

    script.onload = function() {
        if (callback) callback();
    };

    document.head.appendChild(script);
}

// Google Tag Manager 스크립트를 로드하고 설정하는 함수
function loadGoogleTagManager() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZR8XBX1S6C');
}

// Google Tag Manager 스크립트 로드
loadScript("https://www.googletagmanager.com/gtag/js?id=G-ZR8XBX1S6C", loadGoogleTagManager);


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61068885-1', 'auto');
  ga('send', 'pageview');
