var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
  title:'Article One | murari meena',
  heading:'Article One',
  date:'Feb 12,2017',
  content:`
<p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>`
},
'article-two':{
  title:'Article Two | murari meena',
  heading:'Article Two',
  date:'Feb 12,2017',
  content:`
  <p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>`
},
'article-three':{
  title:'Article One | murari meena',
  heading:'Article One',
  date:'Feb 12,2017',
  content:`
<p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>
  <p>
  this is my second article.
  </p>`
}
};


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
<head>
  <title>${title}</title>
  <link href="/ui/style.css" rel="stylesheet"/>
  <meta name="viewport" content="width-device-width initial-scale-1"/>
</head>
  
<body>
  <div class="container">
  <div>
    <a href="/">Home</a>
  </div>
  <hr/>
  <h3>${heading}</h3>
  <div>${date}</div>
  
  <div>
    ${content}
  </div>
  </div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
