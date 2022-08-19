<template>
	
	<div class="person-info">
		
		<!--<nav class="navbar navbar-inverse navbar-fixed-top" aria-expanded="false">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-options" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					
					<a class="navbar-brand" href="#">Portfolio</a>
				</div>
				
				
				<div class="navbar-collapse collapse" id="navbar-options">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#profile">Profile</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			
			</div>
		</nav>-->
		
		<div class="person-profile" id="profile">
			<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi1%2F2067459429%2FTB2CHRUFf5TBuNjSspmXXaDRVXa_%21%212067459429.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662988770&t=bc0e2361b9a8834a923c36e2ac008dcd" alt="Profile" class="profile-picture">
			<div class="display-name">
				<h1>Gloria 歌莉娅</h1>
				<h5>歌手 词曲作者 音乐制作人</h5>
				<h4>中国香港</h4>
			</div>
			
		</div>
		
		<div class="about-me" id="about">
			<h1 class="big-title">个人介绍</h1>
			<div class="about-me-row">
				<div class="about-me">
					<section class="row ">
						<h4 class="row-header">个人简介</h4>
						<p class="">
							邓紫棋（G.E.M.），本名邓诗颖，1991年8月16日出生于上海市，中国香港流行乐女歌手、词曲作者、音乐制作人。2008年，发行个人首张音乐EP《G.E.M.》，凭该EP获得十大劲歌金曲颁奖典礼“最受欢迎女新人奖（金奖）”。2009年，发行个人首张音乐专辑《18》。2011年，成为首位登上香港体育馆开唱的90后华语女歌手。
						</p>
					</section>
					
					<section class="row ">
						<h4 class="row-header">主要成就</h4>
						<ul class="list-group">
							<li class="list-group-item" v-for="item in achievement" :key="item.id">{{item.name}}</li>
						</ul>
					</section>
					
					<section class="row ">
						<h4 class="row-header">阅历</h4>
						
						<ul class="list-group">
							<li class="list-group-item" v-for="item in experience" :key="item.id">
								<div>{{item.title}}</div>
								<small class="small-text">{{ item.name }}</small><br>
								<small class="small-text">{{ item.time }}</small>
							</li>
							
						</ul>
					</section>
				</div>
				
				
			</div>
		</div>
		
		<div class="my-portfolio" id="portfolio">
			<h1 class="big-title"  >作品集</h1>
			<div class="portfolio-cards">
				<div class=" portfolio-card" v-for="item in cards" :key="item.id">
					<img :src="item.imageUrl" class="portfolio-img">
					<h4>{{item.content}}</h4>
				</div>
			</div>
		</div>
		
		<div class="contact-me" id="contact">
			
			<h1 class="big-title">联系我</h1>
			<div class="text-center-row">
				<div class="row">
					<div class="form-group">
						<div class="input-group">
							<div class="icon">
								<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path></svg>
							</div>
							<input class="input" type="text" id="name" placeholder="姓名">
						</div>
					</div>
					
					<div class="form-group">
						<div class="input-group">
							<div class="icon">@</div>
							<input class="input" type="text" id="email" placeholder="邮箱地址">
						</div>
					</div>
					
					<div class="form-group">
						<div class="input-group">
							<div class="icon">
								<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"></path></svg>
							</div>
							<input class="input" type="text" id="phone" placeholder="手机号码">
						</div>
					</div>
				</div>
				
				<div class="row">
					<textarea class="input input1" rows="8" placeholder="请输入信息"></textarea>
				</div>
			</div>
			
			<div class="button">
				<button class="btn">提交</button>
			</div>
			
		</div>
		
	</div>
	


</template>

<script>
export default {
	name: "PersonInfoView",
	data(){
		return{
			achievement:[
				{id:1,name:'华语音乐传媒大奖年度艺人'},
				{id:2,name:'世界杰出华人青年大奖获得者'},
				{id:3,name:'音乐风云榜最佳流行演唱人'},
				{id:4,name:'全球华语歌曲排行榜最佳女歌手'},
				{id:5,name:'台湾金曲奖评审团奖'},
			],
			experience:[
				{id:1,title:'年度最佳港台女歌手',name:'《平行世界》',time:'2021年2月8日'},
				{id:2,title:'改名Gloria 歌莉雅',name:'《启示录》',time:'2022年7月1日'},
			],
			cards:[
				{id:1,imageUrl:'http://p1.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=120y120',content:'启示录'},
				{id:2,imageUrl:'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=120y120',content:'摩天动物园'},
				{id:3,imageUrl:'http://p2.music.126.net/fI5OPx5-0G4g384rGNQftA==/109951163751293472.jpg?param=120y120',content:'睡皇后'},
				{id:4,imageUrl:'http://p2.music.126.net/X7f92tSJ-b0_sC1u9tgAyQ==/109951163654227442.jpg?param=120y120',content:'毒苹果'},
				{id:5,imageUrl:'http://p2.music.126.net/tXCIFsVDK6IKcQ9YWxwOEg==/109951163523944497.jpg?param=120y120',content:'另一个童话'},
				{id:6,imageUrl:'http://p1.music.126.net/eX7aCeGTF3Lt_swJSbE4yQ==/18700493765616158.jpg?param=120y120',content:'25 LOOKS'},
				{id:7,imageUrl:'http://p2.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg?param=120y120',content:'新的心跳'},
				{id:8,imageUrl:'http://p2.music.126.net/w0EbVeyPeMZYQsaHV7PaAA==/109951163789161236.jpg?param=120y120',content:'The Best of G.E.M.'},
				{id:9,imageUrl:'http://p2.music.126.net/3XEICRFzQPrHPUMD0xm1Jw==/109951163069323980.jpg?param=120y120',content:'Xposed'},
				{id:10,imageUrl:'http://p1.music.126.net/Q6ROCCNP2qtqmDzp4uswgA==/109951163069327659.jpg?param=120y120',content:'My Secret'},
				{id:11,imageUrl:'http://p1.music.126.net/ZOspX8Q2sEjcF_wTHSWaqQ==/5853799906405628.jpg?param=120y120',content:'18'},
				{id:12,imageUrl:'http://p1.music.126.net/SRSzJNkVegFlCJVc49VvxQ==/109951163069324876.jpg?param=120y120',content:'G.E.M.'},
			],
			
		}
	}
}
</script>

<style scoped lang="scss">

.person-info{
	width: 100%;
	overflow: auto;
	align-items: center;
	background-color: rgba(16 18 27 / 10%);
	padding: 20px 40px;
	color: #ffffff;
	
	.person-profile{
		width: 100%;
		height: 100%;
		flex-direction: column;
		display: flex;
		background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fshihuo.hupucdn.com%2Fucditor%2F20180622%2F4703x3135_4da264789c9a610887d7287e8750b321.jpeg&refer=http%3A%2F%2Fshihuo.hupucdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662987630&t=bdf5fbedc140969146d30c3f741d7604");
		background-size: 100% 100%;
		background-color: #464646;
		//background-size: cover;
		align-items: center;
		justify-content: center;
		background-attachment: fixed;
		
		.profile-picture{
			width: 144px;
			height: 144px;
			border-radius: 50%;
			margin: 0 auto;
			position: relative;
			z-index: 2;
		}
		
		.display-name{
			color: #fff;
			position: relative;
			z-index: 2;
			text-align: center;
			
			h1,h4,h5{
				margin: 5px;
			}
			
		}
	}
	
	.about-me{
		text-align: left;
		box-sizing: border-box;
		color: #ffffff;
		
		&-row{
			width: 100%;
			
			.about-me{
				display: flex;
				flex-wrap: wrap;
				margin-right: -30px;
				
				.row{
					width: calc(33.33333% - 30px);
					margin-right: 30px;
					padding: 10px;
					background-color: rgba(186, 191, 217, 0.13);
					border-radius: 10px;
					
					text-align: left;
					
					&-header{
						margin: 0;
					}
					
					.list-group{
						padding: 0;
						
						.list-group-item {
							position: relative;
							display: block;
							padding: 10px 15px;
							margin-bottom: -1px;
							border: 1px solid #dddddd;
							//border: 1px solid #5b5959;
							
							.small-text{
								color: #dddddd;
							}
						}
						
					}
					
					@media screen and (max-width: 1110px) {
						width: calc(50% - 30px);
					}
					@media screen and (max-width: 565px) {
						width: calc(100% - 30px);
					}
				}
				.row:hover{
					background-color: rgba(16 18 27 / 20%);
				}
			}
		}
	}
	
	.my-portfolio{
		width: 100%;
		overflow: hidden;
		
		.portfolio-cards{
			display: flex;
			flex-wrap: wrap;
			margin-right: -10px;
			
			.portfolio-card{
				width: calc(33.333333% - 10px);
				margin-right: 10px;
				
				margin-top: 10px;
				box-shadow: 0 2px 5px #888888;
				border-radius: 10px;
				background-color: white;
				
				.portfolio-img{
					width: 100%;
					border-radius: 10px 10px 0 0;
				}
				
				h4 {
					background: #fff;
					color: #000;
					text-align: center;
					margin: 0;
					padding: 4px 0 10px;
					border-radius: 0 0 10px 10px;
				}
				
				@media screen and (max-width: 1110px) {
					width: calc(50% - 10px);
				}
				@media screen and (max-width: 565px) {
					width: calc(100% - 10px);
				}
			}
			.portfolio-card:hover{
				cursor: pointer;
				transform: scale(1.02);
				border-radius: 10px;
				background-color: rgba(16 18 27 / 20%);
			}
			
		}
	}
	
	.contact-me{
		//display: flex;
		//flex-direction: column;
		width: 100%;
		overflow: hidden;
		
		.text-center-row{
			display: flex;
			flex-wrap: wrap;
			//width: 100%;
			margin-right: -30px;
			
			.row{
				width: calc(50% - 30px);
				margin-right: 30px;
				
				.form-group{
					.input-group{
						display: flex;
						flex-direction: row;
						height: 38px;
						width: 100%;
						margin-bottom: 10px;
						
						
						.icon{
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 14px;
							font-weight: 400;
							line-height: 1;
							color: #555;
							text-align: center;
							background-color: #eee;
							border-radius: 4px 0 0 4px;
							width: 50px;
							
							svg{
								width: 20px;
								height: 20px;
							}
						}
						/*input{
							width: 100%;
							padding: 6px 12px;
							border-radius: 0 4px 4px 0;
							border: 1px solid #ccc;
						}*/
						
					}
				}
				.input{
					width: 100%;
					padding: 6px 12px;
					border-radius:0 4px 4px 0;
					border: 1px solid #ccc;
				}
				.input1{
					padding: 10px;
					border-radius: 4px;
				}
				.input:focus{
					border-color: #66afe9;
					outline: 0;
					box-shadow: inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
				}
				
				@media screen and (max-width: 1110px) {
					width: 100%;
				}
			}
		}
		
		.button{
			text-align: center;
			
			.btn{
				padding: 8px 30px;
				border-radius: 6px;
				background-color: #337ab7;
				border-color: #2e6da4;
				color: #ffffff;
				font-weight: 500;
				margin: 20px;
			}
			.btn:hover{
				background-color: #286090;
				border-color: #204d74;
			}
		}
	}
	
	.big-title{
		padding: 50px 0 30px 0;
		//border-top: 1px solid rgba(16 18 27 / 50%);
	}
	
}


</style>