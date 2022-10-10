document.addEventListener('DOMContentLoaded', function () {
  
// US Population with Disabilities
  // (function (){...})() is an iiffe, immediately invoked function expression
  (async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
    ).then(response => response.json());


    // TO DO ==> Update all the values with the population for disability for each state
const data = [
  {
      "value": 438,
      "code": "nj"
  },
  {
      "value": 387.35,
      "code": "ri"
  },
  {
      "value": 312.68,
      "code": "ma"
  },
  {
      "value": 271.4,
      "code": "ct"
  },
  {
      "value": 209.23,
      "code": "md"
  },
  {
      "value": 195.18,
      "code": "ny"
  },
  {
      "value": 154.87,
      "code": "de"
  },
  {
      "value": 114.43,
      "code": "fl"
  },
  {
      "value": 107.05,
      "code": "oh"
  },
  {
      "value": 105.8,
      "code": "pa"
  },
  {
      "value": 86.27,
      "code": "il"
  },
  {
      "value": 83.85,
      "code": "ca"
  },
  {
      "value": 72.83,
      "code": "hi"
  },
  {
      "value": 69.03,
      "code": "va"
  },
  {
      "value": 67.55,
      "code": "mi"
  },
  {
      "value": 65.46,
      "code": "in"
  },
  {
      "value": 63.8,
      "code": "nc"
  },
  {
      "value": 54.59,
      "code": "ga"
  },
  {
      "value": 53.29,
      "code": "tn"
  },
  {
      "value": 53.2,
      "code": "nh"
  },
  {
      "value": 51.45,
      "code": "sc"
  },
  {
      "value": 39.61,
      "code": "la"
  },
  {
      "value": 39.28,
      "code": "ky"
  },
  {
      "value": 38.13,
      "code": "wi"
  },
  {
      "value": 34.2,
      "code": "wa"
  },
  {
      "value": 33.84,
      "code": "al"
  },
  {
      "value": 31.36,
      "code": "mo"
  },
  {
      "value": 30.75,
      "code": "tx"
  },
  {
      "value": 29,
      "code": "wv"
  },
  {
      "value": 25.41,
      "code": "vt"
  },
  {
      "value": 23.86,
      "code": "mn"
  },
  {
      "value": 23.42,
      "code": "ms"
  },
  {
      "value": 20.22,
      "code": "ia"
  },
  {
      "value": 19.82,
      "code": "ar"
  },
  {
      "value": 19.4,
      "code": "ok"
  },
  {
      "value": 17.43,
      "code": "az"
  },
  {
      "value": 16.01,
      "code": "co"
  },
  {
      "value": 15.95,
      "code": "me"
  },
  {
      "value": 13.76,
      "code": "or"
  },
  {
      "value": 12.69,
      "code": "ks"
  },
  {
      "value": 10.5,
      "code": "ut"
  },
  {
      "value": 8.6,
      "code": "ne"
  },
  {
      "value": 7.03,
      "code": "nv"
  },
  {
      "value": 6.04,
      "code": "id"
  },
  {
      "value": 5.79,
      "code": "nm"
  },
  {
      "value": 3.84,
      "code": "sd"
  },
  {
      "value": 3.59,
      "code": "nd"
  },
  {
      "value": 2.39,
      "code": "mt"
  },
  {
      "value": 1.96,
      "code": "wy"
  },
  {
      "value": 0.42,
      "code": "ak"
  }
]

        // Make codes uppercase to match the map data
        data.forEach(function (p) {
            p.code = p.code.toUpperCase();
        });

        // Instantiate the map
        Highcharts.mapChart('usPop', {

            chart: {
                map: topology,
                borderWidth: 1
            },

            title: {
                text: 'Disabilities by State'
            },

            exporting: {
                sourceWidth: 600,
                sourceHeight: 500
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series: [{
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{xDescription}, {point.value} people per square kilometer.'
                    }
                },
                animation: {
                    duration: 1000
                },
                data: data,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Disabilities by State',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });


})();

// Percentage of adults with functional disability types
const perAdults = Highcharts.chart('perAdults', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Percentage of adults with functional disability types'
  },

  xAxis: {
      categories: [
          'Mobility',
          'Cognition',
          'Independent Living',
          'Hearing',
          'Vision',
          'Self Care',
      ],
      crosshair: true
  },
  yAxis: {
      title: {
          useHTML: true,
          text: 'Percentage of adults'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: '2020',
      data: [13, 10.8, 6.8, 5.9, 4.6, 3.7]
  }]
});


// Disability and Communities
const olderAdults = Highcharts.chart('olderAdults', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

const womenAdults = Highcharts.chart('womenAdults', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            ['Firefox', 5.52],
            ['Safari', 2.98],
            ['Internet Explorer', 1.90],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

const minorityAdults = Highcharts.chart('minorityAdults', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            ['Firefox', 5.52],
            ['Safari', 2.98],
            ['Internet Explorer', 1.90],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});


// Disability and Health
const healthCompare = Highcharts.chart('healthCompare', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Percentage of adults with functional disability types'
    },
  
    xAxis: {
        categories: [
            'Mobility',
            'Cognition',
            'Independent Living',
            'Hearing',
            'Vision',
            'Self Care',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Percentage of adults'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2020',
        data: [13, 10.8, 6.8, 5.9, 4.6, 3.7]
    }]
  });


// Disability and Healthcare Access
const usualProvider = Highcharts.chart('usualProvider', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            ['Firefox', 5.52],
            ['Safari', 2.98],
            ['Internet Explorer', 1.90],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

const unmetNeed = Highcharts.chart('unmetNeed', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            ['Firefox', 5.52],
            ['Safari', 2.98],
            ['Internet Explorer', 1.90],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

const routineCheckup = Highcharts.chart('routineCheckup', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 73.86],
            ['Edge', 11.97],
            ['Firefox', 5.52],
            ['Safari', 2.98],
            ['Internet Explorer', 1.90],
            {
                name: 'Other',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});


});
  
