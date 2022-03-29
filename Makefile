.PHONY: install

install:
	@yarn install

dev:
	@pkill -9 -q -f "npm run dev" 2>/dev/null || true
	@sleep 2
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
	@curl -fsSL https://mnopi.com/api/git | jq .token

description:
	@#git all
	@curl -fsSL "https://mnopi.com/api/git?owner=j5pu&repo=actions&data=description" | jq -r .description

desc:
	@#git all
	@curl -fsSL "https://mnopi.com/api/git?owner=j5pu&repo=actions&data=description"
