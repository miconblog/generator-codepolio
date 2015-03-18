# generator-codepolio [![Build Status](https://secure.travis-ci.org/miconblog/generator-codepolio.png?branch=master)](https://travis-ci.org/miconblog/generator-codepolio)

> [Yeoman](http://yeoman.io) generator

# Codepolio Yeoman Generator
makes your portfolio site with your repositories. For this you need to put an metafile(hub.json) to your repository each first.

## dependenices
[Gulp](http://gulpjs.com/) & [Bower](http://bower.io/)

## code.jam (JSON) File Field Infomation
| Field Name   | requirement | note |
| :----------- | ----------- | ---- |
| title        | Y, String   |  |
| description  | Y, String   |  |
| languages    | N, Array    | generated automatically in Github |
| generated_at | N, Array    | generated automatically |
| ...etc...    | N, Any      | you can define any fields whatever you want to use in a theme |


# How to install & build

#### Install from npm
```bash
$> npm install -g generator-codepolio
```

#### Install from source code for development
```bash
$> cd generator-codepolio
$> npm link
```

#### Finally, initiate the generator:

```bash
$> yo codepolio
```

# How to build & run 
#### First of all, you have to make **sweet code jam**
```bash
$ yoursite/> gulp codejam
```

#### serve to local for development
```bash
$ yoursite/> gulp serve
```

#### build for deploy 
```bash
$ yoursite/> gulp build
```

#### deploy github pages (plan for 0.2.0 ver.)
```bash
$ yoursite/> gulp deploy
```

## License

MIT