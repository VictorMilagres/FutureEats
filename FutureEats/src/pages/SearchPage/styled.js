import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: 'Roboto', sans-serif;

  & > *:nth-of-type(2) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100vw;
  border-bottom: solid 1px #e8e8e8;

  img {
    padding: 10px;
  }
  p {
    margin-left: 33%;
  }
`;

export const BoxCard = styled.div`
  width: 85vw;
  border: 1px solid #b8b8b8;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  height: 190px;
  margin-top: 20px;
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
  font-family: 'Roboto', 'Open Sans', sans-serif;
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
  font-family: 'Roboto', 'Open Sans', sans-serif;
`;
