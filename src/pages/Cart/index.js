import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'


import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-ez-flex-2-masculino/66/D16-4581-266/D16-4581-266_zoom2.jpg?ts=1570129001&ims=326x" alt="Tenis"/>
            </td>
            <td>
              <strong>Pisante maneiro</strong>
              <span>R$ 129,900</span>
            </td>
            <td>
              <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1}/>
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7129c1"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido </button>
          <Total>
            <span>Total</span>
            <strong>R$1920,00</strong>
          </Total>

      </footer>
    </Container>
  );
}
