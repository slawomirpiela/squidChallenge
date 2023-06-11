
# Squid Challenge Sample API

An API allowing for retrival of the closest businesses according to the input location and other optional parameters


## API Reference

#### Retrieve businesses in the closest proximity to the input coordinates

```http
  GET /discovery?lat=X&long=Y&limit=Z&type=T
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `lat` | `number` | **Required**. The latitude of coordinates|
| `long` | `number` | **Required**. The longitude of coordinates |
| `limit` | `number` | **Optional**. The number of businesses returned |
| `type` | `string` | **Optional**. The type of businesses returned |

Return value:

| Return Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | Boolean value indicated status of your request|
| `closestBusinesses` | `Array` | An array of businesses based on your request |

## Run Locally

Clone the project

```bash
  git clone https://github.com/slawomirpiela/squidChallenge
```

Go to the project directory

```bash
  cd squidChallenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Then please use POSTMAN or similar to use the API routes as described in the API reference