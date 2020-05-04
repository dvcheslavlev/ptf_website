<?php
date_default_timezone_set('Europe/Moscow');
$message = htmlspecialchars($_POST['feedbackText']);
$db = new SQLite3('../../sqlite_db/ptf_feedback.db');
$db->query('CREATE TABLE IF NOT EXISTS Feedback (id INTEGER, date TEXT, message TEXT)');
$result = $db->query('SELECT max(id) FROM Feedback');
if ($message != ''){
while($row = $result->fetchArray()) {
    $date = date('d/m/Y h:i:s', time());
    $db->query("INSERT INTO Feedback (id, date, message) VALUES ($row[0] + 1, '$date', '$message')");
}}
$db->close();
?>
