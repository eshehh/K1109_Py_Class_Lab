
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

// styled-components: 스타일이 적용된 html 요소를 생성할수 있게 해준다.
// 역따옴표(``)안쪽에 css를 정의하고,
// 변수를 만들어서 저장시킨 후 해당 변수를 html태그 대신 사용한다.

// styled-components 를 이용한 스타일이 적용된 div태그 작성
const StyledDiv = styled.div`
  width:200px;
  height:50px;
  background-color:red;
  `

function AppCopy() {
  const [data,setData] = useState(null);

  //async, await 미적용
  // -> ajax통신이 완료되기 전에 다음 소스코드를 실행시킨다.
  // const onClick = () => {
  //   console.log('실행1');
  //   const news = axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=fcbf3390742f4100af488c56e3f73672')
  //   news.then((result)=>{
  //     console.log(result);
  //     setData(result.data);
  //   });
  //   console.log('실행2');
  // }

  // async, await 적용
  // -> ajax통신이 완료된 이후 순차적으로 소스코드를 실행시킨다.
  const onClick = async () => {
    console.log('실행1');
    try {
    const news = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=fcbf3390742f4100af488c56e3f73672')
    console.log(news.data);
    setData(news.data);
    }
    catch (e) {
    console.log(e);
    }
    console.log('실행2');
  }
  const newsList = [];
  if(data != null){
    for(const news of data.articles){
      newsList.push(
      <li key={news.url}>
        <a href={news.url} target='_blank' rel="noreferrer">{news.title}</a>
      </li>
      );
    }
  }
  return (
    <div>
      {/* 스타일이 적용된 div태그 사용
          일반적인 컴포넌트를 사용하듯이 적용 시키면 된다. */}
      <StyledDiv>
        <button onClick={onClick}>ajax통신하기</button>
      </StyledDiv>
      {/* {
        //JSON.stringify를 그냥 실행하면 데이터가 한줄로만 출력이 되어
        // 가독성이 좋지 않다.
        //현재 state값(data)이 null이 아닐경우 textarear태그가 보여지도록 한다.
        data &&
        <textarea rows={20} cols={50} readOnly={true}
          value={JSON.stringify(data)}></textarea>
      } */}
      {
        //JSON.stringify에 매개변수 추가하여 가독성 향상
        //현재 state값(data)이 null이 아닐경우 textarear태그가 보여지도록 한다.
        data &&
        <textarea rows={20} cols={50} readOnly={true}
          value={JSON.stringify(data, null, 2)}></textarea>
      }
      {newsList}
    </div>
  );
}

export default AppCopy;
