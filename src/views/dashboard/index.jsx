import { Grid, Typography, Stack, Chip, ToggleButton, ToggleButtonGroup } from '@mui/material';

// components
import MetricsCards from '../components/basic/MetricsCards';
import OpportunityTypeChart from '../../sections/opportunities/OpportunityTypeChart';
import ScoreRoiChart from '../../sections/opportunities/ScoreRoiChart';
import BestOpportunitiesTable from '../../sections/opportunities/BestOpportunitiesTable';

export default function Dashboard() {
    return (
        <Grid container spacing={3}>
            {/* STATUS BAR */}
            <Grid item xs={12}>
                <div className="dashboard-status-bar">
                    <div className="status-left">
                        <Chip label="System Active" color="success" />
                        <span className="status-text">Último escaneo: hace 23 min</span>
                    </div>

                    <ToggleButtonGroup size="small" exclusive value="last">
                        <ToggleButton value="last">Último</ToggleButton>
                        <ToggleButton value="history">Histórico</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>

            {/* MÉTRICAS */}
            <Grid item xs={12}>
                <MetricsCards />
            </Grid>

            {/* ANALÍTICA */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={5}>
                        <OpportunityTypeChart />
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <ScoreRoiChart />
                    </Grid>
                </Grid>
            </Grid>

            {/* TABLA */}
            <Grid item xs={12}>
                <BestOpportunitiesTable />
            </Grid>
        </Grid>
    );
}
