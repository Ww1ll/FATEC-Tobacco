class navbar extends HTMLElement{
    constructor(){
       super();
       
       const shadow = this.attachShadow({mode: 'open'});
       shadow.appendChild(this.build());
       shadow.appendChild(this.styles());
    }

    build(){


        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
        
        `
        return style;
    }


}

customElements.define("nav-bar", NavBar);