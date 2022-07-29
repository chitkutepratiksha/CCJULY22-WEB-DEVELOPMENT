const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage= document.querySelector(".meme-generator img");
const memetitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


const updateDetails = (url,title,author) => {
    memeImage.setAttribute("src", url);
    memetitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme By: ${author}`;
}


const generateMeme = () => {
         fetch("https://meme-api.herokuapp.com/gimme")
         .then((Response) => Response.json())
         .then((data) => {
                    updateDetails(data.url,data.title,data.author);
                });  
};
generateMeme();

generateMemeBtn.addEventListener("click",generateMeme);

