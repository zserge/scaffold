#!/bin/sh

[ $# -ne 2 ] && echo "setup.sh <package> <name>" && exit 1

PKG=$1
NAME=$2

sed -i "s/com.example/$PKG/g" src/main/AndroidManifest.xml
sed -i "s/com.example/$PKG/g" src/main/java/com/example/MainActivity.java
sed -i "s/MainActivity/$NAME/g" src/main/res/values/strings.xml

NEWPKGDIR=$(echo $PKG | sed 's/\./\//g')
mkdir -p src/main/java/$NEWPKGDIR
mv src/main/java/com/example/MainActivity.java src/main/java/$NEWPKGDIR
rmdir -p src/main/java/com/example
