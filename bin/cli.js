#!/usr/bin/env node
'use strict';
const meow = require('meow');
const cliAdapter = require('..');

const cli = meow(`
    Usage
      $ timelite-cli --sum="1:30, 7, 6, 7:40"

    Options
      --sum: comma-separated list of durations to sum

`);

if (!cli.flags.sum) {
  console.log(cli.help);
  process.exit(1);
}

console.log(cliAdapter(cli.flags));
