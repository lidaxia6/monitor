快速配置一个React项目
一、安装 vite
yarn add -D vite
二、配置vite启动命令
package.json
  "scripts": {
    "dev": "vite",
    "build": "vite build --config ./vite.config.js",
    "preview": "vite preview"
  },