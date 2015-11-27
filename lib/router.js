/**
 * Created by s_ on 15/11/26.
 */
Router.configure({
    layoutTemplate: 'layoutApp',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    onBeforeAction: function () {
        console.log('a onBeforeAction in Router');
        if(this.ready()){
            console.log('Router.onBeforeAction is ready')
        }
        this.next();
    },
    waitOn: function () {
        this.wait(Meteor.subscribe("tasks"));
        console.log('a waitOn in Router');
    }
});
Router.route('/main', {
    path:'/main',
    onBeforeAction: function () {
        console.log('a onBeforeAction in main');
        this.next();
    },
    subscriptions: function() {
        console.log('a subscriptions in main');

        // add the subscription to the waitlist
        //this.subscribe('item', this.params._id).wait();
    },
    data: function () {
        console.log('a data in main');
        return {};
    },
    onRun: function () {
        console.log('a onRun in main');
        this.next();
    },
    onRerun: function () {
        console.log('a onRerun in main');
        this.next();
    },
    onAfterAction: function () {
        console.log('a onAfterAction in main');
    },
    //onStop: function () {
    //    console.log('a onStop in main');
    //},
    waitOn: function () {

        console.log('a waitOn in main');
        return ;

    },
    template: 'main'
});
Router.route('/help',{
    template:'help'
})
Router.route('/',{
    template:'main'
})
