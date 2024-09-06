import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

// Yahoo APIを利用するプロキシエンドポイント
app.get('/yahoo', async (req, res) => {
    const keyword = req.query.keyword;  // 検索キーワードを取得
    const YAHOO_APP_ID = 'dj00aiZpPTA2bG9Zd2pTSXZ2VCZzPWNvbnN1bWVyc2VjcmV0Jng9OWM-';  // あなたのYahooアプリケーションID

    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${YAHOO_APP_ID}&query=${keyword}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);  // APIレスポンスをクライアントに返す
    } catch (error) {
        res.status(500).json({ error: 'Yahoo APIリクエストに失敗しました' });
    }
});

// 楽天 APIを利用するプロキシエンドポイント
app.get('/rakuten', async (req, res) => {
    const keyword = req.query.keyword;  // 検索キーワードを取得
    const RAKUTEN_APP_ID = '1079222175551345366';  // あなたの楽天アプリケーションID

    const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=${RAKUTEN_APP_ID}&keyword=${keyword}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);  // APIレスポンスをクライアントに返す
    } catch (error) {
        res.status(500).json({ error: '楽天APIリクエストに失敗しました' });
    }
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
