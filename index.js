function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranked.length; i++) {
    let children = ranked[i].children
    for (let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML, 10) + n;
    }
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  if(!nodes.length) return false;
    return nodes[nodes.length-1];
}
