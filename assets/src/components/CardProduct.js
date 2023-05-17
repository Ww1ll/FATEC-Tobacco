class CardProduct extends  HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());


    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "image");

        const productImage = document.createElement("img");
        productImage.src = this.getAttribute("image") || "/assets/imagens/default2.png"; //inserir photo nas pastas
        productImage.alt = "Foto do produto";

        const hoverImage = document.createElement("img"); // tofazendo manualmente
        hoverImage.src = this.getAttribute('photo') || '/assets/imagens/default.png';


        productImage.addEventListener('mouseover', ()=>{
            productImage.src = this.getAttribute('photo') || '/assets/imagens/default.png'; // tofazendo manualmente
        });

        productImage.addEventListener('mouseout', () =>{
            productImage.src = this.getAttribute('image') || '/assets/imagens/default2.png';
        });

        const prodInfo = document.createElement("div");
        prodInfo.setAttribute("class", "info");

        const prodTitle = document.createElement("h3");
        prodTitle.textContent = this.getAttribute("title") || "Título do produto";

        const subInfo = document.createElement("div");
        subInfo.setAttribute("class", "sub-info");

        const prodPrice = document.createElement("div");
        prodPrice.setAttribute("class", "price");
        prodPrice.textContent = this.getAttribute("price") || "R$200";
        
        subInfo.appendChild(prodPrice);

        prodInfo.appendChild(prodTitle);
        prodInfo.appendChild(subInfo);

        // imageContainer.appendChild(hoverImage); 
        imageContainer.appendChild(productImage);
        

        componentRoot.appendChild(imageContainer);
        componentRoot.appendChild(prodInfo);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent =`
        main{
            width: 100%;
            margin: 0;
        }
        
        
        .products{
            display: flex;
            flex-direction: row;
            margin: 1%;
        }
        
        /*components*/
        .image img{
            width: 80%;
        } 
        
        .image img:hover{
            // content: url("/assets/imagens/default.png");
            cursor: pointer;
        }
        
        .info h3{
            font-weight:500;
        }
        .card, .price h3{
            text-align: center;
        }
        
        .price{
            font-weight: lighter;
        }
        
        #image2 img{
            width: 90%;
        } 
        `

        return style;
    }
}

customElements.define("card-product", CardProduct);