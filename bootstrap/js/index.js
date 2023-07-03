window.addEventListener('load', function() {
    // ====================筋斗云开始===================

    var cloud = this.document.querySelector('#cloud');
    var lis = this.document.querySelector('.navbar-nav').querySelectorAll('a');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft
        })
    }


    function animate(obj, target, callback) {
        // console.log(callback); callback=function(){} 调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                if (callback) {
                    // 回调函数
                    callback();
                }
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：（目标值-现在的位置）/10
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 18);
    }
    const img = document.querySelector('#imgindex');
    const video = document.querySelector('#my-video');
    const liu = document.querySelector('.liu')
    const dddddd = document.querySelector('#dddddd')
    img.addEventListener('click', function() {
        img.style.display = 'none';
        liu.style.display = 'none';
        video.style.display = 'block';
        dddddd.style.display = 'block';
        video.play();
        audio.pause()
    });
    dddddd.addEventListener('click', function() {
        img.style.display = 'block';
        liu.style.display = 'block';
        dddddd.style.display = 'none';
        video.style.display = 'none';
        video.pause();
        audio.play();


    });

    video.addEventListener('ended', function() {
        img.style.display = 'block';
        liu.style.display = 'block';
        video.style.display = 'none';
        video.pause();
        audio.play();

    });


    /*  setTimeout(function() {
         document.getElementById("b5").addEventListener("mouseenter", function() {
             document.getElementById("b5-1-3").style.background = "url('../../image/index/banner2/魈.png') no-repeat";
             document.getElementById("b5-1-3").style.backgroundSize = "100% 230%";
             document.getElementById("b5-1-3").style.backgroundPosition = "8vw -10vh";
             document.getElementById("b5-1-3").style.opacity = "1";
         });
     }, 3000); */


    // =============8、缩回的信息 头发—开始================
    var sk = document.querySelector('.zzz');
    var tiao = document.querySelector('.qiqiqi');
    // 页面滚动事件
    /*   window.addEventListener('scroll', function() {
          // 要检测滚动的距离 >= 秒杀模块的offsetTop 则滑入
          if (window.pageYOffset >= tiao.offsetTop) {
              header.style.top = 0 + 'px';
              sk.style.top = -30 + 'px';
          } else {
              header.style.top = 30 + 'px';
              sk.style.top = 0 + 'px';

          }
        
      }); */

    function setTopPosition() {
        if (window.innerWidth < 1000) {
            sk.style.bottom = -30 + 'px';
        } else {
            sk.style.bottom = 0 + 'px';
            window.addEventListener('scroll', function() {
                if (window.innerWidth > 1000) {
                    // 要检测滚动的距离 >= 秒杀模块的offsetTop 则滑入
                    if (window.pageYOffset >= tiao.offsetTop) {
                        sk.style.bottom = -30 + 'px';
                    } else {
                        sk.style.bottom = 0 + 'px';
                    }
                }
            })
        }
    }
    // 首次加载页面时调用一次
    setTopPosition();
    // 监听窗口尺寸变化事件
    window.addEventListener('resize', setTopPosition);
    // =============缩回的信息 头发—结束================
})