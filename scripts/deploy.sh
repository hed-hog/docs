#!/bin/bash

git add --all
git commit -m ":fire: $1"
git push origin master

git checkout production

git merge master

git push origin production

git checkout master

git merge production