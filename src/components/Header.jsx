import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BsGeoAlt } from 'react-icons/bs';
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from 'react-icons/bs';

function Header(props) {
  return (
    <header>
      <div className='h_box'>
        <a href="링크" title='앱다운'>
          지금 가입하고, <b>1만원 할인 쿠폰</b> 받아가세요!
        </a>
        <div className='h_top'>
          <div>
            <a href="링크" title="회원가입">회원가입</a>
            <a href="링크" title="로그인">로그인</a>
            <a href="링크" title="고객센터">고객센터</a>
          </div>
          <div>
            <h1>
              <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고" />
            </h1>
            <a href="링크" title='마켓컬리'>마켓컬리</a>
            <a href="링크" title='뷰티컬리'>뷰티컬리</a>
            <div className='h_search'>
              <input placeholder="검색어를 입력해주세요" />
              <button id="submit">
                <BsSearch size={20} color="rgb(95, 0, 128)" />
              </button>
            </div>
            <div className='h_icon'>
              <BsGeoAlt size={30} color="#333" />
              <BsHeart  size={25} color="#333" />
              <BsCart2  size={30} color="#333" />
            </div>
          </div>
        </div>
        <div className='h_menu'>
          <div>카테고리</div>
          <ul>
            <li><a href="링크" title='신상품'>신상품</a></li>
            <li><a href="링크" title='베스트'>베스트</a></li>
            <li><a href="링크" title='알뜰쇼핑'>알뜰쇼핑</a></li>
            <li><a href="링크" title='특가/혜택'>특가/혜택</a></li>
          </ul>
          <div>샛별 하루 배송안내</div>
        </div>
      </div>



      
    </header>
  );
}

export default Header;