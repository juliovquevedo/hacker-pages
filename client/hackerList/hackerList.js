

Template.hackerList.helpers({
	'allHackers': function() {
		return Hackers.find({});
	}
});

Template.hackerList.onCreated(function subscribeToList() {
	Meteor.subscribe('Hackers');
})
