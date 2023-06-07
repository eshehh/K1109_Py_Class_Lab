const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'k404',
  database: 'forecast'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL에 연결되었습니다.');
  }
});

app.use(cors());
app.get('/api/data', async (req, res) => {
  console.log('데이터 요청 받음');

  try {
    // const query1 = 'SELECT * FROM geojedata2022';
    // const query2 = 'SELECT * FROM geojedatacompare2022';
    // const query3 = 'SELECT * FROM geojedataforecast';
    // const query4 = 'SELECT * FROM geojedataoriginal';
    // const query5 = 'SELECT * FROM geomoondata2022';
    // const query6 = 'SELECT * FROM geomoondatacompare2022';
    // const query7 = 'SELECT * FROM geomoondataforecast';
    // const query8 = 'SELECT * FROM geomoondataoriginal';
    const query9 = 'SELECT * FROM tongyoung';
    const query10 = 'SELECT * FROM chujado';
    

    // const results1 = await executeQuery(query1);
    // const results2 = await executeQuery(query2);
    // const results3 = await executeQuery(query3);
    // const results4 = await executeQuery(query4);
    // const results5 = await executeQuery(query5);
    // const results6 = await executeQuery(query6);
    // const results7 = await executeQuery(query7);
    // const results8 = await executeQuery(query8);
    const results9 = await executeQuery(query9);
    const results10 = await executeQuery(query10);
    

    console.log('불러온 데이터:', results9);

    const responseData = {
      // results1,results2,results3,results4,results5,results6,results7,results8,
      results9,results10
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(responseData);
  } catch (error) {
    console.error('쿼리 실행 오류:', error);
    res.status(500).json({ error: '쿼리 실행에 실패했습니다.' });
  }
});

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});