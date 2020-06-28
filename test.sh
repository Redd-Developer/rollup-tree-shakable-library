yarn clean
yarn build
yarn build:consumer

FUNC_B=$(grep funcB consumer/build/index.js)

if [ -z "$FUNC_B" ]
then
  echo "Consumer application build does not contain unused modules from your library!"
  exit 0
else 
  echo "Oops! The tree shaking is broken, and the consumer build contains unused \"funcB\" module."
  echo $FUNC_B
  exit 1
fi
