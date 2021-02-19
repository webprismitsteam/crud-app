<?php
require __DIR__ . '/../connection.php';
$res = [
  'status' => false,
  'msg' => ''
];

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];

$sql = "UPDATE participants SET ptcpt_name = '{$name}', ptcpt_email = '{$email}' WHERE ptcpt_id = '{$id}'";

if (mysqli_query($dbcon, $sql)) {
  $res['status'] = true;
  $res['msg'] = 'Successfully Updated';
} else {
  $res['msg'] = mysqli_error($dbcon);
}

echo json_encode($res);

mysqli_close($dbcon);
