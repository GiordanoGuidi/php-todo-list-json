<?php 
//RECUPERO L'ARRAY DAL FILE DATI.JSON
$json_string = file_get_contents('dati.json');

//CONVERTO LA STRINGA JSON IN ARRAY ASSOCIATIVO
$tasks = json_decode($json_string , true);

//ELABORAZIONI SU $TASKS
$new_task = $_POST['task'] ?? '';

if($new_task){
    //trasformo new task in un oggetto
    $new_task = [
        'text' => $new_task,
        'done' => false,
    ];
    //pusho il nuovo task nell'array
    $tasks[]= $new_task;

    //Riconverto in json
    $tasks =  json_encode($tasks);
    //Sovrascrivo il file con l'array aggiornato
    file_put_contents('dati.json',$tasks);
} 


// dico che voglio rispondere in linguaggio json
header('Content-Type: application/json');
// stampom riconvertendo in json
echo json_encode($tasks);
?>