let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


async function getQuote(){
    try {
        btn.style.pointerEvents = "none";
        btn.innerText = "Loading...";
        btn.style.cursor ="not-allowed";

        let data = await fetch("https://api.quotable.io/random");
        data = await data.json();
        console.log(data);
        quote.innerText = data.content;
        author.innerText = `~ ${data.author} ~`;


        btn.style.pointerEvents = "all";
        btn.style.cursor = "pointer";
        btn.innerText = "Generate Quote";


    } catch (error) {
        console.log(error);
        quote.innerText = "Something Wrong! Please try again."
    }
};

getQuote();

btn.addEventListener("click", ()=>{
    getQuote()
});