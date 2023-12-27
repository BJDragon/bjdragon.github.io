var posts=["2023/12/27/5/","2023/12/27/4/","2023/12/26/2/","2023/12/26/1/","2023/12/27/3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };