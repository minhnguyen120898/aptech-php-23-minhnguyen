<?php 

header('content-type: application/json');
$con = mysqli_connect("localhost","root","","tale");
mysqli_set_charset($con,'urf-8');

$query="Select * from databook";
$res = mysqli_query($con,$query);

$json_data = array();

while ($row = mysqli_fetch_assoc($res)) {
	# code...
	$json_data[] = $row;
}

echo json_encode($json_data);

?>