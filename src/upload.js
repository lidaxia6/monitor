import { getApiUrl } from './genApiUrl';
import { data } from './collect';

export function upload() {
  console.log('upload,data ==>', data);
  let img = new Image();
  const src = getApiUrl();
  const params = `?domExposureCollect=${data.domExposureCollect}`;
  img.src = src + params;
  img.onload = function () {
    console.log('Image loaded successfully');
    img = null;
  };
}

export function uploadInterval(intervalTime) {
  setInterval(() => {
    // 上报数据
    upload();
  }, intervalTime);
}
