# Hubpolio Yeoman Generator
it makes your portfolio site with your repositories. For this you need to put an metafile(hub.json) to your repository each.

# hub.json Format
    { 
      "title": "Hubpolio",
      "description": "make your portfolio site with your repositories",
      "logo": "hub-logo.png",
      "thumb": "hubpolio.png",
      "type": "web",
      "provider": "github",
      "repo_url": "https://github.com/miconblog/hubfolio",
      "updated_at": "2015-01-22T05:24:36Z",
      "github": {
        "html_url": "https://github.com/miconblog/hubfolio",
      },
      "theme" : {
        "basic": {
          "imgae": "ssss",
        },
        "twitter": {
          "type" : "Javascirpt"
        },
        "square": {
          
        }
      }
    }

# How to contribute


# How to build

1. checkout first
2. npm link
3. yo hubpolio


# Hub Project 생성
    $> yo hubpolio

      - 샘플 프로젝트를 복사 
      - 걸프 빌드 파일 생성 (gulpfile.js)
      - 걸프 빌드에서 참조할 설정 파일 생성 (hubpolio.json)
     {
       땡겨올 저장소 목록: [
         {"github": {id:xxx}},
         {"teamforge": {id:xxx, pwd:xxxx}},
         {"bitbucket": {id:xxx}}
       ],
       Github에 배포할꺼냐? : {
        저장소 이름: xxxxx,
        account: id
        pass: password
       }
     }


    $> gulp build
      - 저장소에서 hub.json 읽어와서..
      - 테마에 꽂아준다. 

    $> gulp serve[:dist]
      - 개발자모드로 로컬 서버를 구동시켜 준다. 
       default > 코드 수정시, 자동으로 화면 리프래시 해주는것 까지 포함. 
       dist > 최종 빌드모드로, html/css/js 최적화된 빌드 포함 

    $> gulp deploy:github
      ---> 깃허브에 프로젝트를 생성하고, gh-pages 브랜치를 만들어서 hub build 된 결과를 커밋해준다. 

# hub 테마 변경
 1. 그냥 theme 폴더 열어서 수정한다. 



    $> hub install repos:[repository name] 
  
    $> hub install theme:[theme name]


    $> hub install [plugin name]


    $> hub serve



# Features
 - Github 플러그인: Github 계정에 있는 .hub 파일을 읽어온다. 

 - 