const Adapter = (function() {
  const tasteDive = tasteDiveKey();
  const GoogleBooks = googleKey();
  const googleBASE = "https://www.googleapis.com/books/v1/volumes?&q=";
  const tasteBase = "https://tastedive.com/api/similar?type=books&q=";
  const apiLogIn = "http://localhost:3000/users/";

  return class Adapter {
    static searchBook(searchTerms) {
      let query = searchTerms.split(" ").join("+");
      return fetch(googleBASE + query).then(response => response.json());
    }

    static recommendBooks(searchTerms) {
      let query = searchTerms.split(" ").join("+");
      return fetch(tasteBase + query + tasteDive).then(response =>
        response.json()
      );
    }

    static logIn(userName) {
      let userParams = { name: userName };
      return fetch(apiLogIn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userParams)
      }).then(response => response.json());
    }

    static getBooks(id) {
      return fetch(apiLogIn + id + "/books").then(response => response.json());
    }

    static addBook(id, bookId) {
      let bookParams = { googleId: bookId };
      return fetch(apiLogIn + id + "/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookParams)
      }).then(response => response.json());
    }
  };
})();
