<?php

	$first = htmlspecialchars($_GET['first']);
	$second  = htmlspecialchars($_GET['second']);
	$third  = htmlspecialchars($_GET['third']);

	echo " Твое первое число: ", $first, '<br/>';

	echo "Твое второе число: ", $second, '<br/>';

	echo "Твое третье число:  ", $third, '<br/>';

?>
