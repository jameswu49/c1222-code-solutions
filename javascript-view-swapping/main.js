var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function matches(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  // first makes sure that when you click a tab, you make that tab active
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  // second step is making sure that when you click a tab, you change the content
  if (event.target.matches('.tab')) {
    var dataViewValue = event.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === dataViewValue) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', matches);
