// 曝光模块id
let domExposureCollectArr = [];
export let data = {
  domExposureCollect: '',
};

// 收集数据、处理数据
function collect(action) {
  switch (action.type) {
    case 'EXPOSURE':
      domExposureCollectArr.push(action.data.id);
      data.domExposureCollect = domExposureCollectArr.join(',');
      break;

    default:
      break;
  }
}
export default collect;
