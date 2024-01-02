import CoreConcept from './CoreConcept/CoreConcept.jsx';

import { CORE_CONCEPTS } from '../../mock/data.js';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2 style={{ textAlign: 'center' }}>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(({ id, ...item }) => (
          <CoreConcept key={id} {...item} />
        ))}
      </ul>
    </section>
  );
}
