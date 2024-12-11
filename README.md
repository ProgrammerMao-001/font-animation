# font-animation
![demo](/public/font-animation.gif)
## 安装

```bash
npm i font-animation --save-dev
```

## 使用

```html

<template>
    <div id="app">
        <fontAnimation
                style="position:absolute;left: 0;right: 0;margin: auto"
                can-click
                :fontStyle="{
            color: '#ffa500',
            fontWeight: 'bolder'
        }"
                text="这组件真棒！"
                @handle-click="textClick">
            <template slot="prepend">
                <span style="margin-right: 8px">【插槽】</span>
            </template>
            <template slot="append">
                <span>【插槽】</span>
            </template>
        </fontAnimation>
    </div>
</template>

<script>
    export default {
        methods: {
            textClick(e) {
                console.log(e, "e")
            }
        },
    };
</script>
```

## 属性

| 属性名       | 默认值                                       | 类型      | 描述                       | 是否必填 |
   |-----------|-------------------------------------------|---------|--------------------------|------|   
| text      | ""                                        | Boolean | 显示的文字                    | true |
| canClick  | true;                                     | Boolean | 字体是否可点击 可选值：true / false |      |
| fontStyle | `{color: "#ffa500",fontWeight: "bolder"}` | Object  | 字体样式                     |      |

## 插槽

| 插槽      | 描述   |
   |---------|------|
| prepend | 前置插槽 | 
| append  | 后置插槽 | 

## 事件

| 事件名          | 描述   | 返回值     |
|--------------|------|---------| 
| handle-click | 点击事件 | 点击文本的内容 |
