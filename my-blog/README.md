---
# heroImage: /img/hero.png
home: true
heroText: 今天还好吗？
tagline: A simple and beautiful blog.
bgImage: '/img/home-bg.jpg'
bgImageStyle: {
  height: '100vh'
}
isShowTitleInHome: true
---

<script>
    var imgArr = [
        "/img/test-1.jpg",
        "/img/test-2.jpg",
        "/img/test-3.jpg",
        "/img/test-4.jpg"
	];
    var index = parseInt(Math.random() * (imgArr.length-1));
    var currentImage = imgArr[index];
    setTimeout(()=>{
        console.log(window.location.href);
        document.getElementsByClassName("hero")[0].style.background = 				"url("+currentImage+")";
        },1000);
</script>
