export interface ChartDataValue {
  name: string;
  value: number;
  extra?: {
    code: string;
  };
}
export interface XYLabels {
  xAxisLabel: string;
  yAxisLabel: string;
  title: string;
}

export interface LineChartData {
  name: string;
  series: ChartDataValue[];
}

export interface LineChartDataWithLabels {
  data: LineChartData[];
  labels: XYLabels;
}

export interface PieChartData {
  data: ChartDataValue[];
  view: [number, number];
  colorScheme: Scheme;
}

export interface PieAdvancedChartData {
  data: ChartDataValue[];
  view: [number, number];
  colorScheme: Scheme;
}

export interface VerticalBarChartData {
  data: ChartDataValue[];
  labels: XYLabels;
  view: [number, number];
  colorScheme: Scheme;
}


export type Scheme =
  | 'vivid'
  | 'natural'
  | 'eons'
  | 'cool'
  | 'fire'
  | 'solar'
  | 'air'
  | 'aqua'
  | 'flame'
  | 'forest'
  | 'ocean'
  | 'horizon'
  | 'night'
  | 'picnic'
  | 'nightLights';
