import Section from './Section';
import CoreConcept from '../CoreConcepts/CoreConcept/CoreConcept';

import { CORE_CONCEPTS } from '../../mock/data';

import '../../index.css';
import '../CoreConcepts/CoreConcept/CoreConcept.css';

export default {
  component: Section,
  title: 'Section',
};

export const Core_Concepts = {
  args: {
    children: (
      <ul>
        {CORE_CONCEPTS.map(({ id, ...item }) => (
          <CoreConcept key={id} {...item} />
        ))}
      </ul>
    ),
    title: 'Core Concepts',
    id: 'core-concepts',
  },
};
