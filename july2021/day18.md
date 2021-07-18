- Axios를 사용하여 API 통신
- Component LIFE Cycle 理解
- Ajax와 async의 사용 및 이해
- Node.js 및 Npm 사용방법 숙지
- jsx 이용 및 이해
- -------------------------

문서의 메서드 사용

class 속성값과 요소의 내용을 변경하는 법을 배웠다.

- ------------
- Local Storage에 저장 및 변경 및 읽기 사용

날씨 구현을 위해 API통신을 했다.

Javascript 이벤트 기능에 대해 공부하고 사용.

- Javascript 함수에 대한 공부 및 사용.
1. Node.js
    - 다수의 연결을 효율적으로 관리하고 비용을 최소화할수있는 네트워크 소프트웨어를개발하는 편리한 방법을 제공
    - 이전에는 각 연결에 새로운 쓰레드를 생성하고 그에따라 메모리를 할당하여 사용자 요청을 처리했지만
    - `Node`에서는 각 연결이 하나의 이벤트로서 노드 엔진에서 처리됨.
    - Non-Blocking I/O를 지원하기 때문에 비동기식 프로그래밍 가능하며 I/O부하가 심한 대규모 서비스를 개발하기 적합함.
    - 내장HTTP서버 라이브러리를 포함하고 있어서 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는것이 가능.
    - JAVA프로젝트를 아파치 와 톰캣을 사용해본적이있는데 그것에 비해 굉장히 가볍고 빠르다는 느낌을 받았음.
    - NPM모듈을 제공한다.
    - npm을 이용해 필요한 라이브러리와 패키지를 설치하고 사용할수있기 때문에 개발속도와 효율성이 크게 향상.

    ---

    - 서버 체크로직이 많은 경우 : 비동기방식이기때문에 `CallBack Hell`빠질 위험이있다.
    - 단일 처리가 오래 걸리는경우 :싱글 쓰레드 이기때문
    - 코드가 수행되어야 코드에 에러가 있는지 알 수 있으며, 에러가 날 경우 프로세스가 내려가기 때문에 테스트가 엄청 중요함. 코드 품질 중요하다.
2. npm(node packge manager(modules))
    - `node.js`설치하면 자동으로 `npm` 설치됨
    - `node.js` 기반의 모듈을 모아둔 집합 저장소
    - npm 명령어 모음집
        - `npm -v` 버전확인가능
        - `npm -h` 명령어 확인가능
        - `npm install <package> -g`  글로벌하게 모듈을 추가
        - `npm init`     `package.json`을 만드는 명령어
        - `npm install <모듈명> --save`
        - `npm updata <모듈명>`
        - `npm remove <모듈명>`
        - `npm list <모듈명>` 모듈의버전확인
        - `npm ls` 설치된 모듈 리스트  확인

3. package.json
    - 프로젝트에 대한 명세서
    - 해당 프로젝트의 이름, 버전, 사용되는 모듈 등 스펙이 작성되어있음. 해당 오픈 소스가 의존하고있는 모듈이 어떤것인지, 명령어도 적혀져있음.

4. TypeScript
    - Microsoft가 개발
    - 빌드 에러와 버그를 잡는다.(앱 실행 전)
    - Create React App과 함께 TypeScript사용하는것과
    - `npx create-react-app my-app --template typescript`
    - 프로젝트에 TypeScript추가 하는것 두가지 방법
    - `npm install --save-dev typescript &&& yarn add —dev typescript`
    - json파일에 추가.. 컴파일러 설정