/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.styleguidePage';

export default defineMessages({
  exampleMessage: {
    id: `${scope}.exampleMessage`,
    defaultMessage: 'This is an example for translating messages. ',
  },
  exampleMessageWithValue: {
    id: `${scope}.exampleMessageWithValue`,
    defaultMessage: "Today's date: {ts, date, ::yyyyMMdd}",
  },
});
