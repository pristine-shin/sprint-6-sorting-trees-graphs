// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    let userID = this.currentID;
    const newUser = {'id': userID, 'name': name};
    this.users[userID] = newUser;
    this.follows[userID] = new Set();
    return userID;
  }

  getUser(userID) {
    // Your code here
    for (let user of Object.values(this.users)) {
      if (user.id === userID) {
        return user;
      }
    }
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (!this.getUser(userID1) || !this.getUser(userID2)) return false;

    for (let [key, value] of Object.entries(this.follows)) {
      if (key == userID1) {
        value.add(userID2);
        return true;
      }
    }
  }

  getFollows(userID) {
    // Your code here
    for (let [key, value] of Object.entries(this.follows)) {
      if (key == userID) return value;
    }
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

let socialNetwork = new SocialNetwork();

userID1 = socialNetwork.addUser('John Doe');
userID2 = socialNetwork.addUser('Jane Doe');

console.log(socialNetwork.users);

console.log(userID1); // 1
console.log(userID2); // 2

user1 = socialNetwork.getUser(1);
user2 = socialNetwork.getUser(2);
user3 = socialNetwork.getUser(3);

console.log(user1); // 'John Doe'
console.log(user2); // 'Jane Doe'
console.log(user3);      // null

module.exports = SocialNetwork;
