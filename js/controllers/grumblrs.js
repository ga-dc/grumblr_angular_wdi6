var app = angular.module( "grumblr" );

app.controller( "grumblrsController", function(){
  this.grumblrs = [
    {title: "Ricky", authorName: "Bobby", content: "brooo", photoUrl: "http://www.fillmurray.com/200/300"},
    {title: "Ricky", authorName: "Bobby", content: "brooo", photoUrl: "http://www.fillmurray.com/200/300"},
    {title: "Ricky", authorName: "Bobby", content: "brooo", photoUrl: "http://www.fillmurray.com/200/300"},
    {title: "Ricky", authorName: "Bobby", content: "brooo", photoUrl: "http://www.fillmurray.com/200/300"}
  ];


  this.formIsVisible = false;

  this.toggleForm = function(){
    console.log('click')
    if( this.formIsVisible == false ){
      this.formIsVisible = true;
    }else{
      this.formIsVisible = false;
    }
  }

  this.create = function(){
    this.grumblrs.unshift({title: this.title, authorName: this.authorName, content: this.content, photoUrl: this.photoUrl});
    this.title = "";
    this.authorName = "";
    this.content = "";
    this.photoUrl = "";
  }

  this.updateGrumblr = function(index){
    this.grumblrs[index].title = this.updatedTitle;
    this.grumblrs[index].authorName = this.updatedAuthorName;
    this.grumblrs[index].content = this.updatedContent;
    this.grumblrs[index].photoUrl = this.updatedPhotoUrl;
  }

  this.currentGrumblr = function(index){
    this.updatedTitle = this.grumblrs[index].title;
    this.updatedAuthorName = this.grumblrs[index].authorName;
    this.updatedContent = this.grumblrs[index].content;
    this.updatedPhotoUrl = this.grumblrs[index].photoUrl;
  }

  this.delete = function(index){
    this.grumblrs.split(index, 1);
  }
})
