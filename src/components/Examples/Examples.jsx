import { useState } from 'react';

import TabButton from '../TabButton/TabButton.jsx';

import { TAB_BUTTONS, EXAMPLES } from '../../mock/data.js';

export default function Examples() {
  const [state, setState] = useState();
  function handleSelect(selectedBtn) {
    setState(selectedBtn);
  }
  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        {TAB_BUTTONS.map(({ id, title }) => (
          <TabButton
            key={id}
            onSelect={() => handleSelect(title)}
            className={state === title ? 'active' : ''}
          >
            {title}
          </TabButton>
        ))}
      </menu>
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
    </section>
  );
}
