<?php
require_once __DIR__ . '/../connection.php';

$sql = "SELECT * FROM participants";
$result = mysqli_query($dbcon, $sql);

$participants = [];
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $participants[] = $row;
  }
}

mysqli_close($dbcon);

?>
