```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';
```

`npm install react-router-dom`

라우팅= 다른주소에 다른 화면을 보여준다.

```jsx
function Movie({ id, year, title, summary, poster, genres }) {
<div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
```

`id,year,title,summary,poster,genres`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a6cd6ad-aa32-421c-99cb-27d6cec434be/_2021-07-11_23.49.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a6cd6ad-aa32-421c-99cb-27d6cec434be/_2021-07-11_23.49.02.png)

클릭했을때 to 해당하는 pathname의 경로로 이동한다.

```jsx
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

사용이유 : 전달 받은 데이터의 유효성을 검증하기위해서, Type확인을 통하여 bug를 잡기위함

`number,string,elementType,arrayof,fragment,node,instanceOf,` 등 종류들이있다.

위 종류들은 모두 선택 사항이다.

`isRequired`prop가 제공되지않았을때 경고가 보이도록 함.

유효하지 않은 값이 전달될 경우에는 JavaScript 콘솔로 통해 경고문이 보임.

그 경고문은 개발 모드에서만 보임 이용자에게 보일필요없음 성능상 빠르게하기위해

번외:

> `Flow,TypeScript` 와 같은 JS 도구를 사용할수있음. `typeScript`은 따로 정리해놓았고 이번 프로젝트에서는 class component를 사용했지만 `React.memo / React.forwardRef`에서도 동일하게 적용가능

```jsx
<img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}
```

div~h3,5,ul,li담아놨던 데이터를 보여주기위해 HTML에 클래스네임을 추가해줬고

`{title}{year}`

로 불러옴

```jsx

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
```

<Route  <<<주소에 따라 화면을 보여주는 라우팅 기능을 가진 컴포넌트다.

path="바뀔 주소의 이름 " component={렌더링될 컴포넌트}

about에선 About 랜더링

movide/:id" 에선 Detail을 랜더링

즉. 저 경로에는 무비항목을 클릭했을때 실행되는 컴포넌트.

`Link`컴포넌트는 페이지를 새로 불러오지않고 유지한 상태에서

History API만을 사용하여 페이지의 주소만 변경해준다. 페이지 전환 방지!

*** exact라는 옵션이있다. 

랜더링될 컴포넌트 } 옆에다가 exact={true] /> 해주면 된다.

이 패스에서만 해당 라우팅을 이뤄지도록 명령어

exact만 작성해도 기본으로 트루로 설정되어있음.

왜 사용 ?  / 빈칸 때문에 같이 랜더링 될때가 있음.

`a href = "localhost:3000/about">`

링크 사용시 a 링크 사용 금지 새로 페이지가 랜더링되기때문. 리액트 사용하는 이유사라짐