const express = require('express')
const app = express()
var port =  process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello from D&C \n all the best for Task')
  res.close();
})

app.get('/getEvents', function (req, res) {
  var JSONData =  {"Events":[
  
    {
      "type": "workshop",
      "title": "Introduction to Building a Design System",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "Rise Mumbai Lower Parel",
      "timestamp":1590382800
    },
    {
      "type": "webinar",
      "title": "Improving Design-Developer Collaboration",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "1.5hr",
      "timestamp":1590433200
    },
    {
      "type": "workshop",
      "title": "Introduction to Building a Design System",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "ISDI Mumbai",
      "timestamp":1590778800
    },
    {
      "type": "workshop",
      "title": "Building AR Apps with SparkAR by Facebook",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "ACE Malad",
      "timestamp":1590043272
    },
    {
      "type": "webinar",
      "title": "Dart Basics and Flutter",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "2hrs",
      "timestamp":1590043272
    },
    {
      "type": "workshop",
      "title": "Building REST API Using NODEJS",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "ACE Malad",
      "timestamp":1590043272
    },
    {
      "type": "webinar",
      "title": "Version Controlling Using GIT",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "3hrs",
      "timestamp":1590043272
    }
    ]
    };

    res.json(JSONData);
  })
 
app.listen(port,function(req,res){

console.log("Running...");

});
