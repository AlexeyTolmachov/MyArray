function MyArrayProto() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return undefined;
    }
    const j = this[this.length -1];
    delete this[this.length -1]
    this.length--;
    return j;
  };

  this.shift = function () {
    if (this.length === 0) {
      return undefined;
    }
    const val = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return val;
  };

  this.unshift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  };

  this.concat = function () {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    return result;
  };

  this.reverse = function () {
    const funcArr = new MyArray();
    let index = 0;
    for (let j = 0; j < this.length; j++) {
      funcArr[j] = this[j];
    }
    for (let i = this.length - 1; i >= 0; i--) {
      this[index++] = funcArr[i];
    }
    return this;
  };

  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };

  this.map = function (func) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(func(this[i], i, this));
    }
    return result;
  };
  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if (result) {
        return true;
      }
    }
    return false;
  };

  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if (!result) {
        return false;
      }
    }
    return true;
  };
}

function MyArray(...args) {
  this.length = 0;
  this.push(...args);
}

MyArray.isMyArray = function (arg) {
  return arg instanceof MyArray;
};

MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(1, 2, 3, "test");
const myArr2 = new MyArray();
