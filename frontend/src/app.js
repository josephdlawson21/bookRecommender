const App = (function() {
  return class App {
    static init() {
      const searchForm = document.getElementById("searchBar");
      const recForm = document.getElementById("recommendBar");

      searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let input = document.getElementById("userInputSearch").value;
        Adapter.searchBook(input).then(json => {
          let topFive = json.items.slice(0, 5);
          topFive.map(function(bookJSON) {
            let bookParams = {
              googleId: bookJSON.id,
              title: bookJSON.volumeInfo.title,
              authors: bookJSON.volumeInfo.authors,
              publishedDate: bookJSON.volumeInfo.publishedDate,
              averageRating: bookJSON.volumeInfo.averageRating,
              imageLink: bookJSON.volumeInfo.imageLinks.thumbnail
            };
            let newBook = new Book(bookParams);
            newBook.render();
          });
        });
      });

      recForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let input = document.getElementById("userInputRecommend").value;
        Adapter.recommendBooks(input);
      });
    }
  };
})();
