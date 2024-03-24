const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailBtnClose = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productDetailBtnClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartDetail.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartDetail.classList.add('inactive'); 
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
  }
  
function toggleCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isCartListClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed){
      productDetailContainer.classList.add('inactive');
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  if(!isCartListClosed){
      desktopMenu.classList.add('inactive');
  }

  shoppingCartDetail.classList.toggle('inactive');
} 

function openProductDetailAside(){
  shoppingCartDetail.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');

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
  
    const productimg = document.createElement('img');
    productimg.setAttribute('src', product.img);
    productimg.addEventListener('click', openProductDetailAside);
    
    
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
  
    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);
  
    const cardContainer = document.querySelector('.cards-container');
    
    cardContainer.appendChild(productCard);
  
  }
  
}

renderProducts(producList);