var http = require("http");

var books = {"Moby Dick": "a book about fishing"}

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write(books.toString());
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(8000);
console.log("Server is listening");