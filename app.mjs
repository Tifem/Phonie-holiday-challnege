function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    console.log('Check your phone service provider');
  
    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'Check your phone service provider';
    }
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //