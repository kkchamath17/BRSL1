let carts = document.querySelectorAll('.add-cart')

let products = [
{
	name: 'Kitty Ear Headband',
	tag: 'kittyearheadband',
	price: 1000,
	incart: 0
},
{
	name: 'Bow Head Band',
	tag: 'bowheadband',
	price: 1000,
	incart: 0
},
{
	name: 'Teddy Bear Toy',
	tag: 'teddybeartoy',
	price: 1000,
	incart: 0
},	
{
	name: 'Unicorn Soft Toy',
	tag: 'unicornsofttoy',
	price: 1000,
	incart: 0
},
{
	name: 'Silly Putty',
	tag: 'sillyputty',
	price: 1000,
	incart: 0
}
]
for(let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', ()=> {
			cartNumbers(products[i]);
			totalCost(products[i])
})

}

let carts1 = document.querySelectorAll('.add-cart1')

let products1 = [
{
	name: 'Female White T Shirt Large',
	tag: 'femalewhitetshirtlarge',
	price: 3000,
	incart: 0
},
{
	name: 'Female White T Shirt Medium',
	tag: 'femalewhitetshirtmedium',
	price: 2000,
	incart: 0
},
{
	name: 'Female White T Shirt Small',
	tag: 'femalewhitetshirtsmall',
	price: 100,
	incart: 0
}
]
for(let i=0; i < carts1.length; i++){
	carts1[i].addEventListener('click', ()=> {
			cartNumbers(products1[i]);
			totalCost(products1[i])
})

}

let carts3 = document.querySelectorAll('.add-cart3')

let ruchedCropTops = [
{
	name: 'Ruched Crop Top Large',
	tag: 'ruchedcroptoplarge',
	price: 1700,
	incart: 0
},
{
	name: 'Ruched Crop Top Medium',
	tag: 'ruchedcroptopmedium',
	price: 1700,
	incart: 0
},
{
	name: 'Ruched Crop Top Small',
	tag: 'ruchedcroptopsmall',
	price: 1700,
	incart: 0
}
]
for(let i=0; i < carts3.length; i++){
	carts3[i].addEventListener('click', ()=> {
			cartNumbers(ruchedCropTops[i]);
			totalCost(ruchedCropTops[i])
})

}

let carts4 = document.querySelectorAll('.add-cart4')

let geometricCropTops = [
{
	name: 'Geometric Crop Top Large',
	tag: 'geometriccroptoplarge',
	price: 1850,
	incart: 0
},
{
	name: 'Geometric Crop Top Medium',
	tag: 'geometriccroptopmedium',
	price: 1850,
	incart: 0
},
{
	name: 'Geometric Crop Top Small',
	tag: 'geometriccroptopsmall',
	price: 1850,
	incart: 0
}
]
for(let i=0; i < carts4.length; i++){
	carts4[i].addEventListener('click', ()=> {
			cartNumbers(geometricCropTops[i]);
			totalCost(geometricCropTops[i])
})

}

let carts5 = document.querySelectorAll('.add-cart5')

let snakeSkinCropTops = [
{
	name: 'Snake Skin Crop Top Large',
	tag: 'snakeskincroptoplarge',
	price: 1700,
	incart: 0
},
{
	name: 'Snake Skin Crop Top Medium',
	tag: 'snakeskincroptopmedium',
	price: 1700,
	incart: 0
},
{
	name: 'Snake Skin Crop Top Small',
	tag: 'snakeskincroptopsmall',
	price: 1700,
	incart: 0
}
]
for(let i=0; i < carts5.length; i++){
	carts5[i].addEventListener('click', ()=> {
			cartNumbers(snakeSkinCropTops[i]);
			totalCost(snakeSkinCropTops[i])
})

}

let carts6 = document.querySelectorAll('.add-cart6')

let oneShoulderCropTops = [
{
	name: 'One Shoulder Crop Top Large',
	tag: 'oneshouldercroptoplarge',
	price: 1700,
	incart: 0
},
{
	name: 'One Shoulder Crop Top Medium',
	tag: 'oneshouldercroptopmedium',
	price: 1700,
	incart: 0
},
{
	name: 'One Shoulder Crop Top Small',
	tag: 'oneshouldercroptopsmall',
	price: 1700,
	incart: 0
}
]
for(let i=0; i < carts6.length; i++){
	carts6[i].addEventListener('click', ()=> {
			cartNumbers(oneShoulderCropTops[i]);
			totalCost(oneShoulderCropTops[i])
})

}

let carts7 = document.querySelectorAll('.add-cart7')

let geometricWhiteDress = [
{
	name: 'Geometric White Dress Large',
	tag: 'geometricwhitedresslarge',
	price: 2600,
	incart: 0
},
{
	name:  'Geometric White Dress Medium',
	tag: 'geometricwhitedressmedium',
	price: 2600,
	incart: 0
},
{
	name:  'Geometric White Dress Small',
	tag: 'geometricwhitedresssmall',
	price: 2600,
	incart: 0
}
]
for(let i=0; i < carts7.length; i++){
	carts7[i].addEventListener('click', ()=> {
			cartNumbers(geometricWhiteDress[i]);
			totalCost(geometricWhiteDress[i])
})

}

let carts8 = document.querySelectorAll('.add-cart8')

let geometricBlackDress = [
{
	name: 'Geometric Black Dress Large',
	tag: 'geometricblackdresslarge',
	price: 2600,
	incart: 0
},
{
	name: 'Geometric Black Dress Medium',
	tag: 'geometricblackdressmedium',
	price: 2600,
	incart: 0
},
{
	name: 'Geometric Black Dress Small',
	tag: 'geometricblackdresssmall',
	price: 2600,
	incart: 0
}
]
for(let i=0; i < carts8.length; i++){
	carts8[i].addEventListener('click', ()=> {
			cartNumbers(geometricBlackDress[i]);
			totalCost(geometricBlackDress[i])
})

}

let carts9 = document.querySelectorAll('.add-cart9')

let meshSleevedCropTops = [
{
	name: 'Mesh Sleeved Crop Top Large',
	tag: 'meshsleevedcroptoplarge',
	price: 2350,
	incart: 0
},
{
	name: 'Mesh Sleeved Crop Top Medium',
	tag: 'meshsleevedcroptopmedium',
	price: 2350,
	incart: 0
},
{
	name: 'Mesh Sleeved Crop Top Small',
	tag: 'meshsleevedcroptopsmall',
	price: 2350,
	incart: 0
}
]
for(let i=0; i < carts9.length; i++){
	carts9[i].addEventListener('click', ()=> {
			cartNumbers(meshSleevedCropTops[i]);
			totalCost(meshSleevedCropTops[i])
})

}


function onLoadCartNumbers(product, products1){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product, action){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if( action == "decrease") {
		localStorage.setItem('cartNumbers', productNumbers - 1)
		document.querySelector('.cart span').textContent = productNumbers - 1;
	} else if( productNumbers ){
		localStorage.setItem("cartNumbers", productNumbers + 1)
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1)
		document.querySelector('.cart span').textContent = 1;
	}
	
	setItems(product, products1);
	
}

function totalDisplay (){
	let totalValue = localStorage.getItem('totalCost')
	
	if( totalValue == 0){
		document.getElementById("totz").innerHTML = " Your Cart is Empty";
		
	}
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null) {
		
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].incart += 1;
	} else {
		product.incart = 1;
	    cartItems = {
		[product.tag]: product
	  }
	}
	
	localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product, action) {
	//console.log("the price is", product.price);
	let cartCost = localStorage.getItem('totalCost');
	
	if( action == "decrease"){
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost',cartCost - product.price);
	}
	else if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
	
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
	let totalTable = document.querySelector(".shop-Cart-totalbox");
    let cartCost = localStorage.getItem('totalCost');

    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <table class="table table-striped table-border checkout-table">
                  <tbody>
                    <tr>
                      <th class="hidden-xs">Item</th>
                      <th>Description</th>
                      <th class="hidden-xs">Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                    <tr>
                      <td width=10% class="hidden-xs"><a href="../allproducts/${item.tag}.html"><img src="assets/images/products/${item.tag}.jpg" alt="Accessories Pack"/></a></td>
                      <td width=30%>
                        <h4 class="product-title font-alt" id="productName">${item.name}</h5>
                      </td>
                      <td width=15% class="hidden-xs">
                        <h5 class="product-title font-alt">LKR ${item.price}</h5>
                      </td>
                      <td align= center width=16%>
                       <button class="button increase">+</button><span id="valueIn" style="font-size: 15px; margin-left: 4px;  margin-right: 4px; font-weight:bold;">${item.incart}</span><button class="button decrease">-</button>
                      </td>
                      <td width=13%>
                        <h5 class="product-title font-alt">LKR ${item.incart * item.price}</h5>
                      </td>
                      <td width=1% class="pr-remove"><a href="#" title="Remove"><i class="fa fa-times"></i></a></td>
                    </tr>
                  </tbody>
                </table>
            `;
        });
		
		cartCost = parseInt(cartCost)
		

        totalTable.innerHTML += `
            <h4 class="font-alt">Cart Totals</h4>
					<form></form>
                  <table class="table table-striped table-border checkout-table">
                    <tbody>
                      <tr>
                        <th style="width: 50%;">Cart Subtotal :</th>
                        <td>LKR ${cartCost}&nbsp;</td>
                      </tr>
                      <tr>
                        <th>Shipping Total :</th>
                        <td>LKR 200&nbsp;</td>
                      </tr>
                      <tr class="shop-Cart-totalprice">
                        <th>Total :</th>
                        <td style="font-weight: bold;">LKR ${cartCost + 200}&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
        `;

    }
	totalDisplay ()
    deleteButtons();
	manageQuantity();
}


function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.pr-remove i');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');


    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = document.getElementById('productName').textContent.trim().toLowerCase().replace(/ /g, '');
            console.log(productName);
            // console.log(cartItems[productName].name + " " + cartItems[productName].inCart)
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].incart );

            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].incart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			
			document.getElementById("totz").innerHTML = "";
			
			totalDisplay();
            displayCart();
            onLoadCartNumbers();
        });
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    for(let i=0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
			console.log("decrease button");
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct =decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('h4').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].incart > 1 ) {
                cartItems[currentProduct].incart -= 1;
                cartNumbers( cartItems[currentProduct], "decrease" );
                totalCost( cartItems[currentProduct], "decrease" );
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
				document.getElementById("totz").innerHTML = "";
                displayCart();
				onLoadCartNumbers();
            }
        });
    }

    for(let i=0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            console.log("increase button");
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('h4').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            
                cartItems[currentProduct].incart += 1;
                cartNumbers( cartItems[currentProduct]);
                totalCost( cartItems[currentProduct]);
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
				document.getElementById("totz").innerHTML = "";
                displayCart();
				onLoadCartNumbers();
            
        })
    }
}
totalDisplay ()
onLoadCartNumbers()
displayCart();