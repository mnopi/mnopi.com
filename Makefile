.PHONY: install

install:
	@yarn install

dev:
	@npx browserslist@latest --update-db -y --quiet
	@npm run dev

build:
	@npm run build

start: build
	@npm run start

performance: build
	@git all
	@lighthouse https://mnopi.com
