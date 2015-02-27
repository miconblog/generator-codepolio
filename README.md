# generator-hubpolio [![Build Status](https://secure.travis-ci.org/miconblog/generator-hubpolio.png?branch=master)](https://travis-ci.org/miconblog/generator-hubpolio)

> [Yeoman](http://yeoman.io) generator

# Hubpolio Yeoman Generator
makes your portfolio site with your repositories. For this you need to put an metafile(hub.json) to your repository each first.

# This is the sample hub.json
    { 
      "title": "Hubpolio",
      "description": "make your portfolio site with your repositories",
      "category" : "Yeoman Generator"
      "tags": ["javascript"]
      "theme" : {
        "basic": {
          "imgae": "ssss",
        },
        "square": {
          
        }
      }
    }

| Field Name | requirement | note |
| :--------- | ----------- | ---- |
| title      | Y           |      |
| description| Y           |      |
| category   | Y           | 
| theme      | Y           | supporting theme options |


# How to install & build

To install generator-hubpolio from npm, run:

```bash
$> npm install -g generator-hubpolio
```

Finally, initiate the generator:

```bash
$> yo hubpolio
```

# How to build your hubpolio site 

To develop yourself:
```bash
$ yoursite/> gulp serve
```

To build: 
```bash
$ yoursite/> gulp build
```

To deploy github pages: 
```bash
$ yoursite/> gulp deploy
```


# TODOs

    $> gulp build
      - 저장소에서 hub.json 읽어와서..
      - 테마에 꽂아준다. 

    $> gulp serve[:dist]
      - 개발자모드로 로컬 서버를 구동시켜 준다. 
       default > 코드 수정시, 자동으로 화면 리프래시 해주는것 까지 포함. 
       dist > 최종 빌드모드로, html/css/js 최적화된 빌드 포함 

    $> gulp deploy:github
      ---> 깃허브에 프로젝트를 생성하고, gh-pages 브랜치를 만들어서 hub build 된 결과를 커밋해준다. 

## License

MIT