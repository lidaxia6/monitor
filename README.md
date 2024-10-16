## 1. 安装依赖

```bash
yarn
```

## 2. HTML 页面中引入 SDK，在页面中插入以下脚本

```html
<script>
  (function () {
    const script = document.createElement('script');
    // script.src = '../dist/l-monitor.js'
    script.src = 'http://localhost:3000/l-monitor.js';
    // 将script 标签插入到body元素下的第一个元素之前
    document.body.insertBefore(script, document.body.firstChild);
    script.onload = function () {
      // script加载完成，创建并派发一个任务。通过监听这个任务，来获取script加载进度
      const event = new CustomEvent('onMonitorScriptLoad');
      window.dispatchEvent(event);
    };
  })();
</script>
```

## 3. 配置监控参数
```js
window.addEventListener('onMonitorScriptLoad', function (e) {
  const monitor = window.LMonitor;

  // 1.设置上报接口地址
  monitor.userSetApiUrl('http://127.0.0.1:3000/l-monitor-upload');

  // 2.指定需要曝光元素id
  monitor.userSetExposure(['module1', 'module2']);

  // 3.设置上报间隔时间
  monitor.uploadInterval(3000);
});
```

## 4. 启动一个静态资源服务器
 - 进入`examples`目录，执行`node demo2server.js`，启动一个静态资源服务器
 - 打开浏览器，访问`http://127.0.0.1:3000/demo2client.html`，即可看到效果

