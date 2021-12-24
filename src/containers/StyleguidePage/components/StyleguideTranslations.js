import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import messages from '../messages';

const StyleguideTranslations = ({ intl }) => (
  <div>
    <h3>Formatted Message</h3>
    <FormattedMessage {...messages.exampleMessage} />

    <h3>Formatted Message with values</h3>
    <FormattedMessage
      {...messages.exampleMessageWithValue}
      values={{ ts: Date.now() }}
    />

    <h3>Using its value</h3>
    <input placeholder={intl.formatMessage(messages.exampleMessage)} />
  </div>
);

StyleguideTranslations.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(StyleguideTranslations);
