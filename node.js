const http = require("http")
const hostname = '127.0.0.1'
const port = 3000;
const students = ["Ali", "latchy", "anfii"]

const server = http.createServer((req, res)=> {
  // request, response
  // res.statusCode = 200; 
    // positive response
  // res.setHeader("content-type", "text/plain")
  // setting a header

  // console.log(req.method, req.url)

  // res.end("hello world")
  if (req.method === "GET" && req.url === "/"){
    console.log("matching students")
  } else if (req.method === "GET" && req.url === "/students"){
  console.log("getting students")
  // how to actually return data:
  res.writeHead(200, {"Content-Type": "application/json"})
  res.write(JSON.stringify(students))
} else if (req.method === "POST" && req.url === "/students"){
  console.log("creating students")
} else {
  console.log("route not found")
}
  res.end()
})
// if you want to change any of this you need to restart server
// all this in canvas notes
// this is WAY too messy - potential for bugs every time you write a route, cant just use switch to tidy
// need a framework to handle it and make dynamic routing easier - EXPRESS!


server.listen(port, hostname, ()=> {
  console.log(`server running on ${hostname}:${port}`)
})


// this whole thing creates a server
// like running rails s

// we need to configure routes to handle the requests from server

// can query in postman and see results running in terminal if server is running