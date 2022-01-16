.PHONY: install

install:
	@yarn install

dev:
	@npx browserslist@latest --update-db -y --quiet
	@npm run dev

lint:
	@npm run lint

build: lint
	@npm run build

start: build
	@npm run start

performance: build
	@git all
	@CHROME_PATH='/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta' npm run performance

api:
	@git all
	@curl -fsL https://mnopi.com/api/git | jq .token
