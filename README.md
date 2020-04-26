### Prerequisites

| Prerequisite
| -------------------------------------------
| [MongoDB](http://www.mongodb.org/downloads)
| [Node.js](http://nodejs.org)
| npm (comes with Node)

### Setup node-shopkart enviornment
```bash
# Install NPM dependencies locally
npm install --save

# Install nodemon globally
npm install -g nodemon
```
# Start the mongo server in a separate terminal

```
mongod
```

# Seed the data in database for the first time.
# This command should only be run once. (optional)

```
node seed/product-seeder.js
```

or

```
npm run seed
```

# start the application

```
npm start
```
