import React from 'react';
import MultiStep from './../multiStep';
import Form from './form';
import Summary from './summary';
import { parseSearchParams } from './../../utils/searchParams';
import styles from './send.css';

class Send extends React.Component {
  constructor(props) {
    super(props);

    const { recipient, amount, reference } = parseSearchParams(this.props.history.location.search);

    this.state = {
      fields: {
        recipient: { address: recipient || '' },
        amount: { value: amount || '' },
        reference: { value: reference || '' },
      },
    };
  }

  render() {
    const { fields } = this.state;

    return (
      <div className={styles.container}>
        <div className={`${styles.wrapper} send-box`}>
          <MultiStep
            key='send'
            className={styles.wrapper}>
            <Form fields={fields} />
            <Summary />
          </MultiStep>
        </div>
      </div>
    );
  }
}

export default Send;