import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Field, Part } from '../../../shared/Part';
import styled from 'styled-components';

function Account({
  t,
  handleAccountChange,
  account,
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
            value={account.bank}
            onChange={handleAccountChange}
          />
        </Field>

        <Field>
          <label className="itemLabel">{t('common:fields:bankCode')}</label>
          <input
            name="bankCode"
            type="text"
            value={account.bankCode}
            onChange={handleAccountChange}
          />
        </Field>
      </Row>

      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:iban')}</label>
          <input
            name="iban"
            type="text"
            value={account.iban}
            onChange={handleAccountChange}
          />
        </Field>
      </Row>

    </Part>,
  ];
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
  handleAccountChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

// Export
export default Account;
