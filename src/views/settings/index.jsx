import { Box, Paper, Typography, TextField, Button } from '@mui/material';

export default function Settings() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Configuración
            </Typography>

            <Paper sx={{ p: 3, maxWidth: 500 }}>
                <TextField fullWidth label="API Key" placeholder="*************" margin="normal" />

                <Button variant="contained">Guardar cambios</Button>
            </Paper>
        </Box>
    );
}
