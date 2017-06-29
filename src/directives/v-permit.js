/**
 * Created by leiyao on 2017/5/16.
 */

export default (el, binding, vnode)=> {
  // TODO 验证是否有权限
  //if (binding.value == '')
  if (true) {
    for (let i = 0; i < el.childNodes.length; i++) {
      el.removeChild(el.childNodes[i]);
      i--;
    }
    el.remove();
    el.style.display = 'none';
  }
}

