var posts=["2023/12/27/3/","2023/12/26/1/","2023/12/27/4/","2023/12/27/5/","2023/12/26/python常用操作/","2023/12/27/分类算法/","2023/12/27/pytorch/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };