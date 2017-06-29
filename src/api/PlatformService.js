/**
 * Created by leiyao on 2017/5/15.
 */

import {doGet} from '../common/js/ApiUtils';

export const getPlatformList = (sort,filter,pageIndex)=>{
  return doGet('/api/get_platforms');
};
