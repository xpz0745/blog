<template>
	<div class="root">
		<div class="">
			<van-button class="replacePortrait">
				<van-uploader :after-read="afterRead">
					<div class="">
						
					</div>
				</van-uploader>
			</van-button>
			<img src="http://www.dandan3.top/img/authorAvatar.jpg" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				
			]
		}
	},
	created() {
		
	},
	methods: {
		afterRead() {
			let formData = new FormData()
			formData.append('name',file.file.name)
			formData.append('base64',file.content)
			upload(formData).then(res => {
				this.items.push(res.data.url)
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style scoped lang="less">
	.root {
		.replacePortrait {
			width: 100px;
			height: 100px;
			background: lightblue;
		}
	}
</style>
