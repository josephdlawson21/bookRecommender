const App = (function() {
  return class App {
    static init() {
      const searchForm = document.getElementById("searchBar");
      const recForm = document.getElementById("recommendBar");
      const logIn = document.getElementById("logIn");

      //event listener for search book
      searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        App.clearSearchResults();
        let input = document.getElementById("userInputSearch").value;
        Adapter.searchBook(input).then(json => {
          let topFive = json.items.slice(0, 6);
          let bookArr = App.parseJson(topFive);
          App.renderSearchArr(bookArr);
        });
        App.clearInputFields();
      });

      //event listener for recomend book
      recForm.addEventListener("submit", function(event) {
        event.preventDefault();
        App.clearSearchResults();
        let input = document.getElementById("userInputRecommend").value;
        Adapter.recommendBooks(input).then(resultJson => {
          let topFive = resultJson.Similar.Results.slice(0, 6);
          if (topFive.length === 0) {
            // TODO: Add a function to pit a book not found div on page
            // Book.bookNotFound();
          } else {
            topFive.map(function(bookJSON) {
              let search = bookJSON.Name;
              Adapter.searchBook(search).then(json => {
                let googleTopFive = json.items.slice(0, 1);
                let bookArr = App.parseJson(googleTopFive);
                App.renderSearchArr(bookArr);
              });
            });
          }
        });
        App.clearInputFields();
      });

      logIn.addEventListener("submit", function(event) {
        event.preventDefault();
        let userName = document.getElementById("userName").value;
        Adapter.logIn(userName).then(json => {
          // takes search bar off page and enters welcome message in navbar
          let userId = json.id;
          event.target.innerHTML = `<p id="userP">Hello, ${userName}!</p>`;
          document.getElementById("userP").dataset.userId = userId;

          // loads user books
          Adapter.getBooks(userId).then(json => {
            App.parseBookshelfJson(json);
          });
        });
      });
    }

    //////////   HELPER METHODS  ////////////////////////////////////////////////

    // creates a book object from the search/recommend json and renders
    static parseJson(bookJSON) {
      return bookJSON.map(function(bookObj) {
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
        return new Book(bookParams);
      });
    }

    static renderSearchArr(bookArr) {
      bookArr.forEach(bookObj => bookObj.renderSearch());
    }

    static parseBookshelfJson(apiJson) {
      apiJson.forEach(obj => {
        let bookId = obj.id;
        Adapter.searchBook(obj.googleId)
          .then(json => {
            let jsonObj = json.items;
            return App.parseJson(jsonObj);
          })
          .then(book => book[0].bookshelfRender(bookId));
      });
    }

    static clearSearchResults() {
      document.getElementById("resultsA").innerHTML = "";
    }
    static clearInputFields() {
      document.getElementById("userInputSearch").value = "";
      document.getElementById("userInputRecommend").value = "";
    }
    static clearLogin() {
      document.getElementById("userName").value = "";
    }
  };
})();
