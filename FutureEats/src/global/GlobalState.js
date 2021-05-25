import { useState, useEffect } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import labefood from 'services/labefood';
import React from 'react';

export default function GlobalState(props) {
  const [carrinho, setCarrinho] = useState({});
  const [products, setProducts] = useState([]);
  const [activeOrder, setActiveOrder] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const carrinhoStore = localStorage.getItem('carrinho');
      const productsStore = localStorage.getItem('products');
      if (carrinhoStore && productsStore) {
        setCarrinho(JSON.parse(carrinhoStore));
        setProducts(JSON.parse(productsStore));
      }
      labefood
        .getActiveOrder(token)
        .then((response) => {
          if (
            response.order &&
            new Date().getTime() > response.order.expiresAt
          ) {
            setActiveOrder({});
          } else {
            setActiveOrder(response.order);
            setTimeout(() => {
              setActiveOrder({});
            }, response.order.expiresAt - new Date().getTime());
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }, []);

  const resetAll = () => {
    setCarrinho({});
    setProducts([]);
    localStorage.removeItem('products');
    localStorage.removeItem('carrinho');
  };

  const checaCarrinho = (restaurant) => {
    if (carrinho && Object.keys(carrinho).length === 0) {
      setCarrinho({
        ...restaurant,
      });
      localStorage.setItem('carrinho', JSON.stringify(restaurant));
      return true;
    } else if (carrinho?.name === restaurant?.name) {
      return true;
    } else {
      const excludeCart = window.confirm(
        'Não é possivel adicionar comidas de diferentes restaurantes, você deseja excluir os items que estão no carrinho e adicionar esse?'
      );
      if (excludeCart) {
        setCarrinho({});
        setProducts([]);
        localStorage.removeItem('products');
        localStorage.removeItem('carrinho');
        alert(
          'Concluido! agora você pode adicionar os itens deste restaurante.'
        );
        return false;
      } else {
        return false;
      }
    }
  };

  const adicionarAoCarrinho = (item, restaurant) => {
    if (checaCarrinho(restaurant)) {
      const quantidade = Number(prompt('Qual a quantidade desejada?'));
      if (quantidade) {
        const novaLista = [...products, { ...item, quantity: quantidade }];
        localStorage.setItem('products', JSON.stringify(novaLista));
        setProducts(novaLista);
      }
    }
  };

  const removerDoCarrinho = (id) => {
    const carItem = products?.find((product) => product.id === id);
    if (!carItem) {
      return;
    }
    let novaLista;
    if (carItem.quantity < 2) {
      novaLista = products.filter((product) => {
        return product.id !== id;
      });
    } else {
      novaLista = products.map((product) => {
        if (product.id === id) {
          const newProduct = {
            ...product,
            quantity: product.quantity - 1,
          };
          return newProduct;
        }
        return product;
      });
    }
    if (novaLista.length === 0) {
      localStorage.removeItem('carrinho');
      localStorage.removeItem('products');
      setCarrinho({});
      setProducts([]);
    } else {
      localStorage.setItem('products', JSON.stringify(novaLista));
      setProducts(novaLista);
    }
  };

  const alterarCarrinho = (id, quantidade) => {
    const novaLista = products.map((product) => {
      if (product.id === id) {
        const newProduct = {
          ...product,
          quantity: quantidade,
        };
        return newProduct;
      }
      return product;
    });
    localStorage.setItem('products', JSON.stringify(novaLista));
    setProducts(novaLista);
  };

  const context = {
    carrinho,
    products,
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarCarrinho,
    resetAll,
    setActiveOrder,
    activeOrder,
  };

  return (
    <GlobalStateContext.Provider value={context}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
