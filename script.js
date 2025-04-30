const container = document.getElementById("row");

for (let i = 0; i < 9; i++) {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const card = document.createElement("div");
  card.className = "card mb-4 shadow-sm";

  const img = document.createElement("img");
  img.src = "https://picsum.photos/id/237/300/200";
  img.className = "bd-placeholder-img card-img-top";
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = `Lorem Ipsum ${i + 1}`;

  const text = document.createElement("p");
  text.className = "card-text";
  text.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

  const footer = document.createElement("div");
  footer.className = "d-flex justify-content-between align-items-center";

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.className = "btn btn-sm btn-outline-secondary";
  viewBtn.textContent = "View";

  const hideBtn = document.createElement("button");
  hideBtn.type = "button";
  hideBtn.className = "btn btn-sm btn-outline-secondary";
  hideBtn.textContent = "Hide";

  btnGroup.appendChild(viewBtn);
  btnGroup.appendChild(hideBtn);

  const smallText = document.createElement("small");
  smallText.className = `sostId`;
  smallText.className = "text-muted";
  smallText.textContent = `${(i + 1) * 3} mins`;

  footer.appendChild(btnGroup);
  footer.appendChild(smallText);

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(footer);
  card.appendChild(cardBody);
  col.appendChild(card);
  container.appendChild(col);

  //brutto pk nel ciclo non va bene rivedere poi
  hideBtn.addEventListener("click", function (event) {
    event.preventDefault();

    col.classList.add("d-none");
  });
}

const arrayOfContainerImgs = document.querySelectorAll("img");
const arrayOfContainerImgsId = Array.from(document.getElementsByClassName("sostId"));

const query = "cat";
const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=9`;

fetch(URL, {
  headers: {
    Authorization: "5g8JSZnUDtJDA4iEXiQ3mF7QBAiCtbw5cV08XznA7E3V5f2bCDovWq27",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((catImgs) => {
    console.log("catImgs", catImgs);

    const arrOfPhoto = catImgs.photos;
    const arrOfIds = catImgs.id;

    document.getElementById("bottoneCaricamneto").addEventListener("click", function (event) {
      event.preventDefault();

      arrayOfContainerImgs.forEach((img, i) => {
        img.src = arrOfPhoto[i].src.portrait;
      });

      arrayOfContainerImgsId.forEach((id, i) => {
        id.textContent = arrOfIds[i];
      });
    });
  })
  .catch((error) => {
    console.error("Errore durante la richiesta:", error);
  });

const query2 = "fish";
const URL2 = `https://api.pexels.com/v1/search?query=${query2}&per_page=9`;

fetch(URL2, {
  headers: {
    Authorization: "5g8JSZnUDtJDA4iEXiQ3mF7QBAiCtbw5cV08XznA7E3V5f2bCDovWq27",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((fishImgs) => {
    const arrOfPhoto2 = fishImgs.photos;
    const arrOfIds2 = fishImgs.id;

    document.getElementById("bottoneCaricamneto2").addEventListener("click", function (event) {
      event.preventDefault();

      arrayOfContainerImgs.forEach((img, i) => {
        img.src = arrOfPhoto2[i].src.portrait;
      });

      arrayOfContainerImgsId.forEach((id, i) => {
        id.textContent = arrOfIds2[i];
      });
    });
  })
  .catch((error) => {
    console.error("Errore durante la richiesta:", error);
  });
