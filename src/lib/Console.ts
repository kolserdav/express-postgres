
/**
 *  Console - log in console module
 */

 /**
  * Colors
  */
const Red = '\x1b[31m';
const Reset = '\x1b[0m';
const Bright = '\x1b[1m';
const Yellow = '\x1b[33m';
const Dim = '\x1b[2m';

/**
 * Interface of Console object
 */
interface Console {
  /**
   * Out information with prefix <INFO>
   * @param message 
   */
  info: (message: string) => void;
  /**
   * Out debug information with prefix <WARNING>
   * @param message 
   */
  warn: (message: string) => void;
  /**
  * Out error information with prefix <ERROR>
  * @param message 
  * @param err 
  * @param stdErr 
  */
  error: (message: string, err: Error, stdErr: Error) => void;
  getDate: () => string;
}

/**
 *  Object of log functions
 */
const Console: Console = {
  getDate: () => {
    const d = new Date();
    const date = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`;
    return date;
  },
  info: (message) => {
    const date = Console.getDate();
    console.info(`[${date}] <INFO> ${Bright}${message}${Reset}`);
  },
  warn: (message) => {
    const date = Console.getDate();
    console.info(`[${date}] <WARNING> ${Yellow}${message}${Reset}`);
  },
  error: (message, err, stdErr) => {
    const date = Console.getDate();
    console.error(`[${date}] <ERROR> ${Yellow}${message}`, `${Bright}Message: ${Red}${err.message}${Reset}`, stdErr.stack, `${Dim}Module answer: ${Reset}`, err.stack);
  }
};

export default Console;