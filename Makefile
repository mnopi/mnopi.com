.PHONY: install tools

dev: 
	@npm run dev

install:
	@yarn install

tools:
	@curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
	@sudo apt-get install -y nodejs
	@sudo npm install --package-lock-only --force --global npx vercel yarn
