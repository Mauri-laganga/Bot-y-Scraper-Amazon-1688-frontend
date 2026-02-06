import MainCard from '../../components/MainCard';
import ReactApexChart from 'react-apexcharts';

export default function OpportunityTypeChart() {
    const series = [40, 60];

    const options = {
        labels: ['Arbitrage', 'Private Label'],

        colors: ['#2563eb', '#16a34a'],

        chart: {
            type: 'donut'
        },

        stroke: {
            width: 0
        },

        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        name: {
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#111827'
                        },
                        value: {
                            fontSize: '18px',
                            fontWeight: 700,
                            formatter: (v) => `${v}%`
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '13px',
                            color: '#6b7280'
                        }
                    }
                }
            }
        },

        dataLabels: {
            enabled: false
        },

        legend: {
            position: 'right',
            fontSize: '13px',
            markers: {
                radius: 12
            },
            itemMargin: {
                vertical: 6
            }
        },

        tooltip: {
            y: {
                formatter: (v) => `${v}%`
            }
        }
    };

    return (
        <MainCard title="Tipo de Negocio">
            <ReactApexChart type="donut" height={300} series={series} options={options} />
        </MainCard>
    );
}
