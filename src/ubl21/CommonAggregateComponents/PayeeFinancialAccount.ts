import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
import { FinancialInstitutionBranch } from './FinancialInstitutionBranch';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  financialInstitutioBranch: {
    order: 2,
    attributeName: 'cbc:FinancialInstitutionBranch',
    min: 0,
    max: 1,
    classRef: FinancialInstitutionBranch,
  },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  financialInstitutioBranch?: FinancialInstitutionBranch;
};

class PayeeFinancialAccount extends GenericAggregateComponent {
  /**
   *
   * @param content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PayeeFinancialAccount');
  }
}

export { PayeeFinancialAccount, AllowedParams as PayeeFinancialAccountParams };
