const swiper = new Swiper(".swiper", {
    loop: true, // ループ有効
    slidesPerView: 6, // 一度に表示する枚数
    speed: 5000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    autoplaySpeed: 0
  });

const jsLoaderBg = document.querySelector(".js-loader-bg");
const lWrapper = document.querySelector(".l-wrapper");
const jsText = '.js-mv_title-item span'; // メインビジュアルのタイトル
const tl = gsap.timeline();

gsap.from(".moji", {rotationY: 36, opacity:0, duration: .8, yPercent: -100, stagger: 0.1, ease:"Expo.easeOut"});


tl.to(
    jsLoaderBg, {
        y: '100%',
    },
    '+=1'
)
tl.to(
    lWrapper,{
        duration: 1,
        autoAlpha: 0,
        y: '100%',
    },
    '+=1'
)
tl.to(
    moji,{
        opacity: 1,
        y: 0,
        duration: 1.8,
        stagger: {
            each:0.1,
            from:'random'
        }
    },
    '-=0.4'
)




