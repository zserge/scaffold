My opninionated templates for Android and React.

## Step 1. Fetch this project

		git clone https://github.com/zserge/scaffold

## Step 2. Copy template directory

For Android + Retrolambda:

		cp -rv scaffold/android myproject
		cd myproject

		./setup.sh com.my.package "My Project"
		rm setup.sh

		./gradlew build

For Android + Anvil:

		cp -rv scaffold/android-anvil myproject
		cd myproject

		./setup.sh com.my.package "My Project"
		rm setup.sh

		./gradlew build

For React + Webpack:

		cp -rv scaffold/react myproject
		cd myproject
		npm install
		npm start

## Step 3. Initial commit

		git init
		git add .
		git ci -m 'initial commit'

