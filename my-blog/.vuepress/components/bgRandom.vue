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
				    "/img/randomBg-3.jpg",
				    "/img/randomBg-4.jpg",
				    "/img/randomBg-5.jpg",
					"/img/randomBg-6.jpg"
				]
			}
		},
		mounted() {
			this.hanlerRandomBg();	
			this.setElement();
		},
		methods: {
			hanlerRandomBg() {
				for (let img of this.imgArr) {
					let image = new Image();
					image.src = img;
				}
				setTimeout(()=>{
					localStorage.setItem("currentImg",document.getElementsByClassName("hero")[0].style.backgroundImage);
				},100)
				let index = parseInt(Math.random() * (this.imgArr.length));
				let currentImage = this.imgArr[index];
				let localGetImg = localStorage.getItem("currentImg");
				console.log(currentImage)
				if(localGetImg == null || localGetImg.indexOf(currentImage) != -1) {
					document.getElementsByClassName("hero")[0].style.background = "url(/img/randomBg-2.jpg) no-repeat";
				}else {
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