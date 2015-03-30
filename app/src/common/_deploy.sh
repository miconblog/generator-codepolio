#!/bin/bash
# 
# 
CWD="<%= cwd %>"
DATE=`eval date `
echo $DATE

if [ $1 == "init" ]
then
	cd $CWD
	gulp codejam
	gulp sweetcodejam
	gulp github
	gulp build
	cd dist
	git init
	git remote add origin https://github.com/<%= username %>/<%= repository %>.git
	git checkout -b gh-pages
	git add .
	git commit -m 'first deploy'
	git status
	git push -u origin gh-pages
	rm -rf .git
	exit 0
fi

if [ $1 == "push" ]
then

	COMMENT='deploy'
	if [ $# -eq 2 ] 
	then
		COMMENT=$2
		echo $COMMENT
	fi
	cd $CWD
	rm -rf dist
	git clone https://github.com/<%= username %>/<%= repository %>.git
	mv codepolio dist
	gulp codejam
	gulp sweetcodejam
	gulp build
	cd dist
	git add .
	git commit -m 'deploy'
	git push
	exit 0
fi

if [ $1 ] 
then 
	echo "usage: deploy [init or push]"
	exit 65
fi