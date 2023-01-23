const change = document.querySelector("#change");
const color = document.querySelector("#body");
const navbar= document.querySelector("#navbar");
const text = document.querySelector("#text");
const footer= document.querySelector("#footer");
const textfooter = document.querySelector("#textfooter");

change.addEventListener("click", () => {
    color.classList.remove("color2");
    color.classList.add("darkmode");
    navbar.classList.remove("color1");
    navbar.classList.add("navnew");
    text.classList.remove("colortext");
    text.classList.add("colortextnew");
    textfooter.classList.remove("textofooter");
    textfooter.classList.add("textfooternew");
    footer.classList.remove("color1");
    footer.classList.add("navnew");
    if(document.classList.contains("darkmode", "navnew", "colortextnew", "textfooternew" )){
        localStorage.setItem("change",true)
    }else{localStorage.removeItem("change")

    }
    

}
);
if(localStorage.getItem("change")){
    color.classList.add("darkmode");;
}
