var posts=["2024/01/11/Csharp/","2023/12/27/4/","2023/12/27/Life/","2023/12/26/python常用操作/","2023/12/26/python绘图/","2023/12/27/分类算法/","2023/12/27/pytorch/","2023/12/27/常见问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };