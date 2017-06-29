/**
 * Created by leiyao on 2017/5/18.
 */

export const currency = (num,fixed=2)=>{
  let iNum = parseFloat(num);
  if (isNaN(iNum)){
    iNum = 0;
  }
  return `$${iNum.toFixed(fixed)}`;
};
