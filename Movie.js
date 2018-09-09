/*영화를 정의한다!!*/
class Movie{
	constructor(container, src, width, height, x, y){
		/*매개변수를 그냥 this가 붙는 멤버변수없이 사용할수도 있으나
			외부에서 누군가가 이 객체의 속성들을 접근하게 하려면, 
			this. 로 멤버변수를 정의해놓는게 좋다!
			왜?? 클래스 사용할려고 만들었기 때문에....
		*/
		this.container=container; //어느 태그에 붙일지..
		this.src=src;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y; //고정이 될 것임..

		this.img=document.createElement("img");
		$(this.img).attr("src", this.src); //이미지 경로

		$(this.img).css({
			position:"absolute", /*box  div안에서 절대위치로 지정함*/
			left:this.x+"px",
			top:this.y+"px",
			width:this.width+"px",
			height:this.height+"px"
		});

		//div에 부착!
		$(this.container).append(this.img);
	}
}