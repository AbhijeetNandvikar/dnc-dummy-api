const express = require('express')
var cors = require('cors')
const app = express()

var port =  process.env.PORT || 3000;


app.use(cors())
 
app.get('/', function (req, res) {
  res.sendFile('./index.html',{ root: __dirname });

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
    },
     {
      "type": "webinar",
      "title": "End of Nodejs - Deno ?",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "2hrs",
      "timestamp":1590660000
    },
    {
      "type": "workshop",
      "title": "Building PWA",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "WeWork Raheja Platinum",
      "timestamp":1591372800

    },
    {
      "type": "webinar",
      "title": "Lets Explore Unreal Engine",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1591437600
    },
    {
      "type": "workshop",
      "title": "Design Systems and Future of Design",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "location": "Insider Lowerparel",
      "timestamp":1591549200

    },
    {
      "type": "webinar",
      "title": "Lets Explore Flutter Web",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1591716600
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1591809300
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1591873200
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1592046000
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1592132400
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1592218800
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1592305200
    },
    {
      "type": "webinar",
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis egestas pretium aenean. Amet nulla facilisi morbi tempus. Adipiscing enim eu turpis egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Tristique risus nec feugiat in fermentum. Tortor vitae purus faucibus ornare. Porta nibh venenatis cras sed felis. Nunc sed velit dignissim sodales ut.",
      "duration": "4hrs",
      "timestamp":1592391600
    },
    ]
    };

    res.json(JSONData);
  })
 
app.listen(port,function(req,res){

console.log("Running...");

});
