FJB_DIR=$HOME/workspace/fjb

mkdir -p dist
SRCFILE=src/index.html
STATICDIR=src/static
DISTDIR=dist
DISTFILE=$DISTDIR/index.html
TMPFILE=tmp.html
gpp $SRCFILE > $TMPFILE;
#./minify.sh $TMPFILE > $DISTFILE
cat $TMPFILE > $DISTFILE
rm $TMPFILE

# images
cp -r $STATICDIR/img $DISTDIR/.
# favicons
cp $STATICDIR/img/fav/* $DISTDIR/.
cp -r $FJB_DIR/graphs $DISTDIR/.
cp -r $FJB_DIR/benchmarks.html ./src/include/.
