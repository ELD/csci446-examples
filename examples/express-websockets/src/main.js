import express from 'express';
import expressws from 'express-ws';

const port = 3001;
const app = express();
expressws(app);

app.set('ws', new Map());

app.get('/', (req, res) => {
  res.send('test');
});

app.ws('/:room', (ws, req) => {
  const websocketMap = req.app.get('ws');
  const room = req.params.room;

  if (!websocketMap.has(room)) {
    websocketMap.set(room, new Set());
  }

  websocketMap.get(room).add(ws);
  ws.on('message', (message) => {
    websocketMap.get(room).forEach((ws) => {
      ws.send(message)
    });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
