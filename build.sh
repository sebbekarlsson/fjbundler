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
cp -r ../graphs $DISTDIR/.
