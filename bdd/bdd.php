<?php
// Connexion à la base de données
if(in_array($_SERVER['SERVER_NAME'], array('localhost'))) {$mysql_host = "localhost";$mysql_user = "root";$mysql_password = "";$mysql_base = "tradutorqdantoin";}
else {$mysql_host = "tradutorqdantoin.mysql.db";$mysql_user = "tradutorqdantoin";$mysql_password = "JsABpdVeC92";$mysql_base = "tradutorqdantoin";}
try {$bdd = new PDO('mysql:host='.$mysql_host.';dbname='.$mysql_base.';charset=utf8', $mysql_user, $mysql_password);}
catch (Exception $e) {die('Erreur : ' . $e->getMessage());}
?>