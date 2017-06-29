/**
 * Created by leiyao on 2017/5/4.
 */

function CustomError(code = 0, message = '未知异常') {
  this.code = code;
  this.message = message
  this.stack = (new Error).stack;
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

CustomError.codes = {
  'OK': '1',
  'Error': '2'
};

export default CustomError;
