import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const MyLinechart = (props) => {
    const config = [
        {key:'iPhone14', stroke:'#f3e5f5'},
        {key:'iPhone15', stroke:'#c5cae9'},
        {key:'iPhone15Pro', stroke:'#b2ebf2'},
        {key:'iPhoneSE', stroke:'#c8e6c9'},
        {key:'iPadPro', stroke:'#e6ee9c'},
        {key:'iPadAir', stroke:'#ffe0b2'},
        {key:'iPad', stroke:'#cfd8dc'},
    ]

    return (
        <LineChart
            width={650}
            height={160}
            margin={{left:20,right:25}}
            data={props.data}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            <Legend />
            {config.map(item=> {
                return(<Line type="monotone" dataKey={item.key} stroke={item.stroke} strokeWidth={2} key={item.key}/>)
            })}
        </LineChart>
    );
};

export default MyLinechart;

// [
//     {
//         "key": 1,
//         "name": "iPhone 14",
//         "Jan2024": 2136,
//         "Feb2024": 1928,
//         "Mar2024": 1653,
//         "Apr2024": 1873,
//         "May2024": 2215,
//         "Jun2024": 1742,
//         "Jul2024": 1500
//     },
//     {
//         "key": 2,
//         "name": "iPhone 15",
//         "Jan2024": 1257,
//         "Feb2024": 1350,
//         "Mar2024": 1862,
//         "Apr2024": 1427,
//         "May2024": 1662,
//         "Jun2024": 1254,
//         "Jul2024": 1400
//     },
//     {
//         "key": 3,
//         "name": "iPhone 15 Pro",
//         "Jan2024": 1005,
//         "Feb2024": 921,
//         "Mar2024": 986,
//         "Apr2024": 1279,
//         "May2024": 1432,
//         "Jun2024": 1114,
//         "Jul2024": 1250
//     },
//     {
//         "key": 4,
//         "name": "iPhone SE",
//         "Jan2024": 737,
//         "Feb2024": 527,
//         "Mar2024": 613,
//         "Apr2024": 833,
//         "May2024": 548,
//         "Jun2024": 625,
//         "Jul2024": 800
//     },
//     {
//         "key": 5,
//         "name": "iPad Pro",
//         "Jan2024": 628,
//         "Feb2024": 399,
//         "Mar2024": 274,
//         "Apr2024": 511,
//         "May2024": 485,
//         "Jun2024": 442,
//         "Jul2024": 652
//     },
//     {
//         "key": 6,
//         "name": "iPad Air",
//         "Jan2024": 1206,
//         "Feb2024": 905,
//         "Mar2024": 1127,
//         "Apr2024": 934,
//         "May2024": 892,
//         "Jun2024": 1026,
//         "Jul2024": 1009
//     },
//     {
//         "key": 7,
//         "name": "iPad",
//         "Jan2024": 1001,
//         "Feb2024": 1208,
//         "Mar2024": 895,
//         "Apr2024": 1191,
//         "May2024": 1308,
//         "Jun2024": 1164,
//         "Jul2024": 935
//     }
// ]