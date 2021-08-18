import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValueDescriptor, {ValueDescriptorProps} from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  isCurrency: false,
  color: 'default'
}

export const Primary = Template.bind({});
Primary.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  isCurrency: false,
  color: 'primary'
}

export const CurrencyDefault = Template.bind({});
CurrencyDefault.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  isCurrency: true,
  color: 'default'
}

export const CurrencyPrimary = Template.bind({});
CurrencyPrimary.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  isCurrency: true,
  color: 'primary'
}