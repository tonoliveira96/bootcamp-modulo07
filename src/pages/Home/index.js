import React from 'react';
import {MdShoppingBasket} from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
        <strong>Tênis Cool</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingBasket sixe={16} color="#fff" />
          </div>
          <span>Adicionar ao carinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
        <strong>Tênis Cool</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingBasket sixe={16} color="#fff" />
          </div>
          <span>Adicionar ao carinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
        <strong>Tênis Cool</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingBasket sixe={16} color="#fff" />
          </div>
          <span>Adicionar ao carinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
        <strong>Tênis Cool</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingBasket sixe={16} color="#fff" />
          </div>
          <span>Adicionar ao carinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
        <strong>Tênis Cool</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingBasket sixe={16} color="#fff" />
          </div>
          <span>Adicionar ao carinho</span>
        </button>
      </li>
    </ProductList>
  );
}
