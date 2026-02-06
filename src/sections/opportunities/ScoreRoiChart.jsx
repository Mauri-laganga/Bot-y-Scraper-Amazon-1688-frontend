import MainCard from '../../components/MainCard';
import ReactApexChart from 'react-apexcharts';

export default function ScoreRoiChart() {
    const series = [
        {
            name: 'Arbitrage',
            data: [
                [10, 20],
                [20, 40],
                [30, 55],
                [40, 70],
                [50, 60]
            ]
        },
        {
            name: 'Private Label',
            data: [
                [15, 35],
                [25, 50],
                [35, 65],
                [45, 80],
                [55, 75]
            ]
        }
    ];

    const options = {
        chart: {
            type: 'scatter',
            zoom: { enabled: false },
            toolbar: { show: false },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800
            }
        },

        grid: {
            borderColor: '#eef0f4',
            strokeDashArray: 4,
            padding: {
                left: 10,
                right: 10
            }
        },

        markers: {
            size: 7,
            strokeWidth: 0,
            hover: {
                size: 9
            }
        },

        colors: ['#2563eb', '#16a34a'],

        xaxis: {
            title: {
                text: 'Opportunity Score',
                style: {
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#6b7280'
                }
            },
            labels: {
                style: {
                    fontSize: '12px',
                    colors: '#6b7280'
                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },

        yaxis: {
            title: {
                text: 'ROI %',
                style: {
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#6b7280'
                }
            },
            labels: {
                formatter: (v) => `${v}%`,
                style: {
                    fontSize: '12px',
                    colors: '#6b7280'
                }
            }
        },

        legend: {
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '13px',
            markers: {
                radius: 12
            }
        },

        tooltip: {
            theme: 'light',
            x: {
                formatter: (v) => `Score ${v}`
            },
            y: {
                formatter: (v) => `${v}% ROI`
            }
        }
    };

    return (
        <MainCard title="Score vs ROI">
            <ReactApexChart type="scatter" height={300} series={series} options={options} />
        </MainCard>
    );
}
