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

$(objects): $(fjbdata) $(dist) commits.json releases.json $(js)
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
	cp -r $(FJB_DIR)/graphs/overview.svg src/static/img/
	cp -r $(FJB_DIR)/graph.svg src/static/img/callgrind.svg
	cp -r $(FJB_DIR)/benchmarks.html ./src/include/.
	cp -r $(FJB_DIR)/README.md ./FJB_README.md

$(js): 
	fjb src/static/js/app.js -o $(dist)/dist.js

commits.json:
	@echo Downloading commits
	curl https://api.github.com/repos/sebbekarlsson/fjb/commits > commits.json

releases.json:
	@echo Downloading releases
	curl https://api.github.com/repos/sebbekarlsson/fjb/releases > releases.json


clean:
	-rm -rf ./dist
	-rm commits.json
	-rm releases.json

lint:
	clang-tidy src/*.c src/include/*.h
