# Grumblr Angular

## Day 1 - Controllers and Directives

### In-Class Starter Code

    $ git clone git@github.com:ga-dc/grumblr_angular.git

### In-Class Solution

    $ git checkout -b controllers-and-directives origin/controllers-and-directives
    $ bower install

### Homework Starter Code

    $ git checkout -b controllers-and-directives origin/controllers-and-directives

For homework tonight, please add CRUD functionality for comments to this application.

Start by adding some seed data to the grumbles controller: https://github.com/ga-dc/grumblr_angular/blob/controllers-and-directives/js/controllers/grumbles.js#L4

Then display the comments on the page using `ng-repeat`

Allow the user to toggle a new and edit form for comments. When the user submits the form, add or remove the comment from `this.grumbles`
in the controller.

### Homework Solution

    $ git checkout -b controllers-and-directives-with-comments origin/controllers-and-directives-with-comments

---

## Day 2 - Templating, Routing, and Services

Using the angular router requires a local server using http (not the `file://` protocol.)

    $ python -m SimpleHTTPServer

### In-Class Starter Code

    $ git checkout -b controllers-and-directives-with-comments origin/controllers-and-directives-with-comments
    $ bower install

### In-Class Solution

    $ git checkout -b templating-and-routing origin/templating-and-routing

### Homework Starter Code

    $ git checkout -b templating-and-routing origin/templating-and-routing

For homework tonight, please add 'Create', 'Read', and 'Delete' functionality
for comments.

* As a user, when I'm looking at a single grumble, I want to see the list of
comments sorted by date (most recent at the bottom) so I can see what others
have to say.
* As a user, I want to add a comment when I'm looking at a single grumble, so
I can share my thoughts with the world.
* As a user, I want to delete any comment, so I can remove things I didn't mean
to say, and to remove comments I think are dumb.

This is a tricky homework, but if you want, we've provided [some hints](hw_hints.md).

#### Bonus

Here are a few things you might try for Bonus:

* Create separate controllers for comments, rather than adding to the Grubmle
  show controller.
* Allow a user to sort comments by clicking e.g. different links above the list,
  or a select box.
* Add edit/update functionality for comments.

---

## Day 3 - Firebase

You may see the contents of wdidc.firebaseio.com updated in real-time here:

http://ga-dc.github.io/wdidc_firebaseio/

...or in the included `firebase.html` file.

### In-Class Starter Code

    $ git checkout -b templating-and-routing-with-comments origin/templating-and-routing-with-comments

### In-Class Solution

    $ git checkout -b firebase origin/firebase

---

## Day 3 - Custom Directives

### In-Class Starter Code

    $ git checkout -b templating-and-routing-with-comments origin/templating-and-routing-with-comments

### In-Class Solution

    $ git checkout -b custom-directives origin/custom-directives

### Homework Starter Code

    $ git checkout -b custom-directives origin/custom-directives-reused

### Homework Solution

    $ git checkout -b custom-directives-with-comments origin/custom-directives-reused-with-comments
