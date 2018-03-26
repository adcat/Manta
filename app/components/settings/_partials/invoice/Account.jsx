import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Field, Part } from '../../../shared/Part';

function Account({
  t,
  handleInputChange,
  bank,
  bankCode,
  iban
}) {
  return [
    <label key="label" className="itemLabel">
      {t('common:fields:account')}
    </label>,
    <Part key="part">

      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:bank')}</label>
          <input
            name="bank"
            type="text"
            value={bank}
            onChange={handleInputChange}
          />
        </Field>

        <Field>
          <label className="itemLabel">{t('common:fields:bankCode')}</label>
          <input
            name="bankCode"
            type="text"
            value={bankCode}
            onChange={handleInputChange}
          />
        </Field>
      </Row>

      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:iban')}</label>
          <input
            name="iban"
            type="text"
            value={iban}
            onChange={handleInputChange}
          />
        </Field>
      </Row>

    </Part>,
  ];
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

// Export
export default Account;
