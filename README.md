# dom-json

```js
{
  title: '这是一个网站',
  banner: [
    { src: '/a.jpg'},
    { src: '/b.jpg'}
  ],
  threeDesc: [
    {src: '/c.jpg', name: 'ccccc', desc: 'desc'},
    {src: '/d.jpg', name: 'ddddd', desc: 'desc'}
  ]
}
```
## 结果
```html
<body>
  <h1>这是一个网站<h1>
  <ul>
    <li><img src="/a.jpg"></li>
    <li><img src="/b.jpg"></li>
  </ul>
   <ul>
     <li>
       <img src="/c.jpg">
       <div>ccccc</div>
       <div>desc</div>
     </li>
    <li>
       <img src="/d.jpg">
       <div>ddddd</div>
       <div>desc</div>
     </li>
   </ul>
</body>
```
