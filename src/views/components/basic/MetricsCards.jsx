import { Grid, Card, CardContent, Typography } from '@mui/material';

const metrics = [
    { label: 'Oportunidades Detectadas', value: 42 },
    { label: 'ROI Promedio', value: '+312%' },
    { label: 'Margen Promedio', value: '$28.40' },
    { label: 'Modelos Detectados', value: 'Arbitrage / PL' }
];

export default function MetricsCards() {
    return (
        <Grid container spacing={2}>
            {metrics.map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card className="metric-card">
                        <CardContent>
                            <Typography className="metric-title">{metric.label}</Typography>
                            <Typography className="metric-value">{metric.value}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
