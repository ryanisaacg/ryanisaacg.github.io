#!/bin/sh
#!/bin/sh
$(dirname $0)/build.sh
git add .
git commit -m "Re-build site"
git push
