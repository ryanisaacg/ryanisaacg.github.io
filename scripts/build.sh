#!/bin/sh
cd $(dirname $0)/../blog
hugo
cp -r public/* ..
