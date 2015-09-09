(function() {
  angular.module('commentsControllers', [])
  .controller('commentsController', function() {

    this.comments = [{"authorName":"Tester","content":"Test Data"},{"authorName":"Tester 2", "content":"Testing data again"}];

    this.delete = function(index){
      this.comments.splice(index, 1);
    },
    this.reset = function(){
      this.authorName = "";
      this.content = "";
    },
    this.create = function(){
      this.comments.unshift({
        authorName: this.authorName,
        content: this.content
      });
      this.reset();
    },
    this.edit = function(index){
      var comment = this.comments[index];
      this.authorName = comment.authorName;
      this.content = comment.content;
    },
    this.update = function(index){
      var comment = this.comments[index];
      comment.authorName = this.authorName;
      comment.content = this.content;
    },
    this.formIsVisible = false;
    this.showComment = true;
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true;
      this.reset();
    };
  });
})();
