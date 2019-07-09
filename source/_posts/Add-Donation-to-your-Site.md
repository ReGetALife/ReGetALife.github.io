---
title: Add Donation to your Site
donate: true
date: 2017-08-18 12:50:13
tags: 
- Hexo
thumbnail: /images/qiudashang.png
banner:
categories: Web开发
comment: true
share: true
---

### 如何给自己的网站添加打赏😆

<!--more-->

许多的原创内容的网站尤其是博客都有打赏的功能，下面介绍如何添加简单的打赏按钮
借助hexo建站的网站，并且使用的是NexT主题，主题本身已经自带了打赏功能，参照主题文档开启即可，不再赘述。

其他网站仅需简单两步即可引入打赏：

- 在文章布局的尾部插入如下代码块(hexo中直接添加进/blog/themes/.../layout/.../article.ejs文件中)

  ```html
  <div style="padding: 10px 0; margin: 20px auto; width: 90%; text-align: center">
       
      <div>您的支持将鼓励我继续创作！</div>
      <br>   
      <button id="rewardButton" onclick="var qr = document.getElementById('QR'); if (qr.style.display === 'none') {qr.style.display='block';} else {qr.style.display='none'}" disable="enable">
          <img src="按钮图片路径">
      </button>
      <div id="QR" style="display: none;">
          <div style="display: inline-block">
              <img src="支付宝收款二维码路径">
              <p>支付宝打赏</p>
          </div>
          <div style="display: inline-block">
              <img src="微信收款二维码路径">
              <p>微信打赏</p>
          </div>
          <div style="display: inline-block">
              <img src="QQ收款二维码路径">
              <p>QQ打赏</p>
           </div>
       </div>
  </div>
  ```

  ​

- 引入简单的样式文件(hexo中可直接加进/blog/themes/.../layout/.../article.ejs文件末尾)

  ```html
  <style>
  #rewardButton {
  	width: 40px;
  	height: 40px;
  	cursor: pointer;
  	border: 0;
  	outline: 0;
  	border-radius: 100%;
  	padding: 0;
  	margin: 0;
  }
  #QR {
  	padding-top: 20px;
  }

  #QR img {
  	width: 120px;
          max-width: 100%;

          margin: .8em 2em 0;
  }
  #rewardButton img {
  	display: inline-block;
  	width: 40px;
  	height: 40px;
  	border-radius: 5px;
  	background: #b9dff3;
  }
  #rewardButton img:hover {
  	background: #f39a75;
  }
  </style>
  ```

  ​

大功告成辣。效果请看文章下方的打赏按钮。

#### 欢迎打赏(:3\_ヽ)\_

