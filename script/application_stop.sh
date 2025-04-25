#!/bin/bash
pgrep -l -f "node app.js" | cut -d ' ' -f 1 | xarg sudo kill