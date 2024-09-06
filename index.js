const http = require('http');

const hostname = '127.0.0.1'; // ローカルホスト (localhost) のアドレス
const port = 3000;           // サーバーが待ち受けるポート

// サーバーの作成
const server = http.createServer((req, res) => {
  res.statusCode = 200;                            // ステータスコード200（成功）
  res.setHeader('Content-Type', 'text/plain');     // レスポンスヘッダーの設定（テキスト）
  res.end('Hello World\n');                        // クライアントに送信するメッセージ
});

// サーバーの起動
server.listen(port, hostname, () => {
  console.log(`サーバーが http://${hostname}:${port} で起動しました`);
});
