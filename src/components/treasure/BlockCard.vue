<template>
	<div class="content-section">
		<div class="content-section-title">所有工具</div>
		<div class="apps-card">
			
			<div class="item-apps-card">
				<div class="app-card" v-for="item in products" :key="item.id">
					<span><img :src="item.image">{{ item.name }}</span>
					<div class="app-card__subtext">{{item.recommend}}</div>
					<div class="app-card-buttons">
						<button class="content-button status-button" @click="open(item.name)">打开</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import router from "@/router";

export default {
	props: {
		products: {
			type: Array,
		}
	},
	methods:{
		open(componentName){
			if (componentName === '画廊'){
				router.push('/treasure/gallery')
			}else if(componentName === '数字时钟'){
				router.push('/treasure/digitalClock')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
* {
	outline: none;
	box-sizing: border-box;
}

.content-section {
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	color: #ebecec;
	
	&-title {
		color: #1e1e1f;
		margin-bottom: 14px;
	}
	
	.apps-card {
		width: 100%;
		//background-color: greenyellow;
		
		.item-apps-card{
			display: flex;
			flex-wrap: wrap;
			margin-right: -10px;
			//background-color: blue;
			//opacity: 0.3;
		}
		.app-card {
			display: flex;
			flex-direction: column;
			width: calc(33.3333333% - 10px);
			margin-right: 10px;
			font-size: 16px;
			background-color: rgba(186, 191, 217, 0.13);
			//background-color: yellow;
			border-radius: 14px;
			border: 1px solid rgba(16 18 27 / 10%);
			padding: 20px;
			margin-bottom: 10px;
			cursor: pointer;
			transition: 0.3s ease;
			
			&:hover {
				transform: scale(1.02);
				background-color: rgba(16 18 27 / 20%);
			}
			
			span {
				display: flex;
				align-items: center;
				height: 20px;
			}
			
			img {
				width: 28px;
				border-radius: 6px;
				margin-right: 12px;
				flex-shrink: 0;
			}
			
			&__subtext {
				font-size: 14px;
				font-weight: 400;
				line-height: 1.6em;
				margin-top: 10px;
				border-bottom: 1px solid rgba(67, 71, 87, 0.25);
				//border-bottom: 1px solid red;
				padding-bottom: 10px;
			}
			
			&-buttons {
				display: flex;
				align-items: center;
				margin-left: auto;
				//margin-top: 10px;
			}
			
			
			@media screen and (max-width: 1110px) {
				width: calc(50% - 10px);
				&:last-child {
					//margin-top: 20px;
					margin-left: 0px;
				}
			}
			@media screen and (max-width: 565px) {
				width: calc(100% - 10px);
				margin-top: 10px;
				& + .app-card {
					margin-left: 0;
				}
			}
			
		}
	}
	
}

//下面是一些公用的样式

.content-button {
	background-color: #3a6df0;
	border: none;
	padding: 8px 26px;
	color: #fff;
	border-radius: 20px;
	margin-top: 16px;
	cursor: pointer;
	transition: 0.3s;
	white-space: nowrap;
}

// start free trail
.content-button:not(.open):hover {
	background: #1e59f1;
}

.content-button-wrapper .content-button.status-button {
	width: auto;
}

</style>