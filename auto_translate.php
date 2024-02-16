<?php
require_once 'vendor/autoload.php';
use Stichoza\GoogleTranslate\GoogleTranslate;

$tr = new GoogleTranslate('en'); // Translates into English

//echo $tr->translate('<p>Ch&uacute;ng ta đều c&oacute; thời kỳ kh&oacute; khăn v&agrave; th&aacute;ch thức ri&ecirc;ng của m&igrave;nh trong cuộc sống. C&oacute; những l&uacute;c, ch&uacute;ng ta c&oacute; thể cảm thấy bị bỏ lại ph&iacute;a sau hoặc kh&ocirc;ng c&oacute; cơ hội ph&aacute;t triển như một chuy&ecirc;n gia. Tuy nhi&ecirc;n, đ&ocirc;i khi, c&aacute;ch ch&uacute;ng ta ứng ph&oacute; với những t&igrave;nh huống kh&oacute; khăn n&agrave;y c&oacute; thể ảnh hưởng đến t&iacute;ch c&aacute;ch của ch&uacute;ng ta.</p>
//<p>Thay v&igrave; trở n&ecirc;n độc đo&aacute;n v&agrave; cư xử như một kẻ chuy&ecirc;n quyền, c&oacute; lẽ ch&uacute;ng ta c&oacute; thể cố gắng hiểu v&agrave; t&ocirc;n trọng &yacute; kiến của người kh&aacute;c. Điều n&agrave;y c&oacute; thể gi&uacute;p ch&uacute;ng ta x&acirc;y dựng mối quan hệ tốt hơn với những người xung quanh v&agrave; học hỏi từ họ.</p>
//<p>Gh&eacute;t điểm yếu của người kh&aacute;c v&agrave; kh&ocirc;ng tha thứ cho lỗi lầm c&oacute; thể l&agrave; một kh&iacute;a cạnh của t&iacute;ch c&aacute;ch ch&uacute;ng ta n&ecirc;n xem x&eacute;t. Thay v&igrave; tập trung v&agrave;o điểm yếu của người kh&aacute;c, h&atilde;y c&ugrave;ng nhau t&igrave;m c&aacute;ch hỗ trợ v&agrave; c&ugrave;ng nhau ph&aacute;t triển. Ch&uacute;ng ta đều mắc lỗi v&agrave; c&oacute; thể học hỏi từ những sai lầm của m&igrave;nh.</p>
//<p>Thay v&igrave; cố gắng l&agrave;m mọi thứ c&ugrave;ng một l&uacute;c, h&atilde;y xem x&eacute;t việc ưu ti&ecirc;n v&agrave; tập trung v&agrave;o những nhiệm vụ quan trọng nhất. Điều n&agrave;y sẽ gi&uacute;p ch&uacute;ng ta l&agrave;m việc hiệu quả hơn v&agrave; giảm căng thẳng.</p>
//<p>L&ograve;ng tự h&agrave;o v&agrave; ki&ecirc;u ngạo c&oacute; thể l&agrave; một phần của t&iacute;nh c&aacute;ch của ch&uacute;ng ta, nhưng ch&uacute;ng ta n&ecirc;n nhớ rằng mọi người đều đ&aacute;ng được t&ocirc;n trọng v&agrave; đối xử với sự k&iacute;nh trọng. Thay v&igrave; tự cao tự đại, h&atilde;y tập trung v&agrave;o việc tạo sự đo&agrave;n kết v&agrave; hỗ trợ đối t&aacute;c của m&igrave;nh.</p>
//<p>Ch&uacute;ng ta c&oacute; thể th&iacute;ch kiểm so&aacute;t những người th&acirc;n y&ecirc;u của m&igrave;nh để đảm bảo họ an to&agrave;n v&agrave; hạnh ph&uacute;c. Tuy nhi&ecirc;n, đ&ocirc;i khi ch&uacute;ng ta cần tin tưởng họ v&agrave; để họ tự quyết định. H&atilde;y gi&uacute;p họ ph&aacute;t triển khả năng tự lựa chọn v&agrave; tự quyết định trong cuộc sống.</p>
//<p>Cuối c&ugrave;ng, đặt lợi &iacute;ch vật chất l&ecirc;n tr&ecirc;n tất cả c&oacute; thể l&agrave;m mất đi gi&aacute; trị tinh thần trong cuộc sống. H&atilde;y nhớ rằng t&igrave;nh bạn, t&igrave;nh th&acirc;n, v&agrave; t&igrave;nh y&ecirc;u từ những người th&acirc;n y&ecirc;u l&agrave; những điều qu&yacute; b&aacute;u nhất. H&atilde;y tạo ra c&acirc;n bằng giữa lợi &iacute;ch vật chất v&agrave; t&igrave;nh cảm.</p>
//<p>Mọi người đều trải qua những kh&iacute;a cạnh t&iacute;ch c&aacute;ch kh&aacute;c nhau, v&agrave; việc nh&igrave;n nhận ch&uacute;ng v&agrave; thay đổi ch&uacute;ng c&oacute; thể gi&uacute;p ch&uacute;ng ta trở th&agrave;nh phi&ecirc;n bản tốt hơn của ch&iacute;nh m&igrave;nh. H&atilde;y lu&ocirc;n nhớ rằng ch&uacute;ng ta c&oacute; khả năng ph&aacute;t triển v&agrave; thay đổi t&iacute;ch c&aacute;ch của m&igrave;nh để sống hạnh ph&uacute;c v&agrave; h&agrave;i l&ograve;ng hơn.</p>
//<p>Ch&uacute;c bạn lu&ocirc;n t&igrave;m thấy niềm vui v&agrave; b&igrave;nh an trong cuộc sống.</p>');
//die;
//echo $tr->translate('Số 1 cho thấy phẩm chất độc lập, chủ động và khả năng khởi xướng được kế thừa từ cha giúp bạn có tinh thần tự lập, tự chủ cao. Bạn có thể tự mình đưa ra quyết định và khởi xướng những dự án mới mẻ, sáng tạo mà không cần phụ thuộc vào người khác. Tuy nhiên, đôi khi bạn cũng cần lắng nghe ý kiến của người khác để có quyết định tốt nhất, tránh quá cứng nhắc và làm mọi thứ một mình.');

// - Các bước kết nối CSDL MySQL từ PHP:
// + B1: Khởi tạo kết nối:
// Tên máy chủ đang lưu CSDL: localhost
const DB_HOST = 'localhost';
// Username đăng nhập vào CSDL: root (XAMPP)
const DB_USERNAME = 'root';
// Password đăng nhập vào CSDL: chuỗi rỗng (XAMPP)
const DB_PASSWORD = '';
// Tên CSDL sẽ kết nối
const DB_NAME = 'kabala_xem_newest';
// Cổng CSDL sẽ kết nối:
const DB_PORT = 3306;

$connection = mysqli_connect(DB_HOST,
	DB_USERNAME, DB_PASSWORD,
	DB_NAME, DB_PORT
);

if (!$connection) {
	die('Lỗi kết nối: ' . mysqli_connect_error());
}
echo 'Kết nối CSDL thành công';

// Lấy tất cả data
// + B1: Viết truy vấn:
$sql_select_all =
	"SELECT * FROM matrix"; //ASC
// + B2: Thực thi: SELECT trả về obj trung gian
$result_all = mysqli_query($connection, $sql_select_all);
// + B3: Lấy thông tin dưới dạng mảng kết hợp 2 chiều:
$matrixs = mysqli_fetch_all($result_all,
	MYSQLI_ASSOC);
//echo '<pre>';
//print_r($matrixs);
//echo '</pre>';
foreach ($matrixs AS $matrix) {
	$content = $matrix['content'];
	if ($matrix['en']) {
		continue;
	}
	$id = $matrix['id'];
	$content_en = $tr->translate($content);
	var_dump($id);
	var_dump($content_en);
	$content_en = mysqli_real_escape_string($connection, $content_en);
	// Update content en vào lại bảng
	$sql_update = "UPDATE matrix SET en='$content_en'
WHERE id = $id";
// + B2: Thực thi
	$is_update = mysqli_query($connection, $sql_update);
	var_dump($is_update);
//	var_dump($is_update);
}
?>
