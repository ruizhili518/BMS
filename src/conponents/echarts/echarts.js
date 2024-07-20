import React from 'react';
import echarts from 'echarts';

// Line chart and bar chart design.
const axisOption = {
    // Legend text color
    textStyle: {
        color: "#333",
    },
    // tip
    tooltip: {
        trigger: "axis",
    },
    xAxis: {
        type: "category", // Category axis
        data: [],
        axisLine: {
            lineStyle: {
                color: "#17b3a3",
            },
        },
        axisLabel: {
            interval: 0,
            color: "#333",
        },
    },
    yAxis: [
        {
            type: "value", // Value axis
            axisLine: {
                lineStyle: {
                    color: "#17b3a3",
                },
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
    series: [],
}

// Pie chart design
const normalOption = {
    tooltip: {
        trigger: "item",
    },
    color: [
        "#0f78f4",
        "#dd536b",
        "#9462e5",
        "#a6a6a6",
        "#e1bb22",
        "#39c362",
        "#3ed1cf",
    ],
    series: [],
}

const Echarts = (props) => {
    return (
        <div>

        </div>
    );
};

export default Echarts;

