const { localStorage } = window;

class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static clear(key) {
    if (key) {
      return localStorage.removeItem(key);
    }
    localStorage.clear();
  }
}

export default Storage;
