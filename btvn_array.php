<!-- 1. Tính tổng hiệu thương tích -->
<?php
    // Tổng
    $arrs = [2, 5, 6, 9, 2, 5, 6, 12 ,5];
    $sum = array_sum($arrs);
    echo "Tổng các phần tử = " . implode(" + ", $arrs) . " = " . $sum;  
    // Hiệu
    $arrs = [2, 5, 6, 9, 2, 5, 6, 12 ,5];
    $diff = array_reduce($arrs,function($a,$b){return $a-$b;});
    echo "Hiệu các phần tử = " . implode(" - ", $arrs) . " = " . $diff;
    // Tích
    $arrs = [2, 5, 6, 9, 2, 5, 6, 12 ,5];
    $product = array_product($arrs);
    echo "Tích các phần tử = " . implode(" x ", $arrs) . " = " . $product;
    // Thương
    $arrs = [2, 5, 6, 9, 2, 5, 6, 12 ,5];
    $quotient = array_reduce($arrs,function($a,$b){return $a/$b;});
    echo "Thương các phần tử = " . implode(" / ", $arrs) . " = " . $quotient;
?>
<!-- 2. Viết code hiển thị chuỗi -->
<?php
    $arrs = ['đỏ', 'xanh', 'cam', 'trắng'];
    echo "Màu " . $arrs[0] . " là màu yêu thích của Anh, ";
    echo $arrs[3] . " là màu yêu thích của Sơn, ";
    echo $arrs[2] . " là màu yêu thích của củ";    
?>
<!-- 3. Viết code để hiển thị nội dung -->
<?php
    $arrs = ['PHP', 'HTML', 'CSS', 'JS'];
    echo '<table border="1">';
    echo '<tr>';
    echo '<th>STT</th>';
    echo '<th>Tên</th>';
    echo '</tr>';
    foreach ($arrs as $key => $value) {
        echo '<tr>';
        echo '<td>'.($key+1).'</td>';
        echo '<td>'.$value.'</td>';
        echo '</tr>';
    }
    echo '</table>';    
?>
<!-- 4. Hiển thị thông tin -->
<?php 
    $arrs = array("Italy" => "Rome", "Luxembourg" => "Luxembourg", "Belgium" => "Brussels", "Denmark" => "Copenhagen", "Finland" => "Helsinki", "France" => "Paris", "Slovakia" => "Bratislava", "Slovenia" => "Ljubljana", "Germany" => "Berlin");
?>
<!-- 5. Lấy giá trị -->
<?php
    $a = [ 'a' => [ 'b' => 0, 'c' => 1 ], 'b' => [ 'e' => 2, 'o' => [ 'b' => 3 ] ] ];
    // Lấy giá trị = 3 mà có key là b từ mảng trên
    $value = $a['b']['o']['b'];
    // Lấy giá trị = 1 mà có key là c từ mảng trên
    $value = $a['a']['c'];
    // Lấy thông tin của phần tử có key là a
    $info = $a['a'];    
?>
<!-- 6. Tạo mảng t3 từ 2 mảng -->
<?php
    $keys = array("field1"=>"first", "field2"=>"second", "field3"=>"third");
    $values = array("field1value"=>"dinosaur", "field2value"=>"pig", "field3value"=>"platypus");
    $result = array_combine($keys, $values);
    print_r($result);    
?>
<!-- 7. Tìm và hiển thị tất cả các số từ 100 đến 200 chia hết cho 5 -->
<?php
    $array = [12, 5, 200, 10, 125, 60, 90, 345, -123, 100, -125, 0];
    foreach ($array as $value) {
        if ($value >= 100 && $value <= 200 && $value % 5 == 0) {
            echo $value . " ";
        }
    }    
?>
<!-- 8. Tìm chuỗi có độ dài lớn nhất, nhỏ nhất và độ dài tương ứng -->
<?php
    $array = ['programming', 'php', 'basic', 'dev', 'is', 'program is PHP'];
    $longest = max($array);
    $shortest = min($array);
    $longest_length = strlen($longest);
    $shortest_length = strlen($shortest);
    
    echo "Chuỗi lớn nhất là $longest, độ dài = $longest_length. Chuỗi nhỏ nhất là $shortest, độ dài = $shortest_length.";        
?>
<!-- 9. Chuyển toàn bộ các ký tự trong mảng số nguyên thành mảng các ký tự thường -->
<?php
    function convert_to_lowercase($arr) {
        $result = array();
        foreach ($arr as $value) {
            $result[] = strtolower($value);
        }
        return $result;
    }
    
    // Test the function with an example array
    $example_array = array('a', 'b', 'ABC');
    $result_array = convert_to_lowercase($example_array);
    print_r($result_array);    
?>
<!-- 11. Xóa phần tử thứ 3 trong mảng trên, sau khi xóa hãy đảm bảo key của mảng là tuần tự -->
<?php
    $array = array(1, 2, 3, 4, 5);
    array_splice($array, 2, 1);
    print_r($array);    
?>
<!-- 12. -->
<?php
    // Lấy phần tử đầu tiên và cuối cùng
    $numbers = [ 'key1' => 12, 'key2' => 30, 'key3' => 4, 'key4' => -123, 'key5' => 1234, 'key6' => -12565, ];
    $firstElement = reset($numbers);
    $lastElement = end($numbers);
    // Tìm SLN SNN và tổng các giá trị
    $numbers = [ 'key1' => 12, 'key2' => 30, 'key3' => 4, 'key4' => -123, 'key5' => 1234, 'key6' => -12565, ];
    $maxValue = max($numbers);
    $minValue = min($numbers);
    $sumValue = array_sum($numbers);
    // Sắp xếp mảng theo chiều tăng hoặc giảm
    $numbers = [ 'key1' => 12, 'key2' => 30, 'key3' => 4, 'key4' => -123, 'key5' => 1234, 'key6' => -12565, ];
    sort($numbers); // Sắp xếp theo chiều tăng các giá trị
    rsort($numbers); // Sắp xếp theo chiều giảm các giá trị
    ksort($numbers); // Sắp xếp theo chiều tăng các key
    krsort($numbers); // Sắp xếp theo chiều giảm các key
?>
<!-- 13. -->
<?php
    // Tính giá trị trung bình của mảng
    $numbers = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];
    $average = array_sum($numbers) / count($numbers);
    echo "Giá trị trung bình của mảng là: " . $average;
    // Liệt kê các số có giá trị lớn hơn giá trị trung bình đó và các số có giá trị nhỏ hơn hoặc bằng giá trị trung bình 
    $numbers = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64,
    68,
    73,
    75,
    79,
    73];
    $average = array_sum($numbers) / count($numbers);
    echo "Các số lớn hơn giá trị trung bình ($average) là: ";
    foreach ($numbers as $number) {
        if ($number > $average) {
            echo "$number ";
        }
    }
    echo "<br>";
    echo "Các số nhỏ hơn hoặc bằng giá trị trung bình ($average) là: ";
    foreach ($numbers as $number) {
        if ($number <= $average) {
            echo "$number ";
        }
    }
?>
<!-- 14.  Gộp 2 mảng -->
<?php
     $array1 = [ [77, 87], [23, 45] ];
     $array2 = [ 'giá trị 1', 'giá trị 2' ];
     $result = array_merge(array_reverse($array2), array_reverse($array1));
     print_r($result);     
?>
<!-- 15. Hiển thị kết quả trả về 1 hàm bất kì -->
<?php
    $array = [1, 2, 3, 4];
    $sum = array_sum($array);
    print_r($sum); //10    
?>