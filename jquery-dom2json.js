const $ = window.$;


function dom2Json() {
  let $div = $('<div></div>');
  let dom = $('#dom-json');
  dom.appendTo($div);
  const data = [{}];
  _dom2Json(dom, 0, data);
  return data[0];
}
function getTag($dom){
  return $dom[0].tagName.toLowerCase();
}
function getKey(dom) {
  const dataSet = dom.data();
  if(dataSet.key) {
    return dataSet.key;
  }
  const tag = getTag(dom);
  switch(tag) {
    case 'h1':
     return 'title';
    case 'nav':
    case 'footer':
    case 'img':
    case 'address':
    return tag;
  }
}
function _dom2Json(dom, key, pObj) {
  const dataSet = dom.data();
  const child = dom.children();
  const tag = getTag(dom);
  const pTag = getTag(dom.parent());
  let type;
  let isHaveChild = child.length > 0;
  if(tag === 'div' || tag === 'footer' || tag === 'li'){
    if(dataSet.type) {
      type = dataSet.type;
      isHaveChild = false;
    } else {
      if(isHaveChild){
        type = 'obj';
      }else {
        type = 'str';
      }
    }
  } else {
    if(tag === 'ul' || tag === "nav"){
      type = 'arr';
    }
  }
  type = type || 'str';
  if(tag === 'img') {
    // console.log('type',  type, '| tag', tag,'| key', key, '| pObj', pObj, '| pTag', pTag);
  }

  if(type === 'str'){
    pObj[key] = dom.html();
    if(tag === 'img') {
      pObj[key] = dom.attr('src');
    }
  } else if(type === 'arr'){
    const sub = [];
    pObj[key] = sub;
    const isNav = tag === 'nav';
    child.each(function(i) {
      const subDmo = $(this);
      sub[i] = {};
      if(isNav){
        sub[i].name = subDmo.html();
        sub[i].href = subDmo.attr('href');
      } else {
        _dom2Json(subDmo, i, sub);
      }
      
    })
  } else if(type === 'obj'){
    const sub = {};
    pObj[key] = sub;
    child.each(function(i) {
      // console.log('i', i);
      const subDmo = $(this);
      const key = getKey(subDmo);
      
      _dom2Json(subDmo, key, sub);
      
    })
  }
}

window.__jquery_dom2Json = dom2Json;

// console.log('result', JSON.stringify(result));
