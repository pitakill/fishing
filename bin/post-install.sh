#!/usr/bin/env sh

verifyExists() {
  if ! [ -L $1 ]; then
    case $1 in
      $PWD/node_modules/@)
        ln -s $PWD/src $PWD/node_modules/@
        ;;
      $PWD/node_modules/Components)
        ln -s $PWD/src/components $PWD/node_modules/Components
        ;;
      $PWD/node_modules/Helpers)
        ln -s $PWD/src/helpers $PWD/node_modules/Helpers
        ;;
      *)
        echo "I don't know where points: $1"
        ;;
    esac
  fi
}

symlinks=(@ Components Helpers)

for i in ${symlinks[@]}; do
  verifyExists $PWD/node_modules/$i
done
