<?php
    $datas = [];
    for($i=1; $i<=5; $i++){
        $num = random_int(100, 500);
        $data = ['id'=>$i ,'name'=>'some item', 'price'=>$num];
        array_push($datas, $data);
    }

    echo json_encode($datas);
?>