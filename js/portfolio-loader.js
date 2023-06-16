//js/portfolio-loader.js

function loadPortfolio(portfolioId, fileName) {
  fetch(fileName)
    .then(response => response.text())
    .then(html => {
      document.getElementById(portfolioId).innerHTML = html;
      // initialize Prism after loading the HTML
      Prism.highlightAll();

      // Show the modal after the HTML has been loaded
      var modalId = portfolioId.replace('Container', '');
      var modalElement = document.getElementById(modalId);
      // Use setTimeout to delay the initialization until the HTML is rendered
      setTimeout(() => {
        var myModal = bootstrap.Modal.getInstance(modalElement);
        // Only create a new Modal instance if it doesn't already exist
        if (!myModal) {
          myModal = new bootstrap.Modal(modalElement, {});
        }
        myModal.show();
      }, 0);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const portfolioItems = document.getElementsByClassName('portfolio-item');

  for(let i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default click action
          loadPortfolio(`portfolioModal${i+1}Container`, `portfolios/portfolio${i+1}.html`);
      });
  }
});



 

