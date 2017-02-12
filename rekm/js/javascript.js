
function showSearchCategory(category){
	
	category.onclick = function () {
		var ul = document.getElementById('list-category');

		if( ul.style.display == 'none' || ul.style.display == '' ){
			ul.style.display = 'block';
		}else if( ul.style.display == 'block' ){
			ul.style.display = 'none';
		}

		ul.onclick = function(event) {
			event = event || window.event;
			var target = event.target;

			while( target != ul ){
				if( target.tagName == 'LI' ){

					category.innerHTML = target.innerHTML;
					ul.style.display = 'none';
					return;
				}
				target = target.parentNode;
			}
		}
	}
}
showSearchCategory(category);


function categoryLights(cat_list){

	function offLightCat (event){
		var event = event || window.event;
		var target = event.target;

		var img = target.getElementsByTagName('img');
		
		if(img[0]){ 
			var srcImg = img[0].src;
			img[0].src = img[0].dataset['src'];
			img[0].dataset['src'] = srcImg;
		}
		return
	}

	var menuHover = cat_list.getElementsByClassName('menu-category-hover');

	for( var i = 0; i < menuHover.length; i++ ) {
		menuHover[i].onmouseenter = function(event){
			event = event || window.event;
			var target = event.target;

			var img = target.getElementsByTagName('img');

			if(img[0]){
				var srcImg = img[0].src;
				img[0].src = img[0].dataset['src'];
				img[0].dataset['src'] = srcImg;

				target.onmouseleave = offLightCat;
			}
		}
	}
}

categoryLights(cat_list);

function productOnClick(){

	function clickProduct(event){
		event = event || window.event;
		var target = event.target;

		if( target.tagName == 'I' ){
			return;
		}
		window.location = window.location;
	}

	var product = document.getElementsByClassName('product');
	var smProd = document.getElementsByClassName('sm-prod');

	for( var i = 0; i < product.length; i++ )
		product[i].onclick = clickProduct;
	for( var i = 0; i < smProd.length; i++ )
		smProd[i].onclick = clickProduct;
}
productOnClick();

function hoverOnBasket(){

	var img = document.getElementsByClassName('basket-hover');
	var imgHover = document.createElement('img');
	imgHover.src = 'images/hover-media-basket.png';


	for( var i = 0; i < img.length; i++ ){
		img[i].onmouseenter = function(){
			var src = this.src;
			this.src = imgHover.src;

			this.onmouseleave = function(){
				this.src = src;
			}
		}
	}

}
hoverOnBasket();