<?php
const APP_ROOT = 'http://localhost/js_tutorial/file-reader-upload-file';

const UPLOAD_DIR = __DIR__ . '/uploads';



const MESSAGES = [
	UPLOAD_ERR_OK => 'File uploaded successfully',
	UPLOAD_ERR_INI_SIZE => 'File is too big to upload',
	UPLOAD_ERR_FORM_SIZE => 'File is too big to upload',
	UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
	UPLOAD_ERR_NO_FILE => 'No file was uploaded',
	UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder on the server',
	UPLOAD_ERR_CANT_WRITE => 'File is failed to save to disk.',
	UPLOAD_ERR_EXTENSION => 'File is not allowed to upload to this server',
];

const ALLOWED_FILES = [
	'image/png' => 'png',
	'image/jpeg' => 'jpg'
];

const MAX_SIZE = 5 * 1024 * 1024; //  5MB
const HTTP_STATUSES = [
	200 => 'OK',
	400 => 'Bad Request',
	404 => 'Not Found',
	405 => 'Method Not Allowed'
];

$is_post_request = strtolower($_SERVER['REQUEST_METHOD']) === 'post';
$has_files = isset($_FILES['images']);
if (!$is_post_request || !$has_files) {
	response(405, [
		'success' => false,
		'message' => 'Method not allowed or files do not exist'
	]);
}
$errors = [];
$files = $_FILES['images'];
$file_count = count($files['name']);

for ($i = 0; $i < $file_count; $i++) {
	$status = $files['error'][$i];
	$filename = $files['name'][$i];
	$tmp = $files['tmp_name'][$i];
	
	if ($status !== UPLOAD_ERR_OK) {
		$errors[$filename] = MESSAGES[$status];
		continue;
	}
}
if ($errors) {
	response(400, [
		'success' => false,
		'message' => $errors
	]);
}

function response($status_code, $data = null)
{
	header("HTTP/1.1 " . $status_code . " " . HTTP_STATUSES[$status_code]);
	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
}
