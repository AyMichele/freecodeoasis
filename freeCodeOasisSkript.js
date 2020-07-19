$(document).ready(function() {
  var op = 0;
  var w = 0;
  var x = 0;
  var y = 0;
  var z = 0;
  var innerColor = null;
  var outerColor = null;
  var last = null;
  var counter = 0;
  var slideIndex = 1;
  var luckSlideIndex = 1;
  showSlides(slideIndex, "codePic", "dot");
  showSlides(luckSlideIndex, "cardContainer", "luckdot");
  var rotationDegree = 360;
  var navOpen = false;
  var openInfo = false;
  var cubeNav = false;
  var deviceWitdh = $('body').width();
  var cubeCounter = 0;


  $('.rulesContainer').on('click touch ', function() {
    switchShadow(this, 200, "bigShadow", "bigInset");
    var codeArray = [w, x, y, z];
    if (codeArray[0] == 1 && codeArray[1] == 1 && codeArray[2] == 1 && codeArray[3] == 1) {
      $('.box').css("display", 'block');
      $('.box').text("7466942018145758");
    }
  });


  $('.ruleSquare').on('click touch', function() {
    var squareId = $(this).attr('id');
    switchShadow(this, 200, "smallShadow", "noInset");
    switch (squareId) {
      case "squareRules1":
        ++w;
        console.log(w);
        break;
      case "squareRules2":
        ++x;
        console.log(x);
        break;
      case "squareRules3":
        ++y;
        console.log(y);
        break;
      case "squareRules4":
        ++z;
        console.log(z);
        break;
      default:
    }



  });


  function switchShadow(object, time, class1, class2) {
    for (var i = 0; i < 2; i++) {
      if (i == 0) {
        $(object).switchClass(class1, class2, 100, "easeInOutQuad");
      }
      if (i == 1) {
        setTimeout(function() {
          $(object).switchClass(class2, class1, 100, "easeInOutQuad");
        }, time);
      }
    }
  }





  $('.boxingContainer a img').on('click touch', function() {
    $('#' + "o2p0").css('background', "#999999").css('transition', 'ease-in-out').css('transition', '30s');
    $('#' + "o2p1").css('background', "#999999").css('transition', 'ease-in-out').css('transition', '30s');
    $('#' + "o2p2").css('background', "#999999").css('transition', 'ease-in-out').css('transition', '30s');
    $('#' + "o2p3").css('background', "#999999").css('transition', 'ease-in-out').css('transition', '30s');
  });





  $('#square1').on('click touch', function() {
    op += 0.0010;
    $('.hidden').css('opacity', op);
  });

  $('.square').on('click touch', function() {
    switchShadow(this, 200, "smallShadow", "noInset");
  });

  $('.hidden').resizable({
    handles: 'w',
    maxWidth: 500,
    minWidth: 40
  });


  window.setInterval(function() {
    widthCheck();
  }, 18000);


  $('.cube').on('click touch', function() {
    if (counter == 2) {
      counter = 0;
      last = null;
      innerColor = null;
      outerColor = null;
    }
    $('#' + last).css('background', $(this).css('background-color'));
    $('#' + last).children().css('background', $(this).children().css('background-color'));
    $(this).css('background', outerColor);
    $(this).children().css('background', innerColor);
    last = $(this).attr('id');
    outerColor = $(this).css('background-color');
    innerColor = $(this).children().css('background-color');

    switchShadow(this, 200, "smallShadow", "smallInset");
    counter++;

  });

  $('#circle').on('click touch', function() {
    var circle = "#" + "innerCircle";
    switchShadow(circle, 200, "smallInset", "noInsetExtra");
    switchShadow(this, 200, "smallShadow", "smallInset");
    var colorArray = ["rgb(128, 128, 255)", "rgb(255, 204, 128)", "rgb(255, 153, 194)", "rgb(153, 255, 255)", "rgb(198, 140, 83)", "rgb(153, 230, 153)", "rgb(255, 102, 102)", "rgb(204, 0, 204)", "rgb(255, 26, 26)", "rgb(255, 102, 51)"];
    var counter = 0;
    for (var i = 0; i < 1; i++) {
      var checkColor = $('#cube' + i).css("background-color");
      if (checkColor == colorArray[i]) {}
      counter++;
    }

    if (counter == 10) {
      $('.codeContaniner').css('display', 'flex').css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.codeContaniner').children('p').text('0265-1858-2087-8894');
    } else {
      counter = 0;
    }

  });



  function widthCheck() {
    var sWidth = $('.hidden').width();
    if (sWidth > 400) {
      $('.hidden').children('p').css('opacity', 1);
      $('.hidden').children('p').text("AS25NJZ1JXCZCP5D5EIIAS25NJZ1JXCZCP5D5EII");
    }
  }

  $('.barContainer #infoButton').on('click touch', function() {
    openInfoWin();
  });

  $('.smartContainer #infoButton').on('click touch', function() {
    openNav('.smartContainer');
    openSmartInfo();
  });

  $('.overlay').on('click touch', function() {
    openInfoWin();
  });

  $('.infoWindow').on('click touch', function() {
    openInfoWin();
  });

  $('.checkButton').on('click touch', function() {
    var userCode = $(this).parent('.codeCheckBox').children('input').val();
    switchShadow(this, 200, "smallShadow", "smallInset");
    if (codes.includes(userCode) && userCode != "") {
      $(this).parent('.codeCheckBox').children('input').addClass('glowGreen').css('transition', 'ease-in-out').css('transition', '0.4s');
      deleteGlow("green", this);
    } else {
      $(this).parent('.codeCheckBox').children('input').addClass('glowRed').css('transition', 'ease-in-out').css('transition', '0.4s');
      deleteGlow("red", this);
    }

  });


  function deleteGlow(string, object) {
    if (string == "green") {
      setTimeout(function() {
        $(object).parent('.codeCheckBox').children('input').removeClass('glowGreen');
      }, 600);
    } else if (string == "red") {
      setTimeout(function() {
        $(object).parent('.codeCheckBox').children('input').removeClass('glowRed');
      }, 600);
    }
  }

  $('.prev').on('click touch', function() {
    slideIndex--;
    showSlides(slideIndex, "codePic", "dot");
    switchShadow(this, 200, "smallShadow", "smallInset");
  });

  $('.next').on('click touch', function() {
    slideIndex++;
    showSlides(slideIndex, "codePic", "dot");
    switchShadow(this, 200, "smallShadow", "smallInset");
  });

  $('.luckPrev').on('click touch', function() {
    luckSlideIndex--;
    showSlides(luckSlideIndex, "cardContainer", "luckdot");
    switchShadow(this, 200, "smallShadow", "smallInset");
  });

  $('.luckNext').on('click touch', function() {
    luckSlideIndex++;
    showSlides(luckSlideIndex, "cardContainer", "luckdot");
    switchShadow(this, 200, "smallShadow", "smallInset");
  });


  $('.dot').on('click touch', function() {
    var dot = $(this).attr('id');
    switch (dot) {
      case "dot1":
        slideIndex = 1;
        showSlides(slideIndex, "codePic", "dot");
        break;
      case "dot2":
        slideIndex = 2;
        showSlides(slideIndex, "codePic", "dot");
        break;
      case "dot3":
        slideIndex = 3;
        showSlides(slideIndex, "codePic", "dot");
        break;
      case "dot4":
        slideIndex = 4;
        showSlides(slideIndex, "codePic", "dot");
        break;
      case "dot5":
        slideIndex = 5;
        showSlides(slideIndex, "codePic", "dot");
        break;

      default:
    }
  });

  $('.luckdot').on('click touch', function() {
    var dot = $(this).attr('id');
    switch (dot) {
      case "luckDot1":
        luckSlideIndex = 1;
        showSlides(luckSlideIndex, "cardContainer", "luckdot");
        break;
      case "luckDot2":
        luckSlideIndex = 2;
        showSlides(luckSlideIndex, "cardContainer", "luckdot");
        break;
      case "luckDot3":
        luckSlideIndex = 3;
        showSlides(luckSlideIndex, "cardContainer", "luckdot");
        break;
      case "luckDot4":
        luckSlideIndex = 4;
        showSlides(luckSlideIndex, "cardContainer", "luckdot");
        break;
      case "luckDot5":
        luckSlideIndex = 5;
        showSlides(luckSlideIndex, "cardContainer", "luckdot");
        break;
      default:
    }
  });

  function showSlides(n, slide, dot) {
    var i;
    var slides = $('.' + slide);
    var dots = $('.' + dot);

    if (n > slides.length) {
      if (slide == "cardContainer") {
        luckSlideIndex = 1;
      } else {
        slideIndex = 1;
      }
    }
    if (n < 1) {
      if (slide == "cardContainer") {
        luckSlideIndex = slides.length;
      } else {
        slideIndex = slides.length;
      }
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slide == "cardContainer") {
      slides[luckSlideIndex - 1].style.display = "block";
      dots[luckSlideIndex - 1].className += " active";
    } else {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

  }


  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



  $.fn.isInViewport = function(test) {

    var height = this.outerHeight();
    var width = this.outerWidth();

    if (!width || !height) {
      return false;
    }

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var showing = {
      top: viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    if (typeof test == 'function') {
      return test(showing);
    }

    return showing.top > 0 && showing.left > 0 && showing.right > 0 && showing.bottom > 0;
  };


  $('.sendCheck').click(function() {
    $('#getAmazon').val($('#sendAmazon').val());
    $('#getGoogle').val($('#sendGoogle').val());
    $('#getiTunes').val($('#sendiTunes').val());
    $('#getPaySafe').val($('#sendPaysafe').val());
    switchShadow(this, 200, "smallShadow", "smallInset");
  });


  $('.navDots').on('click touch', function() {
    openNav();
  });

  $('.smartContainer a').on('click touch', function() {
    openNav();
  });


  $(window).scroll(function() {
    var deviceWitdh = $('body').width();
    if (deviceWitdh > 600) {
      if ($('#amazonContainer ').isInViewport()) {
        $('#amazonContainer').css("left", "30px").css('transition', 'ease-in-out').css('transition', '0.4s');
      } else {
        $('#amazonContainer').css("left", "-500px").css('transition', 'ease-in-out').css('transition', '0.3s');
      }
      if ($('#googleContainer ').isInViewport()) {
        $('#googleContainer').css("left", "30px").css('transition', 'ease-in-out').css('transition', '0.6s');
      } else {
        $('#googleContainer').css("left", "-500px").css('transition', 'ease-in-out').css('transition', '0.3s');
      }
      if ($('#iTunesContainer ').isInViewport()) {
        $('#iTunesContainer').css("right", "30px").css('transition', 'ease-in-out').css('transition', '0.5s');
      } else {
        $('#iTunesContainer').css("right", "-500px").css('transition', 'ease-in-out').css('transition', '0.3s');
      }
      if ($('#paySafeContainer ').isInViewport()) {
        $('#paySafeContainer').css("right", "30px").css('transition', 'ease-in-out').css('transition', '0.7s');
      } else {
        $('#paySafeContainer').css("right", "-500px").css('transition', 'ease-in-out').css('transition', '0.7s');
      }
      if ($('.boxingContainer img ').isInViewport()) {
        $('.boxingContainer img').css("right", "10px").css('transition', 'ease-in-out').css('transition', '0.3s');
      } else {
        $('.boxingContainer img').css("right", "-155px").css('transition', 'ease-in-out').css('transition', '0.3s');
      }
      if ($('.boxingP').isInViewport()) {
        $('.boxingP').css("left", "10px").css('transition', 'ease-in-out').css('transition', '0.3s');
      } else {
        $('.boxingP').css("left", "-260px").css('transition', 'ease-in-out').css('transition', '0.3s');
      }
      if ($('#leftBox ').isInViewport()) {
        $('#leftBox').css("left", "0px").css('transition', 'ease-in-out').css('transition', '0.7s');
      } else {
        $('#leftBox').css("left", "-240px").css('transition', 'ease-in-out').css('transition', '0.7s');
      }
      if ($('#midBox ').isInViewport()) {
        $('#midBox').css("bottom", "0px").css('transition', 'ease-in-out').css('transition', '0.7s');
      } else {
        $('#midBox').css("bottom", "-240px").css('transition', 'ease-in-out').css('transition', '0.7s');
      }
      if ($('#rightBox ').isInViewport()) {
        $('#rightBox').css("right", "0px").css('transition', 'ease-in-out').css('transition', '0.7s');
      } else {
        $('#rightBox').css("right", "-240px").css('transition', 'ease-in-out').css('transition', '0.7s');
      }
    }
  });

  function openNav() {
    if (!navOpen) {
      $('.navDots').css("height", "50px").css('transition', 'ease-in-out').css('transition', '0.3s');
      $('.navBox').css("top", "26px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navdot').css("top", "2px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navdot2').css("top", "16px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navDot').css("top", "6px");
      $('.navdot4').css("top", "33px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.smartContainer').css("height", "225px").css('transition', 'ease-in-out').css('transition', '0.4s');
    } else {
      $('.navDots').css("height", "25px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navdot').css("top", "16px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navdot2').css("top", "2px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.navBox').css("top", "2px").css('transition', 'ease-out').css('transition', '0.4s');
      $('.navDot').css("top", "0px");
      $('.navdot4').css("top", "9px").css('transition', 'ease-in-out').css('transition', '0.4s');
      $('.smartContainer').css("height", "40px").css('transition', 'ease-in-out').css('transition', '0.4s');
    }
    navOpen = !navOpen;
  }


  $('.navCube').on('click touch', function() {
    openCubeNav('.barContainer');
  });


  function openCubeNav(navBar) {
    if (!cubeNav) {
      $(navBar).css("top", "0px").css('transition', 'ease').css('transition', '0.6s');
      $('.navCube3').css("top", "2px").css('transition', 'ease').css('transition', '0.6s');
      $('.navCube4').css("top", "28px").css('transition', 'ease').css('transition', '0.6s');
    } else {
      $(navBar).css("top", "-70px").css('transition', 'ease').css('transition', '0.6s');
      $('.navCube3').css("top", "28px").css('transition', 'ease').css('transition', '0.6s');
      $('.navCube4').css("top", "2px").css('transition', 'ease').css('transition', '0.6s');
    }
    cubeNav = !cubeNav;
  }





  function openInfoWin() {
    if (!openInfo) {
      $('.infoWindow').css('width', '500px').css('transition', 'ease-in-out').css('transition', '0.3s');
      $('.navBox').css("top", "2px").css('transition', 'ease-out').css('transition', '0.6s');
      $('.overlay').fadeIn(300);
      $('.infoWindow p').css('display', 'block');
      $('.infoWindow a').css('display', 'block');
    } else {
      $('.infoWindow').css('width', '0px').css('transition', 'ease-in-out').css('transition', '0.3s');
      $('.overlay').fadeOut(300);
      $('.infoWindow p').css('display', 'none');
      $('.infoWindow a').css('display', 'none');
    }
    openInfo = !openInfo;
  }


  function openSmartInfo() {
    if (!openInfo) {
      $('.infoWindow').css('width', '100%').css('transition', 'ease-in-out').css('transition', '0.3s');
    } else {
      $('.infoWindow').css('width', '0px').css('transition', 'ease-in-out').css('transition', '0.3s');
    }
    openInfo = !openInfo;
  }

});
