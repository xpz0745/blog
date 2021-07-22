<template>
	<div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.setElement();
		},
		methods: {
			setElement() {
				document.getElementsByClassName("hero")[0].style.background = "url(http://121.40.49.66/img/home-bg.jpg)";
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