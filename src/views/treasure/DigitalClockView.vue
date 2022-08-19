<template>
	<div class="clock">
		<p class="date">{{ date }}</p>
		<p class="time">{{ time }}</p>
		<p class="text">A digital clock created by Jing Chao</p>
	</div>
</template>

<script>
export default {
	name: "DigitalClockView",
	data(){
		return {
			time: '',
			date: '',
			week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		}
	},
	methods:{
		updateTime(){
			const date = new Date();
			this.time = this.zeroPadding(date.getHours(), 2) + ':' + this.zeroPadding(date.getMinutes(), 2) + ':' + this.zeroPadding(date.getSeconds(), 2);
			this.date = this.zeroPadding(date.getFullYear(), 4) + '-' + this.zeroPadding(date.getMonth()+1, 2) + '-' + this.zeroPadding(date.getDate(), 2) + ' ' + this.week[date.getDay()];
		},
		zeroPadding(num, digit){
			let zero = '';
			for (let i = 0; i < digit; i++){
				zero += '0';
			}
			return (zero + num).slice(-digit)
		}
	},
	mounted() {
		setInterval(this.updateTime,1000);
		this.updateTime();
	}
}
</script>

<style scoped lang="scss">

.clock {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	//background-color: rgb(15,56,84);
	background-color: rgb(15,56,84,0.1);
	background-color: rgba(16 18 27 / 10%);
	width: 100%;
	overflow: auto;
	padding: 20px 40px;
	//color: #daf6ff;
	color: #ffffff;
	font-family: 'Share Tech Mono', monospace;
	//text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
	text-shadow: 0 0 20px rgb(78, 179, 213),  0 0 20px rgba(10, 175, 230, 0);
	p{
		margin: 0;
	}
	.time {
		letter-spacing: 0.05em;
		font-size: 80px;
		padding: 5px 0;
	}
	.date {
		letter-spacing: 0.1em;
		font-size: 24px;
	}
	.text {
		letter-spacing: 0.1em;
		font-size: 12px;
		padding: 20px 0 0;
	}
}

</style>