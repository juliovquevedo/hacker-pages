Hackers = new Mongo.Collection("Hackers");

if(Meteor.isServer)
{
	console.log("I'm the server");
	Meteor.publish('Hackers', function HackersPublish(){
			return Hackers.find({'allegiance': "White Hat"});
	});
}