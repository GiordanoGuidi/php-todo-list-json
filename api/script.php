<?php 
//RECUPERO L'ARRAY DAL FILE DATI.JSON
$json_string = file_get_contents('dati.json');
//CONVERTO LA STRINGA JSON IN ARRAY ASSOCIATIVO
$tasks = json_decode($json_string , true);
//ELABORAZIONI SU $TASKS

//CONVERTO L'ARRAY ASSOCIATIVO IN STRINGA JSON
header('Content-Type: application/json');
echo json_encode($tasks);
?>