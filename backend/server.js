const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'mydb',
});

// console.log(cors);


const app = express();
const port = 3000;
app.use(cors());

// 🔹 中介層函式：紀錄每個進來的請求
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // ⬅️ 一定要呼叫 next() 才會繼續往下走
}

// 使用中介層
app.use(logger); // 套用到所有路由


app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`伺服器時間：${result.rows[0].now}`);
    } catch (err) {
        console.error('查詢錯誤：', err);
        res.status(500).send('資料庫錯誤');
    }
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node backend 👋' });
});

app.listen(port, () => {
    console.log(`伺服器正在 http://localhost:${port} 運行`);
});
