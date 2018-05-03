class Logger {
  constructor(debugLevel) {
    this.debugLevel=debugLevel;
  }
  debug(message){
   console.log(message);
  }
}

export default Logger;