/**
 * Created by s_ on 15/11/26.
 */

Template.task.events({
    "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("setChecked", this._id, ! this.checked);
        //Tasks.update(this._id, {
        //  $set: {checked: ! this.checked}
        //});
    },
    "click .delete": function () {
        //Tasks.remove(this._id);
        Meteor.call('deleteTask', this._id);
    },
    "click .toggle-private": function () {
        Meteor.call("setPrivate", this._id, ! this.private);
    }
});
Template.task.helpers({
    isOwner: function () {
        return this.owner === Meteor.userId();
    }
});