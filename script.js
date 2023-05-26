const generateMemeBtn = document.querySelector(".meme-container .generate-meme-btn");

const memeImage = document.querySelector(".meme-container img");
const memeTitle = document.querySelector(".meme-container .meme-title");
const memeAuthor = document.querySelector(".meme-container .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};
 const generateMeme = () => {
   fetch("https://meme-api.com/gimme/wholesomememes")
     .then((response) => response.json())
     .then((data) => {
       updateDetails(data.url, data.title, data.author);
     });
}
generateMemeBtn.addEventListener("click", generateMeme);