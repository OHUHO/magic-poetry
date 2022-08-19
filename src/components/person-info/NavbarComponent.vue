<template>
	<!--<nav class="navbar navbar-inverse navbar-fixed-top" aria-expanded="false">-->
		<div class="container">
			<div class="navbar-header">
				<button type="button"
					class="navbar-toggle collapsed"
					data-toggle="collapse"
					data-target="#navbar-options"
					aria-expanded="false">
					<span class="sr-only">切换导航</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				
				<a class="navbar-brand" href="#">Portfolio</a>
			</div>
			
			
			<div class="navbar-collapse collapse" id="navbar-options">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#profile">头像</a></li>
					<li><a href="#about">关于</a></li>
					<li><a href="#portfolio">作品集</a></li>
					<li><a href="#contact">联系</a></li>
				</ul>
			</div>
		
		</div>
	<!--</nav>-->
</template>

<script>
export default {
	name: "NavbarComponent"
}
</script>

<style scoped lang="scss">



</style>