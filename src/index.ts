// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';

// all type stuff, the only one we are using here
import type { OrderId } from 'pacificstore-polkadotjs-typegen/interfaces';

// external imports
import   {ApiPromise}  from '@polkadot/api';
import  {createType}  from '@polkadot/types';
// import type { Codec } from '@polkadot/types/types';
import { stringToU8a} from '@polkadot/util';

// our local stuff
import * as definitions from './interfaces/definitions';

async function main(): Promise<void> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
            // chain-specific overrides
            Keys: 'SessionKeys4'
        }
    });

    // get a query
    const recordOpt = await api.query.wyvernExchangeCore.owner();
    console.log(recordOpt);
    // the types match with what we expect here
    let firstRecord: OrderId  = stringToU8a("recordOpt.unwrapOr(null)") as OrderId;
    console.log(firstRecord);

    // it even does work for arrays & subscriptions
    api.query.orderbook.owner();

    // even createType works, allowing for our types to be used
    console.log(`OrderId bitLength:`, [
        api.createType('OrderId').toString(),
        api.registry.createType('OrderId').toString(),
        createType(api.registry, 'OrderId').toString()
    ]);
}

 main().catch(console.error).finally(() => process.exit());
