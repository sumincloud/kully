import React from 'react';
import dummy from '../db/product_data.json';
import { BsCart2 } from 'react-icons/bs';

function BestItem(props) {
  return (
    <>
      <article className='BestItem'>
        <h2>뷰컬페에서 가장 인기있어요🏅</h2>
        <p>지금 뷰티컬리는 최대 85% 빅세일 중!</p>

        {/* map함수를 활용하여 배열데이터 출력 */}
        <ul className='product_box'>
          {dummy.products.map(product=>(
            <li key={product.name} className='product'>
              <div className='img_box'>
                <img src={`${process.env.PUBLIC_URL}/images/${product.img}`} alt="상품이미지" />
              </div>
              <div className="button-wrapper">
                <button type="button">
                  <BsCart2 size={20} color="#333" />담기
                </button>
              </div>
              <p>{product.name}</p>
              <p>{Number(product.price).toLocaleString()}원</p>
              <div className="discount">
                <span>{product.sale*100}%</span>
                <span>{(Math.floor(Number(product.price) * (1 - product.sale) / 10) * 10).toLocaleString()}원</span>
              </div>
            </li>
            ))}
        </ul>
      </article>
    </>
  );
}

export default BestItem;