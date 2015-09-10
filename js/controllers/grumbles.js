var app = angular.module("grumble")
app.controller("grumblesController", function(){
  this.grumbles = [
    { title: "My First Post",
    authorName: "Stephen Gheysens",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.",
    photo_url: "www.fillmurray.com/300/300",
    id: 1 },
    { title: "My Second Post",
    authorName: "Stephen Again",
    content: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.",
    photo_url: "www.fillmurray.com/300/300",
    id: 2 },
    { title: "My Third Post",
    authorName: "Someone Else",
    content: "Lorem ipsum dolor sit amet, integer nec odio. Praesent libero. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.",
    photo_url: "www.fillmurray.com/300/300",
    id: 3 }
  ];

  var idCount = 3;

  this.formIsVisible = false;
  this.toggleForm = function(){
    if(this.formIsVisible == false)
      this.formIsVisible = true;
    else
      this.formIsVisible = false;
  };

  this.createGrumble = function(){
    idCount++;
    this.grumbles.unshift(
      {
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photo_url: this.photo_url,
        id: idCount
      }
    );
  };

  this.updateGrumble = function(index){
    this.grumbles[index] =
    {
      title: this.updatedTitle,
      authorName: this.updatedAuthor,
      content: this.updatedContent,
      photo_url: this.photo_url
    };
  };

  this.currentComment = function(index){
    this.updatedTitle = this.grumbles[index].title;
    this.updatedAuthor = this.grumbles[index].authorName;
    this.updatedContent = this.grumbles[index].content;
  }

  this.deleteComment = function(index){
    this.grumbles.splice(index, 1);
  }

})

app.controller("commentsController", function(){
  this.comments = [
    { content: "here's a comment",
    grumble_id: 1 },
    {content: "here's another comment",
    grumble_id: 1 },
    {content: "here's a final comment",
    grumble_id: 2 },
  ];

  this.createComment = function(){
    this.comments.unshift(
      {
        content: this.content,
        // grumble_id: this.grumble_id;
      }
    );
  };

  // this.updateComment = function(index){
  //   this.comments[index] =
  //   {
  //     title: this.updatedTitle,
  //     authorName: this.updatedAuthor,
  //     content: this.updatedContent,
  //     photo_url: this.photo_url
  //   };
  // };
  //
  // this.currentComment = function(index){
  //   this.updatedTitle = this.comments[index].title;
  //   this.updatedAuthor = this.comments[index].authorName;
  //   this.updatedContent = this.comments[index].content;
  // }

})
