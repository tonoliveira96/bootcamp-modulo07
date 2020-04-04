import React, {Component}from 'react';
import {MdShoppingBasket} from 'react-icons/md'
import api from '../../services/api';
import {formatPrice} from '../../util/format';

import { ProductList } from './styles';

export default class Home extends Component {

  state={
    products:[]
  }


async componentDidMount(){
  const response = await api.get('products');

  const data = response.data.map(product=>({
    ... product,
    priceFormatted: formatPrice(product.price)
  }))

  this.setState({products: data})
}



  render(){

    const {products} = this.state;

    return (
      <ProductList>

        {
          products.map(product=>(
            <li key={product.id}>
            <img src={product.image} alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingBasket sixe={16} color="#fff" />
              </div>
              <span>Adicionar ao carinho</span>
            </button>
          </li>
          ))
        }


      </ProductList>
    );
  }
}
