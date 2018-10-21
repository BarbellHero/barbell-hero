#!/bin/bash

set -ex

docker-compose -f docker-compose.yml -f docker-compose.ci.yml up test
sonar-scanner
