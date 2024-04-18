const { use } = require("chai");
const degreesOfSeparation = require("../aa06-degrees-of-separation-part-time/problems/01-degrees-of-separation");

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
    this.users[userID] = {'id': userID, 'name': name};//could just write name once and it would set both key and value;
    this.follows[userID] = new Set();
    return userID;
  }

  getUser(userID) {
    // Your code here
    // for (let user of Object.values(this.users)) {
    //   if (user.id === userID) {
    //     return user;
    //   }
    // }
    // return null;

    //alex's solution:
    if (this.users[userID]) {
      return this.users[userID];
    } else {
      return null;
    }
  }

  follow(userID1, userID2) {
    // Your code here
    // if (!this.getUser(userID1) || !this.getUser(userID2)) return false;

    // for (let [key, value] of Object.entries(this.follows)) {
    //   if (key == userID1) {
    //     value.add(userID2);
    //     return true;
    //   }
    // }

    //alex's solution:
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    // Your code here
    // for (let [key, value] of Object.entries(this.follows)) {
    //   if (key == userID) return value;
    // }

    //alex's solution:
    return this.follows[userID]
  }

  getFollowers(userID) {
    // Your code here
    // const followers = new Set();
    // for (let [key, value] of Object.entries(this.follows)) {
    //   if (value.has(userID)) {
    //     followers.add(Number(key));
    //   }
    // }
    // return followers;

    //alex's code:
    const followers = new Set();
    for (let key in this.follows) {
      if (this.follows[key].has(userID)) {
        followers.add(Number(key));
      }
    }
    return followers;
  }

  // getRecommendedFollows(userID, degrees) {
  // Your code here
  //   const stack = [[userID, 0]];
  //   const visited = new Set([userID]);
  //   const recommended = [];

  //   while (stack.length) {
    //     const [node, distance] = stack.pop();

    //     for (let neighbor of this.follows[node]) {
      //       if (!visited.has(neighbor)) {
        //         visited.add(neighbor);
        //         stack.push([neighbor, distance + 1])
        //       }
        //       if (!this.follows[userID].has(neighbor) && userID !== neighbor) {
          //         recommended.push(neighbor);
          //       }
          //     }
          //     if (distance === degrees) return recommended;
          //   }
          //   return null;
          // }

getRecommendedFollows(userID, degrees) {
  //alex's solution:
    let queue = [[userID]];

    let recommended = [];

    let visited = new Set();
    visited.add(userID);

    while(queue.length) {
      let currPath = queue.shift();
      let node = currPath[currPath.length - 1];

      if (currPath.length > degrees + 2) break;

      if (currPath.length > 2) recommended.push(node);

      for (let follow of this.follows[node]) {
        if (!visited.has(follow)) {
          visited.add(follow);

          queue.push([...currPath, follow]);
        }
      }
    }
    return recommended;
  }

  /*Savonna's solution
  getRecommendedFollows(userID, degrees) {
    const visited = new Set([userID]);
    const recommended = [];
    const queue = [[userID, 0]];
    while (queue.length > 0) {
      const [node, currentDegree] = queue.shift();
      if (currentDegree > degrees) {
        break;
      }
      const follows = this.getFollows(node);
      if (follows) {
        for (const follow of follows) {
          if (!visited.has(follow)) {
            visited.add(follow);
            queue.push([follow, currentDegree + 1])
          }
          if (!this.follows[userID].has(follow) && follow !== userID) {
            recommended.push(follow);
          }
        }
      };
    };
    return recommended
  } */
}

module.exports = SocialNetwork;
