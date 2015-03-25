$(function(){
  $( "#post-tabs" ).tabs();
  $( "#category-list-menu" ).accordion();
  $( "#product-category-menu" ).accordion();
  $( "#shop-category-list-menu" ).accordion();
  $( "#order-tabs-wrap" ).tabs();
  $( "#collect-tabs-wrap" ).tabs();
  $( "#msg-tabs-wrap" ).tabs();

  /*----Date Popup function----*/
  var dateWrapStatus = 'close';
  $('.select-date').click(function(){
    if(dateWrapStatus == 'close'){
      $('#date-select-popup-wrap').fadeIn();
      dateWrapStatus = 'open';
    }else{
      $('#date-select-popup-wrap').fadeOut();
      dateWrapStatus= 'close';
    }
  });

  $('.date-select-popup a').click(function() {
    $('#date-select-popup-wrap').fadeOut();
    dateWrapStatus= 'close';
  });/*----Date Popup function-----End----*/

  /*----Datepick in chinese----*/
  $.datepicker.regional['zh-CN'] = {
    closeText: '关闭',
    prevText: '&#x3c;上月',
    nextText: '下月&#x3e;',
    currentText: '今天',
    monthNames: ['一月','二月','三月','四月','五月','六月',
    '七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一','二','三','四','五','六',
    '七','八','九','十','十一','十二'],
    dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesMin: ['日','一','二','三','四','五','六'],
    weekHeader: '周',
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'};
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);

    $("#start-date").datepicker({ dateFormat: "yy-mm-dd" });
    $("#end-date").datepicker({ dateFormat: "yy-mm-dd" });

    /*$('#confirm-location-button').click(function(){
      $('.input-location-bar').hide();
      $('.location-bar').show();
    });

    $('.change-location-btn').click(function(){
      $('.input-location-bar').show();
      $('.location-bar').hide();
    });*/

    $('.change-location-btn').click(function(){
      $('.expand-location-wrap').show('fast');
      $('.location-info').addClass('active');
    });

    $('.expand-location-wrap .close-layer a').click(function(){
      $('.expand-location-wrap').hide();
      $('.location-info').removeClass('active');
    });

    $('.del-item-btn').click(function(){
      $(this).parents('li').find('.del-item-layer').show('fast');
    });

    $('.del-item-layer a').click(function(){
      $(this).parent().hide();
    });

    $('.shopping-cart-bar').click(function(){
      $(this).find('.expand-status-icon').removeClass('fa-chevron-right');
      $(this).find('.expand-status-icon').addClass('fa-chevron-down');
      $(this).addClass('active');
      $('.expand-shopping-cart-wrap').show();
    });

    $('.expand-shopping-cart-wrap .close-layer a').click(function(){
      $('.expand-shopping-cart-wrap').hide();
      $('.shopping-cart-bar').removeClass('active');
      $('.expand-shopping-cart-wrap').hide();
    });

    $('.tabs-wrap li a').click(function(){
      $('.tabs-wrap li').removeClass('active');
      $(this).parent('li').addClass('active');
    });

    $('.edit-delivery-info-btn').click(function(){
      $('.address-info-line p').hide();
      $('.address-info-line input').removeClass('hidden');
      $('.address-info-line button').removeClass('hidden');
    });

    $('.fast-buy-product-wrap .buy-product-wrap .add-shopping-cart-btn').stop().click(function(){
      var product_num_wrap = $(this).parents('.fast-buy-product-wrap').find('.product-num');
      var product_num = parseInt($(this).parents('.fast-buy-product-wrap').find('.product-num span').text());
      //console.log(product_num);
      $(product_num_wrap).css({'display': 'block'});
      product_num = product_num + 1;
      $(this).parents('.fast-buy-product-wrap').find('.product-num span').text(product_num);
      $(this).parents('.fast-buy-product-wrap').find('.remove-shopping-cart-btn').show();
    });

    $('.fast-buy-product-wrap .buy-product-wrap .remove-shopping-cart-btn').stop().click(function(){
      var product_num_wrap = $(this).parents('.fast-buy-product-wrap').find('.product-num');
      var product_num = parseInt($(this).parents('.fast-buy-product-wrap').find('.product-num span').text());
      product_num = product_num - 1;
      $(this).parents('.fast-buy-product-wrap').find('.product-num span').text(product_num);
      //console.log(product_num);
      if(product_num == 0){
        $(this).hide();
        $(product_num_wrap).hide();
      }else{
  
      }
    });

    $('.categories-menu').hover(function(){
      //$(this).children('ul').stop().fadeIn('fast');
      $(this).children('ul').animate({
        'margin-left': '41px'},
        200, function() {
        /* stuff to do after animation is complete */
      });
    }, function(){
      $(this).children('ul').animate({
        'margin-left': '-120px'},
        0, function() {
        /* stuff to do after animation is complete */
      });
    });

    var productNum = parseInt($('.shopping-cart-wrap span').html());
    //console.log(productNum);

    $('.add-to-shopping-cart-btn').stop().on('click', function () {
      productNum = productNum + 1;
      $('.shopping-cart-wrap span').html(productNum);
      var cart = $('.shopping-cart-wrap');
      var imgtodrag = $(this).parent('li').find("img").eq(0);
      //console.log(imgtodrag);
      if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          'opacity': '0.5',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'z-index': '100'
        })
        .appendTo($('body'))
        .animate({
          'top': cart.offset().top + 10,
          'left': cart.offset().left + 10,
          'width': 75,
          'height': 75
        }, 1000, 'swing');

        setTimeout(function () {
          cart.effect("shake", {
            times: 2
          }, 200);
        }, 1500);

        imgclone.animate({
          'width': 0,
          'height': 0
        }, function () {
          $(this).detach()
        });
      }
    });

$( '#birthday-year' ).dropdown({
  gutter : -1,
  stack : false
});
$( '#birthday-month' ).dropdown({
  gutter : -1,
  stack : false
});
$( '#birthday-day' ).dropdown({
  gutter : -1,
  stack : false
});
$('#province-select' ).dropdown({
  gutter : -1,
  stack : false
});
$( '#city-select' ).dropdown({
  gutter : -1,
  stack : false
});
$( '#area-select' ).dropdown({
  gutter : -1,
  stack : false
});
});