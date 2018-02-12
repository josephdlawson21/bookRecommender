const App = (function() {
  return class App {
    static init() {
      const searchForm = document.getElementById("searchBar");
      const recForm = document.getElementById("recommendBar");

      searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let input = document.getElementById("userInputSearch").value;
        Adapter.searchBook(input);
      });

      recForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let input = document.getElementById("userInputRecommend").value;
      });
    }
  };
})();
