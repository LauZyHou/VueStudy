### 集成Echarts
```bash
npm install echarts -S
```
### 添加词云组件
```bash
npm install echarts-wordcloud -S
```
### main.js中集成
```js
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//这里不用import因为require直接在node_modules下查找
require('echarts-wordcloud')
```