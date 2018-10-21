#!/bin/bash

set -ex

yarn test
sonar-scanner
