/**
 * Created by leiyao on 2017/5/15.
 */

import Vue from 'vue';

/**
 * 事件总线
 * @usage:
 * EventBus.$emit('event',payload);
 * EventBus.$on('on',(payload)=>{});
 */
export const EventBus = new Vue();
