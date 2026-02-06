import { Card, CardContent, Typography, Stack, Button, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Opportunities() {
    const hasData = false; // luego vendrá del backend

    return (
        <Card>
            <CardContent>
                {/* HEADER */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h5">Oportunidades</Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Amazon" />
                        <Chip label="1688" />
                        <Button variant="contained" startIcon={<SearchIcon />}>
                            Buscar
                        </Button>
                    </Stack>
                </Stack>

                {/* CONTENT */}
                {!hasData ? (
                    <Typography color="text.secondary">Todavía no hay oportunidades detectadas. Iniciá un escaneo para comenzar.</Typography>
                ) : (
                    <Typography>Tabla va acá</Typography>
                )}
            </CardContent>
        </Card>
    );
}
