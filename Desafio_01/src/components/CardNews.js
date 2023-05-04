class CardNews extends HTMLElement {
    constructor(){
        super();


        const swadow = this.attachShadow({mode: "open"});
        swadow.innerHTML = "<h1>Hello World</h1>";
    }




}
customElements.define("card-news", CardNews);