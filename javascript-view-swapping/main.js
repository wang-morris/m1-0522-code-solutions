var tabContainer = document.querySelector('.tab-container');
var tabsNode = document.querySelectorAll('.tab');
var viewsNode = document.querySelectorAll('.view');
tabContainer.addEventListener('click', tabClick);

function tabClick(e) {
  if (e.target && e.target.matches('.tab')) {
    for (var i = 0; i < tabsNode.length; i++) {
      if (tabsNode[i] === e.target) {
        tabsNode[i].className = 'tab active';
      } else if (tabsNode[i] !== e.target) {
        tabsNode[i].className = 'tab';
      }
    }
    var viewedData = e.target.getAttribute('data-view');
    for (var j = 0; j < viewsNode.length; j++) {
      if (viewsNode[j].getAttribute('data-view') === viewedData) {
        viewsNode[j].className = 'view';
      } else if (viewsNode[j].getAttribute('data-view') !== viewedData) {
        viewsNode[j].className = 'hidden';
      }
    }
  }
}
