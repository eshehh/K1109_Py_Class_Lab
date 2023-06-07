import React, { useEffect, useState } from 'react';
import Map from './Map';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const TongyeongPage = () => {
  const [tongyoungData, setTongyoungData] = useState([]);
  const [trendLineData, setTrendLineData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/data');
      const jsonData = await response.json();

      setTongyoungData(jsonData.results9);
      const trendLineData = calculateTrendLine(jsonData.results9);
      setTrendLineData(trendLineData);
    } catch (error) {
      console.error('API 요청 오류:', error);
    }
  };

  const calculateTrendLine = (data) => {
    // Extract the temperature values from the data
    const temperatures = data.map((entry) => entry['Stemp(°C)']);
  
    // Calculate the linear regression parameters
    const n = temperatures.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;
    for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += temperatures[i];
      sumXY += i * temperatures[i];
      sumXX += i * i;
    }
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
  
    // Generate the trend line data
    const trendLineData = data.map((entry, index) => ({
      ...entry,
      trend: slope * index + intercept,
    }));
  
    return trendLineData;
  };

  return (
    <div>
      <Map></Map>
      <div>
        <LineChart
          width={1500}
          height={900}
          data={tongyoungData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Stemp(°C)" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="linear" data={trendLineData} dataKey="trend" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
  );
};

export default TongyeongPage;
