
// 调用
upload(`appId=${fappId}&pageId=${pageId}&timestamp=${timestamp}&ua=${ui}`);


// 方法封装
export function upload(data) {
  let img = new Image();
  const params = encodeURIComponent(data);
  const src = 'http://www.xxx.com?data=' + params;
  img.src = src;
  img = null; // 内存释放
}

export default upload;
