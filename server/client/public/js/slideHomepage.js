document.addEventListener('DOMContentLoaded',function(){
	let next= document.querySelector('.nextSlide');
	let prev= document.querySelector('.prevSlide')
	let current=0;
	let slide =document.querySelectorAll('.listStyleItem');
	let numberSlide=slide.length;
	let statuSlide="stay";
	 let thoigian=setInterval(()=>{
		btnClickSlide('next');},10000);

		 let btnClickSlide=(btn)=>{
		if(statuSlide==="trans"){
			return false;
		}
		statuSlide="trans";
		let statustwoSlide=0;
		let slideCurrent=slide[current];
		current=(btn==="next")?((current<numberSlide-1?current+1:0)):((current>0)?(current-1):(numberSlide-1));
		
		let slideNext= slide[current];
		slideCurrent.classList.add((btn=="next")?"outNext":"outPrev");
		slideNext.classList.add((btn=="next")? "goIn" :"goInPrev");

		let xlslidecurrent=function(){
				// Khi hiệu ứng của bất kì nút trái hay phải chạy xong thì đều xóa class active
				this.classList.remove('active');
				// Nếu là nút phải thì xóa class dira
				this.classList.remove((btn=="next")?('outNext'):('outPrev'));
				statustwoSlide++;
				statuSlide=(statustwoSlide==2)?('stay'):statuSlide;
			}
		let xlslidenext=function(){
				// sử dụng toán tử 3 ngôi
				this.classList.remove((btn=="next")?('goIn'):('goInPrev'));
				this.classList.add('active');
				statustwoSlide++;
				statuSlide=(statustwoSlide==2)?('stay'):statuSlide;
				}
		slideCurrent.addEventListener('webkitAnimationEnd',xlslidecurrent,true);
		slideNext.addEventListener('webkitAnimationEnd',xlslidenext,true);
	}


	 const nextSlideImg=()=>{
		btnClickSlide("next");
	}
	 const prevSlideImg=()=>{
		btnClickSlide("prev");
	}
	next.addEventListener('click',nextSlideImg, true);
	prev.addEventListener('click',prevSlideImg, true);
},true)
