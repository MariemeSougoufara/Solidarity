<?php
// Obtenez les données envoyées depuis le formulaire
$data = json_decode(file_get_contents("php://input"));

// Vérifiez les informations de connexion
$username = $data->username;
$password = $data->password;

// Remplacez cette logique avec votre propre vérification d'authentification
$validUsernames = ["mareme", "modou"];
$validPasswords = ["passer1", "passer2"];

if (in_array($username, $validUsernames) && in_array($password, $validPasswords)) {
    // Authentification réussie
    $response = array(
        "success" => true,
        "message" => "Authentification réussie"
    );
} else {
    // Authentification échouée
    $response = array(
        "success" => false,
        "message" => "Nom d'utilisateur ou mot de passe incorrect"
    );
}

// Renvoyer la réponse JSON
header("Content-Type: application/json");
echo json_encode($response);
?>
