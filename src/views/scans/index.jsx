import { Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Scans() {
    const isRunning = false;

    return (
        <Card>
            <CardContent>
                <Stack spacing={3}>
                    <Typography variant="h5">Escaneos</Typography>

                    {/* STATUS */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Chip label={isRunning ? 'Escaneando…' : 'Idle'} color={isRunning ? 'warning' : 'default'} />
                        <Typography variant="body2" color="text.secondary">
                            Último escaneo: hoy 12:34
                        </Typography>
                    </Stack>

                    {/* ACTION */}
                    <Button variant="contained" size="large" startIcon={<PlayArrowIcon />} disabled={isRunning}>
                        Iniciar nuevo escaneo
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
