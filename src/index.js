if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationerror => {
      console.log('SW registration failed: ', registrationerror);
    });
  });
}

function component() {
   const element = document.createElement('div');

   element.innerHTML = '<h1>Hello World!</h1>'

   return element;
 }

 document.body.appendChild(component());