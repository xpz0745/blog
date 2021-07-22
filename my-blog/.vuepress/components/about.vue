<template>
	<div id="about">
		<div class="about-nail">
			<img src="http://121.40.49.66/img/nail.png" alt="图钉" />
		</div>
		<div class="about-side">
			<div class="about-author">
				<img src="http://121.40.49.66/img/authorAvatar.jpg" alt="作者头像" width="140px" height="140px" />
			</div>
			<div class="about-authorInfo">
				<ul>
					<li><b>Name: </b>{{ Name }}</li>
					<li><b>Profile: </b>{{ Profile }}</li>
					<li><b>Email: </b>{{ Email }}</li>
					<li><b>Hobby: </b>{{ Hobby }}</li>
				</ul>
			</div>
			<div class="about-skill-Info">
				<p>Skill</p>
				HTML
				<div class="container">
				  <div class="skills html"></div>
				</div><br>
				CSS
				<div class="container">
				  <div class="skills css"></div>
				</div><br>
				Python
				<div class="container">
				  <div class="skills python"></div>
				</div><br>
				JavaScript
				<div class="container">
				  <div class="skills js"></div>
				</div>
			</div>
		</div>
		<div class="about-main">
			<h1>About me</h1><hr/>
			<div class="about-content">
				<p>
					The original intention of setting up this blog website, 
					is mainly to record the process of own growing up and learning.
				</p>
				<p class="about-time">
					— {{ time }}
				</p>
			</div>
		</div>	
	</div>
</template>	

<script>
	export default {
		data() {
			return {
				Name: "xpz0745",
				Profile: "Front end small-white",
				Email: "313903714@qq.com",
				Hobby: "League of Legends",
				time: "",
				clearId: ""
			}
		},
		created() {
			this.handlerTime();
		},
		beforeRouteLeave(to,from,next) {
			console.log(to);
			clearInterval(this.clearId)
			next()
		},
		methods: {
			handlerTime() {
				this.clearId = setInterval(()=>{
					this.time = new Date().toLocaleString();
				},1000)
			}
		}
	}
</script>

<style scoped>

</style>