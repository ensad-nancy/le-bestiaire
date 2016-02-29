$( document ).ready(function() {

  var textHtml = marked(getText('content/text.md'))
  $("#main-text").html(textHtml);

  var controller = new ScrollMagic.Controller({loglevel: 3});
  var triggerIdCount = 1;

  jQuery('hr').each(function () {
      var currentScreen = this;
      var triggerId = triggerIdCount;

      $(this).attr('id','tr'+triggerIdCount);
      triggerIdCount++;

      new ScrollMagic.Scene({ triggerElement: currentScreen, duration: 0, offset: 80 })
          .on('start', function (e) {
            // $('.anim').addClass('hide');
            // $("#"+iToId(triggerId)).toggleClass('hide');
            $("#images").css('background-image',"url(content/animation/"+_.padLeft(triggerId, 4, '0')+".jpg)");

          })
          //.addIndicators() // add indicators (requires plugin)
          .addTo(controller);

      $(this).after('<img class="" src="content/drawings/'+_.padLeft(triggerId, 4, '0')+'.png" />')

  });

  for (var i = 91; i > 0; i--) {
    var id = _.padLeft(i, 4, '0');
    $("#images").prepend('<img class="hide" id="'+iToId(i)+'" src="content/animation/'+id+'.jpg" />')
  };
});


function getText(myUrl){
    var result = null;
    $.ajax( { url: myUrl,
              type: 'get',
              dataType: 'html',
              async: false,
              success: function(data) { result = data; }
            }
    );
    FileReady = true;
    return result;
}

function iToId(i){
  return 'animation-'+_.padLeft(i, 4, '0');
}
