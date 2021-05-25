import {
  Container,
  Header,
  BoxCard,
  BoxInside,
  ImgBox,
  RestaurantName,
  ContainerInfos,
  InfoText,
  P,
  Carousel,
  CarouselContainer,
} from './styled';
import React, { useEffect, useState, useContext } from 'react';
import labefood from 'services/labefood';
import useProtectedPage from 'hooks/useProtectedPage';
import { goToSearch, goToRestaurant } from 'routes/coordinator';
import { useHistory } from 'react-router-dom';
import Footer from 'components/Footer';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Animation from 'components/Animation';
import ActiveOrderModal from 'components/ActiveOrderModal';
import { GlobalStateContext } from 'global/GlobalStateContext';

function HomePage() {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('Hamburguer');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { activeOrder } = useContext(GlobalStateContext);
  const history = useHistory();

  const filterCategories = (array) => {
    let mappedCategories = array.map((restaurant) => restaurant.category);
    let categoriesSet = new Set(mappedCategories);
    return [...categoriesSet];
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    labefood
      .getRestaurants(token)
      .then((response) => {
        const result = response.restaurants;
        setRestaurants(result);
        setCategories(filterCategories(result));
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(false);
  }, []);

  const filteredRestaurants = restaurants?.filter((restaurant) => {
    return restaurant.category === categoryFilter;
  });

  if (loading) {
    return <Animation />;
  }

  return (
    <Container>
      <Header>
        <P>FutureEats</P>
      </Header>
      <div>
        <TextField
          onClick={() => goToSearch(history)}
          id="outlined-basic"
          label="Restaurantes"
          variant="outlined"
          type="text"
          color="primary"
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'gray' }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <CarouselContainer>
        {categories.map((category) => {
          return (
            <Carousel
              key={category}
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </Carousel>
          );
        })}
      </CarouselContainer>

      <BoxCard>
        {filteredRestaurants?.map((restaurant) => {
          return (
            <BoxInside
              onClick={() => goToRestaurant(history, restaurant.id)}
              key={restaurant.id}
              title={restaurant.description}
            >
              <ImgBox src={restaurant.logoUrl} alt="restaurant" />
              <RestaurantName>{restaurant.name}</RestaurantName>
              <ContainerInfos>
                <InfoText>{restaurant.deliveryTime} min</InfoText>
                <InfoText>Frete R${restaurant.shipping}</InfoText>
              </ContainerInfos>
            </BoxInside>
          );
        })}
      </BoxCard>

      {activeOrder && Object.keys(activeOrder).length > 0 ? (
        <ActiveOrderModal order={activeOrder} />
      ) : (
        <> </>
      )}

      <Footer />
    </Container>
  );
}

export default HomePage;
