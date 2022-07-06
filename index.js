const core = require('@actions/core');
const fs = require('fs')
const path = require('path');
const github = require('@actions/github');

function run(){
  const context = github.context;
  console.log(context.payload)
}

run()
