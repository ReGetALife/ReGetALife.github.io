# Icarus

### The blog theme you may fall in love with, coming to Hexo. [Preview](http://ppoffice.github.io/hexo-theme-icarus/)
![](http://ppoffice.github.io/hexo-theme-icarus/gallery/preview.png "")

#### [View Documentation](https://github.com/ppoffice/hexo-theme-icarus/wiki)
:star: It is strongly recommended that you read the docs before using Icarus.

## Features

### Profile Sidebar

A nice place to show yourself. You can add your own information in your site's `_config.yml`

![](http://ppoffice.github.io/hexo-theme-icarus/gallery/profile.png "")

### Self-hosted Insite Search Engine
With the help of [Insight Search](https://github.com/ppoffice/hexo-theme-icarus/wiki/Search#insight-search), you can search anything inside your site without any third-party plugin.

![](http://ppoffice.github.io/hexo-theme-icarus/gallery/insight-search.png "")

### Custom Comment Services
Icarus supports several comment services, give you better choices to communicate with your readers.

![](http://ppoffice.github.io/hexo-theme-icarus/gallery/custom-comments.png "")

### Post Banner & Thumbnail

Thanks to [atika](https://github.com/atika), you can now [add thumbnails or banners](https://github.com/ppoffice/hexo-theme-icarus/wiki/Theme#thumbnail) to every post to create better reading experience.

### Responsive Layout

Icarus knows on what screen size you are browsering the website, and reorganize the layout to fit your device.

![](http://ppoffice.github.io/hexo-theme-icarus/gallery/responsive.jpg "")

### Custom Categories & Tags Pages

Get your categories and tags listed in single pages to make your blog more methodic.

### lightgallery

Icarus uses [lightgallery.js](https://sachinchoolur.github.io/lightgallery.js/) to showcase your photos. Just enable it in your configuration, and that's all!

![](http://ppoffice.github.io/hexo-theme-icarus/gallery/lightgallery.jpg "")

### Justified Gallery

You can also use [justifiedgallery.js](http://miromannino.github.io/Justified-Gallery/) to display a photo grid within your posts. Just enable it in your configuration, and place your photos in a div with the class .justified-gallery

### Sidebar

Icarus provides 6 built-in widgets:

- recent_posts
- category
- archives
- tag
- tagcloud
- links

All of them are enabled by default. You can edit them in `widget` setting.

### 关于自添加的东西

进度条：

- 在head.ejs添加了

  > <script src="//cdn.bootcss.com/pace/1.0.2/pace.min.js"></script>
  > <link href="//cdn.bootcss.com/pace/1.0.2/themes/pink/pace-theme-flash.css" rel="stylesheet">
  > <style>
  >
  >     .pace .pace-progress {
  >         background: #1E92FB; /*进度条颜色*/
  >         height: 3px;
  >     }
  > </style>

背景：

- 在footer.ejs添加了

  > <script type="text/javascript" src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js"></script>

计时：

- 在profile.ejs修改了<h3>

  > <script language="javascript" type="text/javascript"> 
  > var interval = 1000; 
  > function ShowCountDown(year,month,day,divname) 
  > { 
  > var now = new Date(); 
  > var endDate = new Date(year, month-1, day); 
  > var leftTime=now.getTime()-endDate.getTime(); 
  > var leftsecond = parseInt(leftTime/1000); 
  > //var day1=parseInt(leftsecond/(24*60*60*6)); 
  > var day1=Math.floor(leftsecond/(60*60*24)); 
  > var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
  > var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
  > var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
  > var cc = document.getElementById(divname); 
  > cc.innerHTML = ""+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
  > } 
  > window.setInterval(function(){ShowCountDown(2017,2,9,'divdown1');}, interval); 
  > </script> 
  >
  >  <center id="divdown1"></center>

音乐：

- 安装aplayer插件，在想要的地方加入代码(放在了forfile.ejs)

  > {% raw %}
  > <div id="player1" class="aplayer"></div>
  > <script src="dist/APlayer.min.js"></script><!-- use your path -->
  > <script>
  > var ap = new APlayer({
  >
  >     element: document.getElementById('player1'),                       // Optional, player element
  >     narrow: false,                                                     // Optional, narrow style
  >     autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
  >     showlrc: 2,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  >     mutex: true,                                                       // Optional, pause other players when this player playing
  >     theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
  >     mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
  >     preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  >     listmaxheight: '513px',                                             // Optional, max height of play list
  >     music: [
  >     {                                          
  >         title: '人情世故',                            
  >         author: '杨千嬅',             
  >         url: '/music/人情世故.mp3', 
  >         pic: '/images/qq.jpg', 
  >         lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'           
  >     },
  >     {                                          
  >         title: 'Preparation',                            
  >         author: 'Hans Zimmer/Richard Harvey',             
  >         url: '', 
  >         pic: '/images/qq.jpg', 
  >         lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'           
  >     }
  >     ]
  > });
  > var ap = new APlayer(option);
  > </script>
  > {% endraw %}


不蒜子统计：

- 引入js

  > <script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js">
  > </script>


- 在footer.ejs里添加全站统计

  >             <span id="busuanzi_container_site_uv">
  >                 <i class="fa fa-user"></i>
  >                 <span id="busuanzi_value_site_uv"></span>
  >             </span>  |  
  >             <span id="busuanzi_container_site_pv">
  >                 <i class="fa fa-eye"></i>
  >                 <span id="busuanzi_value_site_pv"></span>
  >             </span>

- 在article.ejs里添加文章统计

  >                         <span id="busuanzi_container_page_pv">
  >                            <i class="fa fa-eye"></i>
  >                            <span id="busuanzi_value_page_pv"></span>
  >                         </span>

打赏：

- 在articl.ejs里添加

  >     <% if (!index) { %>
  >         <div style="padding: 10px 0; margin: 20px auto; width: 90%; text-align: center">
  >
  >             <div>您的支持将鼓励我继续创作！</div>
  >     <br>   
  >             <button id="rewardButton" onclick="var qr = document.getElementById('QR'); if (qr.style.display === 'none') {qr.style.display='block';} else {qr.style.display='none'}" disable="enable">
  >
  >                <img src="/css/images/赏.png">
  >             </button>
  >             <div id="QR" style="display: none;">
  >                 <div style="display: inline-block">
  >                     <img src="/css/images/zhifubao.jpg">
  >                     <p>支付宝打赏</p>
  >                 </div>
  >                 <div style="display: inline-block">
  >                     <img src="/css/images/weixin.jpg">
  >                     <p>微信打赏</p>
  >                 </div>
  >         
  >                 <div style="display: inline-block">
  >                     <img src="/css/images/qq.jpg">
  >                     <p>QQ打赏</p>
  >                 </div>
  >             </div>
  >         </div>
  >     <% } %>

  以及

  > <style>
  >
  > #rewardButton {
  > 	width: 30px;
  > 	height: 30px;
  > 	cursor: pointer;
  > 	border: 0;
  > 	outline: 0;
  > 	border-radius: 100%;
  > 	padding: 0;
  > 	margin: 0;
  > }
  > #QR {
  > 	padding-top: 20px;
  > }
  >
  > #QR img {
  > 	width: 120px;
  > 	    max-width: 100%;
  > 	    display: inline-block;
  > 	    margin: .8em 2em 0;
  > }
  > #rewardButton img {
  > 	display: inline-block;
  > 	width: 40px;
  > 	height: 40px;
  > 	border-radius: 5px;
  > 	background: #b9dff3;
  > }
  > #rewardButton img:hover {
  > 	background: #f39a75;
  > }
  > </style>


字符串逐个输入特效：

- 仿照typora官网，引入下列js：

  > <script src="https://www.typora.io/lib/typed.js-master/js/typed.js"></script>
  > <script>
  >
  > 		$(function () {
  > 			$(".typed-quotes").typed({
  > 				strings: ["a truly **minimal** markdown editor.", "new way to read &#38; write markdown.", "I think this is the one, <span style='color:#d14836'>❤</span>IT."],
  > 				typeSpeed: 50,
  > 				contentType: 'html',
  > 				loop: true,
  > 				backDelay: 1000
  > 			});
  > 		});
  >
  > </script>

- 在想要的地方加上：

  > ```html
  > 				<p class="slogon"> 
  > 				<span class="typed-quotes"></span>
  > 				<span class="typed-cursor"></span> 
  > 				</p>
  > ```

- 附typed.js

  > ```javascript
  > // The MIT License (MIT)
  >
  > // Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
  >
  > // Permission is hereby granted, free of charge, to any person obtaining a copy
  > // of this software and associated documentation files (the "Software"), to deal
  > // in the Software without restriction, including without limitation the rights
  > // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  > // copies of the Software, and to permit persons to whom the Software is
  > // furnished to do so, subject to the following conditions:
  >
  > // The above copyright notice and this permission notice shall be included in
  > // all copies or substantial portions of the Software.
  >
  > // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  > // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  > // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  > // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  > // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  > // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  > // THE SOFTWARE.
  >
  >
  >
  >
  > ! function($) {
  >
  >     "use strict";
  >
  >     var Typed = function(el, options) {
  >
  >         // chosen element to manipulate text
  >         this.el = $(el);
  >
  >         // options
  >         this.options = $.extend({}, $.fn.typed.defaults, options);
  >
  >         // attribute to type into
  >         this.isInput = this.el.is('input');
  >         this.attr = this.options.attr;
  >
  >         // show cursor
  >         this.showCursor = this.isInput ? false : this.options.showCursor;
  >
  >         // text content of element
  >         this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()
  >
  >         // html or plain text
  >         this.contentType = this.options.contentType;
  >
  >         // typing speed
  >         this.typeSpeed = this.options.typeSpeed;
  >
  >         // add a delay before typing starts
  >         this.startDelay = this.options.startDelay;
  >
  >         // backspacing speed
  >         this.backSpeed = this.options.backSpeed;
  >
  >         // amount of time to wait before backspacing
  >         this.backDelay = this.options.backDelay;
  >
  >         // input strings of text
  >         this.strings = this.options.strings;
  >
  >         // character number position of current string
  >         this.strPos = 0;
  >
  >         // current array position
  >         this.arrayPos = 0;
  >
  >         // number to stop backspacing on.
  >         // default 0, can change depending on how many chars
  >         // you want to remove at the time
  >         this.stopNum = 0;
  >
  >         // Looping logic
  >         this.loop = this.options.loop;
  >         this.loopCount = this.options.loopCount;
  >         this.curLoop = 0;
  >
  >         // for stopping
  >         this.stop = false;
  >
  >         // custom cursor
  >         this.cursorChar = this.options.cursorChar;
  >
  >         // All systems go!
  >         this.build();
  >     };
  >
  >     Typed.prototype = {
  >
  >         constructor: Typed
  >
  >         ,
  >         init: function() {
  >             // begin the loop w/ first current string (global self.string)
  >             // current string will be passed as an argument each time after this
  >             var self = this;
  >             self.timeout = setTimeout(function() {
  >                 // Start typing
  >                 self.typewrite(self.strings[self.arrayPos], self.strPos);
  >             }, self.startDelay);
  >         }
  >
  >         ,
  >         build: function() {
  >             // Insert cursor
  >             if (this.showCursor === true) {
  >                 this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
  >                 this.el.after(this.cursor);
  >             }
  >             this.init();
  >         }
  >
  >         // pass current string state to each function, types 1 char per call
  >         ,
  >         typewrite: function(curString, curStrPos) {
  >             // exit when stopped
  >             if (this.stop === true) {
  >                 return;
  >             }
  >
  >             // varying values for setTimeout during typing
  >             // can't be global since number changes each time loop is executed
  >             var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
  >             var self = this;
  >
  >             // ------------- optional ------------- //
  >             // backpaces a certain string faster
  >             // ------------------------------------ //
  >             // if (self.arrayPos == 1){
  >             //  self.backDelay = 50;
  >             // }
  >             // else{ self.backDelay = 500; }
  >
  >             // contain typing function in a timeout humanize'd delay
  >             self.timeout = setTimeout(function() {
  >                 // check for an escape character before a pause value
  >                 // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
  >                 // single ^ are removed from string
  >                 var charPause = 0;
  >                 var substr = curString.substr(curStrPos);
  >                 if (substr.charAt(0) === '^') {
  >                     var skip = 1; // skip atleast 1
  >                     if (/^\^\d+/.test(substr)) {
  >                         substr = /\d+/.exec(substr)[0];
  >                         skip += substr.length;
  >                         charPause = parseInt(substr);
  >                     }
  >
  >                     // strip out the escape character and pause value so they're not printed
  >                     curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
  >                 }
  >
  >                 if (self.contentType === 'html') {
  >                     // skip over html tags while typing
  >                     var curChar = curString.substr(curStrPos).charAt(0)
  >                     if (curChar === '<' || curChar === '&') {
  >                         var tag = '';
  >                         var endTag = '';
  >                         if (curChar === '<') {
  >                             endTag = '>'
  >                         } else {
  >                             endTag = ';'
  >                         }
  >                         while (curString.substr(curStrPos).charAt(0) !== endTag) {
  >                             tag += curString.substr(curStrPos).charAt(0);
  >                             curStrPos++;
  >                         }
  >                         curStrPos++;
  >                         tag += endTag;
  >                     }
  >                 }
  >
  >                 // timeout for any pause after a character
  >                 self.timeout = setTimeout(function() {
  >                     if (curStrPos === curString.length) {
  >                         // fires callback function
  >                         self.options.onStringTyped(self.arrayPos);
  >
  >                         // is this the final string
  >                         if (self.arrayPos === self.strings.length - 1) {
  >                             // animation that occurs on the last typed string
  >                             self.options.callback();
  >
  >                             self.curLoop++;
  >
  >                             // quit if we wont loop back
  >                             if (self.loop === false || self.curLoop === self.loopCount)
  >                                 return;
  >                         }
  >
  >                         self.timeout = setTimeout(function() {
  >                             self.backspace(curString, curStrPos);
  >                         }, self.backDelay);
  >                     } else {
  >
  >                         /* call before functions if applicable */
  >                         if (curStrPos === 0)
  >                             self.options.preStringTyped(self.arrayPos);
  >
  >                         // start typing each new char into existing string
  >                         // curString: arg, self.el.html: original text inside element
  >                         var nextString = curString.substr(0, curStrPos + 1);
  >                         nextString = nextString.replace(/_([^_*]+)_ /gi, '<em>$1</em> ').replace(/\*\*([^_*]+)\*\* /gi,'<strong>$1</strong> ');
  >                         if (self.attr) {
  >                             self.el.attr(self.attr, nextString);
  >                         } else {
  >                             if (self.isInput) {
  >                                 self.el.val(nextString);
  >                             } else if (self.contentType === 'html') {
  >                                 self.el.html(nextString);
  >                             } else {
  >                                 self.el.text(nextString);
  >                             }
  >                         }
  >
  >                         // add characters one by one
  >                         curStrPos++;
  >                         // loop the function
  >                         self.typewrite(curString, curStrPos);
  >                     }
  >                     // end of character pause
  >                 }, charPause);
  >
  >                 // humanized value for typing
  >             }, humanize);
  >
  >         }
  >
  >         ,
  >         backspace: function(curString, curStrPos) {
  >             // exit when stopped
  >             if (this.stop === true) {
  >                 return;
  >             }
  >
  >             // varying values for setTimeout during typing
  >             // can't be global since number changes each time loop is executed
  >             var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
  >             var self = this;
  >
  >             self.timeout = setTimeout(function() {
  >
  >                 // ----- this part is optional ----- //
  >                 // check string array position
  >                 // on the first string, only delete one word
  >                 // the stopNum actually represents the amount of chars to
  >                 // keep in the current string. In my case it's 14.
  >                 // if (self.arrayPos == 1){
  >                 //  self.stopNum = 14;
  >                 // }
  >                 //every other time, delete the whole typed string
  >                 // else{
  >                 //  self.stopNum = 0;
  >                 // }
  >
  >                 if (self.contentType === 'html') {
  >                     // skip over html tags while backspacing
  >                     if (curString.substr(curStrPos).charAt(0) === '>') {
  >                         var tag = '';
  >                         while (curString.substr(curStrPos).charAt(0) !== '<') {
  >                             tag -= curString.substr(curStrPos).charAt(0);
  >                             curStrPos--;
  >                         }
  >                         curStrPos--;
  >                         tag += '<';
  >                     }
  >                 }
  >
  >                 // ----- continue important stuff ----- //
  >                 // replace text with base text + typed characters
  >                 var nextString = curString.substr(0, curStrPos);
  >                 if (self.attr) {
  >                     self.el.attr(self.attr, nextString);
  >                 } else {
  >                     if (self.isInput) {
  >                         self.el.val(nextString);
  >                     } else if (self.contentType === 'html') {
  >                         self.el.html(nextString.replace(/_([^_*]+)_/gi,'<em>$1</em> ').replace(/\*\*([^_*]+)\*\* /gi,'<strong>$1</strong> '));
  >                     } else {
  >                         self.el.text(nextString);
  >                     }
  >                 }
  >
  >                 // if the number (id of character in current string) is
  >                 // less than the stop number, keep going
  >                 if (curStrPos > self.stopNum) {
  >                     // subtract characters one by one
  >                     curStrPos--;
  >                     // loop the function
  >                     self.backspace(curString, curStrPos);
  >                 }
  >                 // if the stop number has been reached, increase
  >                 // array position to next string
  >                 else if (curStrPos <= self.stopNum) {
  >                     self.arrayPos++;
  >
  >                     if (self.arrayPos === self.strings.length) {
  >                         self.arrayPos = 0;
  >                         self.init();
  >                     } else
  >                         self.typewrite(self.strings[self.arrayPos], curStrPos);
  >                 }
  >
  >                 // humanized value for typing
  >             }, humanize);
  >
  >         }
  >
  >         // Start & Stop currently not working
  >
  >         // , stop: function() {
  >         //     var self = this;
  >
  >         //     self.stop = true;
  >         //     clearInterval(self.timeout);
  >         // }
  >
  >         // , start: function() {
  >         //     var self = this;
  >         //     if(self.stop === false)
  >         //        return;
  >
  >         //     this.stop = false;
  >         //     this.init();
  >         // }
  >
  >         // Reset and rebuild the element
  >         ,
  >         reset: function() {
  >             var self = this;
  >             clearInterval(self.timeout);
  >             var id = this.el.attr('id');
  >             this.el.after('<span id="' + id + '"/>')
  >             this.el.remove();
  >             if (typeof this.cursor !== 'undefined') {
  >                 this.cursor.remove();
  >             }
  >             // Send the callback
  >             self.options.resetCallback();
  >         }
  >
  >     };
  >
  >     $.fn.typed = function(option) {
  >         return this.each(function() {
  >             var $this = $(this),
  >                 data = $this.data('typed'),
  >                 options = typeof option == 'object' && option;
  >             if (!data) $this.data('typed', (data = new Typed(this, options)));
  >             if (typeof option == 'string') data[option]();
  >         });
  >     };
  >
  >     $.fn.typed.defaults = {
  >         strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
  >         // typing speed
  >         typeSpeed: 0,
  >         // time before typing starts
  >         startDelay: 0,
  >         // backspacing speed
  >         backSpeed: 0,
  >         // time before backspacing
  >         backDelay: 500,
  >         // loop
  >         loop: false,
  >         // false = infinite
  >         loopCount: false,
  >         // show cursor
  >         showCursor: true,
  >         // character for cursor
  >         cursorChar: "|",
  >         // attribute to type (null == text)
  >         attr: null,
  >         // either html or text
  >         contentType: 'html',
  >         // call when done callback function
  >         callback: function() {},
  >         // starting callback function before each string
  >         preStringTyped: function() {},
  >         //callback for every typed string
  >         onStringTyped: function() {},
  >         // callback for reset
  >         resetCallback: function() {}
  >     };
  >
  >
  > }(window.jQuery);
  > ```