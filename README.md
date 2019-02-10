# foreign_exchange_currency

## Production url :
```
https://foreign-exchange-currency.netlify.com/
```
## If you have Docker installed in your machine :
#### Build image from dockerfile :
```
docker image build -t [REPONAME] .
```
#### Run container after image build :
```
docker run -it -p 8080:80 --rm --name [CONTAINER_NAME] [REPOSITORY]
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
