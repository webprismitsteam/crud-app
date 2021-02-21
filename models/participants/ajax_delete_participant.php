<?php
require __DIR__ . '/../connection.php';
$res = [
  'status' => false,
  'msg' => ''
];

$id = $_POST['id'];

$sql = "DELETE FROM participants WHERE ptcpt_id = '{$id}'";

if (mysqli_query($dbcon, $sql)) {
  $res['status'] = true;
  $res['msg'] = 'Successfully Deleted';
} else {
  $res['msg'] = mysqli_error($dbcon);
}

echo json_encode($res);

mysqli_close($dbcon);
