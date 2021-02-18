<?php
require __DIR__ . '/../connection.php';
$res = [
  'status' => false,
  'msg' => ''
];

$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO participants (ptcpt_name, ptcpt_email)
VALUES ('{$name}', '{$email}')";

if (mysqli_query($dbcon, $sql)) {
  $res['status'] = true;
  $res['msg'] = 'Successfully Saved';
} else {
  $res['msg'] = mysqli_error($dbcon);
}

echo json_encode($res);

mysqli_close($dbcon);
