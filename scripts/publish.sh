#!/bin/sh
cd blog
git push origin HEAD:master
cd -
$(dirname $0)/build.sh
git add .
git commit -m "Re-build site"
git push
