# Hints for Homework

## Day 2: Create / Read / Delete for Comments

1. You'll need a new factory for comments.
  * Recall that comments are a nested resource, so the path looks like:
    `/grumbles/:grumble_id/comments`
  * Don't forget to load any new dependencies into your app.
2. Since comments exist only within the 'show' view, you can add the comment
   functionality to the "grumble/show" controller. You don't need any new views,
   routes, or controllers.
3. You will need to update the appropriate grumble controller to fetch the
   comments for the current grumble.
  * Remember that the `Grumble.get` is async, so any actions that depend on the
    grumble needs to be in a callback.
  * You can pass an argument to Comment.query to specify any needed parameters
    in the URL.
4. You'll need to update the view to render the comments you've fetched.
5. You'll need a method on the grumble show controller to handle creation.
6. You'll need a method on the grumble show controller to handle deletion.
   * Recall that `ng-click` can pass an argument to methods called on click
     (e.g. the current comment)
