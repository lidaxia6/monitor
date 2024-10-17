import collect from './collect';

let userSetExposureArr = [];

// 设置需要曝光的 dom id
export function userSetExposure(arr) {
  userSetExposureArr = arr;
  console.log('userSetExposureArr ==>', userSetExposureArr);
  domExposure(userSetExposureArr);
}

// 页面曝光
export function PageExposure() {
  console.log('exposure');
}

// 模块报关
export function domExposure(targetArr) {
  // 曝光处理函数
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 如果dom id 属于曝光数组中
        if (targetArr.includes(entry.target.id)) {
          // 模块曝光时执行的逻辑
          console.log(`模块 ${entry.target.id} 被曝光`);
          collect({ type: 'EXPOSURE', data: { id: entry.target.id } });
        }
        // 如果只需要曝光一次，可以取消观察
        // observer.unobserve(entry.target);
      }
    });
  }

  // 创建 Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // null 表示观察相对于视口的变化
    threshold: 0.1, // 当 10% 模块进入视口时触发
  });

  // 选取需要监控的模块
  const modules = document.querySelectorAll('.module');
  modules.forEach((module) => {
    observer.observe(module); // 监听每个模块的曝光情况
  });
}
