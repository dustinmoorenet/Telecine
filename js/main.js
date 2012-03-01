var UI = {};

UI.Nav = (function() {
  $(_init);

  var _$nav;

  function _init() {
    _$nav = $('nav');

    $(window).resize(_buildNav);

    _buildNav();
  }

  function _buildNav() {
    var $selected = $('nav a.selected');
    var $not_selected = $('nav a:not(.selected)');

    if ($(document).width() < 691) {

      if (!$selected.hasClass('collapsed')) {

        $selected.click(function(e) {
          e.preventDefault();

          $not_selected.toggleClass('expanded');
        })
        .addClass('collapsed');
      }

    } else if ($selected.hasClass('collapsed')) {

      $selected.unbind('click').removeClass('collapsed');
      $not_selected.show();
    }
  }

})();

UI.SlideShow = (function() {
  $(_init);

  var _total_width = 0;

  function _init() {
  
    _total_width = $('#slide_show').width();

    if ($('section.panel').length > 1) {
      $('section.panel').width(_total_width - 2).hide().first().show();
      $('section.panel p').width(_total_width - 2);
  
      $('section.panel').first().before('<div id="panel_prev" class="panel-control disabled"></div>');
      $('section.panel').last().after('<div id="panel_next" class="panel-control"></div>');
  
      $('#panel_prev').click(_prev);
      $('#panel_next').click(_next);
    }
  }
  
  function _next() {
    if ($('section.panel:visible').is('section.panel:last'))
      return;
  
    $('section.panel:visible').animate({width: 'toggle'}).next().animate({width: 'toggle'}, function() {
  
      if ($('section.panel:visible').is('section.panel:last')) {
        $('#panel_next').addClass('disabled');
  
      } else {
        $('#panel_next, #panel_prev').removeClass('disabled');
      }
    });
  }
  
  function _prev() {
    if ($('section.panel:visible').is('section.panel:first'))
      return;
  
    $('section.panel:visible').animate({width: 'toggle'}).prev().animate({width: 'toggle'}, function() {
  
      if ($('section.panel:visible').is('section.panel:first')) {
        $('#panel_prev').addClass('disabled');
  
      } else {
        $('#panel_next, #panel_prev').removeClass('disabled');
      }
    });
  }
})();
