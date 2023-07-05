import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { FinancialInstitution } from './FinancialInstitution';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  financialInstitution: {
    order: 1,
    attributeName: 'cbc:FinancialInstitution',
    min: 0,
    max: 1,
    classRef: FinancialInstitution,
  },
};

type AllowedParams = {
  financialInstitution?: FinancialInstitution;
};

/**
 *
 */
class FinancialInstitutionBranch extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:FinancialInstitutionBranch');
  }
}

export { FinancialInstitutionBranch, AllowedParams as FinancialInstitutionBranchParams };
