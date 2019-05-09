document.addEventListener("DOMContentLoaded",  function(){
	var item= document.querySelectorAll("li.menu-item a.menu-link");
	var item_block=document.querySelectorAll("li.menu-item div.action");
	item.forEach((value,i)=>{
		
		value.addEventListener('click',function(event){
			
			var id=this.getAttribute('data-nd');
			var block=document.getElementById(id);
			if(block===null){
				alert("Trở về trang chủ");
			}
			for(var i=0;i<item.length;i++){
				item[i].classList.remove('active');
				item_block[i].classList.remove('show');
			}
			block.classList.add("show");
			this.classList.add('active');
			event.preventDefault();
		})

	})
},false)