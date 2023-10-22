import React, { useEffect } from 'react';

const TawkTo3 = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/653471b8a84dd54dc483ae9e/1hdadoeot';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;

		document.body.appendChild(script);
	}, []);

	return <div id='tawkto-chat-widget' />;
};

export default TawkTo3;
