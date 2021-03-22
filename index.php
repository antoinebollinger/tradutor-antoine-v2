<?php 
session_start();
include('session/stop_message.php');
if (!isset($_SESSION['langue'])) {
	$_SESSION['langue'] = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
}
if (isset($_POST['input_langue']) && $_POST['input_langue'] != '') {$_SESSION['langue'] = htmlspecialchars($_POST['input_langue']);}
$lang = $_SESSION['langue'];
$lang_bis = ($lang == 'fr') ? 'fr' : 'pt' ;
$id_page = 'index';
include('bdd/bdd.php');
function get_ip() {
	if (isset($_SERVER['HTTP_CLIENT_IP'])) {return $_SERVER['HTTP_CLIENT_IP'];}
	elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {return $_SERVER['HTTP_X_FORWARDED_FOR'];}
	else {return (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '');}
}
$array_histo = array(
'reference' => (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : ''),
'explorer' => (isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : ''),
'langue' => $lang,
'uri' => (isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : ''),
'ip_user' => get_ip(),
'ip_server' => (isset($_SERVER['REMOTE_HOST']) ? $_SERVER['REMOTE_HOST'] : ''),
'date' => date('Ymd'),
'heure' => date('Gis')
);
$req_histo = $bdd->prepare('INSERT INTO connect_histo (reference,explorer,langue,uri,ip_user,ip_server,date,heure) VALUES (:reference,:explorer,:langue,:uri,:ip_user,:ip_server,:date,:heure)');
$req_histo->execute($array_histo);
$req_histo->closeCursor();			
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
	<head><?php include('header/head.php'); ?></head>
	<body>
	<div id="background"></div>
<?php include('patientez.php');include('doc/cgu.php');include('doc/cgv.php');include('header/logo_langue.php'); ?>
<?php include('doc/livre_'.$lang_bis.'.php'); ?>	
	<nav>
		<div id="menu_icon">
			<div class="menu-icon menu-icon-cross">
				<span></span>
				<svg x="0" y="0" width="40px" height="40px" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="18"></circle>
				</svg>
			</div>
		</div>
<?php include('nav/nav_'.$lang_bis.'.php'); ?>
	</nav>
	<div id="main_main">
<?php include('main_'.$lang_bis.'.php'); ?>
	</div>
	<footer>
<?php include('footer/footer_'.$lang_bis.'.php'); ?>
	</footer>
	<script src="js/java.js"></script>
	</body>
</html>