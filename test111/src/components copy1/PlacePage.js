import React from "react";
import Categories from "./Categories";
import PlaceList from "./PlaceList";
import { useParams } from 'react-router-dom';

const PlacePage = () => {
  const param = useParams();
  // path 파라미터에서 all 이 아니면 param['*']에 저장이 되어 category에 저장된다.
  const category = param['*'] || 'all';
  return (
    <>
      <Categories category={category} />
      <PlaceList category={category} />
    </>
  );
}

export default PlacePage;