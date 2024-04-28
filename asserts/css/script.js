const apiUrl = "https://api.tvmaze.com/shows";
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response problem");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const moviesContainer = document.querySelector(".cards");
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const image = document.createElement("img");
      image.src = movie.image.medium;
      image.alt = movie.name;
      const overlay = document.createElement("div")
      overlay.classList.add("overlay");
      const text = document.createTextNode(
        `NAME: ${movie.name} / LANGUAGE: ${movie.language} / Genre: ${movie.genres}`
    );
          const para = document.createElement("p");
      para.appendChild(text);
      para.classList.add("title");
      overlay.appendChild(para);
      const overlayButton = document.createElement("button");
      overlayButton.innerHTML = "Show";
      overlayButton.classList.add("overlayButton")
      card.appendChild(overlayButton);
      overlayButton.addEventListener("click", ()=>{
        overlay.classList.toggle("overlayShow");
      })
      const content = document.createElement("div");
      content.classList.add("content");
      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = movie.name;
      const imdb = document.createElement("div");
      imdb.classList.add("imdb");
      imdb.textContent = `IMDb: ${movie.rating.average}`;
      content.appendChild(title);
      content.appendChild(imdb);
      card.appendChild(image);
      card.appendChild(content);
      card.appendChild(overlay);

      moviesContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Problem :", error);
  });
  document.getElementById("searchButton").addEventListener("click", () => {
  const searchValue = document.getElementById("searchInput").value.trim();
  const searchUrl = `https://api.tvmaze.com/search/shows?q=${searchValue}`;
  fetch(searchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Axtarışda problem yarandı");
      }
      return response.json();
    })
    .then((data) => {
      const moviesContainer = document.querySelector(".cards");
      moviesContainer.innerHTML = ""; 
      data.forEach((result) => {
        const movie = result.show;
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = movie.image.medium;
        image.alt = movie.name;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const text = document.createTextNode(
          `NAME: ${movie.name} / LANGUAGE: ${
            movie.language ? movie.language : "Unknown"
          } / Genre: ${movie.genres.join(", ")}`
        );
        const para = document.createElement("p");
        para.appendChild(text);
        para.classList.add("title");
        overlay.appendChild(para);
        const overlayButton = document.createElement("button");
        overlayButton.innerHTML = "Show";
        overlayButton.classList.add("overlayButton");
        card.appendChild(overlayButton);
        overlayButton.addEventListener("click", () => {
          overlay.classList.toggle("overlayShow");
        });
        const content = document.createElement("div");
        content.classList.add("content");
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = movie.name;
        const imdb = document.createElement("div");
        imdb.classList.add("imdb");
        imdb.textContent = `IMDb: ${
          movie.rating ? movie.rating.average : "Unknown"
        }`;
        content.appendChild(title);
        content.appendChild(imdb);
        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(overlay);
        moviesContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Problem :", error);
    });
});
document.getElementById("searchButton").addEventListener("click", () => {
  const searchValue = document.getElementById("searchInput").value.trim();
  const sortValue = document.getElementById("sortSelect").value;
  let searchUrl = `https://api.tvmaze.com/search/shows?q=${searchValue}`;
  if (sortValue === "asc") {
    searchUrl += "&sort=asc";
  } else {
    searchUrl += "&sort=desc"; 
  }
  fetch(searchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Axtarışda problem yarandı");
      }
      return response.json();
    })
    .then((data) => {
      const moviesContainer = document.querySelector(".cards");
      moviesContainer.innerHTML = ""; 
      data = data.filter((result) => {
        return result.show.rating && result.show.rating.average !== null;
      });
      data.sort((a, b) => {
        const ratingA = parseFloat(a.show.rating.average);
        const ratingB = parseFloat(b.show.rating.average);
        if (sortValue === "asc") {
          return ratingA - ratingB;
        } else {
          return ratingB - ratingA; 
        }
      });
      data.forEach((result) => {
        const movie = result.show;
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = movie.image.medium;
        image.alt = movie.name;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const text = document.createTextNode(
          `NAME: ${movie.name} / LANGUAGE: ${
            movie.language ? movie.language : "Unknown"
          } / Genre: ${movie.genres.join(", ")}`
        );
        const para = document.createElement("p");
        para.appendChild(text);
        para.classList.add("title");
        overlay.appendChild(para);
        const overlayButton = document.createElement("button");
        overlayButton.innerHTML = "Show";
        overlayButton.classList.add("overlayButton");
        card.appendChild(overlayButton);
        overlayButton.addEventListener("click", () => {
          overlay.classList.toggle("overlayShow");
        });
        const content = document.createElement("div");
        content.classList.add("content");
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = movie.name;
        const imdb = document.createElement("div");
        imdb.classList.add("imdb");
        imdb.textContent = `IMDb: ${movie.rating.average}`;
        content.appendChild(title);
        content.appendChild(imdb);
        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(overlay);
        moviesContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Problem :", error);
    });
});
  fetch(searchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Axtarışda problem yarandı");
      }
      return response.json();
    })
    .then((data) => {
      const moviesContainer = document.querySelector(".cards");
      moviesContainer.innerHTML = ""; 
      data.forEach((result) => {
        const movie = result.show;
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = movie.image.medium;
        image.alt = movie.name;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const text = document.createTextNode(
          `NAME: ${movie.name} / LANGUAGE: ${
            movie.language ? movie.language : "Unknown"
          } / Genre: ${movie.genres.join(", ")}`
        );
        const para = document.createElement("p");
        para.appendChild(text);
        para.classList.add("title");
        overlay.appendChild(para);
        const overlayButton = document.createElement("button");
        overlayButton.innerHTML = "Show";
        overlayButton.classList.add("overlayButton");
        card.appendChild(overlayButton);
        overlayButton.addEventListener("click", () => {
          overlay.classList.toggle("overlayShow");
        });
        const content = document.createElement("div");
        content.classList.add("content");
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = movie.name;
        const imdb = document.createElement("div");
        imdb.classList.add("imdb");
        imdb.textContent = `IMDb: ${
          movie.rating ? movie.rating.average : "Unknown"
        }`;
        content.appendChild(title);
        content.appendChild(imdb);
        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(overlay);
        moviesContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Problem :", error);
    });
