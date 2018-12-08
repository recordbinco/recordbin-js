.PHONY: usage init test ci release

# Colors
NC=\x1b[0m
L_GREEN=\x1b[32;01m

## usage: print useful commands
usage:
	@echo "$(L_GREEN)Choose a command: $(PWD) $(NC)"
	@bash -c "sed -ne 's/^##//p' ./Makefile | column -t -s ':' |  sed -e 's/^/ /'"

## ci: Circle CI runner
ci:
	circleci local execute

## lint: eslint
lint:
	npm run lint

## test: jest tests
test:
	npm run test

## release: Build and Release on Npm
release:
	npm publish
