<?php 
session_start();
include('session/stop_message.php');
if (!isset($_SESSION['connect']) OR $_SESSION['connect']==false) {header('Location: login.php');exit();}
else {
$lang = 'fr';
$id_page = 'espace_pro';
function print_tab($tab){
	if (!is_array($tab)) return false;
	static $balise_fermante = array();
	$str = "<ul class=\"ul_session\">\r\n";
	$balise_fermante[] = "</ul>\r\n";
	foreach ($tab as $k => $v) {
		if(is_array($v)){
			$str .= "<li>[<b>$k</b>] => <em>array</em>\r\n";
			$balise_fermante[] = "</li>\r\n";
			$str .= print_tab($v);
		} else {
			$str .= "<li>[<b>$k</b>] => <span style=\"color:#4285f4;\">".htmlentities($v)."</span>";
			$balise_fermante[] = "</li>\r\n";
		}
		$str .= array_pop($balise_fermante);
	}
	$str .= array_pop($balise_fermante);
	return $str;
}
include('bdd/bdd.php');
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
	<head><?php include('header/head.php'); ?></head>
	<body>
	<div style="background-color:#ffffff;">
	<a href="javascript:if(confirm('&Ecirc;tes-vous sûr de vouloir vous déconnecter ?')) document.location.href='session/deconnexion.php'">Déconnexion</a>
	<?php echo print_tab($_SESSION); ?>
	</div>
	</body>
</html>
<?php } ?>