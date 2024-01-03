<?php
$content = '';
$textarea_content = '';
$LFCode = "";
if (isset($_POST['submit'])) {
//    $content = $_POST['content'];

// Lấy dữ liệu từ textarea
	$textarea_content = $_POST['content']; // Thay 'textarea_name' bằng tên thực của textarea trong form của bạn
	
	if ($textarea_content !== '') {
		$lines = explode("\n", $textarea_content);
		$firstLine = trim($lines[0]);
		if (empty($firstLine)) {
			$LFCode = "&#10;";
		}
	}
	
}

?>

<form method="post" action="" id="form">
    Nhập text
<textarea name="content" rows="10" ><?php echo $LFCode . $textarea_content; ?></textarea>
    <br>
    <input type="submit" value="Submit" name="submit">
</form>
