# generator-hubpolio [![Build Status](https://secure.travis-ci.org/miconblog/generator-hubpolio.png?branch=master)](https://travis-ci.org/miconblog/generator-hubpolio)

> [Yeoman](http://yeoman.io) generator

# Hubpolio Yeoman Generator
makes your portfolio site with your repositories. For this you need to put an metafile(hub.json) to your repository each first.

## dependenices
[Gulp](http://gulpjs.com/) & [Bower](http://bower.io/)

## hub.json Format
| Field Name   | requirement | note |
| :----------- | ----------- | ---- |
| title        | Y, String   |  |
| description  | Y, String   |  |
| languages    | N, Array    | generated automatically in Github |
| generated_at | N, Array    | generated automatically |
| ...etc...    | N, Any      | you can define any fields whatever you want to use in a theme |


# How to install & build

To install generator-hubpolio from npm, run:

```bash
$> npm install -g generator-hubpolio
or
$> cd generator-hubpolio
$> npm link
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

## License

MIT