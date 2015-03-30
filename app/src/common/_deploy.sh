#!/bin/bash
# 
# 
CWD="<%= cwd %>"
COMMENT=`eval date `
ARGCOUNT=1

if [ $# -ne "$ARGCOUNT" ]
then
	echo "usage: deploy [init or push]"
	exit 65
fi

if [ $1 == "init" ]
then
	echo "init..."
	echo $COMMENT
	cd $CWD
	gulp codejam
	gulp deploy
	gulp build
	cd dist
	git init
	git remote add origin https://github.com/<%= username %>/<%= repository %>.git
	git checkout -b gh-pages
	git add .
	git commit -m 'deploy'
	git status
	git push -u origin gh-pages
	rm -rf .git
	exit 65
fi

if [ $1 == "push" ]
then
	echo "push..."
	echo $COMMENT
	cd $CWD
	rm -rf dist
	git remote add origin https://github.com/<%= username %>/<%= repository %>.git
	mv codepolio dist
	gulp codejam
	gulp build
	cd dist
	git add .
	git commit -m 'deploy'
	git push
	exit 65
fi

if [ $1 ] 
then 
	echo "usage: deploy [init or push]"
	exit 65
fi