import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고" />
      </h1>
    </header>
  );
}

export default Header;