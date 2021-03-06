import React from 'react';
import PropTypes from 'prop-types';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../i18n';
import RegisterV2 from './registerV2';

describe('V2 Register Process', () => {
  let wrapper;
  const options = {
    context: { i18n },
    childContextTypes: {
      i18n: PropTypes.object.isRequired,
    },
  };

  beforeEach(() => {
    wrapper = mount(<MemoryRouter><RegisterV2 /></MemoryRouter>, options);
  });

  it('Should render on initial step -> Choose Avatar', () => {
    expect(wrapper.find('ChooseAvatar')).to.have.length(1);
  });
});
