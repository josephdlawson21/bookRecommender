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

      //image
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

      //content
      let cardContentDiv = document.createElement("div");
      cardContentDiv.className = "card-content";
      let titleSpan = document.createElement("span");
      titleSpan.className =
        "card-title grey-text text-darken-4 flow-text spanFix";
      titleSpan.innerHTML = this.title;
      let addButton = document.createElement("a");
      addButton.className =
        "btn-floating right z-depth-4 waves-effect waves-light red";
      addButton.innerHTML = '<i class="material-icons btn-fix">add</i></a>';
      let gBooksLinkP = document.createElement("p");
      let gbooksLink = document.createElement("a");
      gbooksLink.href = this.previewLink;
      gbooksLink.innerHTML = "View on Google";
      gBooksLinkP.append(gbooksLink);
      titleSpan.append(addButton);
      cardContentDiv.append(titleSpan);
      cardContentDiv.append(gBooksLinkP);
      card.append(cardContentDiv);

      //back of card
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

      document.getElementById("resultsA").append(card);
    }
  };
})();
