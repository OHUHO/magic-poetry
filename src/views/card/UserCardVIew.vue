<template>
	<div class="center">
		
		<div class="card">
			<div class="additional">
				<div class="user-card">
					<div class="level center">Level {{ userinfo.level }}</div>
					<img :src="userinfo.portrait">
					<div class="points center">{{ userinfo.points }} Points</div>
				</div>
				<div class="more-info">
					<h1>{{userinfo.username}}</h1>
					<div class="coords">
						<span>代表作</span>
						<span>{{userinfo.master}}</span>
					</div>
					<div class="coords">
						<span>城市</span>
						<span>{{userinfo.city}}</span>
					</div>
					<div class="stats">
						<div>
							<div class="title">歌曲</div>
							<i class="fa fa-trophy"></i>
							<div class="value">{{userinfo.music}}</div>
						</div>
						<div>
							<div class="title">专辑</div>
							<i class="fa fa-gamepad"></i>
							<div class="value">{{userinfo.album}}</div>
						</div>
						<div>
							<div class="title">视频</div>
							<i class="fa fa-group"></i>
							<div class="value">{{userinfo.video}}</div>
						</div>
						<div>
							<div class="title">其他</div>
							<i class="fa fa-coffee"></i>
							<div class="value infinity">{{ userinfo.other }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="general">
				<h1>{{userinfo.username}}</h1>
				<p>中国台湾华语流行歌手、著名音乐人、音乐创作家、作曲家、作词人、制作人、杰威尔音乐公司老板之一、导演。</p>
				<span class="more">将鼠标放在卡片上查看更多信息</span>
			</div>
		</div>
	
	</div>

</template>

<script>
export default {
	name: "UserCardVIew",
	data(){
		return {
			userinfo:{
				username:'Jay Chou',
				portrait: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.e23.cn%2F2020%2F0224%2F20200224041337504.jpg&refer=http%3A%2F%2Fimg01.e23.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662453154&t=821e7d98bb6796c7da0b1039184239d1#pskt#&imgName=%u70B9%u51FB%u67E5%u770B%u56FE%u7247%u6765%u6E90&imgLink=https%3A%2F%2Fimage.baidu.com%2Fsearch%2Findex%3Ftn%3Dbaiduimage%26ps%3D1%26ct%3D201326592%26lm%3D-1%26cl%3D2%26nc%3D1%26ie%3Dutf-8%26dyTabStr%3DMCwzLDEsMiw2LDQsNSw3LDgsOQ%253D%253D%26word%3D%25E5%2591%25A8%25E6%259D%25B0%25E4%25BC%25A6',
				introduction: '中国台湾华语流行歌手、著名音乐人、音乐创作家、作曲家、作词人、制作人、杰威尔音乐公司老板之一、导演。',
				level: '26',
				points: '9999+',
				city: '中国台湾',
				master: '哥的每首都能代表哥',
				music: 826,
				album: 37,
				video: 9095,
				other: '99+'
			}
		}
	}
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Abel');


.center {
	font-family: Abel, Arial, Verdana, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px 40px;
	background-color: rgba(16 18 27 / 10%);
	
	.card {
		width: 450px;
		height: 250px;
		background: #fff linear-gradient(#f8f8f8, #fff);
		box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
		border-radius: 20px;
		overflow: hidden;
		position: relative;
		margin: 1.5rem;
		
		.additional {
			position: absolute;
			width: 150px;
			height: 100%;
			background: linear-gradient(#dE685E, #EE786E);
			transition: width 0.4s;
			overflow: hidden;
			z-index: 2;
			
			.user-card {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 150px;
				height: 100%;
				float: left;
				
				.level,
				.points {
					color: #fff;
					width: 60%;
					text-transform: uppercase;
					font-size: 0.75em;
					font-weight: bold;
					background: rgba(0,0,0,0.15);
					padding: 0.125rem 0.75rem;
					border-radius: 100px;
					white-space: nowrap;
				}
				
				img {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					margin: 10% 0;
				}
				
			}
			.user-card::after {
				content: "";
				display: block;
				position: absolute;
				top: 10%;
				right: -2px;
				height: 80%;
				border-left: 2px solid rgba(0,0,0,0.025);
			}
			
			.more-info {
				width: 300px;
				float: left;
				position: absolute;
				left: 150px;
				height: 100%;
				
				h1 {
					color: #fff;
					margin-bottom: 0;
					text-align: center;
				}
				
				.coords {
					margin: 0 1rem;
					color: #fff;
					font-size: 1rem;
					
					span + span {
						float: right;
					}
				}
				
				.stats {
					font-size: 2rem;
					display: flex;
					position: absolute;
					bottom: 1rem;
					left: 1rem;
					right: 1rem;
					top: auto;
					color: #fff;
					
					i {
						display: block;
					}
			
					div.title {
						font-size: 0.75rem;
						font-weight: bold;
						text-transform: uppercase;
					}
					
					div.value {
						font-size: 1.5rem;
						font-weight: bold;
						line-height: 1.5rem;
					}
					
					div.value.infinity {
						font-size: 1.5rem;
					}
					
				}
				.stats > div {
					flex: 1;
					text-align: center;
				}
				
			}
			
			
		}
		
		.general {
			width: 300px;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
			box-sizing: border-box;
			padding: 1rem;
			padding-top: 0;
			
			h1{
				text-align: center;
			}
			
			.more {
				position: absolute;
				bottom: 1rem;
				right: 1rem;
				font-size: 0.9em;
			}
			
		}
	}
	
	.card:hover{
		.additional{
			width: 100%;
			border-radius: 0 5px 5px 0;
		}
	}
	
}

</style>