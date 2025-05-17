import express from 'express';

const app = express();

// Redirigir a Google en cualquier ruta excepto /
app.use((req, res, next) => {
    if (req.path === '/') {
        res.socket.destroy(); // Cierra la conexión sin enviar respuesta
    } else {
        res.redirect('https://admin.sge.pt/MUA/1'); // Redirige cualquier otra ruta
    }
});

const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
