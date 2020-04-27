<?php
$message = htmlspecialchars($_POST['feedbackText']);
$db = new SQLite3('../../sqlite_db/ptf_feedback.db');
$db->query('CREATE TABLE IF NOT EXISTS Feedback (id INTEGER, message TEXT)');
$result = $db->query('SELECT max(id) FROM Feedback');
if ($message != ''){
while($row = $result->fetchArray()) {
    $db->query("INSERT INTO Feedback (id, message) VALUES ($row[0] + 1, '$message')");
}}
$db->close();
?>
