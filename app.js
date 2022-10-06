const express      = require("express"),
ejs                = require('ejs'),
app                = express ();


const PORT = process.env.PORT || 9000

app.use(express.urlencoded({ extended: true}));
//Tell express the view Engine to use
app.set('view engine', 'ejs');

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));


// INDEX ROUTE
app.get("/", (req, res) => {
    res.render("index");

});

//the forM has to be pre filled with tHE data otherwise we wont be editing rather typing stuff over.
//1st find the actual blog we wanna edit in the edit route.
//using the id to find the blog to edit. 
// the redirect to the edit page then pass data {blog: foundBlog}
// we got to the edit page usong ejs to output it

// //EDIT ROUTE
// app.get("/blogs/:id/edit", function(req, res){
//    Blog.findById(req.params.id, function(err, foundBlog){
//         if (err){ 
//             res.redirect("/blogs");   
//         } else {
//             res.render("edit", {blog: foundBlog});
//         }
//    });
// });
// //find by id and update and redirect 
// //UPDATE ROUTE
// app.put("/blogs/:id", function(req, res){
//     req.body.blog.body = req.sanitize(req.body.blog.body)
//     // Blog.findByIdAndUpdate(id, newData, Callback function)
//     Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
//         if (err){
//             res.redirect("/blogs");
//         } else{
//             res.redirect("/blogs/" + req.params.id);
//         }
//     });
// });
// //DElete Route
// //FindByIdAndremove
// app.delete("/blogs/:id", function(req, res){
//    Blog.findByIdAndDelete(req.params.id, function(err){
//   if (err){
//     res.redirect("/blogs");
//   } else{
//     res.redirect("/blogs");
//   }
//    });
// });

app.listen(PORT, () => {
    console.log("German-Access By Psalmyjay, SERVER STARTED");
});