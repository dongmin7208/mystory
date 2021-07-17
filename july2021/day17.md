1. React
    - 많은 자료가있고 배우기가 좋을거같아서 시작했습니다.
2. Axios
    - Node.js를 위한 `promise API`를 활용하는 HTTP 통신 라이브러리
    - `response timeout`처리 방법이 있다(fetch에는 존재하지않음)
    - HTTP 요청취소 및 요청과 응답을 JSON형태로 자동변경시켜준다
    - `return()` 을 `promise`객체로 반환해줘서 `response`데이터를 다루기 용이하다.

    - 사용방법
    - 가져올때 async를 앞에 적어줘서 늦을수도있다라는걸 표현 후 await으로 `axios.get~~````바로 직전에 찝어준다.
    - Fetch API를 많이 사용하지만 JS의 built-in 라이브러리 특성때문에 리액트에서는 axios를 사용하는것을 선호
    - 

        GET

        Axios.get(url,[,config]

        axios.get('https://localgost:3000/sewon/user')

        .then((Response)=>{console.log(Response.data)})

        .catch((Error)=>{console.log(Error)})

        ,POST

        axios.post("url주소",{

        data객체

        },[,config])

        ,PUT,

        axios.put(url[, data[, config]])

        DELETE

        axios.delete(url,[,config]);

    - 크로스 브라우징에 신경을 많이써서 브라우저 호환성이 뛰어나다.
        - `CORS(cross-origin resource Sharing)` 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원한다.
3. fetch
    - 내장 라이브러리이기에 별도의 `import`를 해줄 필요가 없다
4. ajax (Asynchronous Javascript And Xml)
    - 사용자가 페이지를 전부 새로고침 필요없이 필요한부분만
    - 동기적방식처럼 서버사이드에서 데이터가 올때까지 모든동작을 멈추고 기다리지 않고 필요한 부분만을 비동기적으로 처리를함.
    - jquery 사용 해야한다.
    - promise 기반이 아니다.

    - 데이터 전송형에 다양한방법이있지만 대표 3가지
    - JSON : 가장많이 쓰이는 형식
    - CSV: `.` 데이터 속성 나누고 줄바꿈으로 데이터를 나누는 방식
    - XML : 속성과 데이터를 구분한다
5. JSX
    - HTML문법을 JS코드 내부에 사용한것.
    - HTML+JS조합한 문법
    - 컴포넌트 작성(컴포넌트는 대문자로 시작)
6. props
    - 컴포넌트에서 컴포넌트로 전달하는 데이터
    - 리액트 컴포넌트로 넘어가는 매개변수이다.
    - 컴포넌트에 props를 전달할때 문자열 빼고는 {}감싸서 전달.
    - 사용하면 컴포넌트를 효율적으로 재사용가능
    - 사용방법 : 객체에 있는 값을 사용하려면 `{props.fav}` . 쩜 적어서사용
7. Life Cycle
    1. 컴포넌트는 마운팅단계,업데이팅단계,언마운팅단계가 있고 각 단계에서 메서드들이 정해진 순서대로 호출이되는데 이때 호출되는 메서드를 생명 주기 메서드라고 부른다.

    ---

    1. consturctor() 클래스생성
    2. render()  랜더링 jsx가 html로 변환되어 웹에 나타난다.(?) 
        1. DOM에 랜더링 될때마다 메서드 내의 state를 하려고한다. [ mounting이라고 한다.]
        2. ↔ DOM이 삭제될 때마다 메서드 내의 state를 해제하려고 한다.
    3. componentDidMount() 랜더 직후(컴포넌트가 화면에 모두 그려진후) 호출 -API호출하기 좋은 장소,  `timer`설정 좋은장소
    4. componentWillUnmount() 위 Did,Un작동시 일부 코드를 작동할수있음.

    ---

    1. state,props의 변경 유무 판단 후 > 업데이트위해 ex) this.setState()
    2. componentDidUpdate 

    ---

    1. componentWillUn mount

Mounting

1. Mounting
    1. componentWillMount
    2. render
    3. componentDidMount

Updation

---

1. states
    1. shouldComponentUpdate
    2. componentWillUpdate
    3. render
    4. componentDidUpdate
1. props
    1. componentWillReceiveProps
    2. shouldComponentUpdate
    3. componentWillUpdate
    4. render
    5. componentDidUpdate

    ---