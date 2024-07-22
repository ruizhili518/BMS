import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const MyRadarChart = (props) => {
    const myData = props.data.map(item => {
        return {
            subject: item.name,
            A: item.today,
            fullMark: 50
        }
    })
    console.log(myData);
    return (
        <RadarChart cx={130} cy={100} width={300} height={200} data={myData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={15} domain={[0, 30]} />
            <Radar dataKey="A" stroke="#e6ee9c" fill="#e6ee9c" fillOpacity={0.6} />
        </RadarChart>
    );
}

export default MyRadarChart;