
if (Meteor.isClient) {
  Meteor.subscribe("tasks");
  // This code only runs on the client
  Template.main.helpers({
    tasks: function(){
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } else {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
      }
    },
    hideCompleted: function () {
      return Session.get("hideCompleted");

    },
    incompleteCount: function () {
      return Tasks.find({checked: {$ne: true}}).count();


    }
  });

  Template.main.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;
      Meteor.call("addTask", text);
      // Insert a task into the collection
      //Tasks.insert({
      //  text: text,
      //  createdAt: new Date(),            // current time
      //  owner: Meteor.userId(),           // _id of logged in user
      //  username: Meteor.user().username  // username of logged in user
      //});

      // Clear form
      event.target.text.value = "";
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

  Template.main.onCreated(function(){console.log('template main onCreated');});
  Template.main.onRendered(function(){console.log('template main onRendered');});
  Template.main.onDestroyed(function(){console.log('template main onDestroyed');});

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

