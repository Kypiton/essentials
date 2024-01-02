import { useState } from 'react';

import TabButton from '../TabButton/TabButton.jsx';
import Section from '../Layouts/Section.jsx';
import Tabs from '../Layouts/Tabs.jsx';

import { EXAMPLES, TAB_BUTTONS } from '../../mock/data.js';

export default function Examples() {
  const [state, setState] = useState();

  function handleSelect(selectedBtn) {
    setState(selectedBtn);
  }
  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttons={TAB_BUTTONS.map(({ id, title }) => (
          <TabButton
            key={id}
            onSelect={() => handleSelect(title)}
            className={state === title ? 'active' : ''}
          >
            {title}
          </TabButton>
        ))}
      >
        {!state ? (
          <p>Please select a topic.</p>
        ) : (
          <div id='tab-content'>
            <h3>{EXAMPLES[state].title}</h3>
            <p>{EXAMPLES[state].description}</p>
            <pre>
              <code>{EXAMPLES[state].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
