import React, { useEffect, useState } from 'react';
import Map from './Map';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, ReferenceArea } from 'recharts';


const GeojedoPage = () => {
  
  const [squidre1Data, setre1Data] = useState([]);
  const [squidre2Data, setre2Data] = useState([]);
  const [squidre3Data, setre3Data] = useState([]);
  const [squidre4Data, setre4Data] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/data');
      const jsonData = await response.json();
      
      setre1Data(jsonData.results1);
      setre2Data(jsonData.results2);
      setre3Data(jsonData.results3);
      setre4Data(jsonData.results4);
    } catch (error) {
      console.error('API 요청 오류:', error);
    }
  };
  

  return (
    <div>
      <Map></Map>
      <div>
        <LineChart
          width={1500}
          height={900}
          data={squidre1Data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="일시" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="2022 실측 수온(°C)" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2022 기온 예측 수온(°C)" stroke="#7774d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2022 기후 예측 수온(°C)" stroke="#6664d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </div>
      <div>
      <LineChart
          width={1500}
          height={900}
          data={[squidre3Data,squidre4Data]}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="일시" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="평균 수온(°C)" stroke="#8884d8" activeDot={{ r: 8 }} data={squidre4Data} />
          <Line type="monotone" dataKey="예측 수온(°C)" stroke="#7774d8" activeDot={{ r: 8 }} data={squidre3Data}/>
          
          
        </LineChart>
      </div>
      <div>
      <LineChart
          width={1500}
          height={900}
          data={squidre2Data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="일시" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="2022 평균 수온(°C)" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2042 lower 평균 수온(°C)" stroke="#7774d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2042 upper 평균 수온(°C)" stroke="#6664d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2042 평균 수온(°C)" stroke="#6664d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </div>
    </div>
  );
};

export default GeojedoPage;