/**
 * Created by leiyao on 2017/5/18.
 */

import Vue from 'vue';
import * as StringFilter from './StringFilter';
import * as NumberFilter from './NumberFilter';
import * as DateFilter from './DateFilter';

Vue.filter('upper', StringFilter.upper);
Vue.filter('lower', StringFilter.lower);
Vue.filter('capitalize', StringFilter.capitalize);

Vue.filter('currency', NumberFilter.currency);

Vue.filter('formatDate', DateFilter.formatDate);

export default {
  ...StringFilter,
  ...NumberFilter,
  ...DateFilter
}
