.PHONY: install

install:
	@yarn install

dev:
	@npx browserslist@latest --update-db
	@npm run dev

build:
	@npm run build

start: build
	@npm run start
