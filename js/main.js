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
    var $selected = $('nav li.selected');
    var $all = $('nav li');

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
  
    _$all_panels = $('section.panel');

    _$all_panels.first().before('<div id="panel_prev" class="panel-control disabled"></div>');
    _$all_panels.last().after('<div id="panel_next" class="panel-control"></div>');

    _$prev_ctrl = $('#panel_prev').click(_prev);
    _$next_ctrl = $('#panel_next').click(_next);

    $('#content img').each(function() {
      var num = Math.floor(Math.random() * 5);
      $(this).addClass('rotate-' + num);
    });

    $(window).resize(_build);

    _build();
  }

  function _build() {

    if ($(document).width() > 690) {

      _total_width = $('#slide_show').width();

      if (!_$all_panels.hasClass('collapsed')) {

        _$all_panels.addClass('collapsed')
                    .width(_total_width - 2)
                    .hide()
                    .first().show();
        $('section.panel p').width(_total_width - 2);
      }

    } else if (_$all_panels.hasClass('collapsed')) {

      _$all_panels.removeClass('collapsed').show().width('auto');
      $('section.panel p').width('auto');
    }

    new UI.ImagePopUp('section_panel');
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

UI.ImagePopUp = function(_id) {

  var _$images;
  var _$overlay;
  var _$disabled_layer;
  var _$pop_up;
  var _$img;

  var _pop_up_orig_height = 0;
  var _pop_up_orig_width = 0;
  var _img_aspect_ratio = 0;

  function _init() {

    _$overlay = $('#overlay');
    _$disabled_layer = $('#disabled_layer');
    _$pop_up = $('#pop_up');
    _$img = _$pop_up.find('img');

    _$images = $('section.panel img');

    _$images.click(_open);

    _$pop_up.find('.controls .close').click(_close);
    _$img.load(_onImgLoad);

  }

  function _open() {
    if ($(document).width() < 691) {
      window.location.href = $(this).data('full-size');
    } else {

      _$overlay.show();

      _$pop_up.addClass('loading');
      _getSize();
      _resize();

      _$img.attr('src', $(this).data('full-size'));
      $(window).resize(_resize);
    }
  }

  function _close() {
    _$overlay.hide();
    _$pop_up.removeClass('loading');
    _$img.attr('src', '');
    $(window).unbind('resize', _resize);
  }

  function _getSize() {
    _pop_up_orig_height = _$pop_up.height();
    _pop_up_orig_width = _$pop_up.width();
  }

  function _onImgLoad() {
    _$pop_up.removeClass('loading');
    _$img.height('auto').width('auto');

    _getSize();

    _img_aspect_ratio = _$img.height() / _$img.width();

    _resize();
  }

  function _resize() {
    var window_height = $(window).height();
    var window_width = $(window).width();

    var height_diff = window_height - _pop_up_orig_height;
    var width_diff = window_width - _pop_up_orig_width;

    var height_offset = height_diff / 2;
    var width_offset = width_diff / 2;

    if (height_offset < 0 || width_offset < 0) {
      var new_width = window_width - 10;
      var new_height = _img_aspect_ratio * new_width;

      if (new_height > window_height - 35) {
        new_height = window_height - 35;
        new_width = new_height / _img_aspect_ratio;
      }

      _$img.height(new_height)
           .width(new_width);

      height_offset = (window_height - new_height - 35) / 2;
      width_offset = (window_width - new_width - 10) / 2;
    }

    _$pop_up.css('top', height_offset);
    _$pop_up.css('left', width_offset);
  }

  _init();
}
