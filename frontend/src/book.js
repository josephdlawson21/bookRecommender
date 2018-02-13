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
      // let li = document.createElement("li");
      // let results = document.getElementById("resultsA");
      // li.innerText = this.makeTile();
      // results.append(li);
      this.makeTile();
    }

    makeTile() {
      //create tile elements
      let bookTile = document.createElement("div");
      bookTile.class = "bookTile";
      // let deleteButton = document.createElement("div");
      // deleteButton.innerText = "X";
      let left = document.createElement("div");
      left.class = "left";
      let bookInfo = document.createElement("ul");
      bookInfo.class = "bookInfo";
      let titleLi = document.createElement("li");
      let authorLi = document.createElement("li");
      let pubDateLi = document.createElement("li");
      let avgRatingLi = document.createElement("li");
      let right = document.createElement("div");
      left.class = "right";
      let bookLink = document.createElement("a");
      let coverImage = document.createElement("img");
      let results = document.getElementById("resultsA");

      //add specific book data
      bookLink.href = this.previewLink;
      if (this.imageLink && this.imageLink.thumbnail) {
        coverImage.src = this.imageLink.thumbnail;
      } else {
        coverImage.src = "https://gph.is/1dKOovp";
      }
      coverImage.alt = this.title;
      titleLi.innerHTML = `Title: ${this.title}`;

      let authorData;
      if (this.authors) {
        authorData = this.authors.join(", ");
      } else {
        authorData = "Not Listed";
      }
      authorLi.innerHTML = `Authors: ${authorData}`; //<- MAKE RENDER ALL AUTHORS
      pubDateLi.innerHTML = `Published: ${this.publishedDate}`;
      // avgRating.innerHTML = `Avg Rating: ${this.averageRating}`;

      //assemble pieces
      bookInfo.append(titleLi);
      bookInfo.append(authorLi);
      bookInfo.append(pubDateLi);
      // bookInfo.append(avgRatingLi);
      left.append(bookInfo);

      bookLink.append(coverImage);
      right.append(bookLink);

      //assemble tile
      // bookTile.append(deleteButton);
      bookTile.append(left);
      bookTile.append(right);
      results.append(bookTile);
    }

    // <div class="bookTile">
    //   <div class="deleteButton">X</div>
    //   <div class="left">
    //     <ul class="bookInfo">
    //       <li>Title</li>
    //       <li>Author</li>
    //       <li>Publication Date</li>
    //       <li>Avg Rating:</li>
    //     </ul>
    //   </div>
    //   <div class="right">
    //     <a href="#">
    //       <img src="" alt="book_cover">
    //     </a>
    //   </div>
    // </div>
  };
})();
