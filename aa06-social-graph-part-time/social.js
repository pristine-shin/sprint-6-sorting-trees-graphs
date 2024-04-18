const { use } = require("chai");

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
    const followers = new Set();
    for (let [key, value] of Object.entries(this.follows)) {
      if (value.has(userID)) {
        followers.add(Number(key));
      }
    }
    return followers;
  }

 getRecommendedFollows(userID, degrees) {
    // Your code here
    const stack = [[userID, 0]];
    const visited = new Set([userID]);
    const recommended = [];

    while (stack.length) {
      const [node, distance] = stack.pop();

      for (let neighbor of this.follows[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push([neighbor, distance + 1])
        }
        if (!this.follows[userID].has(neighbor)) {
          recommended.push(neighbor);
        }
      }
      if (distance === degrees) return recommended;
    }
    return null;
  }
}

module.exports = SocialNetwork;
