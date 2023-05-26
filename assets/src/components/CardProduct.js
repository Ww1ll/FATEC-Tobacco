class CardProduct extends HTMLElement{
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
        productImage.src = this.getAttribute("image") || "assets/imagens/default2.png"; //inserir photo nas pastas
        productImage.alt = "Foto do produto";

        const hoverImage = document.createElement("img"); 
        hoverImage.src = this.getAttribute('photo') || 'assets/imagens/default.png';


        // Funcao hover
        productImage.addEventListener('mouseover', ()=>{
            productImage.src = this.getAttribute('photo') || 'assets/imagens/default.png'; 
            const icon = document.createElement('ion-icon');
            icon.setAttribute('name', 'add-circle-outline');
            productImage.appendChild(icon);
        });

        productImage.addEventListener('mouseout', () =>{
            productImage.src = this.getAttribute('image') || 'assets/imagens/default2.png';
        });

        const prodInfo = document.createElement("div");
        prodInfo.setAttribute("class", "info");

        const prodTitle = document.createElement("h3");
        prodTitle.textContent = this.getAttribute("title") || "Título do produto";

        const subInfo = document.createElement("div");
        subInfo.setAttribute("class", "sub-info");

        const prodPrice = document.createElement("div");
        prodPrice.setAttribute("class", "price");
        prodPrice.textContent = this.getAttribute("price") || "Valor do produto";
        
        subInfo.appendChild(prodPrice);

        prodInfo.appendChild(prodTitle);
        prodInfo.appendChild(subInfo);

        // imageContainer.appendChild(hoverImage); 
        imageContainer.appendChild(productImage);

        const shopBtnContainer = document.createElement("div");
        const shopBtn = document.createElement("button");
        shopBtn.textContent = "SHOP";
        shopBtn.setAttribute("class", "btn-shop");        

        shopBtnContainer.appendChild(shopBtn);

        componentRoot.appendChild(imageContainer);
        componentRoot.appendChild(prodInfo);
        componentRoot.appendChild(shopBtnContainer);

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
            // content: url("assets/imagens/default.png");
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
        .btn-shop{
            border-radius: 15px;
            width: 20%;
            border: 2px solid #2A553E;
            color: #2A553E;
            font-weight: 350;
        }
        .btn-shop:hover{
            background-color: #2A553E;
            color: #f0f0f0;
            border: 2px solid #2A553E;
            cursor: pointer;
        }

        `

        return style;
    }
}

customElements.define("card-product", CardProduct);