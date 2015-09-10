var app = angular.module( "grumblr" );

app.controller("grumblrController", function(){
  this.grumbles = [
    {title: "le Title",
    authorName: "Bernise",
    content: "Bagguettes are exquisite",
    photoUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO_Azpq0g22jl-y42CLnyIePDU2vVI8PTMMg-a-GnRJk4Fu3mT9Q"},

    {title: "la Teetlay",
    authorName: "Bernadette",
    content: "Beetlejuice, Beetlejuice",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMwr28PiU1zXTjDPT-IhvKABuoFfCsYC_uryuYOLbDRcJO0xB"},

    {title: "su Tootle",
    authorName: "Beatrice",
    content: "Batteries for days!",
    photoUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqcgpOWNU-FyjqWqcYEDjqfA7VJJsTrlxdK3xkPYq6T7k8ums8"},
  ]

  this.formIsVisible = false;

  this.toggleForm = function(){
    if(this.formIsVisible){
      this.formIsVisible = false
    }
    else{
      this.formIsVisible = true
    }
  };

  this.createGrumble = function(){
    this.grumbles.unshift({title: this.title, authorName: this.authorName, content: this.content, photoUrl: this.photoUrl});
  };

  this.updateGrumble = function(index){
    this.grumbles[ index ] = this.updatedContent;
  };

  this.currentGrumble = function(index){
    this.updatedContent = this.grumbles[ index ]
  };


  this.commenterIsVisible = false;

  this.toggleComment = function(){
    if(this.commenterIsVisible){
      this.commenterIsVisible = false
    }
    else{
      this.commenterIsVisible = true
    }
  };


  this.createComment = function(){
    this.updatedContent = this.grumbles.comment[ index ]
  };
})
