import Tabs from './Tabs';
import TabButton from '../TabButton/TabButton';

import '../../index.css';
import { TAB_BUTTONS } from '../../mock/data';

export default {
  component: Tabs,
  title: 'Tabs',
};

const Template = args => (
  <Tabs {...args}>
    <></>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  buttons: TAB_BUTTONS.map(({ id, title }) => (
    <TabButton key={id} onSelect={() => handleSelect(title)}>
      {title}
    </TabButton>
  )),
  ButtonsContainer: 'menu',
};
