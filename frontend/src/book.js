const Book = (function() {
  return class Book {
    constructor({
      id,
      googleId,
      title,
      authors,
      publishedDate,
      averageRating,
      imageLink,
      previewLink
    }) {
      (this.id = id),
        (this.googleId = googleId),
        (this.title = title),
        (this.authors = authors),
        (this.publishedDate = publishedDate),
        (this.averageRating = averageRating),
        (this.imageLink = imageLink),
        (this.previewLink = previewLink);
    }

    render() {
      let li = document.createElement("li");
      let results = document.getElementById("resultsA");
      li.innerText = this.title;
      results.append(li);
    }
  };
})();
