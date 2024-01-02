import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS, TAB_BUTTONS, EXAMPLES } from './mock/data.js';

function App() {
  const [state, setState] = useState();
  function handleSelect(selectedBtn) {
    setState(selectedBtn);
  }

  const activeTab = state;

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2 style={{ textAlign: 'center' }}>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(({ id, ...item }) => (
              <CoreConcept key={id} {...item} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
