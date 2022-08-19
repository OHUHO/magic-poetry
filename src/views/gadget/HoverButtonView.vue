<template>
	<div class="hover-button">
		<h1>CSS按钮悬停效果</h1>
		<div class="btn-holder">
			<button class="btn btn-1 hover-filled-slide-down">
				<span>hover me</span>
			</button>
			<button class="btn btn-1 hover-filled-slide-up">
				<span>hover me</span>
			</button>
			<button class="btn btn-1 hover-filled-slide-left">
				<span>hover me</span>
			</button>
			<button class="btn btn-1 hover-filled-slide-right">
				<span>hover me</span>
			</button>
			<button class="btn btn-1 hover-filled-opacity">
				<span>hover me</span>
			</button>
		</div>
		<div class="btn-holder">
			<button class="btn btn-2 hover-slide-down">
				<span>hover me</span>
			</button>
			<button class="btn btn-2 hover-slide-up">
				<span>hover me</span>
			</button>
			<button class="btn btn-2 hover-slide-left">
				<span>hover me</span>
			</button>
			<button class="btn btn-2 hover-slide-right">
				<span>hover me</span>
			</button>
			<button class="btn btn-2 hover-opacity">
				<span>hover me</span>
			</button>
		</div>
		<div class='btn-holder'>
			<button class="btn btn-3 hover-border-1">
				<span>hover me</span>
			</button>
			<button class="btn btn-3 hover-border-2">
				<span>hover me</span>
			</button>
			<button class="btn btn-3 hover-border-3">
				<span>hover me</span>
			</button>
			<button class="btn btn-3 hover-border-4">
				<span>hover me</span>
			</button>
			<button class="btn btn-3 hover-border-5">
				<span>hover me</span>
			</button>
		</div>
		<div class="btn-holder">
			<button class="btn btn-4 hover-border-6">
				<span>hover me</span>
			</button>
			<button class="btn btn-4 hover-border-7">
				<span>hover me</span>
			</button>
			<button class="btn btn-4 hover-border-8">
				<span>hover me</span>
			</button>
			<button class="btn btn-4 hover-border-9">
				<span>hover me</span>
			</button>
			<button class="btn btn-4 hover-border-10">
				<span>hover me</span>
			</button>
		</div>
		<div class="btn-holder">
			<button class="btn btn-5 hover-border-11">
				<span>hover me</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "HoverButtonView"
}
</script>

<style scoped lang="scss">

.hover-button {
	font-family: 'Roboto', sans-serif;
	color: rgb(85,75,85);
	background-color: rgb(255,255,255);
	background-color: rgba(16 18 27 / 10%);
	padding: 20px 40px;
	width: 100%;
	overflow: auto;
	
	h1 {
		font-size: 45px;
		text-align: center;
		color: rgb(54, 56, 55);
		margin: 0 0 20px;
	}
	
	.btn-holder {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		
		.btn {
			position: relative;
			display: inline-block;
			width: auto;
			height: auto;
			background-color: transparent;
			border: none;
			cursor: pointer;
			margin: 0 10px 25px;
			min-width: 140px;
			padding: 0;
			
		}
		.btn span {
			position: relative;
			display: inline-block;
			font-size: 14px;
			font-weight: bold;
			letter-spacing: 2px;
			text-transform: uppercase;
			top: 0;
			left: 0;
			width: 100%;
			padding: 15px 20px;
			transition: 0.3s;
		}
		
		// 第一行按钮的样式
		.btn-1{
			&::before{
				background-color: rgb(28, 31, 30);
				transition: 0.3s ease-out;
			}
			& span {
				color: rgb(255,255,255);
				border: 1px solid rgb(28, 31, 30);
				transition: 0.2s 0.1s;
			}
			& span:hover {
				color: rgb(28, 31, 30);
				transition: 0.2s 0.1s;
			}
			
		}
		/* 1.hover-filled-slide-down */
		.hover-filled-slide-down{
			&::before {
				bottom: 0; left: 0; right: 0;
				height: 100%; width: 100%;
			}
			&:hover::before {
				height: 0%;
			}
		}
		/* 2.hover-filled-slide-up */
		.hover-filled-slide-up{
			&::before {
				top: 0; left: 0; right: 0;
				height: 100%; width: 100%;
			}
			&:hover::before {
				height: 0%;
			}
		}
		/* 3.hover-filled-slide-left */
		.hover-filled-slide-left{
			&::before {
				top: 0; bottom: 0; left: 0;
				height: 100%; width: 100%;
			}
			&:hover::before {
				width: 0%;
			}
		}
		/* 4. hover-filled-slide-right */
		.hover-filled-slide-right{
			&::before {
				top:0; bottom: 0; right: 0;
				height: 100%; width: 100%;
			}
			&:hover::before {
				width: 0%;
			}
		}
		/* 5. hover-filled-opacity */
		.hover-filled-opacity{
			&::before {
				top:0; bottom: 0; right: 0;
				height: 100%; width: 100%;
				opacity: 1;
			}
			&:hover::before {
				opacity: 0;
			}
		}
		
		// 第二行按钮样式
		.btn-2{
			&::before {
				background-color: rgb(28, 31, 30);
				transition: 0.3s ease-out;
			}
			& span {
				color: rgb(28, 31, 30);
				border: 1px solid rgb(28, 31, 30);
				transition: 0.2s;
			}
			& span:hover {
				color: rgb(255,255,255);
				transition: 0.2s 0.1s;
			}
		}
		/* 6. hover-slide-down */
		.hover-slide-down{
			&::before {
				top: 0; left: 0; right: 0;
				height: 0%; width: 100%;
			}
			&:hover::before {
				height: 100%;
			}
		}
		/* 7. hover-slide-up */
		.hover-slide-up{
			&::before {
				bottom: 0; left: 0; right: 0;
				height: 0%; width: 100%;
			}
			&:hover::before {
				height: 100%;
			}
		}
		/* 8. hover-slide-left */
		.hover-slide-left{
			&::before {
				top: 0; bottom: 0; right: 0;
				height: 100%; width: 0%;
			}
			&:hover::before {
				width: 100%;
			}
		}
		/* 9. hover-slide-right */
		.hover-slide-right{
			&::before {
				top: 0; bottom: 0; left: 0;
				height: 100%; width: 0%;
			}
			&:hover::before {
				width: 100%;
			}
		}
		/* 10. hover-opacity */
		.hover-opacity{
			&::before {
				top:0; bottom: 0; right: 0;
				height: 100%; width: 100%;
				opacity: 0;
			}
			&:hover::before {
				opacity: 1;
			}
		}
		
		// 第三行按钮样式
		.btn-3{
			padding: 5px;
			& span {
				color: rgb(255, 255, 255);
				background-color: rgb(54, 56, 55);
			}
			&::before,
			&::after{
				background: transparent;
				z-index: 2;
			}
		}
		/* 11. hover-border-1 */
		.hover-border-1{
			&::before,
			&::after{
				width: 10%; height: 25%;
				transition: 0.35s;
			}
			&::before {
				top: 0; left: 0;
				border-left: 1px solid rgb(28, 31, 30);
				border-top: 1px solid rgb(28, 31, 30);
			}
			&::after {
				bottom: 0; right: 0;
				border-right: 1px solid rgb(28, 31, 30);
				border-bottom: 1px solid rgb(28, 31, 30);
			}
			&:hover::before,
			&:hover::after{
				width: 99%;
				height: 98%;
			}
		}
		/* 12. hover-border-2 */
		.hover-border-2{
			&::before,
			&::after{
				width: 10%; height: 25%;
				transition: 0.35s;
			}
			&::before {
				bottom: 0; left: 0;
				border-left: 1px solid rgb(28, 31, 30);
				border-bottom: 1px solid rgb(28, 31, 30);
			}
			&::after {
				top: 0; right: 0;
				border-right: 1px solid rgb(28, 31, 30);
				border-top: 1px solid rgb(28, 31, 30);
			}
			&:hover::before,
			&:hover::after{
				width: 99%;
				height: 99%;
			}
			
		}
		/* 13. hover-border-3 */
		.hover-border-3{
			&::before,
			&::after{
				width: 0%; height: 0%;
				opacity: 0;
				transition: width 0.2s 0.15s linear, height 0.15s linear, opacity 0s 0.35s;
			}
			&::before {
				top: 0; right: 0;
				border-top: 1px solid rgb(28, 31, 30);
				border-left: 1px solid rgb(28, 31, 30);
			}
			&::after {
				bottom: 0; left: 0;
				border-bottom: 1px solid rgb(28, 31, 30);
				border-right: 1px solid rgb(28, 31, 30);
			}
			&:hover:before,
			&:hover:after{
				width: 100%; height: 99%;
				opacity: 1;
				transition: width 0.2s linear, height 0.15s 0.2s linear, opacity 0s;
			}
		}
		/* 14. hover-border-4 */
		.hover-border-4{
			&::before,
			&::after{
				width: 0%; height: 0%;
				opacity: 0;
				transition: width 0.2s linear, height 0.15s 0.2s ease-out, opacity 0s 0.35s;
			}
			&::before {
				bottom: 0; left: -1px;
				border-top: 1px solid rgb(28, 31, 30);
				border-left: 1px solid rgb(28, 31, 30);
			}
			&::after {
				top: 0; right: 0;
				border-bottom: 1px solid rgb(28, 31, 30);
				border-right: 1px solid rgb(28, 31, 30);
			}
			&:hover::before,
			&:hover::after{
				width: 100%; height: 99%;
				opacity: 1;
				transition: width 0.2s 0.15s ease-out, height 0.15s ease-in, opacity 0s;
			}
		}
		/* 15. hover-border-5 */
		.hover-border-5{
			&::before,
			&::after{
				width: 0%; height: 0%;
				opacity: 0;
			}
			&::before {
				top: 0; right: 0;
				border-top: 1px solid rgb(28, 31, 30);
				border-left: 1px solid rgb(28, 31, 30);
				transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear, opacity 0s 0.7s;
			}
			&::after {
				bottom: 0; left: 0px;
				border-bottom: 1px solid rgb(28, 31, 30);
				border-right: 1px solid rgb(28, 31, 30);
				transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
			}
			&:hover::before,
			&:hover::after{
				width: 100%; height: 96%;
				opacity: 1;
			}
			&:hover::before {
				transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s;   /* 1,2 */
			}
			&:hover::after {
				transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out, opacity 0s 0.3s;
			}
		}
		
		// 第四行按钮样式
		.btn-4{
			& span {
				color: rgb(28, 31, 30);
				background-color: rgb(245,245,245);
			}
			& span:hover {
				color: rgb(54, 56, 55);
			}
			&::before,
			&::after{
				width: 15%; height: 2px;
				background-color: rgb(54, 56, 55);
				z-index: 2;
			}
		}
		/* 16. hover-border-6 */
		.hover-border-6{
			&::before,
			&::after{
				top: 0;
				transition: width 0.2s 0.35s ease-out;
			}
			&::before {
				right: 50%;
			}
			&::after {
				left: 50%;
			}
			&:hover::before,
			&:hover::after {
				width: 50%;
				transition: width 0.2s ease-in;
			}
			& span::before,
			& span::after {
				width: 0%; height: 0%;
				background: transparent;
				opacity: 0;
				z-index: 2;
				transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
			}
			& span::before {
				top: 0; left: 0;
				border-left: 2px solid rgb(54, 56, 55);
				border-bottom: 2px solid rgb(54, 56, 55);
			}
			& span::after {
				top: 0; right: 0;
				border-right: 2px solid rgb(54, 56, 55);
				border-bottom: 2px solid rgb(54, 56, 55);
			}
			& span:hover::before,
			& span:hover::after {
				width: 50%; height: 96%;
				opacity: 1;
				transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
			}
			
		}
		/* 17. hover-border-7 */
		.hover-border-7{
			&::before,
			&::after{
				bottom: 0;
				transition: width 0.2s 0.35s ease-out;
			}
			&::before {
				right: 50%;
			}
			&::after {
				left: 50%;
			}
			&:hover::before,
			&:hover::after {
				width: 50%;
				transition: width 0.2s ease-in;
			}
			& span::before,
			& span::after {
				width: 0%; height: 0%;
				background: transparent;
				opacity: 0;
				z-index: 2;
				transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
			}
			& span::before {
				bottom: 0; left: 0;
				border-left: 2px solid rgb(54, 56, 55);
				border-top: 2px solid rgb(54, 56, 55);
			}
			& span::after {
				bottom: 0; right: 0;
				border-right: 2px solid rgb(54, 56, 55);
				border-top: 2px solid rgb(54, 56, 55);
			}
			& span:hover::before,
			& span:hover::after {
				width: 50%; height: 96%;
				opacity: 1;
				transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
			}
		}
		/* 18. hover-border-8 */
		.hover-border-8{
			&::before,
			&::after {
				bottom: 0;
				width: 15%;
				transition: width 0.2s 0.35s ease-out;
			}
			&::before {
				right: 50%;
			}
			&::after {
				left: 50%;
			}
			&:hover::before {
				width: 50%;
				transition: width 0.2s ease-in;
			}
			&:hover::after {
				width: 50%;
				transition: width 0.1s ease-in;
			}
			& span::before,
			span::after {
				width: 0%; height: 0%;
				bottom: 0;
				background: transparent;
				opacity: 0;
				z-index: 2;
			}
			& span::before {
				left: 0%;
				border-left: 2px solid rgb(54, 56, 55);
				transition: height 0.25s ease-in, opacity 0s 0.35s;
			}
			& span:hover::before {
				height: 96%;
				opacity: 1;
				transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
			}
			& span::after {
				right: 0%;
				border-right: 2px solid rgb(54, 56, 55);
				border-top: 2px solid rgb(54, 56, 55);
				transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
			}
			& span:hover::after {
				width: 99%; height: 96%;
				opacity: 1;
				transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
			}
		}
		/* 19. hover-border-9 */
		.hover-border-9{
			&::before,
			&::after {
				bottom: 0;
				width: 15%;
				transition: width 0.2s 0.35s ease-out;
			}
			&::before {
				right: 50%;
			}
			&::after {
				left: 50%;
			}
			&:hover::before {
				width: 50%;
				transition: width 0.1s ease-in;
			}
			&:hover::after {
				width: 50%;
				transition: width 0.2s ease-in;
			}
			& span::before,
			& span::after {
				width: 0%; height: 0%;
				bottom: 0;
				background: transparent;
				opacity: 0;
				z-index: 2;
			}
			& span::after {
				right: 0%;
				border-right: 2px solid rgb(54, 56, 55);
				transition: height 0.25s ease-in, opacity 0s 0.35s;
			}
			& span:hover::after {
				height: 96%;
				opacity: 1;
				transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
			}
			& span::before {
				left: 0%;
				border-left: 2px solid rgb(54, 56, 55);
				border-top: 2px solid rgb(54, 56, 55);
				transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
			}
			& span:hover::before {
				width: 98.5%; height: 96%;
				opacity: 1;
				transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
			}
		}
		/* 20. hover-border-10 */
		.hover-border-10{
			&::before,
			&::after {
				left: 0%;
				height: 30%;
				width: 2px;
				transition: height 0.2s 0.35s ease-out;
			}
			&::before {
				top: 50%;
			}
			&::after {
				bottom: 50%;
			}
			&:hover::before {
				height: 50%;
				transition: height 0.2s ease-in;
			}
			&:hover::after {
				height: 50%;
				transition: height 0.1s ease-in;
			}
			& span::before,
			span::after {
				width: 0%; height: 0%;
				background: transparent;
				opacity: 0;
				z-index: 2;
			}
			& span::after {
				bottom: 0; left: 0%;
				border-bottom: 2px solid rgb(54, 56, 55);
				transition: width 0.25s ease-in, opacity 0s 0.35s;
			}
			& span:hover::after {
				width: 100%;
				opacity: 1;
				transition: width 0.25s 0.2s ease-out, opacity 0s 0.2s;
			}
			& span::before {
				top: 0%; left: 0%;
				border-top: 2px solid rgb(54, 56, 55);
				border-right: 2px solid rgb(54, 56, 55);
				transition: height 0.15s ease-in, width 0.2s 0.15s linear, opacity 0s 0.35s;
			}
			& span:hover::before {
				width: 98.5%; height: 96%;
				opacity: 1;
				transition: width 0.2s 0.1s linear, height 0.15s 0.3s ease-out, opacity 0s 0.1s;
			}
		}
		
		// 第五行按钮样式
		.btn-5{
			& span {
				color: rgb(28, 31, 30);
				border: 2px solid rgb(249, 211, 27);
				transition: 0.2s;
			}
			& span:hover {
				background-color: rgb(245,245,245);
			}
		}
		/* 21. hover-border-11 */
		.hover-border-11{
			&::before,
			&::after {
				width: 100%; height: 2px;
				background-color: rgb(54, 56, 55);
				z-index: 2;
				transition: 0.35s;
			}
			&::before {
				top: 0; right: 0;
			}
			&::after {
				bottom: 0; left: 0;
			}
			&:hover::before,
			&:hover::after {
				width: 0%;
				transition: 0.2s 0.2s ease-out;
			}
			& span::before,
			& span::after {
				width: 2px; height: 100%;
				background-color: rgb(54, 56, 55);
				z-index: 2;
				transition: 0.25s;
			}
			& span::before {
				bottom: 0; right: -2px;
			}
			& span::after {
				top: 0; left: -2px;
			}
			& span:hover::before,
			span:hover::after {
				height: 0%;
			}
		}
	}
	
}

:active, :hover, :focus {
	outline: 0!important;
	outline-offset: 0;
}
::before,
::after {
	position: absolute;
	content: "";
}

</style>