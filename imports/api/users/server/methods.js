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
    tests.isConnected();

    Meteor.users.update(this.userId, {
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

  'users.name_by_id': function({ id }) {
    tests.isConnected();

    const user = Meteor.users.findOne(id);

    if (!user) {
      throw new Meteor.Error('404', 'Utilisateur non trouvé');
    }

    return user.username;
  }
});
