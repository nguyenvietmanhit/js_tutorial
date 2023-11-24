<?php

$a = '2	3	5	7';
$a = explode("\t", $a);
$b = [6, 3, 7,8 ,9, 99];

echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r($b);
echo "</pre>";

sort($b);
echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r($b);
echo "</pre>";
die;

foreach ($a AS $item) {
	if (in_array($item, $b)) {
		echo $item;
		break;
	}
}
die;




echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r($a);
echo "</pre>";
echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r($b);
echo "</pre>";

echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r(array_diff($a, $b));
echo "</pre>";
$arr_diff = array_diff($a, $b);
if ($arr_diff) {
	foreach ($arr_diff AS $key => $a_item) {
		unset($a[$key]);
	}
}


echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r($a);
echo "</pre>";
echo "<pre> Line: " . __LINE__ . ", File: " . __FILE__ . "\n";
print_r(reset($a));
echo "</pre>";
