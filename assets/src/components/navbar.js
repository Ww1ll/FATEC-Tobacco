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

        const logo = document.createElement('div');
        logo.setAttribute('class', 'logo');

        const logoImage = document.createElement('img');
        logoImage.src = 'assets/imagens/TobaccoRebrand.png';
        logo.appendChild(logoImage);

        const nav = document.createElement('nav');
        nav.setAttribute('class', 'nav');
        nav.setAttribute('id', 'nav');

        const navLinks = document.createElement('ul');
        navLinks.setAttribute('class', 'nav-links');

        const homeLink = document.createElement('li');
        const homeAnchor = document.createElement('a');
        homeAnchor.href = '';
        homeAnchor.textContent = 'HOME';
        homeLink.appendChild(homeAnchor);

        const contatoLink = document.createElement('li');
        const contatoAnchor = document.createElement('a');
        contatoAnchor.href = '#contato';
        contatoAnchor.textContent = 'CONTATO';
        contatoLink.appendChild(contatoAnchor);

        const sobreLink = document.createElement('li');
        const sobreAnchor = document.createElement('a');
        sobreAnchor.href = '#sobre';
        sobreAnchor.textContent = 'SOBRE';
        sobreLink.appendChild(sobreAnchor);

        navLinks.appendChild(homeLink);
        navLinks.appendChild(produtosLink);
        navLinks.appendChild(contatoLink);
        navLinks.appendChild(sobreLink);

        const iconsNav = document.createElement('ul');
        iconsNav.setAttribute('class', 'icons-nav');

        const personIcon = document.createElement('li');
        const personIconElement = document.createElement('ion-icon');
        personIconElement.setAttribute('name', 'person-outline');
        personIconElement.setAttribute('size', 'large');
        personIcon.appendChild(personIconElement);

        const cartIcon = document.createElement('li');
        const cartIconElement = document.createElement('ion-icon');
        cartIconElement.setAttribute('name', 'cart-outline');
        cartIconElement.setAttribute('size', 'large');
        cartIcon.appendChild(cartIconElement);

        iconsNav.appendChild(personIcon);
        iconsNav.appendChild(cartIcon);

        nav.appendChild(navLinks);
        nav.appendChild(iconsNav);

        componentRoot.appendChild(toggleBtn);
        componentRoot.appendChild(logo);
        componentRoot.appendChild(nav);
        componentRoot.appendChild(this.script());

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        li, a {
            font-weight: 500;
            font-size: 16px;
            color: #2A553E;
            text-decoration: none;
        }
        
        header{
            display: inline-block;
            width: 100%;
            padding: 25px 80px;
            /* background-color: #7c7777; */
            position: fixed;
            transition: background-color 0.8s ease;
        }
        
        .active{
            background: #f0f0f0;
        }
        
        .container{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        
        .logo{
             float: left; 
             width: 10%;
        }
        
        
        .logo img {
            width: 100%; 
            height: 100%; 
            cursor: pointer;
        }
        
        nav{float: right; width: 80%;}
        
        nav ul li {
            display: inline-block;
            padding: 15px 25px;
        }
        
        nav ul li a {
            text-decoration: none;
            display: inline-block;
        }
        
        .toggle-btn{
            width: 35px;
            position: absolute;
            right: 80px;
            top: 55px;
            display: none;
        }
        
        .toggle-btn span {
            display: inline-block;
            width: 100%;
            height: 3px;
            background-color: #2A553E;
            float: left;
            margin-bottom: 8px;
        }
        
        .icons-nav{
            display: flex;
            flex-direction: row;
            align-items: center;
            list-style: none;
        }
        
        ul.nav-links {
            margin-inline: auto;
        }
        
        ion-icon:hover{
            color: #C9A175;
            cursor: pointer;
        }
        
        .nav{display: flex; flex-direction: row; justify-content: center; align-items: center;}
        
        .nav-links li a {transition: all 0.3s ease 0s;}
        
        .nav-links li a:hover {color: #C9A175;} 
        
        @media (max-width: 992px) {
            .toggle-btn{
                display: block;  
            }
            .toggle-btn:hover{
                cursor: pointer;
            }
            .nav{
                display: none;
                width: 100%;
                border-top: 1px solid #2A553E;
                padding-top: 20px;
                margin-top: 30px;
            }
            nav ul li{
                padding: 15px 0px; 
                /* acho que nesse padding, esse valor eh != 0 */
                width: 100%;
            }
            nav.show{display: block;}
            .container, .icons-nav{
                flex-wrap: wrap;
            }
            .logo{width: 15%;}
        
        
        }
        
        
        `
        return style;
    }

    script(){
        const script = document.createElement('script');
        script.textContent = `
        function dropdownFunc(){
            let navbar = document.getElementById('nav')
            navbar.classList.toggle('show')
        }
        
        `
        return script; 
    }

}

customElements.define("nav-bar", NavBar);