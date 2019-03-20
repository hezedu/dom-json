const {json2Dom} = require('./index');
const json = {
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
const result = json2Dom(json);
console.log('result', result);
