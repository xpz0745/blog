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
			this.setElement();
		},
		methods: {
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