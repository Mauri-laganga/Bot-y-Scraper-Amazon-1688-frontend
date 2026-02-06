import { Card, CardContent, Typography, Stack, Button, Chip, Grid, Alert, Divider, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Opportunities() {
    // luego esto viene del backend
    const hasUniqueOpportunities = true;
    const hasArbitrageOpportunities = true;

    return (
        <Card>
            <CardContent>
                {/* HEADER */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5">Oportunidades</Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Chip label="Amazon" />
                        <Chip label="1688" />
                        <Button variant="contained" startIcon={<SearchIcon />}>
                            Buscar
                        </Button>
                    </Stack>
                </Stack>

                {/* STATUS / INFO */}
                <Alert icon={<CheckCircleIcon fontSize="inherit" />} severity="success" sx={{ mb: 3 }}>
                    El sistema escanea automáticamente Amazon y 1688 en segundo plano. No necesitás iniciar nada: las oportunidades aparecen cuando
                    existen.
                    <br />
                    <strong>Última ejecución:</strong> hace 23 min ·<strong> Próxima ejecución:</strong> en 7 min
                </Alert>

                {/* SPLIT VIEW */}
                <Grid container spacing={3}>
                    {/* LEFT – UNIQUE AMAZON OPPORTUNITIES */}
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Oportunidades únicas en Amazon
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    White space · Marca propia · Sin competencia directa
                                </Typography>

                                <Divider sx={{ mb: 2 }} />

                                {!hasUniqueOpportunities ? (
                                    <Typography color="text.secondary">No se detectaron oportunidades únicas en este momento.</Typography>
                                ) : (
                                    <Stack spacing={2}>
                                        {/* MOCK CARD */}
                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <Typography fontWeight={600}>Zapatero de bambú</Typography>
                                                <Chip label="Score 93" color="primary" />
                                            </Stack>

                                            <Typography variant="body2" color="text.secondary">
                                                Costo: $12 · Est. mensual: 500
                                            </Typography>

                                            <Chip label="No listado en Amazon" size="small" color="success" sx={{ mt: 1 }} />
                                        </Box>

                                        <Divider />

                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <Typography fontWeight={600}>Organizador magnético</Typography>
                                                <Chip label="Score 89" color="primary" />
                                            </Stack>

                                            <Typography variant="body2" color="text.secondary">
                                                Costo: $3.80 · Est. mensual: 800
                                            </Typography>

                                            <Chip label="Competencia &lt; 3 sellers" size="small" color="warning" sx={{ mt: 1 }} />
                                        </Box>
                                    </Stack>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* RIGHT – ARBITRAGE */}
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Arbitraje detectado
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Compra en China · Venta directa en Amazon
                                </Typography>

                                <Divider sx={{ mb: 2 }} />

                                {!hasArbitrageOpportunities ? (
                                    <Typography color="text.secondary">No se detectaron oportunidades de arbitraje.</Typography>
                                ) : (
                                    <Stack spacing={2}>
                                        <Box>
                                            <Typography fontWeight={600}>Auriculares inalámbricos</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                1688: $15 → Amazon: $99
                                            </Typography>
                                            <Stack direction="row" spacing={1} mt={1}>
                                                <Chip label="+560% ROI" color="success" />
                                                <Chip label="Margen $60" />
                                            </Stack>
                                        </Box>

                                        <Divider />

                                        <Box>
                                            <Typography fontWeight={600}>Mochila antirrobo USB</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                1688: $10 → Amazon: $44
                                            </Typography>
                                            <Stack direction="row" spacing={1} mt={1}>
                                                <Chip label="+240% ROI" color="success" />
                                                <Chip label="Margen $21" />
                                            </Stack>
                                        </Box>
                                    </Stack>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
