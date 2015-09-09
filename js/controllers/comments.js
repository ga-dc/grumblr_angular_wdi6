(function() {
    angular.module('commentControllers', [])
        .controller('commentsController', function() {
            this.comments = [{
                "id": 667,
                "authorName": "Bob",
                "content": "Okay"
            }, {
                "id": 668,
                "authorName": "Bill",
                "content": "What ever."
            }, {
                "id": 669,
                "authorName": "John",
                "content": "That doesn't make sense."
            }, {
                "id": 670,
                "authorName": "Barry",
                "content": "Original..."
            }, {
                "id": 671,
                "authorName": "Will",
                "content": "..."
            }, {
                "id": 672,
                "authorName": "Kevin",
                "content": "What?"
            }]
            this.delete = function(index) {
                this.comments.splice(index, 1)
            }
            this.reset = function() {
                this.authorName = ""
                this.content = ""
            }
            this.create = function() {
                this.comments.unshift({
                    authorName: this.authorName,
                    content: this.content
                })
                this.reset()
            }
            this.edit = function(index) {
                var comment = this.comments[index]
                this.authorName = comment.authorName
            }
            this.update = function(index) {
                var comment = this.comments[index]
                comment.authorName = this.authorName
                comment.content = this.content
            }
            this.formIsVisible = false
            this.showComment = true
            this.toggleForm = function() {
                this.formIsVisible = this.formIsVisible ? false : true
                this.reset()
            }
        });
})();
