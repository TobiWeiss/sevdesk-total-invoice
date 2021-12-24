import React, { useContext } from 'react';
import {
  Accordion as BootstrapAccordion,
  AccordionContext,
  Card as BootstrapCard,
  useAccordionButton,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import StyledAccordionHeader from './StyledAccordionHeader';
import IconChevron from '../Icons/IconChevron';
import H3 from '../Headlines/H3';
import StyledAccordion from './StyledAccordion';

const Accordion = ({ elements, activeIndex, setActiveIndex }) => {
  const ContextAwareToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey.toString(), () => {
      if (eventKey === activeIndex) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(eventKey);
      }
    });
    const isActive = activeEventKey === eventKey.toString();

    return (
      <div
        className={isActive ? 'active' : null}
        onClick={decoratedOnClick}
        role="button"
        tabIndex={0}
      >
        <H3>{children}</H3>
        <div className="align-self-center">
          <IconChevron direction={isActive ? 'up' : 'down'} />
        </div>
      </div>
    );
  };
  ContextAwareToggle.propTypes = {
    children: PropTypes.string,
    eventKey: PropTypes.number,
  };

  return (
    <BootstrapAccordion defaultActiveKey={activeIndex.toString()}>
      {elements.map((elem, index) => (
        <StyledAccordion key={uuidv4()}>
          <StyledAccordionHeader active={index === activeIndex}>
            <ContextAwareToggle eventKey={index}>{elem.headline}</ContextAwareToggle>
          </StyledAccordionHeader>
          <BootstrapAccordion.Collapse eventKey={index.toString()}>
            <BootstrapCard.Body>{elem.content}</BootstrapCard.Body>
          </BootstrapAccordion.Collapse>
        </StyledAccordion>
      ))}
    </BootstrapAccordion>
  );
};

Accordion.defaultProps = {
  elements: [],
  activeIndex: 0,
  setActiveIndex: () => {},
};

Accordion.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      content: PropTypes.element,
    }),
  ),
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func,
};

export default Accordion;
