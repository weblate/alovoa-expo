#!/bin/bash

#create android project with some adjustments

cd ..
yarn
npx expo prebuild
cd script
echo "Small Android adjustments..."
bash ./adjust-node-modules.sh
bash ./splash-android-12-remove.sh
bash ./dark-splash-android.sh
