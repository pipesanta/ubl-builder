import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtCode, UdtDate, UdtText } from '../types/UnqualifiedDataTypes';
import { PayeeFinancialAccount } from './PayeeFinancialAccount';

/*
  1  cbc:ID [0..1]    An identifier for this means of payment.
  2  cbc:PaymentMeansCode [1..1]    A code signifying the type of this means of payment.
  3  cbc:PaymentDueDate [0..1]    The date on which payment is due for this means of payment.
  4  cbc:PaymentChannelCode [0..1]    A code signifying the payment channel for this means of payment.
  5  cbc:InstructionID [0..1]    An identifier for the payment instruction.
  6  cbc:InstructionNote [0..*]    Free-form text conveying information that is not contained explicitly in other structures.
  7  cbc:PaymentID [0..*]    An identifier for a payment made using this means of payment.
  8  cac:CardAccount [0..1]    A credit card, debit card, or charge card account that constitutes this means of payment.
  9  cac:PayerFinancialAccount [0..1]    The payer's financial account.
  10  cac:PayeeFinancialAccount [0..1]    The payee's financial account.
  11  cac:CreditAccount [0..1]    A credit account associated with this means of payment.
  12  cac:PaymentMandate [0..1]    The payment mandate associated with this means of payment.
  13  cac:TradeFinancing [0..1]    A trade finance agreement applicable to this means of payment.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  paymentMeansCode: { order: 2, attributeName: 'cbc:PaymentMeansCode', min: 1, max: 1, classRef: UdtCode },
  paymentDueDate: { order: 3, attributeName: 'cbc:PaymentDueDate', min: 0, max: 1, classRef: UdtDate },
  paymentChannelCode: { order: 4, attributeName: 'cbc:PaymentChannelCode', min: 0, max: 1, classRef: UdtCode },
  instructionID: { order: 5, attributeName: 'cbc:InstructionID', min: 0, max: 1, classRef: UdtIdentifier },
  instructionNotes: { order: 6, attributeName: 'cbc:InstructionNote', min: 0, max: undefined, classRef: UdtText },
  paymentID: { order: 7, attributeName: 'cbc:PaymentID', min: 0, max: undefined, classRef: UdtIdentifier },
  payeeFinancialAccount: {
    order: 8,
    attributeName: 'cbc:PayeeFinancialAccount',
    min: 0,
    max: undefined,
    classRef: PayeeFinancialAccount,
  },
  // ##################################  TODO CAC MISSING ################################################
};

type AllowedParams = {
  id: string | UdtIdentifier;
  paymentMeansCode: string | UdtCode;
  paymentDueDate: string | UdtDate;
  paymentChannelCode: string | UdtCode;
  instructionID: string | UdtIdentifier;
  instructionNotes: string[] | UdtText[];
  paymentID: string | UdtIdentifier;
  payeeFinancialAccount: string | PayeeFinancialAccount;
};

/**
 *
 */
class PaymentMeans extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PaymentMeans');
  }
}

export { PaymentMeans, AllowedParams as PaymentMeansParams };
