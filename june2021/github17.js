/*
**********GIT***************8

깃 – 같은 파일을 여러 사람이 동시에 병렬작업이 가능.
깃허브 – 깃을 웹 호스팅  웹에 공유해주는 것.
Repository = 저장소
Commit = 파일을 저장소에 저장! =덮어쓰기 
Git commit -m “작업의내용(변경사항)”
Git status  파일 추가 되었는지 상태 확인 = 현재의 깃 상태 뭐가 현재 무엇무엇이 깃에 올라가있는지
Push = 내용을 원격 저장소(깃허브 repository에 업로드하는 것)
깃 푸쉬 오리진 마스터
----------------------------------------------------- 순서 정리
1.폴더만들기 2.파일생성 및 작업 3. 이름 이메일등록 4. 깃 설정  5.깃 에드 6. 커밋-m 7. 상태확인 8.푸쉬
( 처음에는 이렇고 그다음 작업할때는  1.cd로 위치설정 2.깃 에드 3.깃 커밋m 4.상태확인 5.푸쉬)

내 컴퓨터에 깃을 초기 설정하기
깃 컨피그 –글로벌v유저.네임”사용자이름”
깃 컨피그 -글로벌v유저.메일”사용자메일”


Mkdir 폴더명
/cd .. /cd. 나의 현재위치를 이동시키기 > 원하는 폴더로 이동
깃 인잇 – 프로젝트를 깃의 저장소로 만들기 위한 명령어.

깃 리모트 에드 오리진v원격저장소주소
깃 리모트 -v   - 현재 원격 저장소가 무엇인지 확인? ( ?? ) 상태 ?
깃 클론 저장소주소  - 깃허브의 저장소를 다운로드 받기


Branch = 나무 뿌리처럼 버전 관리를 위해 흐름을 기록해 나가는 것 ( 분기한 지점은
다른지점의 영향을 받지 않기때문 )- 분할작업 용이 = 같은 저장소에서 각각 개발가능
Git branch  < 라고치면
*master  < 결과   의미= 브랜치가 master것이고 현재 브랜치도 master임을 나타냄.
브랜치 생성 하기.
Git branch subdir01    서브폴더01 이라는 브랜치를 생성!
Git checkout subdir01  나는 여기위치로 이동할꺼야! cd같은놈
Git checkout -b subdir01 위에 두가지 명령어를 한꺼번에 함
Git pull 나는 현재브랜치 위치의 코드를 가져올꺼야 clone같은놈 (동료 직원이 내 작업코드를 가가져올 때 사용 )
Ls 로컬파일 목록 상태확인?

브랜치=각각의 작업들을 병합하기!
Git checkout master   마스터로 이동
Git merge subdir01 머지=합병   > 서브폴더01에서 만든 파일이 추가됨. 어디로? 마스터로
Git push origin master  깃허브에 푸쉬

브랜치 삭제하기 – 실제개발현장에선 잘못작성된것만 삭제 + 완료된분기도 남겨두나봄
Git branch -d subdir01 
Git branch 브랜치 목록보자

명령어 종합
깃 스테이트 , 깃 에드 , 깃 커밋 , 깃 브랜치 , 깃 체크아웃 , 깃 로그 , 깃 그랩,
깃 클론 , 깃 리모트 , 깃 리셋 , 깃 머지 , 깃 풀
추가내용- 

git add .   < . 걍 전부 다올려버리기
git add *.txt  < 끝에 .txt형식의 파일 싹다 올려버리기
git commit -am “A first commit” >>변경된 파일을 검색 + 인덱스에 추가 작업을 동시에 *****??????
git log -n 10  < 로컬 저장소 깃의 커밋 히스토리를 검색 (10개까지만 보여줘)
git grep “검색원하는단어” 포함되어있는 파일을 검색해줘
git remote 원격저장소의 이름목록을 보여줘
git remote -v 저장소에대한 자세한 목록보기 ????????
git remote rm 이름   원격 저장소 제거.
git reset -soft HEAD^    로컬저장소의 커밋을 취소하기
git checkout master git merge bug-fix    bug-fix를 마스터 브랜치에 병합할거야
git checkout master git pull origin master 
로컬 마스터브랜치에 /  원격저장소 오리진의 마스터브랜치를  / 가져와




*/

/*const App = () => {

    useEffect(() => {
      const timer = setTimeout(() => console.log("Hello, World!"), 3000);
      return () => clearTimeout(timer);
    }, []);
  
  };
  */
