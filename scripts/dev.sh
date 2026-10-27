#!/bin/sh
set -e
cd "$(dirname "$0")/../website"
exec pnpm exec docusaurus start --port "${DEPLOY_RUN_PORT:-5000}" --host 0.0.0.0 --no-open
