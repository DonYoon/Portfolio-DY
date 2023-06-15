
function loadPortfolio(portfolioId, fileName) {
    fetch(fileName)
      .then(response => response.text())
      .then(html => {
        document.getElementById(portfolioId).innerHTML = html;
        // initialize Prism after loading the HTML
        Prism.highlightAll();
      });
  }

  loadPortfolio("portfolioModal1Container", "portfolios/portfolio1.html");
  loadPortfolio("portfolioModal2Container", "portfolios/portfolio2.html");
  loadPortfolio("portfolioModal3Container", "portfolios/portfolio3.html");
  loadPortfolio("portfolioModal4Container", "portfolios/portfolio4.html");
  loadPortfolio("portfolioModal5Container", "portfolios/portfolio5.html");
  loadPortfolio("portfolioModal6Container", "portfolios/portfolio6.html");
  loadPortfolio("portfolioModal7Container", "portfolios/portfolio7.html");
  loadPortfolio("portfolioModal8Container", "portfolios/portfolio8.html");
  // Add more calls for other portfolios