<template>
	<!--父级路由和子级路由的选择-->
	<router-view v-if="$route.path !== '/treasure'"></router-view>
	
	<div class="treasure" v-else>
		<content-wrapper :wrapper="wrapper"></content-wrapper>
		<line-card :recommend="recommend"></line-card>
		<block-card :products="products"></block-card>
	</div>
</template>

<script>
import ContentWrapper from '@/components/treasure/ContentWrapper.vue';
import LineCard from '@/components/treasure/LineCard.vue';
import BlockCard from '@/components/treasure/BlockCard.vue';

export default {
	components: {ContentWrapper, LineCard, BlockCard},
	data(){
		return {
			wrapper:[
				{image:require('.././assets/images/Vue.png'),name:'VUE',content:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。',url:''},
			],
			recommend:[
				{id:'001',image:require('.././assets/images/cool_card.png'),name:'颜色剪切板',content:'热门',url:''},
				{id:'002',image:require('.././assets/images/identification_photo.png'),name:'证件照制作',content:'在线',url:''},
				{id:'003',image:require('.././assets/images/Image_ashing.png'),name:'图片灰化',content:'快捷',url:''},
			],
			products:[
				{id:'010',image:require('.././assets/images/photo_wall.png'),name:'照片墙',recommend:'这是一段属于该产品的专属介绍！！！',url:''},
				{id:'007',image:require('.././assets/images/gallery.png'),name:'画廊',recommend:'这是一段属于该产品的专属介绍！！！',url:''},
				{id:'018',image:require('.././assets/images/time_table.png'),name:'数字时钟',recommend:'这是一段属于该产品的专属介绍！！！',url:''},
				{id:'004',image:require('.././assets/images/change_skin.png'),name:'一键换肤',recommend:'这是一段属于该产品的专属介绍！！！',url:''},
				{id:'005',image:require('.././assets/images/input_skin.png'),name:'输入皮肤',recommend:'这是一段属于该产品的专属介绍！！！',url:''},
			]
			
			
		}
	}
}
</script>

<style lang="scss" scoped>

.treasure {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	color: #fff;
	padding: 20px 40px;
	height: 100%;
	overflow: auto;
	background-color: rgba(16 18 27 / 10%);
	@media screen and (max-width: 510px) {
		padding: 20px;
	}
	
}


</style>>

