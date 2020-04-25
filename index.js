var express    = require("express"),
	methodOverride = require("method-override"), // for allowing to listen put request on server
	                                             // side 9 html doesnt allow anything else except get/post.
	expressSanitizer = require("express-sanitizer"),
    app        = express(),
	bodyParser = require("body-parser"),
	mongoose   = require("mongoose");

var port = process.env.PORT || 3000;

//mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://godxpunk:NEphilem12@cluster0-zxnej.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
mongoose.set('useFindAndModify', false);

app.set("view engine","ejs");

//Restful Routes
app.get("/",(req,res)=>{
	res.redirect("/index");
});

app.get("/index",(req,res)=>{
	res.render("index");
});

app.get("/aboutUs",(req,res)=>{
	res.render("aboutUs");
});

app.get("/contactUs",(req,res)=>{
	res.render("contactUs");
});

app.get("/FAQs",(req,res)=>{
	res.render("FAQs");
});

app.get("/resourceCenter",(req,res)=>{
	res.render("resourceCenter");
});






app.listen(port,function(){
	console.log("Restful server is running");
});