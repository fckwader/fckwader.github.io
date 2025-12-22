const debug = false;
// ALWAYS UPDATE THE COUNT
const count = 12;

const getNames = async () => {
    return Array.from(Array(count).keys()).map(e => + e + ".png").reverse();

}

getNames().then(names => {
    const images = document.querySelector(".images");
    names.forEach(n => {
        const img = document.createElement("img");
        img.src = `images/${n}`;
        images.append(img);
    })
});

document.querySelector("button").onclick = () => {
    document.querySelector("button").classList.toggle("balala");
    document.querySelector(".rtext").classList.toggle("rhidden");
    document.querySelector(".text").classList.toggle("fhidden");

}

if(window.innerWidth < 600){
    document.querySelector(".text").classList.add("FUCK");
    document.querySelector(".header img").classList.add("SHIT");
    Array.from(document.querySelectorAll(".images img")).forEach(p => {
        p.classList.add("WILLY");
    });
}