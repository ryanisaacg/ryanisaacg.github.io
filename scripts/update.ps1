cd blog
zola build
cd ..
cp -Force blog/public/* .
git add -A
git commit -m "Rebuild site"
git push
echo "Remember to publish changes to the blog as a commit!"
