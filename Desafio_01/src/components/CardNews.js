class Cardnews extends HTMLElement {
    constructor(){
        super();


        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML    = "<h1>Anakin esteve aki</h1>";
    }

    build(){

    }
    styles(){}
}

customElements.define("card-news", Cardnews);