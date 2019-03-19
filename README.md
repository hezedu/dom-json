# dom-json

```js
{
  nav: [
    {name: '首页', href: '/'},
    {name: '关于', href: '/about'}
  ],
  
  body: {
    title: '这是一个网站',

    banner: [
      { img: '/a.jpg'},
      { img: '/b.jpg'}
    ],
    threeDesc: [
      {img: '/c.jpg', name: 'ccccc', desc: 'desc'},
      {img: '/d.jpg', name: 'ddddd', desc: 'desc'}
    ]
  },
  footer: {
    address: "北京朝阳区",
    ICP: "京ICP:1111"
  }
}
```
- h1 唯一, h1 = title
- nav, ul type 为 Array
- div, li 如果有子元素, type 为 Object
- footer 如果有子元素, type 为 Object
- img 自动获取两属性: img, alt(如果有)
## 结果
```html
<body>
  <nav>
    <a href="/">首页</a>
    <a href="/about">关于</a>
  </nav>
  <div data-key="body"> 
    <h1>这是一个网站<h1>
    <ul data-key="banner">
      <li> 
        <img src="/a.jpg">
      </li>
      <li><img src="/b.jpg"></li>
    </ul>
     <ul data-key="threeDesc">
       <li>
         <img src="/c.jpg">
         <div data-key="name">ccccc</div>
         <div data-key="desc">desc</div>
       </li>
      <li>
         <img src="/d.jpg">
         <div data-key="name">ddddd</div>
         <div data-key="desc">desc</div>
       </li>
     </ul>
    </div>
    <footer>
      <address>北京朝阳区</address>
      <div data-key="ICP">京IPC:1111</div>
    </footer>
</body>
```
