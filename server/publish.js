/**
 * Created by s_ on 15/11/26.
 */
if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user

    Meteor.publish("tasks", function () {
        console.log(this.userId);
        console.log(Tasks.find({
            $or: [
                { private: {$ne: true} },
                { owner: this.userId }
            ]
        }).fetch());
        this.ready();
        //return Tasks.find();
        return Tasks.find({
            $or: [
                { private: {$ne: true} },
                { owner: this.userId }
            ]
        });
    });
}