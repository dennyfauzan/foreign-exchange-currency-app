# foreign_exchange_currency

## Production url :
```
https://foreign-exchange-currency.netlify.com/
```

## If you have Docker installed in your machine :
#### Go to root project and build image from dockerfile :
```
docker image build -t foreign-exchange-app .
```

#### Run container after image build :
```
docker run -it -p 8080:80 --rm --name foreign-exchange-currency foreign-exchange-app
```

#### After command above executed, open your browser and go to :
```
http://localhost:8080/
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
