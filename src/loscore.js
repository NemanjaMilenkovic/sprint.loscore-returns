// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      let found = false;
      for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          found = true;
        }
      }
      if (!found) {
        result.push(array[i]);
      }
    }
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    const result = [];
    this.each(collection, (element) => result.push(iteratee(element)));
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    return this.filter(collection, function() {
      return !test.apply(this, arguments);
    });
  }

  reduce(collection, iterator, accumulator) {
    this.each(collection, function(value, index, collection) {
      if (accumulator === undefined) {
        accumulator = collection[0];
        iterator(collection[1], value);
      } else {
        accumulator = iterator(accumulator, value);
      }
    });

    return accumulator;
  }

  every(collection, callback) {
    // return this.reduce(collection, function(result) {
    //   if (result && callback) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    if (callback === undefined) return true;
    let flag = true;
    this.reduce(collection, function(acc, input) {
      if (!callback(input)) {
        flag = false;
      }
    });
    return flag;

    // if(this.reduce(collection, function(input) {
    //   callback(input)
    // }))

    /*
`_.every` - determines if all the elements pass the given truth test. 
Returns a boolean, takes in a callback (the test). It should use `_.reduce`.
*/
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
