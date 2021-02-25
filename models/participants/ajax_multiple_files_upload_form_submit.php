<?php
require __DIR__ . '/../connection.php';
$res = [
  'status' => false,
  'msg' => ''
];

$name = $_POST['name'];
$file_count = count($_FILES['your_file']['name']);

for($i=0; $i<$file_count; $i++) {
  $file_name_with_ex = $_FILES['your_file']['name'][$i];
  $file_temp_name = $_FILES['your_file']['tmp_name'][$i];

  $file_name_array = explode('.', $file_name_with_ex);
  $file_name = time().'_'.rand();
  $file_ex = strtolower($file_name_array[1]);
  $filename = $file_name.'.'.$file_ex;

  $sql = "INSERT INTO users (user_name, user_filename) VALUES('$name', '$filename')";
  if(mysqli_query($dbcon, $sql)) {
    move_uploaded_file($file_temp_name, __DIR__ . '/../../assets/upload/'.$filename);
  }
}

$res = [
  'status' => true,
  'msg' => 'Saved'
];

echo json_encode($res);

mysqli_close($dbcon);
