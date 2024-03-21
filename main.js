const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartContainer');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartDetail.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isCartListClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }

    if(!isCartListClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartDetail.classList.toggle('inactive');
  } 


/*Desplegar lista de productos */
const producList = [];
producList.push({
  name: 'bike',
  price: '120',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
);
producList.push({
  name: 'PC',
  price: '150',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
);
producList.push({
  name: 'TV',
  price: '100',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
);

/*Encasuplación del código en una función para luego poder llamarla
aplicando un nuevo array */ 
function renderProducts(arrayList) {
  for (product of arrayList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const Productimg = document.createElement('img');
  
    Productimg.setAttribute('src', product.img);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const prodDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    prodDiv.appendChild(productPrice);
    prodDiv.appendChild(productName);
  
    productInfo.appendChild(prodDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(Productimg);
    productCard.appendChild(productInfo);
  
    const cardContainer = document.querySelector('.cards-container');
    
    cardContainer.appendChild(productCard);
  
  }
  
}

renderProducts(producList);