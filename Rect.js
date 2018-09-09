/* 썸네일을 선택할때마다, 포인터 효과를 주기 위한 사각형*/
class Rect{
	constructor(container, width, height,x, y, bg){
		this.container=container;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.bg=bg;

		this.div=document.createElement("div");

		$(this.div).css({
			width:this.width+"px",
			height:this.height+"px",
			position:"absolute",
			left:this.x+"px",
			top:this.y+"px",
			background:this.bg,
			border:"5px solid red",
			opacity:0.5				
		});
		
		//컨테이너에 부착!!
		$(this.container).append(this.div);
		
	}	
}