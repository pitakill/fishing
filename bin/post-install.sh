#!/usr/bin/env sh

verifyExists() {
  if ! [ -L $1 ]; then
    case $1 in
      $PWD/node_modules/@)
        ln -s $PWD/src $PWD/node_modules/@
        ;;
      $PWD/node_modules/Actions)
        ln -s $PWD/src/actions $PWD/node_modules/Actions
        ;;
      $PWD/node_modules/Components)
        ln -s $PWD/src/components $PWD/node_modules/Components
        ;;
      $PWD/node_modules/Helpers)
        ln -s $PWD/src/helpers $PWD/node_modules/Helpers
        ;;
      $PWD/node_modules/Reducers)
        ln -s $PWD/src/reducers $PWD/node_modules/Reducers
        ;;
      $PWD/node_modules/Store)
        ln -s $PWD/src/store $PWD/node_modules/Store
        ;;
      *)
        echo "I don't know where points: $1"
        ;;
    esac
  fi
}

symlinks=(@ Actions Components Helpers Reducers Store)

for i in ${symlinks[@]}; do
  verifyExists $PWD/node_modules/$i
done
