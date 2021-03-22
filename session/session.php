<?php
$lifetime=43200;
session_start();
setcookie(session_name(),session_id(),time()+$lifetime, null, null, false, true);
?>