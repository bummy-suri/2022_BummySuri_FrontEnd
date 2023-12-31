import styled from 'styled-components';
import Score from '../../assets/nft_game/score.png';
import PurpleDot from '../../assets/nft_game/purpledot.png';
import Shadow from '../../assets/nft_game/bottom.png';
import { Link, useLocation } from 'react-router-dom';
import NoOpenModal from '../../components/main/NoModal';
import NoGame from '../../components/main/NoGame';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Top = styled.div`
  color: white;
  margin-top: 5vh;
  position: relative;
  text-align: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Left = styled.div`
  position: absolute;
  color: white;
  top: 4vh;
  right: 5vw;
  img {
    width: 97px;
  }
`;

const Point = styled.p`
  font-size: 15px;
  position: absolute;
  top: 12px;
  right: 13px;
`;
const Middle = styled.div`
  display: flex;
  margin-top: 5vh;
  flex-direction: column;
  align-items: center;
  img {
    width: 90vw;
    height: 90vw;
    box-shadow: inset 0px 0px 23px #030205;
    border-radius: 30px;
    border: 3px solid rgba(250, 250, 250, 0.4);
    background-color: radial-gradient(78.15% 77.85% at 50.16% 63.19%, #fec0ff 2.08%, #6256e9 61.38%, #1512a5 100%);
  }
  button {
    background-color: rgba(84, 84, 84, 0.64);
    border: 2px solid rgba(250, 250, 250, 0.4);
    border-radius: 27.5px;
    backdrop-filter: blur(10px);
    width: 75%;
    height: 55px;
    color: white;
    font-size: 18px;
    margin-top: -4vh;
    font-weight: 700;
    z-index: 1000;
  }
`;
const Detail = styled.div`
  margin: 20px auto 100px auto;
  width: 90%;
  border-radius: 13px;
  background-color: #1d1b23;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
  padding-left: 20px;
`;
const Up = styled.div`
  img {
    margin-right: 10px;
    width: 15px;
  }
`;
const DetailTop = styled.span`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
const Little = styled.span`
  color: white;
  font-weight: 500;
  font-size: 14px;
`;
const DetailLine = styled.div`
  display: flex;
  font-family: 'Noto Sans PRO', sans-serif;
`;
const DetailLeft = styled.p`
  color: white;
  font-size: 14px;
  width: 40vw;
`;
const DetailRight = styled.p`
  color: #fafafa;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
`;

const ShadowBox = styled.div`
  img {
    width: 100vw;
    z-index: 100;
    height: 30vh;
  }
  position: fixed;
  bottom: 0px;
  z-index: 100;
`;
const Btn = styled.button`
  background-color: #7000ff;
  border-radius: 23.5px;
  border: 0px;
  color: white;
  font-size: 16px;
  width: 43vw;
  height: 47px;
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 5vh;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

interface RouteState {
  myNFTData: any;
}

function NFT_Main() {
  const [myPoint, setMyPoint] = useState<number>();
  const location = useLocation();
  const { myNFTData } = location?.state as RouteState;
  console.log('this is my data', myNFTData);
  const [noopenModal, setNoOpenModal] = useState(false);
  const [nogameModal, setNoGameModal] = useState(false);
  const onClick = () => {
    setNoOpenModal(prev => !prev);
  };
  const gameonClick = () => {
    setNoGameModal(prev => !prev);
  };
  function showme() {
    alert(`${JSON.stringify(myNFTData)} my address : ${myNFTData.userAddr}`);
  }

  useEffect(() => {
    axios({
      url: 'https://angry-dongmin.com/myPoints',
      method: 'post',
      data: {
        userAddr: myNFTData.userAddr,
      },
    }).then(({ data }) => {
      setMyPoint(data.points);
    });
  });

  return (
    <>
      <Top>
        <Title>나의 NFT</Title>
      </Top>
      <Left>
        <img src={Score}></img>
        <Point>{myPoint == null ? '' : myPoint}</Point>
      </Left>
      <Middle>
        <img src={myNFTData.metadata.image} alt="이미지 안떠요"></img>
        <button
          onClick={() => {
            // sharing();
          }}>
          {myNFTData.username}님의 {myNFTData.character} NFT
        </button>
      </Middle>
      <Detail>
        <Up>
          <img src={PurpleDot} />
          <DetailTop>{myNFTData.username} </DetailTop>
          <Little>님의 {myNFTData.character}</Little>
        </Up>
        <DetailLine>
          <DetailLeft>COLOR</DetailLeft>
          <DetailRight>{myNFTData.metadata.attributes[0].value}</DetailRight>
        </DetailLine>
        <DetailLine>
          <DetailLeft>CLOTHING</DetailLeft>
          <DetailRight>{myNFTData.metadata.attributes[1].value}</DetailRight>
        </DetailLine>
        <DetailLine>
          <DetailLeft>FACE</DetailLeft>
          <DetailRight>{myNFTData.metadata.attributes[2].value}</DetailRight>
        </DetailLine>
        <DetailLine>
          <DetailLeft>HAND</DetailLeft>
          <DetailRight>{myNFTData.metadata.attributes[3].value}</DetailRight>
        </DetailLine>
        <DetailLine>
          <DetailLeft>HAT</DetailLeft>
          <DetailRight>{myNFTData.metadata.attributes[4].value}</DetailRight>
        </DetailLine>
      </Detail>
      <ShadowBox>
        <BtnBox>
          <Btn onClick={onClick}>정기전 예측하기</Btn>
          <Btn onClick={gameonClick}>경품 응모하기</Btn>
        </BtnBox>
        {noopenModal ? <NoOpenModal setOpenModal={setNoOpenModal} openModal={noopenModal} /> : null}
        {nogameModal ? <NoGame setOpenModal={setNoGameModal} openModal={nogameModal} /> : null}
        <img src={Shadow} />
      </ShadowBox>
    </>
  );
}
export default NFT_Main;
