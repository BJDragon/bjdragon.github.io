var posts=["2023/12/26/hello-world/","2023/12/26/my2ed-post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };