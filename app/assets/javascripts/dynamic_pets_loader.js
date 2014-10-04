$(document).ready(function() {

  var navigator = function(key) {
    var navbarSelector = function(element, key) {
      var jElement = $(element);
      var parent = jElement.parent();
      if (jElement.attr('id') === key) {
        jElement.parent().addClass('active');
      } else {
        jElement.parent().removeClass('active');
      }
    };
    
    var containerLoader = function(key) {
      $("#jumbo-content").load('/dyn_' + key);
    }
    
    $('.navbar-nav a').each(function(index, element) {
      navbarSelector(element, key);
      containerLoader(key);
    });
  };

  $('.navbar-nav a').on('click', function(event) {
    navigator($(this).attr('id'));
    event.preventDefault();
  });
});

