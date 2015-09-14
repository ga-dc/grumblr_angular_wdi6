(function() {
  app = angular.module('grumbleControllers',[]);
  app.controller('grumblesController', function() {
    this.grumbles = [{ comments: [{ id: 0, content: "This is no comment 0" }], "id":100,"authorName":"Arash","content":"Every good boy does fine!","title":"Awesome job","photoUrl":""},
      { comments: [{ id: 1, content: "This is some contents 1" }], "id":101,"authorName":"Arash","content":"To be or not to be","title":"You love me?","photoUrl":""},
      { comments: [{ id: 2, content: "This is some contents 2"}], "id":102,"authorName":"Arash","content":"I need more time","title":"Look at me","photoUrl":""},
      { comments: [{ id: 3, content: "This is some contents 3" }], "id":103,"authorName":"Arash","content":"I like listening to Mozart","title":"Yeah","photoUrl":""},
      { comments: [{ id: 4, content: "This is some contents 4" }], "id":104,"authorName":"Bach","content":"You are awesome","title":"St.Mathew Passion","photoUrl":""},
      { comments: [{ id: 5, content: "This is some contents 5" }], "id":105,"authorName":"Arash","content":"If you have question just ask!","title":"A wise song","photoUrl":""}]
    this.delete = function(index){
      this.grumbles.splice(index, 1)
    }
    this.reset = function(){
      this.title = ""
      this.authorName = ""
      this.content = ""
      this.photoUrl = ""
    }
    this.create = function(){
      this.grumbles.unshift({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      })
      this.reset()
    }