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
      previewLink,
      description
    }) {
      (this.id = id),
        (this.googleId = googleId),
        (this.title = title),
        (this.authors = authors),
        (this.publishedDate = publishedDate),
        (this.averageRating = averageRating),
        (this.imageLink = imageLink),
        (this.previewLink = previewLink),
        (this.description = description);
    }

    renderSearch() {
      let card = document.createElement("div");
      card.className = "card col s12 m6 l4";

      //add book button
      let addButton = document.createElement("a");
      addButton.dataset.googleId = this.googleId;
      addButton.className =
        "btn-floating right z-depth-4 waves-effect waves-light red bookShelf";
      addButton.innerHTML = '<i class="material-icons btn-fix">add</i></a>';

      // event listener for add book button
      addButton.addEventListener("click", function() {
        let bookId = event.target.parentElement.dataset.googleId;
        let userId = document.getElementById("userP").dataset.id;
        Adapter.addBook(userId, bookId).then(json => {
          let bookShelf = document.getElementById("bookshelf");
          bookShelf.innerHTML = "";
          App.parseBookshelfJson(json);
        });
      });

      this.createCardImage(card);
      this.createContentDiv(card, addButton);
      this.createCardBack(card);
      document.getElementById("resultsA").append(card);
    }

    bookshelfRender(bookId) {
      let card = document.createElement("div");
      card.className = "card col s12 m6 l4";

      //delete book button
      let deleteButton = document.createElement("a");
      deleteButton.dataset.googleId = this.googleId;
      deleteButton.dataset.bookId = bookId;
      deleteButton.className =
        "btn-floating right z-depth-4 waves-effect waves-light red removeFromBookshelf";
      deleteButton.innerHTML =
        '<i class="material-icons btn-fix">delete</i></a>';

      //event listener for delete book button
      deleteButton.addEventListener("click", function() {
        let bookId = event.target.parentElement.dataset.bookId;
        let userId = document.getElementById("userP").dataset.id;
        Adapter.deleteBook(userId, bookId).then(json => {
          let bookShelf = document.getElementById("bookshelf");
          bookShelf.innerHTML = "";
          App.parseBookshelfJson(json);
        });
      });

      this.createCardImage(card);
      this.createContentDiv(card, deleteButton);
      this.createCardBack(card);
      document.getElementById("bookshelf").append(card);
    }

    createCardImage(card) {
      let cardImageDiv = document.createElement("div");
      cardImageDiv.className =
        "card-image waves-effect waves-block waves-light";
      let cardImage = document.createElement("img");
      cardImage.className = "activator";
      if (this.imageLink && this.imageLink.thumbnail) {
        cardImage.src = this.imageLink.thumbnail;
      } else {
        cardImage.src = "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif";
      }
      cardImageDiv.append(cardImage);
      card.append(cardImageDiv);
    }

    createContentDiv(card, button) {
      let cardContentDiv = document.createElement("div");
      cardContentDiv.className = "card-content";
      let titleSpan = document.createElement("span");
      titleSpan.className =
        "card-title grey-text text-darken-4 flow-text spanFix";
      titleSpan.innerHTML = this.title;

      let gBooksLinkP = document.createElement("p");
      let gbooksLink = document.createElement("a");
      gbooksLink.href = this.previewLink;
      gbooksLink.innerHTML = "View on Google";
      gbooksLink.setAttribute("target", "_blank");
      gBooksLinkP.append(gbooksLink);
      cardContentDiv.append(button);
      cardContentDiv.append(titleSpan);
      cardContentDiv.append(gBooksLinkP);
      card.append(cardContentDiv);
    }

    createCardBack(card) {
      let moreContent = document.createElement("div");
      moreContent.className = "card-reveal";

      let materialTriggerBack =
        '<i class="add-to-library material-icons right">close</i>';
      let backSpan = document.createElement("span");
      backSpan.className = "card-title grey-text text-darken-4 flow-text";
      backSpan.innerHTML = this.title + materialTriggerBack;

      let moreInfo = document.createElement("p");

      if (this.description) {
        moreInfo.innerHTML = this.description;
      } else {
        moreInfo.innerHTML = "No Information Available.";
      }

      moreContent.append(backSpan);
      moreContent.append(moreInfo);

      card.append(moreContent);
    }
  };
})();
