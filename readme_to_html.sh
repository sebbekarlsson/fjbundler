virtualenv -p /usr/bin/python3.9 ./venv
source ./venv/bin/activate
pip install markdown
./venv/bin/markdown_py FJB_README.md | sed 's/logo.png/img\/logo.png/' > ./src/include/FJB_README.html
