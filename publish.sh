#!/usr/bin/env bash
DEFAULT="default"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=lovenicely.com
DIR=dist/
aws s3 sync $DIR s3://$BUCKET/ --profile "$PROFILE"