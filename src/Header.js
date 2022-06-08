import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://www.infinitt.com/pub/uploads/CK/essay/311bbf74dea50aef1086e5ada9793595.png" />

      {/*검색 */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />

      </div>

      <div className="header_nav">

        <div className="header_option">
          <span className="header_optionLineOne"> 안녕하세요 ! </span>
          <span className="header_optionLineTwo"> 로그인하기 </span>

        </div>

        <div className="header_option">
          <span className="header_optionLineOne"> 돌아가기 </span>
          <span className="header_optionLineTwo"> 병원/약국 찾기 </span>
        </div>


        <div className="header_option">
          <span className="header_optionLineOne"> 반가워요 </span>
          <span className="header_optionLineTwo"> 구독과 좋아요 </span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwoheader_basketCount">
            0
          </span>
        </div>

      </div>

    </div>
  );
}

export default header;