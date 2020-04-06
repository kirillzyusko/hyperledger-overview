import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export class Transfer extends Asset {
      transferId: string;
      description: string;
      amount: number;
      acquirer: Bank;
   }
   export class Bank extends Participant {
      bankId: string;
      name: string;
   }
   export class Trade extends Transaction {
      money: Transfer;
      issuer: Bank;
   }
// }
