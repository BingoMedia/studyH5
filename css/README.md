
# css样式

### 多重样式优先级

    （内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式


#### 1.使用简写属性时 ，顺序为

    background-color
    background-image
    background-repeat
    background-attachment //背景图像是否固定或者随着页面的其余部分滚动。
    background-position
    
#### 2.大小写转换 

    text-transform:uppercase;
    text-transform:lowercase;
    text-transform:capitalize;
    
#### 3.改变文本的书写方向

    direction:rtl; //从右到左
    
#### 4.添加文字阴影 

     text-shadow:2px 2px #FF0000;
     
#### 5.裁剪定位的图像
    
    clip:rect(0px,60px,200px,0px);
    
#### 6.组合选择符

     div   p  后代选取器         匹配所有div元素的后代p元素。无论多少级
     div > p  子元素选择器       直选div下一级的p元素，  只有div后一级
     div + p  相邻兄弟选择器     可选择紧接在div后的 p 元素，且二者有相同父元素。
     div ~ p  后续兄弟选择器     后续兄弟选择器选取所有div之后的相邻兄弟 p 元素

#### 7.伪元素
* "first-line" 伪元素用于向文本的首行设置特殊样式。
* 注意："first-line" 伪元素只能用于块级元素。
* 注意：下面的属性可应用于 "first-line" 伪元素：

        font 
        color  
        background 
        word-spacing
        letter-spacing
        text-decoration
        vertical-align
        text-transform
        line-height
        clear
* "first-letter" 伪元素用于向文本的首字母设置特殊样式：
* 注意： "first-letter" 伪元素只能用于块级元素。
* 注意： 下面的属性可应用于 "first-letter" 伪元素： 
    
        font 
        color  
        background 
        margin 
        padding 
        border 
        text-decoration
        vertical-align (only if "float" is "none")
        text-transform
        line-height
        float
        clear
        
        
# CSS3 模块

### 一些最重要CSS3模块如下：

* 选择器
* 盒模型
* 背景和边框
* 文字特效
* 2D/3D转换
* 动画
* 多列布局
* 用户界面


#### 1.规定背景的绘制区域。background-clip  有三个属性

##  2D 转换

* translate()
* rotate()
* scale()
* skew()
* matrix()