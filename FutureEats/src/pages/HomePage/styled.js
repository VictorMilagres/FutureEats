import styled from 'styled-components';

export const BoxCard = styled.div`
  width: 85vw;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  margin-bottom: 10px;
  height: 190px;
  margin-top: 20px;
`;

export const BoxInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 120px;
`;

export const RestaurantName = styled.p`
  width: 80vw;
  display: flex;
  justify-content: flex-start;
  padding-top: 8px;
  font-family: 'Roboto', sans-serif;
  color: #5cb646;
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
`;

export const ContainerInfos = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #b8b8b8;
  margin: 5px 0 0 0;
  font-family: 'Roboto', sans-serif;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: 3rem;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: 'Roboto', sans-serif;

  & > div:nth-of-type(2) {
    width: 90%;
  }
`;

export const P = styled.p`
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100vw;
  border-bottom: solid 1px #e8e8e8;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
export const Carousel = styled.p`
  padding: 0px 18px;
  &:hover {
    cursor: pointer;
    color: #5cb646;
  }
`;
