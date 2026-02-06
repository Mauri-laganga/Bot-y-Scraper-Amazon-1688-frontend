import { Table, TableHead, TableRow, TableCell, TableBody, Button, Chip } from '@mui/material';
import MainCard from '../../components/MainCard';

const rows = [
    {
        product: 'Auriculares TWS',
        type: 'Arbitrage',
        cost: 12.5,
        price: 39.99,
        margin: 27.49,
        roi: 220,
        score: 'Alta'
    },
    {
        product: 'Teclado mecánico',
        type: 'Private Label',
        cost: 8,
        price: 34.99,
        margin: 26.99,
        roi: 337,
        score: 'Muy Alta'
    }
];

export default function BestOpportunitiesTable() {
    return (
        <MainCard title="Mejores Oportunidades Encontradas">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Costo 1688</TableCell>
                        <TableCell>Precio Estimado</TableCell>
                        <TableCell>Margen</TableCell>
                        <TableCell>ROI</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.product}>
                            <TableCell>{row.product}</TableCell>
                            <TableCell>
                                <Chip label={row.type} color={row.type === 'Arbitrage' ? 'primary' : 'success'} size="small" />
                            </TableCell>
                            <TableCell>${row.cost}</TableCell>
                            <TableCell>${row.price}</TableCell>
                            <TableCell>${row.margin}</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: 'success.main' }}>+{row.roi}%</TableCell>
                            <TableCell>
                                <Button size="small" variant="contained">
                                    Ver
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </MainCard>
    );
}
