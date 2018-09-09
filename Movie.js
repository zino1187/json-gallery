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

		//클릭 이벤트 구현하기
		//$(this.img).click(function(){
			//익명함수내에서는 가장 가까운 {} 코드를 의미하므로,
			//우리가 원하는 클래스영역에 접근할 수 없다..현재 여기서 this는
			//클래스this가 아닌, this.img 인 이미지 객체를 의미함..
			//자바스크립트의 ECMAScript 2015년 이후부터는 화살표
			//함수가 지원되며 이런 문제를 해결해준다..
		//	alert("나 "+this.x+" ~~ 에 있어요");
		//});

		$(this.img).click(()=>{
			//alert("저는 "+this.x+" 에  있어요"+this.src);
			movePointer(this.x);
		});
	}
}