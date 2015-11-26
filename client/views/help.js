/**
 * Created by s_ on 15/11/26.
 */
if(Meteor.isClient){
    Template.help.events({
        'click a':function(e){
            e.preventDefault();
            Router.go('main');
        }
    })
}