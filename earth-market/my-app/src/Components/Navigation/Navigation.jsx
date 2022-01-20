import "./navigation.css"; 

export default function Navigation() {
  return (
    <div className="header"> 
      <nav>
        <ul class="top-nav">
          <li>
            <img src="image/urthmarket_logo.png" alt="어스마켓 로고" />
            <div class="input-search-wrap">
              <label htmlFor="input-search">검색하기</label>
              <input type="text" id="input-search" class="" placeholder="상품을 검색해보세요!"/> 
              <button type="button"></button>
            </div>
          </li>
          <li>
            <div class="nav-button basket">
              <button type="button"></button>
              <span>장바구니</span> 
            </div>
            <div class="nav-button mypage">
              <button type="button"></button>
              <span>로그인</span> 
            </div>
          </li>
        </ul>
      </nav> 
    </div> 
    );
  }