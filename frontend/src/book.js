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
      let card = document.createElement("div");
      card.className = "card";

      //image
      let cardImageDiv = document.createElement("div");
      cardImageDiv.className =
        "card-image waves-effect waves-block waves-light";
      let cardImage = document.createElement("img");
      cardImage.className = "activator";
      if (this.imageLink && this.imageLink.thumbnail) {
        cardImage.src = this.imageLink.thumbnail;
      } else {
        cardImage.src = "https://gph.is/1dKOovp";
      }
      cardImageDiv.append(cardImage);
      card.append(cardImageDiv);

      //content
      let cardContentDiv = document.createElement("div");
      cardContentDiv.className = "card-content";
      let titleSpan = document.createElement("span");
      titleSpan.className = "card-title activator grey-text text-darken-4";
      let materialTrigger = `<i class="material-icons right">more_vert</i>`;
      titleSpan.innerHTML = this.title + materialTrigger;
      let gBooksLinkP = document.createElement("p");
      let gbooksLink = document.createElement("a");
      gbooksLink.href = this.previewLink;
      gbooksLink.innerHTML = "View on Google";
      gBooksLinkP.append(gbooksLink);
      cardContentDiv.append(titleSpan);
      cardContentDiv.append(gBooksLinkP);
      card.append(cardContentDiv);

      let moreInfo = document.createElement("p");
      moreInfo;

      document.getElementById("resultsA").append(card);
    }

    //   <div class="card">
    //   <div class="card-image waves-effect waves-block waves-light">
    //     <img class="activator" src="images/office.jpg">
    //   </div>
    //   <div class="card-content">
    //     <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
    //     <p><a href="#">This is a link</a></p>
    //   </div>
    //   <div class="card-reveal">
    //     <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    //     <p>Here is some more information about this product that is only revealed once clicked on.</p>
    //   </div>
    // </div>
  };
})();
