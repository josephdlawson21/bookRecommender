const Adapter = (function() {
  const tasteDive = tasteDiveKey();
  const GoogleBooks = googleKey();
  const googleBASE = "https://www.googleapis.com/books/v1/volumes?&q=";
  const tasteBase = "https://tastedive.com/api/similar?type=books&q=";

  return class Adapter {
    static searchBook(searchTerms) {
      let query = searchTerms.split(" ").join("+");
      return fetch(googleBASE + query).then(response => response.json());
    }

    static recommendBooks(searchTerms) {
      let query = searchTerms.split(" ").join("+");
      return fetch(tasteBase + query + tasteDive)
        .then(response => response.json())
        .then(json => {
          console.log(json);
        });
    }
  };
})();
