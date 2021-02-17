<?php
$dbhost = 'localhost';
$dbusername = 'root';
$dbpassword = '';
$dbname = 'crud-app_db';

$dbcon = mysqli_connect($dbhost,$dbusername,$dbpassword,$dbname) or die("Could not connect to server");
?>