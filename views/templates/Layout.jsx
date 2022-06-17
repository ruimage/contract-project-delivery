const React = require('react');
const Navbar = require('../NavBar');
const NavBar = require('../NavBar');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Delivery</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/login.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/registration.css" />
        <link rel="stylesheet" href="/css/cards.css" />
      </head>
      <body className="back">
        <header>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossOrigin="anonymous"
          />
        </header>
        <main>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Layout;
