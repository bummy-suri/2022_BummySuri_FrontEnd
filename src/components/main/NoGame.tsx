import * as React from 'react';
import clsx from 'clsx';
import { styled as muiStyled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';
import left from '../../assets/whoyou1.png';
import right from '../../assets/whoyou2.png';

const BackdropUnstyled = React.forwardRef<HTMLDivElement, { open?: boolean; className: string }>((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});
const Modal = muiStyled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ModalBox = styled.div`
  position: relative;
  width: 80vw;
  height: 35vh;
  border-radius: 8px;
  border: none;
  backdrop-filter: blur(10px);
  background-color: #0e0e0e;
  box-shadow: 0px 0px 20px 10px rgba(85, 84, 84, 0.19);
  color: #fff;
  padding: 20px 27px;
  z-index: 1400;
  &:focus {
    outline: none;
  }
`;

const Backdrop = muiStyled(BackdropUnstyled)`
  z-index: 100;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(41, 41, 41, 0.6);
  backdrop-filter: blur(7px);

  -webkit-tap-highlight-color: transparent;
`;

const Xbtn = styled.button`
  position: absolute;
  right: 10px;
  /* right: 10px;
  top: 10px;

  /* border-radius: 5px; */
  border: 0px;
  background-color: rgba(17, 53, 181, 0);
  height: 40px;
  width: 40px;
  font-size: 25px;
  transition: all 0.2s ease-out;
  color: white;
  &:hover {
    font-size: 23px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Success = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 30px;
  z-index: 800;
`;

const Contents = styled.div`
  text-align: center;
  z-index: 800;
`;

const Middle = styled.span`
  font-size: 15px;
  line-height: 25px;
  font-weight: 600;
  z-index: 800;
  margin-bottom: 10px;
`;

const Small = styled.span`
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  z-index: 800;
  margin-bottom: 10px;
`;
interface IOpenModal {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const ImgBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
const EachBox = styled.div``;
const Bottom = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 300;
  z-index: 800;
  margin-bottom: 2px;
`;

const Box = styled.div`
  width: 100%;
  margin-top: 20px;
`;

function NoGame({ setOpenModal, openModal }: IOpenModal) {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
      components={{ Backdrop }}>
      <Fade in={openModal} timeout={400}>
        <ModalBox>
          <Xbtn onClick={closeModal}>X</Xbtn>
          <Contents>
            <Success>상품 응모 기간 종료!</Success>
            <div style={{ marginBottom: '10px' }}>
              <Middle>
                버미와 수리 프로젝트에 <br />
                많은 관심 주셔서 감사합니다 🫶
              </Middle>
            </div>
            <Small>상품 응모 결과는 11월 10일 개별 연락 갈 예정입니다!</Small>
          </Contents>
        </ModalBox>
      </Fade>
    </Modal>
  );
}

export default NoGame;
