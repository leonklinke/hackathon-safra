import React from "react";

import { Chart } from "react-google-charts";

class LineChart extends React.Component {
    render() {
		return (
		<>
            <Chart
            width={'700px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['x', 'Previsto', 'Alcançado'],
            [0, 0, 0],
            [1, 10, 5],
            [2, 20, 15],
            [3, 30, 23],
            [4, 40, 40],
            [5, 50, 50],
            [6, 60, 53],
            [7, 70, 70],
            [8, 80, 79],
            [9, 90, 89],
            [10, 100, 100],
            ]}
            options={{
            hAxis: {
                title: 'Tempo',
            },
            vAxis: {
                title: 'Andamento',
            },
            series: {
                0: { curveType: 'function' },
                1: { curveType: 'function' },
            },
            }}
            rootProps={{ 'data-testid': '2' }}
            />
        </>
		);
	}
}

export default LineChart;