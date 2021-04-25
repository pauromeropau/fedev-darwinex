
import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const SalesValueChart = () => {
  const data = {
    labels: [''],
    series: [[2, 10, 8, 7, 8, 7, 4, 5, 4, 3, 2, 1]]
  };

  const options = {
    low: 0,
    showArea: false,
    fullWidth: true,
    axisX: {
      position: 'end',
      showGrid: false
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-double-octave " />
  );
};

export const SalesValueChartphone = () => {
  const data = {
    labels: [''],
    series: [[2, 10, 8, 7, 8, 7, 4, 5, 4, 3, 2, 1]]
  };

  const options = {
    low: 0,
    showArea: false,
    fullWidth: false,
    axisX: {
      position: 'end',
      showGrid: false
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-major-tenth" />
  );
};
