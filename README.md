# generator-codepolio [![Build Status](https://secure.travis-ci.org/miconblog/generator-codepolio.png?branch=master)](https://travis-ci.org/miconblog/generator-codepolio)

> [Yeoman](http://yeoman.io) generator

# Codepolio Yeoman Generator
To make your **portfolio site** with your code repositories like github and bitbucket, you need an 'code.jam' (JSON format) file. So you have to push an jam file to your repository first. If you don't want to show your project in your site, just forget it. Only the repository had an jam file will be generated by **Codepolio**.

## Dependencies
[Yeoman](http://yeoman.io), [Gulp](http://gulpjs.com/), [Bower](http://bower.io/)

## code.jam (JSON): Field Infomation
| Field Name   | requirement | note |
| :----------- | ----------- | ---- |
| title        | Y, String   |  |
| description  | Y, String   |  |
| languages    | N, Array    | generated automatically in Github |
| generated_at | N, Array    | generated automatically |
| ...etc...    | N, Any      | you can define any fields whatever you want to use in a theme |


# How to install

install from npm
```bash
$> npm install -g generator-codepolio
```

install from source code for development
```bash
$> cd generator-codepolio
$> npm link
```

finally, initiate the generator:
```bash
$> yo codepolio
```

# How to build & run 
First of all, you have to make **sweet code jam**
```bash
$ yoursite/> gulp codejam
```

serve to local for development
```bash
$ yoursite/> gulp serve
```

build for deploy 
```bash
$ yoursite/> gulp build
```

deploy github pages (plan for 0.2.0 ver.)
```bash
$ yoursite/> gulp deploy
```

# References
[How to debug yeoman generator](http://techblog.dorogin.com/2014/04/how-to-debug-yeoman-generator.html)


## License

MIT

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/miconblog/generator-codepolio/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

