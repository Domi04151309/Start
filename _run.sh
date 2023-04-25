#!/bin/bash

# Configure Linux path
if [[ $(uname) == *"Linux"* ]]; then
  export GEM_HOME="$HOME/gems"
  export PATH="$HOME/gems/bin:$PATH"
fi

# Check if required software is installed
echo "Checking if everything is installed..."
NPM_INSTALLED=false
if [ -e package.json ]; then
  if ! command -v npm &> /dev/null; then
    echo "Warning: 'npm' is not installed!"
  else
    NPM_INSTALLED=true
    if [[ $(npm ls --depth=-1 | grep ${PWD##*/}) != *"@"* ]]; then
      npm install
    fi
  fi
fi
if ! command -v bundle &> /dev/null; then
  echo "Error: 'bundle' is not installed!"
  read -p "Press [Enter] to return..."
  return
fi
if ! bundle check; then
  bundle install
fi

# Update everything
printf "\nUpdating...\n"
if $NPM_INSTALLED; then
  npm update
fi
bundle update

# Start everything needed for development
printf "\nStarting...\n"
if [[ $(uname) == *"MINGW64"* ]]; then
  start chrome http://localhost:4000
  start atom ${PWD}
elif [[ $(uname) == *"Linux"* ]]; then
  google-chrome http://localhost:4000 &
  pulsar ${PWD} &
fi
bundle exec jekyll serve
