#!/bin/sh
#

echo CODESIG="$(git rev-parse --abbrev-ref HEAD)_$(git rev-parse HEAD)" > .env
