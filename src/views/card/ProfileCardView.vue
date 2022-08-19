<template>
	<div class="card-box">
		<div class="card" :class="active(2) || active(3)" >
			<div class="card-header">
				<img class="card-avatar" :src="imageUrl" alt="avatar"/>
				<h1 class="card-fullname">周杰伦 Jay Chou</h1>
				<h2 class="card-jobtitle">华语流行乐男歌手</h2>
			</div>
			
			<div class="card-main">
				
				<!--第一页-->
				<div class="card-section" :class="active(1)">
					<div class="card-content">
						<div class="card-subtitle">关于</div>
						<p class="card-desc">中国台湾华语流行歌手、著名音乐人、音乐创作家、作曲家、作词人、制作人、杰威尔音乐公司老板之一、导演。</p>
					</div>
					<!--三个图标-->
					<div class="card-social">
						<a href="#">
							<svg t="1660895378525" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1462"><path d="M571.648 511.94c-10.257 0-20.517 9.525-20.517 21.25 0 9.527 10.255 19.053 20.517 19.053 15.393 0 26.385-9.527 26.385-19.053 0-11.724-10.99-21.25-26.385-21.25v0zM504.225 413c16.123 0 26.385-10.257 26.385-25.651 0-16.123-10.261-25.649-26.385-25.649-15.39 0-30.048 9.527-30.048 25.649-0.001 15.396 14.659 25.651 30.048 25.651v0zM512.287 62.492c-248.427 0-449.813 201.386-449.813 449.813 0 248.425 201.386 449.812 449.813 449.812 248.425 0 449.812-201.386 449.812-449.812 0.001-248.427-201.385-449.813-449.812-449.813v0zM427.275 626.265c-27.119 0-46.906-4.394-72.556-11.725l-74.019 37.38 21.257-63.031c-52.035-36.64-82.818-82.811-82.818-139.243 0-99.67 93.808-175.889 208.137-175.889 101.135 0 191.279 60.097 208.867 145.113-7.328-1.469-13.926-2.199-19.788-2.199-99.67 0-176.619 74.75-176.619 164.894 0 15.388 2.199 29.313 5.863 43.972-5.863 0.728-12.461 0.728-18.324 0.728v0zM732.882 698.085l14.655 52.77-55.697-31.512c-21.252 4.394-41.773 10.99-63.025 10.99-98.206 0-175.889-67.422-175.889-150.968 0-83.547 77.685-150.97 175.889-150.97 93.072 0 176.619 67.423 176.619 150.97 0 46.9-31.512 88.673-72.552 118.721v0zM359.117 361.7c-15.39 0-31.512 9.527-31.512 25.649 0 15.395 16.122 25.656 31.512 25.656 14.66 0 26.385-10.261 26.385-25.656 0-16.122-11.725-25.649-26.385-25.649v0zM686.712 511.94c-10.995 0-20.522 9.525-20.522 21.25 0 9.527 9.527 19.053 20.522 19.053 14.655 0 25.649-9.527 25.649-19.053 0-11.724-10.994-21.25-25.649-21.25v0zM686.712 511.94z" p-id="1463"></path></svg>
						</a>
						<a href="#">
							<svg t="1660895474089" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1608"><path d="M512 0C229.224296 0 0 229.224296 0 512s229.224296 512 512 512 512-229.224296 512-512S794.775704 0 512 0zM801.261037 668.86163c-21.731556 18.640593-49.948444-61.345185-54.006519-49.038222-9.879704 29.923556-14.506667 49.929481-43.633778 82.507852-1.554963 1.744593 33.659259 14.468741 43.633778 41.642667 9.557333 26.017185 28.141037 67.26163-93.487407 80.213333-71.35763 7.585185-122.936889-38.020741-128.075852-37.584593-9.53837 0.83437-5.290667 0-15.530667 0-8.38163 0-8.931556 0.606815-16.820148 0-2.161778-0.170667-25.884444 37.584593-131.963259 37.584593-82.223407 0-103.518815-51.749926-86.983111-80.213333 16.535704-28.463407 44.126815-36.750222 40.239407-41.263407-19.152593-22.186667-32.350815-45.909333-40.239407-67.356444-1.953185-5.347556-3.584-10.543407-4.873481-15.530667-2.996148-11.45363-25.884444 67.204741-50.460444 49.038222-24.576-18.166519-22.376296-64.417185-6.46637-108.676741 16.042667-44.619852 56.471704-87.589926 56.926815-97.071407 1.611852-35.290074-3.489185-41.14963 0-50.422519 7.755852-20.764444 17.199407-12.8 17.199407-23.570963 0-135.736889 100.864-245.76 225.28-245.76s225.28 110.042074 225.28 245.76c0 5.195852 13.520593 0 19.986963 23.570963 1.327407 4.873481 2.23763 23.665778 0.663704 50.422519-0.739556 12.856889 34.266074 28.501333 52.375704 97.071407C828.434963 628.754963 810.30637 661.105778 801.261037 668.86163z" p-id="1609"></path></svg>
						</a>
						<a href="#">
							<svg t="1660895609624" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1754"><path d="M512 0C229.243259 0 0 229.224296 0 512s229.243259 512 512 512 512-229.224296 512-512S794.756741 0 512 0zM460.8 778.24c-175.312593 0-317.44-91.685926-317.44-204.781037 0-113.095111 212.859259-291.688296 294.286222-291.688296 34.133333 0 101.148444 25.448296 54.272 106.078815-3.280593 5.632 105.718519-46.895407 165.300148-12.344889 59.600593 34.550519 0 90.055111 0 96.218074 0 6.162963 119.656296 6.162963 119.656296 101.717333C776.874667 686.554074 636.112593 778.24 460.8 778.24zM710.276741 359.461926c-19.740444-23.438222-55.030519-17.957926-55.030519-17.957926-10.334815 0.094815-18.375111-7.111111-19.797333-16.839111-0.132741 0.986074-0.568889 1.896296-0.568889 2.901333l0-5.707852c0 1.005037 0.436148 1.85837 0.568889 2.806519 1.422222-9.993481 9.53837-18.792296 19.740444-20.138667 0 0 42.723556-11.681185 79.739259 21.636741 37.015704 33.317926 21.864296 88.405333 21.864296 88.405333-1.592889 11.207111-12.553481 20.15763-23.931259 20.15763L730.832593 434.725926c-11.396741 0-18.033778-8.779852-14.904889-19.607704C715.927704 415.099259 729.998222 382.900148 710.276741 359.461926zM850.62163 430.26963c-1.422222 15.587556-15.018667 28.273778-30.511407 30.01837 1.137778 0.132741 2.23763 0.341333 3.432296 0.341333l-6.97837 0c1.194667 0 2.37037-0.208593 3.546074-0.341333-15.018667-1.744593-25.125926-14.449778-22.945185-30.056296 0 0 16.70637-64.606815-23.988148-123.031704-40.713481-58.424889-128.208593-48.336593-128.208593-48.336593-15.54963-0.018963-28.596148-11.45363-30.245926-26.718815-0.113778 1.080889-0.32237 2.123852-0.32237 3.223704l0-6.409481c0 1.099852 0.208593 2.123852 0.32237 3.185778 1.649778-15.265185 14.506667-27.439407 30.340741-27.553185 0 0 91.098074-9.197037 158.947556 54.954667C871.860148 323.678815 850.62163 430.26963 850.62163 430.26963z" p-id="1755"></path><path d="M450.56 573.44m-20.48 0a1.08 1.08 0 1 0 40.96 0 1.08 1.08 0 1 0-40.96 0Z" p-id="1756"></path><path d="M403.303951 640.642444a1.62 2.159 0 1 0-25.964544-55.683072 1.62 2.159 0 1 0 25.964544 55.683072Z" p-id="1757"></path><path d="M432.033185 451.830519c-111.995259 15.739259-194.484148 87.514074-184.263111 160.331852 10.221037 72.817778 109.321481 119.087407 221.335704 103.329185 112.014222-15.739259 194.503111-87.514074 184.282074-160.331852C643.147852 482.360889 544.047407 436.091259 432.033185 451.830519zM448.398222 695.675259c-66.635852 12.951704-129.384296-21.560889-140.174222-77.065481-10.789926-55.523556 34.474667-111.009185 101.091556-123.960889 66.635852-12.970667 129.384296 21.541926 140.174222 77.065481C560.260741 627.218963 515.015111 682.723556 448.398222 695.675259z" p-id="1758"></path></svg>
						</a>
					</div>
				</div>
				
				<!--第二页-->
				<div class="card-section" :class="active(2)">
					<div class="card-content">
						<div class="card-subtitle">专辑发布</div>
						
						<div class="card-timeline">
							<div class="card-item" :data-year="item.time"  v-for="item in timeline" :key="item.id">
								<div class="card-item-title">{{item.title}}</div>
								<div class="card-item-desc">{{item.description}}</div>
							</div>
						</div>
					</div>
				</div>
				
				<!--第三页-->
				<div class="card-section" :class="active(3)">
					<div class="card-content">
						<div class="card-subtitle">联系</div>
						<div class="card-contact-wrapper">
							<div class="card-contact" v-for="item in contact" :key="item.id">
								<img :src="item.image">
								<span>{{item.info}}</span>
							</div>
							<button class="contact-me">一起工作</button>
						</div>
					</div>
				</div>
				
				<!--底部按钮-->
				<div class="card-buttons">
					<button :class="active(1)" @click="selectTab(1)">关于</button>
					<button :class="active(2)" @click="selectTab(2)">经历</button>
					<button :class="active(3)" @click="selectTab(3)">联系</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileCardView",
	data(){
		return {
			index: 1,
			imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.e23.cn%2F2020%2F0224%2F20200224041337504.jpg&refer=http%3A%2F%2Fimg01.e23.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662453154&t=821e7d98bb6796c7da0b1039184239d1#pskt#&imgName=%u70B9%u51FB%u67E5%u770B%u56FE%u7247%u6765%u6E90&imgLink=https%3A%2F%2Fimage.baidu.com%2Fsearch%2Findex%3Ftn%3Dbaiduimage%26ps%3D1%26ct%3D201326592%26lm%3D-1%26cl%3D2%26nc%3D1%26ie%3Dutf-8%26dyTabStr%3DMCwzLDEsMiw2LDQsNSw3LDgsOQ%253D%253D%26word%3D%25E5%2591%25A8%25E6%259D%25B0%25E4%25BC%25A6',
			timeline:[
				{time:'2022', title:'《最伟大的作品》', description:'第十五张专辑'},
				{time:'2016', title:'《周杰伦的床边故事》', description:'第十四张专辑'},
				{time:'2014', title:'《哎哟 不错哦》', description:'第十三张专辑'},
				{time:'2012', title:'《十二新作》', description:'第十二张专辑'},
				{time:'2011', title:'《惊叹号》', description:'第十一张专辑'},
				{time:'2010', title:'《跨时代》', description:'第十张专辑'},
			],
			
			contact:[
				{image:require('../../assets/images/change_skin.png'), info:'中国台北市大安区和平东路上的何平大苑'},
				{image:require('../../assets/images/change_skin.png'), info:'152xxxx4517'},
				{image: require('../../assets/images/change_skin.png'), info: 'Jay Chou@xxx.com'}
			]
		}
	},
	methods:{
		selectTab(index){
			this.index = index;
		},
		active(index){
			return index === this.index ? 'is-active' : ''
		}
	},
	computed:{
	
	}
}
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");


.card-box {
	font-family: "Jost", sans-serif;
	display: flex;
	flex-direction: column;
	//flex-wrap: wrap;
	background-color: rgba(16 18 27 / 10%);
	align-items: center;
	overflow: auto;
	width: 100%;
	
}

.card {
	width: 340px;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	transition: 0.5s;
	border-radius: 10px;
	box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
	margin: 60px 0;
}

.card-header {
	position: relative;
	display: flex;
	height: 200px;
	flex-shrink: 0;
	width: 100%;
	transition: 0.5s;
	
	*{
		transition: 0.5s;
	}
	.card-avatar {
		width: 100px;
		height: 100px;
		box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		object-position: center;
		object-fit: cover;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-64px);
	}
	.card-fullname {
		position: absolute;
		bottom: 0;
		font-size: 22px;
		font-weight: 700;
		text-align: center;
		white-space: nowrap;
		transform: translateY(-10px) translateX(-50%);
		left: 50%;
	}
	
	.card-jobtitle {
		position: absolute;
		bottom: 0;
		font-size: 11px;
		white-space: nowrap;
		font-weight: 500;
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-7px);
	}
}

.card.is-active {
	.card-header {
		height: 80px;
	}
	
	.card-avatar {
		transform: none;
		left: 20px;
		width: 50px;
		height: 50px;
		bottom: 10px;
	}
	
	.card-fullname,
	.card-jobtitle {
		left: 86px;
		transform: none;
	}
	
	.card-fullname {
		bottom: 18px;
		font-size: 19px;
	}
	
	.card-jobtitle {
		bottom: 16px;
		letter-spacing: 1px;
		font-size: 10px;
	}
}

.card-main {
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	padding-top: 10px;
	flex-direction: column;
	
	.card-section {
		display: none;
		
		&.is-active {
			display: block;
			animation: fadeIn 0.6s both;
		}
		
		.card-content {
			padding: 20px;
			
			.card-subtitle {
				font-weight: 700;
				font-size: 13px;
				margin-bottom: 8px;
			}
			
			//第一块
			.card-desc {
				line-height: 1.6;
				color: #636b6f;
				font-size: 14px;
				margin: 0;
				font-weight: 400;
				font-family: "DM Sans", sans-serif;
			}
			
			//第二块
			.card-timeline {
				margin-top: 30px;
				position: relative;
				
				&:after {
					background: linear-gradient(
							to top,
							rgba(134, 214, 243, 0) 0%,
							rgba(81, 106, 204, 1) 100%
					);
					content: "";
					left: 42px;
					width: 2px;
					top: 0;
					height: 100%;
					position: absolute;
				}
				
				.card-item {
					position: relative;
					padding-left: 60px;
					padding-right: 20px;
					padding-bottom: 30px;
					z-index: 1;
					
					&:last-child {
						padding-bottom: 5px;
					}
					
					&:after {
						content: attr(data-year);
						width: 10px;
						position: absolute;
						top: 0;
						left: 37px;
						width: 8px;
						height: 8px;
						line-height: 0.6;
						border: 2px solid #fff;
						font-size: 11px;
						text-indent: -35px;
						border-radius: 50%;
						color: rgba(#868686, 0.7);
						background: linear-gradient(
								to bottom,
								lighten(#516acc, 20%) 0%,
								#516acc 100%
						);
					}
					
					.card-item-title {
						font-weight: 500;
						font-size: 14px;
						margin-bottom: 5px;
					}
					.card-item-desc {
						font-size: 13px;
						color: #6f6f7b;
						line-height: 1.5;
						font-family: "DM Sans", sans-serif;
					}
				}
				
			}
			
			//第三块
			.card-contact-wrapper {
				margin-top: 20px;
				
				.card-contact {
					display: flex;
					align-items: center;
					font-size: 13px;
					color: #6f6f7b;
					font-family: "DM Sans", sans-serif;
					line-height: 1.6;
					cursor: pointer;
					margin-bottom: 10px;
					
					& + & {
						margin-top: 16px;
					}
					
					img {
						flex-shrink: 0;
						width: 25px;
						height: 25px;
						transition: 0.3s;
						margin-right: 10px;
					}
					span{
						border-left: 1px solid #dfe2ec;
						padding-left: 12px;
					}
				}
				.contact-me {
					border: 0;
					outline: none;
					background: linear-gradient(
							to right,
							rgba(83, 200, 239, 0.8) 0%,
							rgba(81, 106, 204, 0.8) 96%
					);
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
					color: #fff;
					padding: 12px 16px;
					width: 100%;
					border-radius: 5px;
					margin-top: 25px;
					cursor: pointer;
					font-size: 14px;
					font-weight: 500;
					font-family: "Jost", sans-serif;
					transition: 0.5s;
				}
			}
			
		}
		
		//第一块
		.card-social {
			display: flex;
			align-items: center;
			padding: 0 20px;
			margin-bottom: 30px;
			
			svg {
				fill: rgb(165, 181, 206);
				width: 22px;
				display: block;
				transition: 0.5s;
			}
			
			a {
				color: #8797a1;
				height: 32px;
				width: 32px;
				border-radius: 50%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				transition: 0.5s;
				background-color: rgba(93, 133, 193, 0.05);
				margin-right: 10px;
				
				&:hover {
					svg {
						fill: darken(rgb(165, 181, 206), 20%);
					}
				}
				
				&:last-child {
					margin-right: 0;
				}
			}
			
			
		}
	}
	
	//底部按钮
	.card-buttons {
		display: flex;
		background-color: #fff;
		margin-top: auto;
		width: 98%;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		
		button {
			flex: 1 1 auto;
			user-select: none;
			background: 0;
			font-size: 13px;
			border: 0;
			padding: 15px 5px;
			cursor: pointer;
			color: #5c5c6d;
			transition: 0.5s;
			font-family: "Jost", sans-serif;
			font-weight: 500;
			outline: 0;
			border-bottom: 3px solid transparent;
			
			&.is-active,
			&:hover {
				color: #2b2c48;
				border-bottom: 3px solid #8a84ff;
				background: linear-gradient(
						to bottom,
						rgba(127, 199, 231, 0) 0%,
						rgba(207, 204, 255, 0.2) 44%,
						rgba(211, 226, 255, 0.4) 100%
				);
			}
		}
	}
}


</style>