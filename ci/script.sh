#!/bin/bash

set -ex

yarn test --forceExit
sonar-scanner
