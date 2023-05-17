class NavBar extends HTMLElement{
    constructor(){
       super();
       
       const shadow = this.attachShadow({mode: 'open'});
       shadow.appendChild(this.build());
       shadow.appendChild(this.styles());
       shadow.appendChild(this.script());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'container');

        const toggleBtn = document.createElement('div');
        toggleBtn.setAttribute('class', 'toggle-btn');
        toggleBtn.setAttribute('onclick', 'dropdownFunc();');

        // simplificando a utilização do botao spam
        for(let i = 0; i < 3; i++){
            const span = document.createElement('span');
            toggleBtn.appendChild(span);
        } 


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