import { ChartDataValue } from './../chart.interfaces';
import { LineChartData, XYLabels } from "../chart.interfaces";

export const chartMockedData: ChartDataValue[] = [
    { name: "Lomas", value: 105000 },
    { name: "La Plata", value: 550000 },
    { name: "San Miguel", value: 150000 },
    { name: "San Justo", value: 150000 },
    { name: "La Matanza", value: 20000 }
];

export const chartMockedLabels: XYLabels = {
    xAxisLabel: 'banco',
    yAxisLabel: 'monto',
    title: 'Monto de banco por ciudad'
}

export const lineChartMockedData: LineChartData[] = [
{
    "name": "Tokelau",
    "series": [
    {
        "value": 5173,
        "name": "2016-09-20T18:24:19.089Z"
    },
    {
        "value": 6104,
        "name": "2016-09-13T18:32:49.843Z"
    },
    {
        "value": 3527,
        "name": "2016-09-23T06:39:51.631Z"
    },
    {
        "value": 6289,
        "name": "2016-09-20T01:12:14.407Z"
    },
    {
        "value": 5045,
        "name": "2016-09-14T02:02:16.497Z"
    }
    ]
},
{
    "name": "United States Minor Outlying Islands",
    "series": [
    {
        "value": 4417,
        "name": "2016-09-20T18:24:19.089Z"
    },
    {
        "value": 3399,
        "name": "2016-09-13T18:32:49.843Z"
    },
    {
        "value": 5210,
        "name": "2016-09-23T06:39:51.631Z"
    },
    {
        "value": 2526,
        "name": "2016-09-20T01:12:14.407Z"
    },
    {
        "value": 3790,
        "name": "2016-09-14T02:02:16.497Z"
    }
    ]
},
{
    "name": "Palau",
    "series": [
    {
        "value": 2770,
        "name": "2016-09-20T18:24:19.089Z"
    },
    {
        "value": 4810,
        "name": "2016-09-13T18:32:49.843Z"
    },
    {
        "value": 2368,
        "name": "2016-09-23T06:39:51.631Z"
    },
    {
        "value": 3762,
        "name": "2016-09-20T01:12:14.407Z"
    },
    {
        "value": 6516,
        "name": "2016-09-14T02:02:16.497Z"
    }
    ]
},
{
    "name": "Hungary",
    "series": [
    {
        "value": 2593,
        "name": "2016-09-20T18:24:19.089Z"
    },
    {
        "value": 5801,
        "name": "2016-09-13T18:32:49.843Z"
    },
    {
        "value": 5573,
        "name": "2016-09-23T06:39:51.631Z"
    },
    {
        "value": 6523,
        "name": "2016-09-20T01:12:14.407Z"
    },
    {
        "value": 4502,
        "name": "2016-09-14T02:02:16.497Z"
    }
    ]
},
{
    "name": "Georgia",
    "series": [
    {
        "value": 6102,
        "name": "2016-09-20T18:24:19.089Z"
    },
    {
        "value": 6588,
        "name": "2016-09-13T18:32:49.843Z"
    },
    {
        "value": 5125,
        "name": "2016-09-23T06:39:51.631Z"
    },
    {
        "value": 6042,
        "name": "2016-09-20T01:12:14.407Z"
    },
    {
        "value": 4103,
        "name": "2016-09-14T02:02:16.497Z"
    }
    ]
}
]