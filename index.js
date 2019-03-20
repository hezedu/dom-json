

function json2Dom(obj){
  let html = _json2Dom(0, obj, '');
  html = html.replace(`<div data-key="0">`, '<div id="dom-json">');
  return html;
}
function realType(v){
  return Object.prototype.toString.call(v).slice(8, -1);
}
function _getTag(key, pTag) {
  if(pTag === 'ul') {
    return 'li';
  } else if(pTag === 'nav'){
    return 'a';
  }
  switch(key) {
    case 'title':
     return 'h1';
    case 'nav':
    case 'img':
    case 'address':
    case 'footer':
      return key;
    default:
      return 'div';
  }
}
function getTag(key, type, pTag) {
  let tag = _getTag(key, pTag);
  if(type === 'Array' && tag !== 'nav'){
    tag = 'ul';
  }
  
  return tag;
}
function getEndTag(tag) {
  if(tag === 'img') {
    return '>';
  }
  return `</${tag}>`;
}

function _json2Dom(key, value, pTag){

  const type = realType(value);
  const tag = getTag(key, type, pTag);

  console.log('tag', tag);

  let str = `<${tag}`;
  const endTag = getEndTag(tag);



  if(tag === 'div' || tag === 'ul'){
    str += ` data-key="${key}"`;
  }
  switch(type) {
    case 'Array':
      // let subTag = 'li';
      // if(tag === 'nav'){
      //   subTag = 'a';
      // }
      str += '>';
      for(let i = 0, len = value.length; i < len; i++){
        str += _json2Dom(i, value[i], tag);
      }
      break;
    case 'Object':
      if(tag === 'a'){
        str += ` href="${value.href}">${value.name}`;
      } else {
        str += '>';
        if(value) {
          for(let i in value){
            str +=  _json2Dom(i, value[i], tag);
          }
        } else {
          // null
          str = str + ` data-type="null">`;
        }
      }

    break;
    case 'String':
      if(tag === 'img'){
        str = str + ` src="${value}"`;
      } else {
        str = str + `>${value}`;
      }
      break;
  }
  str = str + endTag;
  return str;
}


module.exports = json2Dom;
