<?php
    header('Content-Type=text/html;charset=utf-8');
    /*1. 去数据库获取数据  模拟*/
    $data =  array(
        array(
            'bigImage'=>'images/slide_01_2000x410.jpg',
            'smallImage'=>'images/slide_01_640x340.jpg'
        ),
        array(
            'bigImage'=>'images/slide_02_2000x410.jpg',
            'smallImage'=>'images/slide_02_640x340.jpg'
        ),
        array(
            'bigImage'=>'images/slide_03_2000x410.jpg',
            'smallImage'=>'images/slide_03_640x340.jpg'
        ),
        array(
            'bigImage'=>'images/slide_04_2000x410.jpg',
            'smallImage'=>'images/slide_04_640x340.jpg'
        )
    );
    /*2. 后台接口 返回数据  json */
    $json = json_encode($data);
    /*3. 返回的json格式的字符串*/
    echo $json;
?>