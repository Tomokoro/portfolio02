
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    $(this).toggleClass("active");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".p-sp-nav").toggleClass("show");
    $(".p-header__inner").toggleClass("active");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // メインビュースライダー
const swiper01 = new Swiper('.swiper01', {
    loop: true,
    effect: "fade", //フェードの指定
        autoplay: {
            delay: 4000, //４秒後に次のスライドへ
            disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
        },
        speed: 2000, //２秒かけてフェードで切り替わる
      direction:'vertical',
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
    });

  // 制作実績スライダー
const swiper02 = new Swiper('.swiper02', {
    loop: true,
      autoplay: {
        delay: 3000, //3秒後に次のスライドへ
        // disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
      },
      speed: 2000, //２秒かけてフェードで切り替わる
      pagination: { // 丸のページネーションを使うなら書く
        el: ".swiper-pagination",
        clickable: true //クリックを有効化する
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
      
    });

});


