window.addEventListener('load', function() {
    // ====================筋斗云开始===================

    var cloud = this.document.querySelector('#cloud-ziye');
    var lis = this.document.querySelector('.navbar-nav').querySelectorAll('a');
    var current = 98;
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

    // --------------
    const button = document.querySelector('.but1');
    const bt = document.querySelector('.banner22-ul li')
    button.addEventListener('click', () => {
        const randomColor = getRandomColor();
        const randomColorq = getRandomColor();
        button.style.backgroundColor = randomColor;
        bt.style.backgroundColor = randomColorq;

    });

    /* function getRandomColor() {
        const colors = ['#343a40'];
        const colors1 = ['#cccccc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomColorq = colors1[Math.floor(Math.random() * colors.length)];
        return randomColor, randomColorq;
    }
    const button1 = document.querySelector('.but2');

    button1.addEventListener('click', () => {
        const randomColor = getRandomColor();
        button1.style.backgroundColor = randomColor;
        bt.style.backgroundColor = '';

    });
 */
    /* function getRandomColor() {
        const colors = ['#343a40'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    } */
    /* const button2 = document.querySelector('.but3');

    button2.addEventListener('click', () => {
        const randomColor = getRandomColor();
        button2.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const colors = ['#343a40'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }
    const button3 = document.querySelector('.but4');

    button3.addEventListener('click', () => {
        const randomColor = getRandomColor();
        button3.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const colors = ['#343a40'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    } */
    /* const buttons = document.querySelectorAll('.nav-link');
    const tabContent = document.getElementById('pills-tabContent');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            toggleActiveClass(i);
            changeBackgroundColor(i);
        });
    }

    function toggleActiveClass(index) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        buttons[index].classList.add('active');
    }

    function changeBackgroundColor(index) {
        const colors = ['#007bff', '#6c757d', '#ffc107', '#28a745'];
        const randomColor = colors[index];
        tabContent.style.backgroundColor = randomColor;
    } */
})