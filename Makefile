outfile = dist/index.html
pages = $(wildcard src/pages/*.html)
objects = $(shell echo $(pages) | sed 's/src\/pages/dist/g')

flags = -g -Wall -lm -ldl -fPIC -rdynamic
LPATH = $(HOME)/.local

dist = dist
graphs = dist/graphs

FJB_DIR=$$HOME/workspace/fjb
STATICDIR=src/static

js=dist.js

.PHONY:
all: $(objects)

$(objects): $(fjbdata) $(dist) commits.json $(js)
	gpp src/pages/$(notdir $@) | ./venv/bin/htmlmin > $@

htmlmin:
	virtualenv -p /usr/bin/python3.9 ./venv
	source ./venv/bin/activate
	pip install htmlmin

$(dist):
	mkdir -p dist
	mkdir -p $@/img
	cp -r $(STATICDIR)/img $@
	cp -r $(STATICDIR)/img/fav/* $@/
	cp -r $(FJB_DIR)/graphs $@/
	cp -r $(FJB_DIR)/benchmarks.html ./src/include/.
	cp -r $(FJB_DIR)/README.md ./FJB_README.md

$(js): 
	fjb src/static/js/app.js > $(dist)/dist.js

commits.json:
	@echo Downloading commits
	curl https://api.github.com/repos/sebbekarlsson/fjb/commits > commits.json


clean:
	-rm -rf ./dist
	-rm commits.json

lint:
	clang-tidy src/*.c src/include/*.h
