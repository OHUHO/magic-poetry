<template>
	<div class="main-container">
		
		<div class="main-header">
			<a class="menu-link-main" href="#">子级标题</a>
			<div class="header-menu">
				
				<router-link to="#" active-class="active">选项一</router-link>
				<router-link to="#" active-class="active">选项二</router-link>
				<router-link to="#" active-class="active">选项三</router-link>
			
			</div>
		</div>
		
		<div class="content-wrapper">
			
			<content-wrapper></content-wrapper>
			
			<line-card></line-card>
			
			<block-card></block-card>
		
		</div>
	
	</div>
</template>

<script>
import ContentWrapper from '@/components/treasure/ContentWrapper.vue';
import LineCard from '@/components/treasure/LineCard.vue';
import BlockCard from '@/components/treasure/BlockCard.vue';

export default {
	components: {ContentWrapper, LineCard, BlockCard}
}
</script>

<style lang="scss" scoped>
* {
	outline: none;
	box-sizing: border-box;
}

img {
	max-width: 100%;
}

.main-container {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	
	.main-header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--border-color);
		height: 58px;
		flex-shrink: 0;
		
		.menu-link-main {
			text-decoration: none;
			color: #fff;
			padding: 0 30px;
			@media screen and (max-width: 1055px) {
				display: none;
			}
		}
		
		.header-menu {
			margin-left: 150px;
			@media screen and (max-width: 1055px) {
				margin: auto;
			}

			a {
				padding: 20px 30px;
				text-decoration: none;
				//color: rgb(113 119 144 / 78%);
				border-bottom: 2px solid transparent;
				transition: 0.3s;
				@media screen and (max-width: 610px) {
					&:not(.main-header-link) {
						display: none;
					}
				}
			}
				
			a:hover,
			a.active {
			color: #f9fafb;
			border-bottom: 2px solid #f9fafb;
			}
			
		}
	}
	
	.content-wrapper {
		display: flex;
		flex-direction: column;
		color: var(--theme-color);
		padding: 20px 40px;
		height: 100%;
		overflow: auto;
		background-color: var(--theme-bg-color);
		@media screen and (max-width: 510px) {
			padding: 20px;
		}
		
		&-header {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: space-between;
			background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
			linear-gradient(
					to right top,
					#cf4af3,
					#e73bd7,
					#f631bc,
					#fd31a2,
					#ff3a8b,
					#ff4b78,
					#ff5e68,
					#ff705c,
					#ff8c51,
					#ffaa49,
					#ffc848,
					#ffe652
			);
			border-radius: 14px;
			padding: 20px 40px;
			@media screen and (max-width: 415px) {
				padding: 20px;
			}
		}
		
		&.overlay {
			pointer-events: none;
			transition: 0.3s;
			background-color: var(--overlay-bg);
		}
		
	}
	
}

::-webkit-scrollbar {
	width: 6px;
	border-radius: 10px;
	background: -webkit-linear-gradient(top, #db6ff3 0%, rgb(240, 240, 103) 100%);
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: -webkit-linear-gradient(top, #f16de4 0%, rgba(83, 237, 142, 0) 100%);
}

</style>>

