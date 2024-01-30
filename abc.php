<?php
// Kích thước của hình ảnh gốc
$originalImage = __DIR__ . "/bg3.jpg"; // Đường dẫn đến ảnh gốc
list($width, $height) = getimagesize($originalImage);

// Tạo hình ảnh mới để chèn văn bản
$image = imagecreatetruecolor($width, $height);

// Đọc ảnh gốc
$original = imagecreatefromjpeg($originalImage);
imagecopy($image, $original, 0, 0, 0, 0, $width, $height);

// Đặt màu nền tròn
$bgColor = imagecolorallocate($image, 0, 128, 0); // Màu xanh
$fontColor = imagecolorallocate($image, 255, 255, 255); // Màu trắng

// Văn bản và font
$text = "Hello";
$fontFile = __DIR__ . "/font-str.ttf"; // Đường dẫn đến font TrueType, hãy thay đổi thành đường dẫn thật sự

// Kích thước font
$fontSize = 18;

// Tọa độ và kích thước của nền tròn
$circleX = $width / 2;
$circleY = $height / 2;
$circleRadius = 50;

// Vẽ nền tròn
imagefilledellipse($image, $circleX, $circleY, $circleRadius * 2, $circleRadius * 2, $bgColor);

// Vẽ văn bản vào hình ảnh
imagettftext($image, $fontSize, 0, $circleX - $fontSize / 2 - 20, $circleY + $fontSize / 2, $fontColor, $fontFile, $text);

// Xuất hình ảnh ra trình duyệt
header("Content-type: image/jpeg");
imagejpeg($image);

// Giải phóng bộ nhớ
imagedestroy($image);
?>
