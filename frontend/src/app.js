const App = (function() {
  return class App {
    static init() {
      const searchForm = document.getElementById("searchBar");
      const recForm = document.getElementById("recommendBar");

      searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        App.clearSearchResults();
        let input = document.getElementById("userInputSearch").value;
        Adapter.searchBook(input).then(json => {
          let topFive = json.items.slice(0, 5);
          App.parseJson(topFive);
        });
        App.clearInputFields();
      });

      recForm.addEventListener("submit", function(event) {
        event.preventDefault();
        App.clearSearchResults();
        let input = document.getElementById("userInputRecommend").value;
        Adapter.recommendBooks(input).then(resultJson => {
          let topFive = resultJson.Similar.Results.slice(0, 5);
          if (topFive.length === 0) {
            // TODO: Add a function to pit a book not found div on page
            // Book.bookNotFound();
          } else {
            topFive.map(function(bookJSON) {
              let search = bookJSON.Name;
              Adapter.searchBook(search).then(json => {
                let googleTopFive = json.items.slice(0, 1);
                App.parseJson(googleTopFive);
              });
            });
          }
        });
        App.clearInputFields();
      });
    }

    static parseJson(bookJSON) {
      bookJSON.map(function(bookObj) {
        let bookParams = {
          previewLink: bookObj.volumeInfo.previewLink,
          googleId: bookObj.id,
          title: bookObj.volumeInfo.title,
          authors: bookObj.volumeInfo.authors,
          publishedDate: bookObj.volumeInfo.publishedDate,
          averageRating: bookObj.volumeInfo.averageRating,
          description: bookObj.volumeInfo.description,
          imageLink: bookObj["volumeInfo"]["imageLinks"]
        };
        let newBook = new Book(bookParams);
        newBook.render();
      });
    }

    static clearSearchResults() {
      document.getElementById("resultsA").innerHTML = "";
    }
    static clearInputFields() {
      document.getElementById("userInputSearch").value = "";
      document.getElementById("userInputRecommend").value = "";
    }
  };
})();
