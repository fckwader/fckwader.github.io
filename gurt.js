const debug = false;

const count = 6;

const getNames = async () => {
    return Array.from(Array(count).keys()).map(e => + e + ".png");
    if(debug){
        return ["0.png"];
    }
    const res = await fetch("images/");
    const text = await res.text();

    let div = document.createElement("div");
    div.innerHTML = text;

    const links = [...div.querySelectorAll("a")];

    return links.map(l => l.innerHTML).filter(l => l.endsWith(".png"));

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
    })
}