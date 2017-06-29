/**
 * Created by leiyao on 2017/5/5.
 */

let AppContext = null;

/**
 * 初始化上下文,每次app启动,初始化一次
 * @param context
 */
export const initContext = (context) => {
  if (AppContext == null) {
    global.AppContext = AppContext = context;
  }

};

export const getContext = () => AppContext;
