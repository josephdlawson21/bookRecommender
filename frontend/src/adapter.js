const Adapter = (function() {
  const tasteDive = tasteDiveKey();
  const GoogleBooks = googleKey();
  const googleBASE = "https://www.googleapis.com/books/v1/volumes?q=";

  return class Adapter {
    static searchBook(searchTerms) {
      let query = searchTerms.split(" ").join("+");
      console.log(query);
      return fetch(googleBASE + query)
        .then(response => response.json())
        .then(json => {
          console.log(json);
        });
    }
  };
})();
