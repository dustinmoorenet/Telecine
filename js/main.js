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
    var $all = $('nav a');

    if ($(document).width() < 691) {

      if (!$selected.hasClass('collapsed')) {

        $selected.click(function(e) {
          e.preventDefault();

          $all.toggleClass('expanded');
        })
        .addClass('collapsed');
      }

    } else if ($selected.hasClass('collapsed')) {

      $selected.unbind('click').removeClass('collapsed');
      $all.show();
    }
  }

})();

UI.SlideShow = (function() {
  $(_init);

  var _total_width = 0;
  var _$prev_ctrl;
  var _$next_ctrl;
  var _$all_panels;

  function _init() {
  
    _total_width = $('#slide_show').width();
    _$all_panels = $('section.panel');

    _$all_panels.first().before('<div id="panel_prev" class="panel-control disabled"></div>');
    _$all_panels.last().after('<div id="panel_next" class="panel-control"></div>');

    _$prev_ctrl = $('#panel_prev').click(_prev);
    _$next_ctrl = $('#panel_next').click(_next);

    $(window).resize(_build);

    _build();
  }

  function _build() {

    if ($(document).width() > 690) {

      if (!_$all_panels.hasClass('collapsed')) {

        _$all_panels.addClass('collapsed')
                    .width(_total_width - 2)
                    .hide()
                    .first().show();
        $('section.panel p').width(_total_width - 2);

        _$prev_ctrl.show();
        _$next_ctrl.show();
      }
    } else if (_$all_panels.hasClass('collapsed')) {

      _$all_panels.removeClass('collapsed').show().width('auto');
      $('section.panel p').width('auto');
      _$prev_ctrl.hide();
      _$next_ctrl.hide();
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
