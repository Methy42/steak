class Log {
  static logout(...args) {
    const nowTime = new Date();
    console.log(`[ ${ nowTime.getFullYear() }-${ nowTime.getMonth() + 1 }-${ nowTime.getDate() } ${ nowTime.getHours() }:${ nowTime.getMinutes() }:${ nowTime.getSeconds() } ]`, ...args);
  }

  static error(...args) {
    this.logout("[ error ]", ...args);
  }

  static warning(...args) {
    this.logout("[ warning ]", ...args);
  }

  static info(...args) {
    this.logout("[ info ]", ...args);
  }
}

module.exports = {
  Log
}