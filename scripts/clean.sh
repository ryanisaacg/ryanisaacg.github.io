#!/bin/sh
cd $(dirname $0)/../blog/public
FILES=$(ls .)
echo "Cleaning file: $FILES"
cd ../..
rm -rf $FILES
