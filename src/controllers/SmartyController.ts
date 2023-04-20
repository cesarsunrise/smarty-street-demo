// https://www.smarty.com/docs/sdk/javascript#demo
import SmartySDK from 'smartystreets-javascript-sdk';
import { IAddress } from '../core/data/IAddress';

const SmartyCore = SmartySDK.core;
const { SMARTY_AUTH_ID, SMARTY_AUTH_TOKEN } = process.env;

class SmartyController {
  #clientBuilder;

  #lookupInternational;

  #lookupUS;

  constructor() {
    this.#lookupInternational = SmartySDK.internationalStreet.Lookup;
    this.#lookupUS = SmartySDK.usStreet.Lookup;

    const credentials = new SmartyCore.StaticCredentials(
      SMARTY_AUTH_ID,
      SMARTY_AUTH_TOKEN
    );

    this.#clientBuilder = new SmartyCore.ClientBuilder(credentials);
  }

  async internationalFormat(data: IAddress) {
    let status;
    let body;

    const client = this.#clientBuilder.buildInternationalStreetClient();
    const lookup = new this.#lookupInternational(data.country_name, '');

    lookup.organization = data.addressed_to;
    lookup.address1 = data.address1;
    lookup.address2 = data.address2;
    lookup.locality = data.city;
    lookup.administrativeArea = data.province_name;
    lookup.postalCode = data.postal_code;

    try {
      status = 200;
      const result = await client.send(lookup);
      body = result;
    } catch (error) {
      status = 400;
      body = error;
    }

    return { body, status };
  }

  async usFormat(data: IAddress) {
    let status;
    let body;

    const client = this.#clientBuilder.buildUsStreetApiClient();
    const lookup = new this.#lookupUS();

    lookup.addressee = data.addressed_to;
    lookup.street = data.address1;
    lookup.secondary = data.address2;
    lookup.city = data.city;
    lookup.state = data.province_name;
    lookup.zipCode = data.postal_code;
    lookup.maxCandidates = 3;
    lookup.match = 'invalid';

    try {
      status = 200;
      const result = await client.send(lookup);
      body = result;
    } catch (error) {
      status = 400;
      body = error;
    }

    return { body, status };
  }
}

export default SmartyController;
