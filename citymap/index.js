//地图配置
//mapData：图表所需数据；mapType：地图模式或散点图模式（即按省份显示数据或按城市显示数据）
//minValue：视觉映射组件最小值；maxValue：视觉映射最大值
function _setMap(mapData, mapType, minValue, maxValue) {
    var option = {};
    return option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name;//自行定义formatter格式
            }
        },
        visualMap: {
            min: minValue || 0,//视觉映射组件的最小值
            max: maxValue || 200,//视觉映射组件的最大值
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#666'
            },
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本

        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false //城市模式下，鼠标移上去不显示省份名称
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#eeeeee',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#00a695',
                }
            }
        },
        series: [
            {
                type: mapType,  //mapType可选"scatter"或"map",即选择散点图模式或地图模式（显示省份数据为地图模式，显示城市为散点模式）
                mapType: 'china',
                coordinateSystem: 'geo',
                symbolSize: 14,
                label: {
                    normal: {
                        formatter: '{b}',   //城市模式下在地图上显示该城市名称
                        textStyle: {
                            color: '#000'
                        },
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: mapData //当为地图模式即显示省份数据时，数据格式为： [{name: '山东',value: 183 }, {name: '云南',value: 286 }]
                //当为散点模式即显示城市数据时，数据格式为： [{name:"厦门",value:[118.1,24.46,183]},{name:"武汉",value:[114.31,30.52,199]}]
                //散点模式value代表的含义[经度，纬度，人数]
            }
        ]
    }
}