import express from 'express';

const app = express();

// Redirigir a Google en cualquier ruta excepto /
app.use((req, res, next) => {
    if (req.path === '/') {
        // res.socket.destroy(); // Cierra la conexión sin enviar respuesta
        // res.redirect('https://admin.sge.pt/MUA/1'); // Redirige cualquier otra ruta
        
        res.redirect('https://portal.iad.luf.temporary.site/'); // Redirige cualquier otra ruta


    } else {
        // res.redirect('https://admin.sge.pt/MUA/1'); // Redirige cualquier otra ruta
        res.redirect('https://portal.iad.luf.temporary.site/'); // Redirige cualquier otra ruta

    }
});

// Middleware para capturar subdominio
// app.use((req, res, next) => {
//     const host = req.headers.host;
//     const subdomain = host.split('.')[0];

//     req.subdomain = subdomain;
//     next();
// });

// app.get('/', (req, res) => {
//     const sub = req.subdomain;

//     // Si hay algún subdominio, redirigir a Facebook
//     if (sub.length < 7) {
//         return res.redirect('https://admin.sge.pt/MUA/1');
//     }

//     if (sub === 'promo1') {
//         return res.redirect('https://admin.sge.pt/MUA/1');
//     } else if (sub === 'promo2') {
//         return res.redirect('https://admin.sge.pt/MUA/1');
//     }

//     // Si no hay subdominio, responde con "hola"
//     res.socket.destroy(); // Cierra la conexión sin enviar respuesta
// });
// app.use((req, res) => {
//     res.socket.destroy();
// });

const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
