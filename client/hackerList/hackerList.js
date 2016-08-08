Meteor.subscribe('Hackers');

Template.hackerList.helpers({
	'allHackers': function() {
		return Hackers.find({});
	}
});
