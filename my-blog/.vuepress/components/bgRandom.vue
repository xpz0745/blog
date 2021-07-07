<template>
	<div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: [
				    "/img/randomBg-1.png",
				    "/img/randomBg-2.png",
				    "/img/randomBg-3.png",
				    "/img/randomBg-4.png",
				    "/img/randomBg-5.png",
					"/img/randomBg-6.png"
				]
			}
		},
		mounted() {
			this.hanlerRandomBg();
			this.setElement();
		},
		methods: {
			hanlerRandomBg() {
				if(this.$page.path == "/"){
					const index = parseInt(Math.random() * (this.imgArr.length));
					const currentImage = this.imgArr[index];
					document.getElementsByClassName("hero")[0].style.background = "url("+currentImage+") no-repeat";
				}
			},
			setElement() {
				let paramA = document.createElement("a");
				paramA.href = "#homeBlog";
				paramA.className = "home-more";
				let paramDiv = document.createElement("div");
				paramDiv.id = "homeBlog";
				document.getElementsByClassName("hero")[0].appendChild(paramDiv);
				document.getElementsByClassName("hero")[0].getElementsByTagName("div")[0].appendChild(paramA);
				
			}
		},
	}
</script>