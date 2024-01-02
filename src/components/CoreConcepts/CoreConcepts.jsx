import CoreConcept from './CoreConcept/CoreConcept.jsx';
import Section from '../Layouts/Section.jsx';

import { CORE_CONCEPTS } from '../../mock/data.js';

export default function CoreConcepts() {
  return (
    <Section title={'Core Concepts'} id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map(({ id, ...item }) => (
          <CoreConcept key={id} {...item} />
        ))}
      </ul>
    </Section>
  );
}
