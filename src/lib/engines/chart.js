import ChartJS from 'chart.js/auto';

class Chart {
  constructor ({ canvas, type, options }) {
    
  }
}
viewsChart = new Chart(
  viewsCanvas,{
      type: 'bar',
      data: {
          labels: source.data.stats.data.views.labels,
          datasets: [
              {
                  label: source.data.stats.data.views.unit,
                  data: source.data.stats.data.views.values,
                  backgroundColor:'#eb6d9d'
              },
          ]
      },
      options:{
          responsive: true,
          scales:{
              y:{
                  ticks:{
                      callback: function(value, index, ticks) {
                          return (value*100).toFixed(0) + "%"
                      },
                      format:{
                          style:'percent'
                      }
                  },
                  title:{
                      display:true,
                      text:'relative frequency',
                      font:{
                          size:"16px",
                      }
                  }
              }
          },
          interaction:{
              intersect: false,
              mode:'index'
          },
          plugins:{
              legend:{
                  display:false
              },
              tooltip:{
                  callbacks:{
                      label: function(context) {
                          return ((context.parsed.y * 100).toFixed(3)) + '%'
                      }
                  }
              },
              title:{
                  display:true,
                  text:'Views',
                  font:{
                      size:'16px'
                  }
              }
          }
      },

  }
)