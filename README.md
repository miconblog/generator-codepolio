# hubpolio
make your portfolio site with your repositories


# How to install
$> npm install -g hubpolio-cli
$> hub init 

    // hubpolio.json 설정 파일 생성됨 
    {
      accounts: [{
        type: 'github',
        name: 'username',
        pass: 'password'
      }, {
        type: 'bitbucket',
        name: 'username',
        pass: 'password'
      }],
      modules: [{
        name: 'moduleName1',
        version: '1.2.0',
        values: {

        }

      }] 
      
    }

    // package.json 파일 생성됨
    // hubpolio.json에 의존된 모듈이 추가된다.

    modules
     - hubpolio-core
     - hubpolio-thema
     - hubpolio-plugin

$> hub install
$> hub build[:dist]
$> hub dist[:github, :bitbucket]
$> hub serve[:dist]

# Hub File Format
    
    {
      // required field.

      "name": "Hubpolio",
      "images": [""], // 이미지 링크 최소 1개 
      "description": "explain more detail about this..",
      "type": (ios | android | web |  )

      // implict infos
      

      // optional
      "repos"
    }



# Features
 - Github 플러그인: Github 계정에 있는 .hub 파일을 읽어온다. 

 - 