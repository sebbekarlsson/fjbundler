FJB_DIR=$HOME/workspace/fjb

mkdir -p dist
SRCFILE=src/index.html
DOCSFILE=src/docs.html
STATICDIR=src/static
DISTDIR=dist
DISTFILE=$DISTDIR/index.html
TMPFILE=tmp.html

virtualenv -p /usr/bin/python3.9 ./venv
source ./venv/bin/activate
pip install htmlmin

gpp $SRCFILE | htmlmin > $TMPFILE;
gpp $DOCSFILE > dist/docs.html;
#./minify.sh $TMPFILE > $DISTFILE
cat $TMPFILE > $DISTFILE
rm $TMPFILE

# images
cp -r $STATICDIR/img $DISTDIR/.
# favicons
cp $STATICDIR/img/fav/* $DISTDIR/.
cp -r $FJB_DIR/graphs $DISTDIR/.
cp -r $FJB_DIR/benchmarks.html ./src/include/.
cp -r $FJB_DIR/README.md ./FJB_README.md
