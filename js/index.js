$(function() {
    banner();
    int();
});
var banner = function() {
    //  ͨ��ajax��ȡ��̨����,������Ļ�ĳߴ�ı�ͼƬ��·��
    //  ������Ļ�Ĵ�Сȥ��Ⱦ���ݺ��豸
    //�ṩ����
    var getData = function(callback) {
        //�ж��Ƿ񻺴�������,��������˾Ͳ�ͬ����ȥ�����̨����
        //���û�л���,�ͷ�������
        if (window.data) {
            callback && callback(window.data);
        } else {
            $.get('api/data.json', function(data) {
                window.data = data;
                callback && callback(window.data);
            });
        }
    };
    //��Ⱦ����
    var redenr = function() {
        getData(function(data) {
            //�õ����ݺ�ʹ��ģ�������Ⱦ
            var isMobile = $(window).width() < 768;
            var pointHtml = template('pointTemplate', data);
            var imageHtml = template('imageTemplate', { data: data, isMobile: isMobile });
            //��Ⱦ
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        });
    };
    redenr();
    $(window).on('resize', function() {
        redenr();
    });

    //���Ƶĸı�
    var ismove = false;
    var startX = 0;
    var distenceX = 0;
    $('.wjs_banner').on('touchstart', function(e) {
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove', function(e) {
        ismove = true;
        distenceX = e.originalEvent.touches[0].clientX - startX;
    }).on('touchend', function(e) {
        if (ismove && Math.abs(distenceX) > 50) {
            if (distenceX > 0) {
                $('.carousel').carousel('prev');
            } else {
                $('.carousel').carousel('next');
            }
        }
    })
};
$(function() {
        $('[data-toggle="tooltip"]').tooltip();
    })
    // 获取tab切换的总长度,然后父容器的长度比
var int = function() {
    var tab = $('.nav-tabs[data-a]');
    var sum = 0;
    var lis = $('.nav-tabs[data-a]').find('li');
    lis.each(function() {
        sum += $(this).outerWidth(true);

    })
    tab.width(sum);
    tab.parent().css({ overflow: 'hidden' });

    new IScroll(tab.parent()[0], {
        scrollX: true,
        scrollY: false,
        click: true
    });
}