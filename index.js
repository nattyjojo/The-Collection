import { collections } from  "./collections.js";


const headertextColor = "rgb(11, 11, 11)";
const headertextColorValue = "rgb(153, 153, 153)";
const articleTextColor = "rgb(8, 8, 8)";
const positionValueColor = "rgb(255, 221, 87)";
const positionColor = "rgb(87, 195, 255)";

const header = document.createElement("h1");
header.textContent = "John Doe's Collection";
Object.assign(header.style, {
  color: "rgb(23, 32, 154)",
});
const content = document.createElement("p");
content.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam unde deleniti facilis soluta nesciunt aspernatur et corporis. Qui eum quod natus eius doloribus aliquam perspiciatis placeat aperiam dolor architecto.";
Object.assign(content.style, {
  color: "rgb(78, 84, 172)",
});

const headerWrapper = document.createElement("header");
Object.assign(headerWrapper.style, {
  textAlign: "center",
  whiteSpace: "wrap",
});
headerWrapper.append(header, content);

const icon = document.createElement("span");
Object.assign(icon.style, {
  backgroundColor: "rgb(18, 27, 152)",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
});

//search bar
const searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("value", "Search");
searchBar.addEventListener("keydown", function(event){
  searchBar.setAttribute("value", "");
});
// searched auto complete display
const autoComplete = document.createElement("span")
Object.assign(autoComplete.style,{
})
// filter searched from cards
searchBar.addEventListener("keyup", function(event){
  const searched = searchBar.value.toUpperCase();
  for(let i = 0; i < collections.length; i++){    
    if(collections[i].name.slice(0,searched.length) === searched){
      autoComplete.textContent=collections[i].name;
    }
  }
})
searchBar.style.width = "90%";
searchBar.addEventListener("keyup", function (event) {
  const searchValue = event.target.value;
  for (let i = 0; i < searchValue.length; i++) {}
});
const iconSearchWrapper = document.createElement("section");
iconSearchWrapper.append(icon, searchBar);
Object.assign(iconSearchWrapper.style, {
  display: "grid",
  gridTemplateColumns: "auto auto",
  justifyContent: "space-between",
});
Object.assign(iconSearchWrapper.style, {});

document.body.append(iconSearchWrapper, headerWrapper);
const mainWrapper = document.createElement("section");
const card = () => {
  const genreSpan = document.createElement("span");
  genreSpan.textContent = "position:";
  Object.assign(genreSpan.style, {
    backgroundColor: positionColor,
    borderRadius: "5px",
    padding: "5px",
    marginRight: "10px",
    color: "genreValue",
    fontSize: "10px",
  });

  const genreSpan2 = document.createElement("span");
  genreSpan2.setAttribute("class", "position");
  Object.assign(genreSpan2.style, {
    backgroundColor: positionValueColor,
    borderRadius: "5px",
    padding: "5px 15px 5px 5px",
    fontSize: "10px",
  });

  const cardname = document.createElement("h2");
  cardname.textContent = "name: ";
  Object.assign(cardname.style, {
    display: "inline",
    color: headertextColor,
    fontSize: "14px",
  });

  const cardnameValue = document.createElement("h3");
  cardnameValue.textContent = "";
  Object.assign(cardnameValue.style, {
    display: "inline",
    color: headertextColorValue,
    fontSize: "10px",
  });

  const cardArticleContent = document.createElement("p");
  Object.assign(cardArticleContent.style, {
    color: articleTextColor,
    fontSize: "10px",
    lineHeight: "15px",
  });

  const cardHearder = document.createElement("header");
  cardHearder.setAttribute("class", "header");
  cardHearder.append(cardname, cardnameValue, cardArticleContent);
  Object.assign(cardHearder.style, {
    marginTop: "20px",
  });

  const cardArticle = document.createElement("article");
  cardArticle.setAttribute("class", "article");
  cardArticle.append(genreSpan, genreSpan2, cardHearder);

  Object.assign(cardArticle.style, {
    padding: "20px",
  });

  const img = document.createElement("img");
  img.setAttribute("class", "Card_image");
  Object.assign(img.style, {
    width: "100%",
    height: "128px",
  });

  const main = document.createElement("main");
  const displayBig = () => {
    Object.assign(main.style, {
      transition: "all 1s",
    });
  };
  main.addEventListener("onmouseover", displayBig())


  main.setAttribute("class", "card");
  Object.assign(main.style, {
    margin: "20px",
    backgroundColor: "rgb(255, 255, 255)",
  });

  main.append(img, cardArticle);
  mainWrapper.append(main);
  document.body.append(mainWrapper);
};
const cardHorizontalRule = document.createElement("hr");
const cardYoutubeIcon = document.createElement("i");
cardYoutubeIcon.setAttribute("class", "fa-brands fa-youtube fa-2x");
const footer = document.createElement("footer");
footer.append(cardHorizontalRule, cardYoutubeIcon);

// created card for each player
const addCards = () => {
  for (let i = 0; i < collections.length; i++) {
    card();
  }
  document.body.append(footer);
};
addCards();

const addCardsContent = () => {
  const cards = document.getElementsByClassName("card");
  const cardArticles = document.getElementsByClassName("article");
  const cardHeader = document.getElementsByClassName("header");

  for (let i = 0; i < cards.length; i++) {
    // img add
    const addimg = cards[i].querySelector("img");
    addimg.setAttribute("src", collections[i].src);
   
    // position add
    const addposition = cardArticles[i].querySelector(".position");
    addposition.textContent = collections[i].position;
    // name add
    const addname = cardHeader[i].querySelector("h3");
    addname.textContent = collections[i].name;
    // about player
    const aboutPlayer = cardHeader[i].querySelector("p");
    aboutPlayer.textContent = collections[i].about;
  }
};
addCardsContent();
Object.assign(document.body.style, {
  backgroundColor: "rgb(242, 242, 242)",
});

const mediaQueryIpad = window.matchMedia("(min-width: 350px)");
const mediaQueryPc = window.matchMedia("(min-width: 1000px)");

const handleMediaQuery = () => {
  if (mediaQueryPc.matches) {
    Object.assign(mainWrapper.style, {
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
    });
    Object.assign(document.body.style, {
      padding: "40px 80px",
    });
  } else if (mediaQueryIpad.matches) {
    Object.assign(mainWrapper.style, {
      gridTemplateColumns: "auto auto",
    });
  } else {
    Object.assign(mainWrapper.style, {
      display: "block",
    });
    Object.assign(document.body.style, {
      padding: "5px 10px",
    });
  }
};
handleMediaQuery();
mediaQueryIpad.addEventListener("change", handleMediaQuery);
mediaQueryPc.addEventListener("change", handleMediaQuery);
