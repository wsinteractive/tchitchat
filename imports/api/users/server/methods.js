import { Meteor } from 'meteor/meteor';
import { check  } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import tests from '/imports/utils/tests';


Meteor.methods({
  'users.update': function ({
    username,
    age,
    city,
    email,
    gender,
  }) {
    check(username, String);
    check(email,    String);
    tests.connected();

    Meteor.users.update({ _id: Meteor.userId() }, {
      $set: {
        age,
        city,
        gender,
      },
    });

    Accounts.setUsername(this.userId, username);

    const oldEmail = Meteor.user().emails[0].address;
    if (oldEmail !== email) {
      Accounts.addEmail(this.userId, email);
      Accounts.removeEmail(this.userId, oldEmail);
    }

  },
});
