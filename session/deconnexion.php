<?php
session_start();
$lang_tmp = (isset($_SESSION['langue'])) ? $_SESSION['langue'] : 'fr' ;
include('../bdd/bdd.php');
$_SESSION = array();
session_destroy();
setcookie('id', "", time() - 3600, "/");
setcookie('verif', "", time() - 3600, "/");
setcookie(session_name(), "", time() - 3600, "/");
unset($_COOKIE['id']);
unset($_COOKIE['verif']);
unset($_COOKIE[session_name()]);
session_start();
if (!isset($_SESSION['langue'])) {
	$_SESSION['langue'] = $lang_tmp;
}
header('Location: ../login.php');
exit();	
?>