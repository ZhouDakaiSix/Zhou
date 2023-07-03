window.addEventListener('load', function() {

    const visibleHeight = function() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    const updateVisibleHeight = function() {
        window.visibleHeight = visibleHeight(); // 将当前页面高度绑定到window对象上
    };

    window.visibleHeight = visibleHeight(); // 初始化页面高度
    window.addEventListener('resize', updateVisibleHeight); // 监听窗口大小变化事件

    let canScroll = true; // 设置一个状态变量，表示当前是否可以进行滚动操作

    window.addEventListener('wheel', function(event) {
        if (canScroll) {
            canScroll = false;

            const direction = event.deltaY < 0 ? -1 : 1;
            const scrollDistance = window.visibleHeight * direction; // 使用当前页面高度进行计算

            event.preventDefault(); // 阻止浏览器默认滚动行为

            window.scrollBy({
                top: scrollDistance,
                behavior: 'smooth'
            });

            setTimeout(function() {
                canScroll = true; // 一秒后恢复滚动状态
            }, 500);
        } else {
            event.preventDefault(); // 禁止滚动操作
        }
    }, {
        passive: false
    });

    // --------------鼠标hover事件--------------





















})