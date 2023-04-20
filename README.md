# smarty-street-demo

### Pre-requisites
1. Login or create a Smarty account to obtain the credentials. https://www.smarty.com/login
2. Then copy the credentials from here https://www.smarty.com/account/keys


### Start the project
1. Copy and rename `.env.sample` to `.env`.
2. Paste the credentials you got from Smarty.
3. Install the dependencies:
`yarn install`
4 . Build the project:
`yarn build`
4 . Run the project:
`yarn dev`

### Endpoints
`POST /api/smarty/international`
* Payload
``` json
{
    "addresses_to": "John Doe",
    "address1": "Rua Padre Antonio D'Angelo 121",
    "address2": "Casa Verder",
    "city": "Sao Paulo",
    "province_name": "SP",
    "country_name": "Brazil",
    "postal_code": "02516-050"
}
```


`POST /api/smarty/usa`
* Payload
``` json
{
    "addresses_to": "John Doe",
    "address1": "330 N 100 W",
    "address2": "APT 2",
    "city": "Provo",
    "province_name": "Utah",
    "country_name": "United States",
    "postal_code": "84601"
}
```

# API Pricing
### International Address Verification
https://www.smarty.com/pricing/international-address-verification

### US Address Verification
https://www.smarty.com/pricing


# API Documentation
https://www.smarty.com/docs

### SDK
https://www.smarty.com/docs/sdk/javascript

