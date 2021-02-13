STATICDIR=src/static

virtualenv -p /usr/bin/python3.9 ./venv
source ./venv/bin/activate
pip install htmlmin

# images
cp -r $STATICDIR/img $DISTDIR/.
# favicons
cp $STATICDIR/img/fav/* $DISTDIR/.
cp -r $FJB_DIR/graphs $DISTDIR/.
cp -r $FJB_DIR/benchmarks.html ./src/include/.
cp -r $FJB_DIR/README.md ./FJB_README.md
