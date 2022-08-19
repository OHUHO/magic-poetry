<template>
	<div class="time-button">
		<a href="#">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			|---流光按钮---|
		</a>
		<a href="#">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			《---流光按钮---》
		</a>
		<a href="#">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			|---流光按钮---|
		</a>
	</div>
</template>

<script>
export default {
	name: "TimeButton"
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.time-button{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: #050801;
	font-family: 'Raleway', sans-serif;
	font-weight: bold;
	//background-color: rgba(16 18 27 / 10%);
	
	a{
		position: relative;
		display: inline-block;
		padding: 25px 30px;
		color: #03e9f4;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.5s;
		letter-spacing: 4px;
		overflow: hidden;
		margin: 0 20px;
		
		
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
		filter: hue-rotate(270deg);
	}
	
	a:nth-child(2){
		filter: hue-rotate(110deg);
	}
}












</style>