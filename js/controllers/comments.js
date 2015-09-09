(function() {
  angular.module('commentControllers', [])
  .controller('commentsController', function() {
    this.comments = [
      {authorName: "Renee", content: "I love this pic"},
      {authorName: "Darrell", content: "I hate this pic"},
      {authorName: "Cynthia", content: "How come I'm not in the pic?"},
      {authorName: "Larry", content: "Good eye for detail"}
    this.delete = function(index){
      this.comments.splice(index, 1)
    }
    this.reset = function(){
      this.authorName = ""
      this.content = ""
    }
    this.create = function(){
      this.comments.unshift({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
      })
      this.reset()
    }
    this.edit = function(index){
      var comment = this.comments[index]
      this.authorName = comment.authorName
      this.content = comment.content

    }
    this.update = function(index){
      var comment = this.comments[index]
      comment.authorName = this.authorName
      comment.content= this.content
    }
    this.formIsVisible = false
    this.showGrumble = true
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true
      this.reset()
    }
  });
})();
