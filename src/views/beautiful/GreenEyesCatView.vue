<template>
	<div class="green-eyes-cat">
		<img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" width="800">
	</div>
</template>

<script>
export default {
	name: "GreenEyesCatView"
}
</script>

<style scoped>

.green-eyes-cat{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: #0a0a0a;
}

img{
	animation: fadeIn 3s linear;
}

@keyframes fadeIn{
	0% {
		opacity: 0;
		filter: brightness(1) blur(20px);
	}
	10% {
		opacity: 1;
		filter: brightness(2) blur(10px);
	}
	100% {
		opacity: 1;
		filter: brightness(1) blur(0);
	}
}
</style>