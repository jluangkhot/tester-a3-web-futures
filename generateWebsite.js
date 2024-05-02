const fs = require('fs');

// HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Your Website</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <main>
        <section>
            <h2>About Us</h2>
            <p>This is where you can write about your website.</p>
        </section>
    </main>

    <footer>
        <p>&copy; ${new Date().getFullYear()} Your Website</p>
    </footer>
</body>
</html>`;

// CSS template
const cssTemplate = `/* Basic CSS Reset */
body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
}

/* Your CSS styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}

header, nav, main, footer {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #007bff;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: #007bff;
}`;

// Create HTML file
fs.writeFile('index.html', htmlTemplate, (err) => {
    if (err) throw err;
    console.log('index.html created successfully!');
});

// Create CSS file
fs.writeFile('styles.css', cssTemplate, (err) => {
    if (err) throw err;
    console.log('styles.css created successfully!');
});
