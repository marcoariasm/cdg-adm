// pages/api/publicar-discord.ts

// export default async function handler(req, res) {
//   const webhookUrl = 'https://6327-2001-1388-540-318e-1409-39c6-ce22-2650.ngrok-free.app';

//   const mensaje = {
//     content: '🕒 Publicación automática desde Next.js',
//     username: 'Bot de Clase',
//   };

//   const respuesta = await fetch(webhookUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(mensaje),
//   });

//   if (respuesta.ok) {
//     return res.status(200).json({ ok: true, message: 'Publicado en Discord' });
//   } else {
//     return res.status(500).json({ ok: false, error: 'Error al publicar' });
//   }
// }
