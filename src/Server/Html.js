const Html = ({ body, title }) => `
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
   <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
   </head>
   <body>
      <div id="app">${body}</div>
      <script>
         // Register a service worker to make the app work offline
         if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
               navigator.serviceWorker.register('/service-worker.js').then(registration => {
                  console.log('SW registered: ', registration);
               }).catch(registrationerror => {
                  console.log('SW registration failed: ', registrationerror);
               });
            });
         }
      </script>
   </body>
</html>
`;

export default Html;