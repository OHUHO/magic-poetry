<template>
	<div class="left-side" v-show=" catalogue.length > 0">
		<!--<div class="side-wrapper">
			<div class="side-title">目录一</div>
			<div class="side-menu">
				<a href="#">
					<svg viewBox="0 0 512 512">
						<g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
							<path
								d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
								data-original="#bfc9d1"/>
						</g>
						<path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff"/>
						<path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1"/>
					</svg>
					选项一
				</a>
				<a href="#">
					<svg viewBox="0 0 488.932 488.932" fill="currentColor">
						<path
							d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z"/>
					</svg>
					选项二
					<span class="notification-number updates"></span>
				</a>
				<a href="#">
					<svg viewBox="0 0 488.932 488.932" fill="currentColor">
						<path
							d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z"/>
					</svg>
					选项三
					<span class="notification-number updates"></span>
				</a>
			</div>
		</div>-->
		<div class="side-wrapper" v-for="pItem in catalogue" :key="pItem.pId">
			<div class="side-title">{{ pItem.pName }}</div>
			<div class="side-menu">
				<router-link
					v-for="item in pItem.name" :key="item.id"
					active-class="active"
					:to="item.to">
					<img :src="item.imageUrl">
					{{item.name}}
				</router-link>
			</div>
		
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			catalogue:[
				{
					pId: 1,
					pName: '炫酷卡片',
					name:[
						{id:1,imageUrl:'',name:'用户卡片',to:'/card/userCard'},
						{id:2,imageUrl:'',name:'肖像卡片',to:'/card/profileCard'},
						{id:3,imageUrl:'',name:'新闻卡片',to:'/card/newsCard'},
					]
				},
				{
					pId: 2,
					pName: '优美画面',
					name:[
						{id:1,imageUrl:'',name:'猫吻蝴蝶',to:'/beautiful/catButterfly'},
						{id:2,imageUrl:'',name:'狗与玫瑰',to:'/beautiful/dogRose'},
						{id:2,imageUrl:'',name:'绿眼猫咪',to:'/beautiful/greenEyesCat'},
					]
				},
				{
					pId: 3,
					pName: '小玩意儿',
					name:[
						{id:1,imageUrl:'',name:'流光按钮',to:'/gadget/timeButton'},
						{id:2,imageUrl:'',name:'动画按钮',to:'/gadget/animationButton'},
						{id:3,imageUrl:'',name:'文章详情页',to:'/gadget/articleDetails'},
						{id:4,imageUrl:'',name:'个人信息页',to:'/gadget/personInfo'},
						{id:5,imageUrl:'',name:'按钮悬停样式',to:'/gadget/hoverButton'},
					]
				},
				{
					pId:4,
					pName: '小游戏',
					name:[
						{id:1,imageUrl:'',name:'井字棋',to:'/games/tictactoe'}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>

.left-side {
	flex-basis: 240px;
	border-right: 1px solid rgba(113 119 144 / 25%);
	padding: 26px;
	overflow: auto;
	flex-shrink: 0;
	color: #515253;
	@media screen and (max-width: 945px) {
		display: none;
	}
}

.side-wrapper + .side-wrapper {
	margin-top: 20px;
}

.side-title {
	color: rgb(60, 62, 70);
	margin-bottom: 14px;
}

.side-menu {
	display: flex;
	flex-direction: column;
	white-space: nowrap;
	
	a {
		text-decoration: none;
		color: #fff;
		display: flex;
		align-items: center;
		font-weight: 400;
		padding: 10px;
		font-size: 14px;
		border-radius: 6px;
		transition: 0.3s;
		
		&:hover {
			background-color: rgba(12 15 25 / 30%);
		}
		&.active {
			color: #db6ff3;
		}
	}
	
	img {
		width: 16px;
		margin-right: 8px;
	}
}

.updates {
	position: relative;
	top: 0;
	right: 0;
	margin-left: auto;
	width: 18px;
	height: 18px;
	font-size: 11px;
}

</style>