import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.users.remove({});

  if(Meteor.users.find().fetch().length === 0) {
    console.log("Adding admin accounts");

    Accounts.createUser({
      username:"admin",
      email: "admin@brandlabmedia.com",
      password: "admin",
      profile: {
        name: "Admin Joe",
        agent: true,
        permissions: [
          'all'
        ]
      }
    })
  }
});

Meteor.methods({

})