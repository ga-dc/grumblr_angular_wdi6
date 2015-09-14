var app = angular.module("grumblr");
app.controller("grumblesController", function(){
  this.grumbles = [
    {
      title: "How I became the NFL MVP",
      author: "Kirk Cousins",
      content: "I am the greatest QB ever. Michigan State rules. Go Spartans!",
      photoUrl: "http://static.wixstatic.com/media/d46c81_24d1a1c7ae9045a38a731df496a7a692.jpg",
      comments: [{commentBody: "first!", commentAuthor: "joe"}, {commentBody: "3rds#!##!", commentAuthor: "dan"}]
    },
    {
      title: "Why I'll never sell the team",
      author: "Dan Snyder",
      content: "Because I don't want to. And because I said so.",
      photoUrl: "http://rs201.pbsrc.com/albums/aa88/modlbldralex/Football/newredskinlogo.jpg~c200",
      comments: [{commentBody: "this is a comment", commentAuthor: "kirk"}, {commentBody: "i don't like dan snyder", commentAuthor: "colt"}, {commentBody: "he's worse than jerry jones", commentAuthor: "rg3"}]
    },
    {
      title: "I love lamp",
      author: "Ron Burgundy",
      content: "Scotchy Scotch Scotch.",
      photoUrl: "http://www.gannett-cdn.com/-mm-/ac1394dbdcca6a36cbf486633b129cd813095ac3/r=x404&c=534x401/local/-/media/USATODAY/GenericImages/2013/06/04/1370366266000-Will-Ferrell-1306041347_4_3.jpg",
      comments: [{commentBody: "stay classy san diego", commentAuthor: "ron"}, {commentBody: "that escalated quickly", commentAuthor: "ron"}, {commentBody: "lamp", commentAuthor: "brick"}]
    },
    {
      title: "I can't think of another blog title",
      author: "John Doe",
      content: "Some kind of ipsum goes here but I don't want to search for any. But here's a picture of a Toyota Ipsum.",
      photoUrl: "http://onlytruecars.com/data_images/models/toyota-ipsum/toyota-ipsum-02.jpg",
      comments: [{commentBody: "that car is awesome", commentAuthor: "bob"}, {commentBody: "no it's not", commentAuthor: "sally"}]
    },
    {
      title: "Angular is Awesome",
      author: "Andy Kim",
      content: "I'm so pumped to be teaching Angular today!",
      photoUrl: "http://media.giphy.com/media/yht1UwF4Bko92/giphy.gif",
      comments: [{commentBody: "something something javascript", commentAuthor: "jimbob"}, {commentBody: "backbone is better", commentAuthor: "jimbob"}]
    }
  ];
  this.formIsVisible = false;
  this.toggleForm = function(){
    if (this.formIsVisible){
      this.formIsVisible = false;
    } else {
      this.formIsVisible = true;
    }
  };
  this.create = function(){
    var grumble = {};
    grumble.title = this.newTitle;
    grumble.author = this.newAuthor;
    grumble.content = this.newContent;
    grumble.photoUrl = this.newPhotoUrl;
    this.grumbles.unshift(grumble);
    this.clearNewForm();
  };
  this.edit = function(index){
    grumble = this.grumbles[index];
    this.title = grumble.title;
    this.author = grumble.author;
    this.content = grumble.content;
    this.photoUrl = grumble.photoUrl;
  };
  this.update = function(index){
    this.grumbles[index].title = this.title;
    this.grumbles[index].author = this.author;
    this.grumbles[index].content = this.content;
    this.grumbles[index].photoUrl = this.photoUrl;
  };
  this.delete = function(index){
    this.grumbles.splice(index, 1);
  };
  this.clearNewForm = function(){
    this.newTitle = "";
    this.newAuthor = "";
    this.newContent = "";
    this.newPhotoUrl = "";
  };
  this.createComment = function(index){
    var comment = {};
    comment.commentBody = this.newCommentBody;
    comment.commentAuthor = this.newCommentAuthor;
    this.grumbles[index].comments.unshift(comment);
  };
  this.editComment = function(parent, index){
    comment = this.grumbles[parent].comments[index];
    this.commentBody = comment.commentBody;
  };
  this.updateComment = function(parent, index){
    this.grumbles[parent].comments[index].commentBody = this.commentBody;
  };
  this.deleteComment = function(parent, index){
    this.grumbles[parent].comments.splice(index, 1);
  }

})
