//Load charts logic that will be needed for this script.
require(['charts'], function (charts) {
    console.log("Charts has loaded.");
});

$(function() {
    console.log( 'Ready!' );

    $('#content').children('div').each(function(e) {
      if (e != 0)
          $(this).hide();
    });

    $('.tab').tap(function() {
        if ( $(this).hasClass('ui-btn-active') ) {
          // already active, do nothing
          console.log("Already active.");
        } else {
          //search the navbar to deactivate the active button
          $(this).closest('.ui-navbar').find('a').removeClass('ui-btn-active');
          //change the active tab
          $(this).addClass('ui-btn-active');
          //hide siblings
          $('#' + $(this).attr('data-href')).show( 0, function(){
            $(this).trigger('isVisible');
          }).siblings('.tab-content').hide( 0, function(){
            $(this).trigger('isHidden');
          });
        }
    });

    // bind trigger for when #chart section is made visible
    $('#chart').bind('isVisible', isVisible);
    $('#chart').bind('isHidden', isHidden);

    return false;
});

function isVisible() {
  DestroyBarCharts(); // make sure bar charts are cleared before we try to create new ones
  CreateBarCharts();
}

function isHidden() {
  DestroyBarCharts();
}