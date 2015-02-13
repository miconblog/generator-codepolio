# generator-hubpolio [![Build Status](https://secure.travis-ci.org/miconblog/generator-hubpolio.png?branch=master)](https://travis-ci.org/miconblog/generator-hubpolio)

> [Yeoman](http://yeoman.io) generator

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

# How to contribute theme



# How to build

To install generator-hubpolio from npm, run:

```bash
npm install -g generator-hubpolio
```

Finally, initiate the generator:

```bash
yo hubpolio
```

# TODOs

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

# About Yeoman Generator 
제너레이터는 자동으로 실행되는 메소드 런루프가 있는데, 아래와 같은 순서로 동작한다. 
특정 메소드 이름은 우선순위 그룹이 있어서 우선 순위에 따라 동작하고, 
나머지 메소드들은 모두 default 그룹에서 동작한다.

'''
    --> constructor
    --> info

         _-----_
        |       |    .--------------------------.
        |--(o)--|    |         Welcome!         |
       `---------´   '--------------------------'|                          |
        ( _´U`_ )    |   Now you can generate   |
        /___A___\    |  your portfolio website! |
         |  ~  |     '--------------------------'
       __'.___.'__
     ´   `  |° ´ Y `

    1. initializing
    2. prompting
    3. configuring
    --> write
    --> writeln
    --> ok
    --> error
    --> skip
    --> force
    --> create
    --> invoke
    --> conflict
    --> identical
    --> table
    --> init
    4. default
    --> method 1 just ran
    --> won't be called automatically
    --> method 2 just ran
    5. writing
    6. conflicts
    7. install
    8. end
'''

## License

MIT