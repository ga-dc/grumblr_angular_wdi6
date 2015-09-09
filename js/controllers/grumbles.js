var app = angular.module("grumblr");

app.controller("grumblesController", function(){
  this.grumbles = [
    {
      title: "I'm upset!",
      authorName: "Donald Trump",
      content: "Poor people suck",
      photoUrl: "http://placebear.com/300/300",
      comments: ["Get em Don!", "You're crazy!"]
    },
    {
      title: "This is no fun!",
      authorName: "Hilary Clinton",
      content: "I should be able to delete any emails I want to!",
      photoUrl: "http://placebear.com/300/300",
      comments: ["Nice!", "Boring!"]
    },
    {
      title: "My movies are actually good",
      authorName: "Nic Cage",
      content: "Haven't you seen The Wicker Man?",
      photoUrl: "http://www.placecage.com/300/300",
      comments: ["Neat!", "Cool!"]
  },
  {
    title: "Seriously, they are great",
    authorName: "Nic Cage",
    content: "My accent in ConAir rocked!",
    photoUrl: "http://www.placecage.com/gif/300/300",
    comments: ["Shut up cage", "Your movies suck!"]
  },
  {
    title: "Listen to me!",
    authorName: "Nic Cage",
    content: "Sean Connery loves me!",
    photoUrl: "http://www.placecage.com/300/300",
    comments: ["Get outta here!", "Gone in 60 Seconds was dope!"]
  }
];
  this.formVisible = false;
  this.toggleForm = function(){
    if(this.formVisible === false){
      this.formVisible = true;
    }
    else{
      this.formVisible = false;
    }
  };
  this.createGrumble = function(info){
    this.grumbles.unshift(info);
    this.data = {};
    this.formVisible = false;
  };

  this.updateGrumble = function(index, data){
    this.grumbles[index] = data;
  };

  this.currentGrumble = function(index){
    this.updatedData = this.grumbles[index];
  };
  this.deleteGrumble = function(index){
    this.grumbles.splice(index, 1);
  };

  this.updateComment = function(grumbleIndex, commentIndex){
    console.log(this.updatedComment)
    this.grumbles[grumbleIndex].comments[commentIndex] = this.updatedComment;
  };
  this.currentComment = function(grumbleIndex, commentIndex){
    this.updatedComment = this.grumbles[grumbleIndex].comments[commentIndex];
  }
});
