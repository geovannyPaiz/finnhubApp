import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, Grid, Path } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import useGraph from '../../hooks/useGraph';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function GraphScreen() {
  const alerts = useSelector((state: RootState) => state.alerts);
  const { chartData } = useGraph(alerts.map(alert => alert.symbol));
  const COLORS = ['#FF5733', '#33B5FF', '#7D33FF', '#33FF57', '#FF33A1'];
  return (
    <View className="flex flex-1 bg-custom-background px-12 gap-y-4 py-8">
      <Text className="text-white font-trebuchet text-2xl">Graph</Text>
      <LineChart
        style={{ flex: 1 }}
        data={chartData}
        svg={{ strokeWidth: 2 }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveLinear}
      >
        <Grid />
        {chartData.map((_, index) => (
          <Path key={index} stroke={COLORS[index % COLORS.length]} />
        ))}
      </LineChart>
    </View>
  );
}
