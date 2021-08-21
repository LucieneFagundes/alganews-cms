import { ComponentStory, ComponentMeta } from '@storybook/react';
import FieldDescriptor, {FieldDescriptorProps} from '../components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof FieldDescriptor>;

const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const Descriptor = Template.bind({})
Descriptor.args = {
    field: "data de nascimento",
    value: "26 de Dezembro de 1997 (22 anos)"
}