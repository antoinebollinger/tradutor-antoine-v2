<div id="div_logo"><a href="https://www.antoine-traductions.com"><img <?php if ($lang == 'fr') {echo 'src="css/images/logo_fr.png"';} else {echo 'src="css/images/logo_pt.png"';} ?> /></a></div>
<div id="div_langue">
	<img src="css/images/france.png" <?php if ($lang == 'fr') {echo 'class="active" title="Le site est déjà en français."';} else {echo 'title="Passer au français (ma spécialité)."';} ?> alt="fr" />
	<img src="css/images/brasil.png" <?php if ($lang != 'fr') {echo 'class="active" title="O site já está em português."';} else {echo 'title="Mudar para o português."';} ?> alt="pt"  />
	<div style="clear:both;"></div>
	<form action="index.php" method="post" id="form_langue">
		<input name="input_langue" type="hidden" id="input_langue" />
	</form>
</div>