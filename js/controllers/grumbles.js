(function() {
    app = angular.module('grumbleControllers', []);
    app.controller('grumblesController', ['Grumble', function(Grumble) {
        this.grumbles = Grumble.query()
        this.delete = function(index) {
            this.grumbles.splice(index, 1)
        }
        this.reset = function() {
            this.title = ""
            this.authorName = ""
            this.content = ""
            this.photoUrl = ""
        }
        this.create = function() {
            this.grumbles.unshift({
                title: this.title,
                authorName: this.authorName,
                content: this.content,
                photoUrl: this.photoUrl
            })
            this.reset()
        }
        this.edit = function(index) {
            var grumble = this.grumbles[index]
            this.title = grumble.title
            this.authorName = grumble.authorName
            this.photoUrl = grumble.photoUrl
            this.content = grumble.content
        }
        this.update = function(index) {
            var grumble = this.grumbles[index]
            grumble.title = this.title
            grumble.authorName = this.authorName
            grumble.photoUrl = this.photoUrl
            grumble.content = this.content
        }
        this.formIsVisible = false
        this.showGrumble = true
        this.toggleForm = function() {
            this.formIsVisible = this.formIsVisible ? false : true
        }
    }]);

    app.controller('commentsController', function() {

        this.create = function(grumble) {
            grumble.comments.unshift({
                content: grumble.newCommentContent
            });
            grumble.newCommentContent = "";
        }
    })
})();
