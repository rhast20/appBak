import express from 'express';

const app = express();

// Redirigir a Google en cualquier ruta excepto /
// app.use((req, res, next) => {
//     if (req.path === '/') {
//         res.socket.destroy(); // Cierra la conexión sin enviar respuesta
//     } else {
//         res.redirect('https://admin.sge.pt/MUA/1'); // Redirige cualquier otra ruta
//     }
// });

// Middleware para capturar subdominio
app.use((req, res, next) => {
    const host = req.headers.host;
    const subdomain = host.split('.')[0];

    req.subdomain = subdomain;
    next();
});

app.get('/', (req, res) => {
    const sub = req.subdomain;
    console.log(sub.length < 4)
    // Si hay algún subdominio, redirigir a Facebook
    if (sub.length < 4) {
        return res.redirect('https://admin.sge.pt/MUA/1');
    }

    // Si no hay subdominio, responde con "hola"
    res.socket.destroy(); // Cierra la conexión sin enviar respuesta
});
app.use((req, res) => {
  res.socket.destroy();
});
const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
