document.addEventListener("DOMContentLoaded",function(){
	const next =document.querySelector('button.next');
	const prev =document.querySelector('button.previous');
	const block_same_product=document.querySelector('.list_product');
	const itemList=document.querySelectorAll('.item');
	// get style cua block_same_product
	let style=getComputedStyle(block_same_product);
	// get gia tri thuoc tinh cua tranform
	let transX= new WebKitCSSMatrix(style.webkitTransform);
	const buttonClick=function(btn){
		const widthSlide=1170;
		const numberItem=itemList.length;
		const numberSlide=Math.round(numberItem/5);
		transX.e=(btn==="next")?(transX.e-=widthSlide):(transX.e+=widthSlide);
		// neu do dai ===1170 khong dc prev
		(transX.e===widthSlide)?transX.e=0:transX.e;
		// tinh so luong slides
		(transX.e<=numberSlide*(-widthSlide))?transX.e=-(numberSlide-1)*widthSlide:transX.e;
		block_same_product.style.webkitTransform="translateX("+transX.e+"px)"
	}

	nextSlide=function(){
		buttonClick('next');
	}
	prevSlide=function(){
		buttonClick('prev')
	}
	next.addEventListener('click',nextSlide);
	prev.addEventListener('click',prevSlide);
},true)