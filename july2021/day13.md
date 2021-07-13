읽기전에 가지고 있어야 할 기본자세

1.모르는 영어단어는 의미부터 파악

2.흐름을 중요시 하자

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App/>, document.getElementById('natto'));
```

1.application이 로드할때 빈 html을 로드하고 react가 html을 밀어넣어준다.

2.ReactDOM 은 JS랑 연결시켜줌.  가상돔을 사용하기때문에 빠르다.

```jsx
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
```

1.넣어 주지 않는다면 React는 여기에 있는 jsx가 있는 component사용하는것을 이해못함.

- jsx = JS와html조합 xml.. / component에 정보를 보낼수있다
- 나중에 map에 넣은 props를 Movie로 보내기위해 중요한 역할을한다.

2.Promise API지원하는 요청모듈 혹은 라이브러리 

Axios vs Fetch API

axios가 좀더 쉽게 표현된다.

3.Fetch API vs axios 

JS의 built-in 라이브러리라는 특성때문에 react에서 axios사용하는것을 선호.

```jsx
class Home extends React.Component {
state ={ isLoading: true, movies:[]};
```

extends 하는이유 ?

react.component 가 가진것들중 state를 불러온다.

컴포넌트 만들때마다 모든것을 만들고싶지않아서.

```jsx
state = {
		isLoading : true
}
render() {
	return (
		<div>
			(isLoading ? "Loading" : "we are ready"}

```

isLoading이 정의되지않았다고 에러 뜬다.

사용할려면 매번 this.state  를 써줘야 한다  귀찮으니 변수로 하나 만들어 놓아서 쓴다.

그것이  밑에 코드중

`const {isLoading} = this.state;`

```jsx
state = {
		isLoading : true
}
render() {
	const {isLoading} = this.state;
	return (
		<div>
			(isLoading ? "Loading" : "we are ready"}
		</div>
```

셋 타임아웃 추가해보기.  

componentDidMount()가 나온다 잠시 생명주기 흐름을 보고 다음 코드를 보자.

constructor() - render보다 먼저 호출, 

render() - component가 render 중이다

componentDidMount() component가render가 되었음 알려줌. render하자마자 호출되는메서드

Updating >

shouldComponentUpdate() component가 update를 할지 말지를 결정

render() render

componentDidUpdate() component가 update되었음을 알려줌

componentWillUnmonut()

```jsx
state = {
		isLoading : true
}

componentDidMount() {
	setTimeout( ()=> {
		this.setState( {isLoading: false, book: true } )
	}, 5000);
}

render() {
	const {isLoading} = this.state;
	return (
		<div>
			(isLoading ? "Loading" : "we are ready"}
		</div>
```

componentDidMount() 때  주로 setTimeout,AJAX요청,dom접근,setInterval, 

setState도 가능 단. setInterval식으로 state를 계속 변경시키는 로직이 아니라면 가능함.

*코드 분석때 유용한 방법

흐름을 파악할때 () {} 의 시작 과 끝을 먼저 파악한 다음 코드내용을 보면서 어디로 가는지

확인이 필요함.

componentDidMount에서 data를 fetch한다.

일반적으로 자바스크립에서 데이터를 패치할때 Fetch()를 사용함 여기선 axios

`npm i axios`

## axios.get()사용

```jsx
getMovies = async () => {
	const {
		data:{
			data: { movies }
	}
} = await axios.get(
'https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
this.setState({ movies, isLoading: false });
};
```

async  axios.get은 빠르지않기 떄문에 붙여줘야함. + async는 함수가 비동기라는것을 알려줌.

덤으로 await 을 axios.get 앞에 붙여줌으로써

정확한 위치를 가르쳐준다.

`sort_by=rating`는 api 사이트에서 제공해주는 방법 

`data:,data:,movies` 이부분

getMovies안에서 console.log(movies)를 찍어보면

웹 개발자 도구에서 확인이 가능하다 받아온 API자료를 볼수있는데

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bb98e50-a86e-45ee-a4e3-7df1feececa2/_2021-07-11_00.42.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bb98e50-a86e-45ee-a4e3-7df1feececa2/_2021-07-11_00.42.52.png)

빨간색 표시된곳 그냥 이름이다 

```jsx
const {
		data:{
			data: { movies }
	}
} 
```

겁 먹지말자 그냥 경로 따라가서 위치 지정해준것이다.

`console.log(movies.data.data.movies);` 똑같은 코드다.

`this.setState( {movies : movies} );`

앞의 movies는 setState로 부터 / 뒤의 movies는 axios로 부터 온것임.

이것을 단축하여 사용한 코드가 밑 코드 

`this.setState( {movies} );`

한개의 setState에서 2개의 상태를 한번에 변경 시키는것이 밑 코드

`this.setState({ movies, isLoading: false });`

`isLoading:false` state를 변경시켜준것임.

```jsx
{movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
```

axios로 가져온 데이터를 맵에 담아서 리턴해주는 코드다. movies.js라는 곳으로 이동한다.

이번 장은 component의 생명주기 랑 

api불러오기를 했다. 그다음 장은 api를 화면에 view를 시켜보겠다.