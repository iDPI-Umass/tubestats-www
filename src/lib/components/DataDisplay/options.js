import { getScales } from "./scales.js";
import { getTooltip } from "./tooltips.js";
import { getTitle } from "./titles.js";

const getOptions = function ( source, name ) {
  return {
    type: "bar",
    data: {
      labels: source.data.stats.data[ name ].labels,
      datasets: [
        {
          label: source.data.stats.data[ name ].unit,
          data: source.data.stats.data[ name ].values,
          backgroundColor: "#eb6d9d"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: getScales( name ),
      interaction:{
        intersect: false,
        mode: "index"
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: getTooltip( name ),
        title: getTitle( name )
      }
    }
  };
}

export {
  getOptions
}