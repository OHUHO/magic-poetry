<template>
	<div class="magic-card-box">
		<h1>The kitten is being <span>spoiled</span> by the butterfly</h1>
		
		<div class="btn">
			<a href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Everything's better with sparkles
			</a>
			<a href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				I eat rainbows and poop butterflies
			</a>
			<!--<button class="sparkly">Everything's better with sparkles!</button>
			<button class="sparkly last">I eat rainbows and poop butterflies!!</button>-->
		</div>
		
		<div class="img">
			<img id="image" src="../../assets/images/cat.jpg">
		</div>
	</div>
</template>

<script>
export default {
	name: "CatButterflyView"
}
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Lato:400,900|Montez);

$buttonBackground: #2c3e50;
$buttonColor: rgba(255,255,255,1);

.magic-card-box{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	overflow: auto;
	padding: 20px 40px;
	font-family: Lato;
	color: #ddd;
	background-color: rgba(16 18 27 / 30%);
	
	h1{
		font-size: 1.9em;
		text-shadow: 0 2px 1px black;
		margin-top: 0;
		
		span {
			font-family: Montez;
			font-size: 1.9em;
			font-weight: 300;
			color: #ff0080;
			margin: 0 10px;
			
		}
	}
	
	.btn{
		display: flex;
		flex-direction: row;
		/*.sparkly {
			background: lighten( $buttonBackground , 10% );
			color: $buttonColor;
			border: none;
			
			padding: 16px 36px;
			font-weight: normal;
			
			border-radius: 3px;
			transition: all 0.25s ease;
			
			box-shadow: 0 38px 32px -23px black;
			margin: 0 1em 1em;
			
			&:hover {
				
				background: $buttonBackground;
				color: white;
				
			}
			
		}*/
		
		a{
			position: relative;
			display: inline-block;
			padding: 10px;
			color: #03e9f4;
			text-decoration: none;
			//text-transform: uppercase;
			transition: 0.5s;
			letter-spacing: 2px;
			overflow: hidden;
			margin: 10px;
			
			
			span{
				position: absolute;
				display: block;
			}
			// 上
			span:nth-child(1){
				top: 0;
				left: 0;
				width: 100%;
				height: 2px;
				background: linear-gradient(90deg,transparent,#03e9f4);
				animation: animate1 1s linear infinite;
				
				@keyframes animate1{
					0%{
						left: -100%;
					}
					50%,100%{
						left: 100%;
					}
				}
			}
			// 右
			span:nth-child(2){
				top: -100%;
				right: 0;
				width: 2px;
				height: 100%;
				background: linear-gradient(180deg,transparent,#03e9f4);
				animation: animate2 1s linear infinite;
				animation-delay: 0.25s;
				
				@keyframes animate2{
					0%{
						top: -100%;
					}
					50%,100%{
						top: 100%;
					}
				}
			}
			// 下
			span:nth-child(3){
				bottom: 0;
				right: 0;
				width: 100%;
				height: 2px;
				background: linear-gradient(270deg,transparent,#03e9f4);
				animation: animate3 1s linear infinite;
				animation-delay: 0.50s;
				
				@keyframes animate3{
					0%{
						right: -100%;
					}
					50%,100%{
						right: 100%;
					}
				}
			}
			// 左
			span:nth-child(4){
				bottom: -100%;
				left: 0;
				width: 2px;
				height: 100%;
				background: linear-gradient(360deg,transparent,#03e9f4);
				animation: animate4 1s linear infinite;
				animation-delay: 0.75s;
				
				@keyframes animate4{
					0%{
						bottom: -100%;
					}
					50%,100%{
						bottom: 100%;
					}
				}
			}
			
			
		}
		
		a:hover{
			background: #03e9f4;
			color: #ffffff;
			box-shadow: 0 0 5px #03e9f4,
			0 0 25px #03e9f4,
			0 0 50px #03e9f4,
			0 0 200px #03e9f4;
			-webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
		}
		
		a:nth-child(1){
			filter: hue-rotate(100deg);
		}
		
	}
	
	.img {
		margin: 10px 0;
		width: 500px;
		display: block;
		
		img {
			width: 100%;
			border-radius: 10px;
		}
		
	}
}


</style>