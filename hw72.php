<?php

	$json = file_get_contents('php://input');
	$rap = json_decode($json);
	$rap->lyrics = "PumPumTuTuTuGRYAAAAAAAAA";
	$rap = json_encode($rap);
	echo $rap;

?>
