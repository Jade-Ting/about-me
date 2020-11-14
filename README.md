### 制作在线简历

> 页面动画，参考 [clzd.me](https://clzd.me/)

> 待参考 [于江水-about me](http://yujiangshui.github.io/about-me/)

#### 目录解构
```bash
├─about me.html
├─convert.bat  # 用于转化 scss为 css文件
├─index.css    # css文件，为了开发方便，目前样式直接写在css中
├─index.scss
├─README.md
├─scss
|  ├─global.scss
|  └main.scss
├─js
| ├─index.js
| └jquery-3.5.1.min.js
├─img
|  └girl.png
```

### 使用插件
- [pagewalkthrough - 页面引导](https://github.com/jwarby/jquery-pagewalkthrough)
    
    `index.js` 文件中的`pagewalkthrough`配置中的 `steps` 对应 `index.html` id为 `walkthrough-content` 的步骤说明。