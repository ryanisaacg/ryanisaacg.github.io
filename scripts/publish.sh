#!/bin/sh
#!/bin/sh
$(dirname $0)/build.sh
git commit -am "Re-build site"
git push
