<template>
	<div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: [
				    "/img/randomBg-1.jpg",
				    "/img/randomBg-2.jpg",
				    "/img/randomBg-3.jpg",
				    "/img/randomBg-4.jpg",
				    "/img/randomBg-5.jpg"
				]
			}
		},
		mounted() {
			this.hanlerRandomBg();
			this.setElement();
		},
		methods: {
			hanlerRandomBg() {
				if(this.$page.path == "/") {
					let index = parseInt(Math.random() * (this.imgArr.length));
					let currentImage = this.imgArr[index];
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
				setTimeout(()=>{
					document.getElementsByClassName("hero")[0].getElementsByTagName("div")[0].appendChild(paramA);
				},600)
			}
		},
	}
</script>