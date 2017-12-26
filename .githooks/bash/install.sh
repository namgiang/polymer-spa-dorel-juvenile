#!/usr/bin/env bash

##
# name: install git hooks
# author: Marnix Harderwijk
# description: install git hooks
##
hooksDir='.git/hooks';

##
# start the installation of the hooks, by unlinking and recreating the symbolic links
##
function start() {

  # check if the .git/hooks directory exists
  if [ -d ${hooksDir} ]; then

    unlinkSymbolicLinks
    createSymbolicLinks

  else
    echo "Error: .git directory not found, try to clone the repo again";
  fi
}

##
# for every hook_[file] create a symbolic link
##
function createSymbolicLinks() {
  for hookFile in hook_*; do
    file=$(echo ${hookFile} | sed 's/.*\_//');

    if [ ! -f ${hooksDir}/${file} ]; then
      ln -s ${file} ${hooksDir}/${file};
      echo "Link of ${hookFile} to ${hooksDir}/${file} successful...";
    else
      echo "Trying to create a symbolic link for ${hookFile}, but no such file exists ${hooksDir}";
    fi
  done
}

##
# unlink every hook_[file] from the hooksDir
##
function unlinkSymbolicLinks() {
  for hookFile in hook_*; do
    file=$(echo ${hookFile} | sed 's/.*\_//');

    if [ ! -f ${hooksDir}/${file} ]; then
      unlink ${hooksDir}/${file};
      echo "Unlink of ${hooksDir}/${file} successful..";
    fi
  done
}

# self start this script
start
