const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Delivery</title>
      </head>
      <body>
        <header>
          <div>
            {children}
          </div>
        </header>
      </body>
    </html>
  );
}

module.exports = Layout;
