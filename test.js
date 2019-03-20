const json2Dom = require('./index');
const fs = require('fs');
const json = {
  nav: [
    {name: '首页', href: '/'},
    {name: '关于', href: '/about'}
  ],
  
  body: {
    title: '这是一个网站',

    banner: [
      { img: 'http://static.keep-riding.com/2019/03/14151246349T-480_W1440H482.jpg!banner'},
      { img: 'http://static.keep-riding.com/2019/03/14151253717T-480_W1440H482.jpg!banner'}
    ],
    threeDesc: [
      {img: 'http://static.keep-riding.com/frontend_static/img/club_mao_feng.jpg!def', name: 'ccccc', desc: 'desc'},
      {img: 'http://static.keep-riding.com/frontend_static/img/zhu_lin.jpg!def', name: 'ddddd', desc: 'desc'}
    ]
  },
  footer: {
    address: "北京朝阳区",
    ICP: "京ICP:1111"
  }
}
const result = json2Dom(json);
fs.writeFileSync('./dom.txt', result);
fs.writeFileSync('./dom.json', JSON.stringify(json));
console.log('result', result);
