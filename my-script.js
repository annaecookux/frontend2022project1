document.addEventListener('DOMContentLoaded', function () {
  
// US Population with Disabilities
  // (function (){...})() is an iiffe, immediately invoked function expression
  (async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
    ).then(response => response.json());

const data = [
  {
      "value": 21,
      "code": "nj"
  },
  {
      "value": 23,
      "code": "ri"
  },
  {
      "value": 23,
      "code": "ma"
  },
  {
      "value": 21,
      "code": "ct"
  },
  {
      "value": 20,
      "code": "md"
  },
  {
      "value": 21,
      "code": "ny"
  },
  {
      "value": 24,
      "code": "de"
  },
  {
      "value": 26,
      "code": "fl"
  },
  {
      "value": 25,
      "code": "oh"
  },
  {
      "value": 26,
      "code": "pa"
  },
  {
      "value": 23,
      "code": "il"
  },
  {
      "value": 23,
      "code": "ca"
  },
  {
      "value": 19,
      "code": "hi"
  },
  {
      "value": 22,
      "code": "va"
  },
  {
      "value": 26,
      "code": "mi"
  },
  {
      "value": 27,
      "code": "in"
  },
  {
      "value": 26,
      "code": "nc"
  },
  {
      "value": 25,
      "code": "ga"
  },
  {
      "value": 29,
      "code": "tn"
  },
  {
      "value": 21,
      "code": "nh"
  },
  {
      "value": 31,
      "code": "sc"
  },
  {
      "value": 33,
      "code": "la"
  },
  {
      "value": 33,
      "code": "ky"
  },
  {
      "value": 21,
      "code": "wi"
  },
  {
      "value": 22,
      "code": "wa"
  },
  {
      "value": 31,
      "code": "al"
  },
  {
      "value": 28,
      "code": "mo"
  },
  {
      "value": 26,
      "code": "tx"
  },
  {
      "value": 32,
      "code": "wv"
  },
  {
      "value": 21,
      "code": "vt"
  },
  {
      "value": 20,
      "code": "mn"
  },
  {
      "value": 33,
      "code": "ms"
  },
  {
      "value": 22,
      "code": "ia"
  },
  {
      "value": 31,
      "code": "ar"
  },
  {
      "value": 33,
      "code": "ok"
  },
  {
      "value": 24,
      "code": "az"
  },
  {
      "value": 20,
      "code": "co"
  },
  {
      "value": 27,
      "code": "me"
  },
  {
      "value": 26,
      "code": "or"
  },
  {
      "value": 26,
      "code": "ks"
  },
  {
      "value": 23,
      "code": "ut"
  },
  {
      "value": 20,
      "code": "ne"
  },
  {
      "value": 28,
      "code": "nv"
  },
  {
      "value": 28,
      "code": "id"
  },
  {
      "value": 26,
      "code": "nm"
  },
  {
      "value": 23,
      "code": "sd"
  },
  {
      "value": 24,
      "code": "nd"
  },
  {
      "value": 26,
      "code": "mt"
  },
  {
      "value": 24,
      "code": "wy"
  },
  {
      "value": 21,
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
                text: 'Percentage of People with Disabilities by State '
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
                y: 25,
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
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2 in 5 adults age 65 years and older have a disability'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Adults age 65 years and older',
        colorByPoint: true,
        data: [{
            name: 'Have a disability',
            y: 2,
        }, {
            name: 'Do not have a reported disability',
            y: 3
        }]
    }]
});

const womenAdults = Highcharts.chart('womenAdults', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '1 in 4 women have a disability.'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Women',
        colorByPoint: true,
        data: [{
            name: 'Have a disability',
            y: 1,
        }, {
            name: 'Do not have a reported disability',
            y: 4
        }]
    }]
});

const minorityAdults = Highcharts.chart('minorityAdults', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2 in 5 non-Hispanic American Indians/ Alaska Natives have a disability.'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'non-Hispanic American Indians/ Alaska Natives',
        colorByPoint: true,
        data: [{
            name: 'Have a disability',
            y: 2,
        }, {
            name: 'Do not have a reported disability',
            y: 3
        }]
    }]
});


// Disability and Health
const healthCompare = Highcharts.chart('healthCompare', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Adults living with disabilities are more likely to...'
    },
  
    xAxis: {
        categories: [
            'Have Obesity',
            'Smoke',
            'Have Heart Disease',
            'Have Diabetes',
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
        name: 'With Disabilities',
        data: [38.2, 28.2, 11.5, 16.3]

    }, {
        name: 'Without Disabilities',
        data: [26.2, 13.4, 3.8, 7.2]

    }]
  });


// Disability and Healthcare Access
const usualProvider = Highcharts.chart('usualProvider', {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '1 in 3 adults with disabilities 18 to 44 years do not have a usual health care provider'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Adults with disabilities 18 to 44 years old',
        colorByPoint: true,
        data: [{
            name: 'Do not have a usual health care provider',
            y: 1,
        }, {
            name: 'Do have a usual health care provider',
            y: 2
        }]
    }]
});

const unmetNeed = Highcharts.chart('unmetNeed', {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '1 in 3 adults with disabilities 18 to 44 years have an unmet health care need because of cost in the past year'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Adults with disabilities 18 to 44 years old',
        colorByPoint: true,
        data: [{
            name: 'Have an unmet health care need',
            y: 1,
        }, {
            name: 'Do not have an unmet health care need',
            y: 2
        }]
    }]
});

const routineCheckup = Highcharts.chart('routineCheckup', {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '1 in 4 adults with disabilities 45 to 64 years did not have a routine check-up in the past year'
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
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Adults with disabilities 45 to 64 years old',
        colorByPoint: true,
        data: [{
            name: 'Did not have a routine check-up in the past year',
            y: 1,
        }, {
            name: 'Did have a routine check-up in the past year',
            y: 3,
        }]
    }]
});


});
  
