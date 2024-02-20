<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <button type="button" onclick="validateLogin()">Login</button>
    </form>

    <script>
        function validateLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Here you can add your authentication logic
            // For simplicity, let's just check if the username and password are not empty
            if (username.trim() === "" || password.trim() === "") {
                alert("Please enter both username and password.");
            } else {
                alert("Login successful! Welcome, " + username + "!");
                // Redirect or perform any other action upon successful login
            }
        }
    </script>
</body>
</html>
