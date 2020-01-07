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
    return this.filter(collection, function(args) {
      return !test.apply(this, args);
    });
  }

  reduce(collection, iterator, accumulator) {
    this.each(collection, (value, _index, collection) => {
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
    if (callback === undefined) return true;
    return this.reduce(
      collection,
      (acc, input) => {
        return Boolean(callback(input) && acc);
      },
      true
    );
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj, ...args) {
    this.each(args, (element) => {
      LoScore.prototype.each(element, (value, key) => {
        obj[key] = value;
      });
    });
    return obj;
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let isCalled = false;
    let answer = function() {
      if (!isCalled) {
        answer = func();
        isCalled = true;
        return answer;
      }
      return answer;
    };
    return answer;
  }

  memoize(func) {
    // couldn't solve in time without checking my precourse code
    const newFunc = {};
    return function(args) {
      if (newFunc[JSON.stringify(args)] === undefined) {
        const key = JSON.stringify(args);
        const value = func.apply(this, args);
        newFunc[key] = value;

        return value;
      }
    };
  }

  invoke(collection, functionOrKey) {
    // couldn't solve in time without checking my precourse code
    if (typeof functionOrKey == "function") {
      return this.map(collection, (value) => {
        return functionOrKey.apply(value);
      });
    } else if (typeof functionOrKey == "string") {
      return this.map(collection, (value) => {
        return value[functionOrKey].apply(value);
      });
    }
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
