import useProtectedPage from 'hooks/useProtectedPage';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import labefood from 'services/labefood';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  Container,
  Header,
  BoxCard,
  ImgBox,
  RestaurantName,
  ContainerInfos,
  InfoText,
} from './styled';
import { goToLastPage, goToRestaurant } from 'routes/coordinator';
import arrow from '../../assets/arrow.png';
import Animation from 'components/Animation';

function SearchPage() {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    labefood
      .getRestaurants(token)
      .then((response) => {
        setRestaurants(response.restaurants);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredRestaurants = restaurants
    ?.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    ?.map((restaurant) => {
      return (
        <BoxCard
          onClick={() => goToRestaurant(history, restaurant.id)}
          key={restaurant.id}
          title={restaurant.description}
        >
          <ImgBox width="300" src={restaurant.logoUrl} alt="restaurant" />
          <RestaurantName>{restaurant.name}</RestaurantName>
          <ContainerInfos>
            <InfoText>{restaurant.deliveryTime} min</InfoText>
            <InfoText>Frete R${restaurant.shipping}</InfoText>
          </ContainerInfos>
        </BoxCard>
      );
    });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <Animation />;
  }

  return (
    <Container>
      <Header>
        <img
          src={arrow}
          alt="navigation arrow"
          onClick={() => goToLastPage(history)}
        />
        <p>Busca</p>
      </Header>
      <TextField
        name="search"
        type="text"
        label="Restaurantes"
        variant="outlined"
        color="primary"
        margin="normal"
        value={searchQuery}
        placeholder="Restaurante"
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: 'gray' }} />
            </InputAdornment>
          ),
        }}
      />

      {searchQuery ? (
        filteredRestaurants
      ) : (
        <p>Busque por nomes de restaurante</p>
      )}
    </Container>
  );
}

export default SearchPage;
