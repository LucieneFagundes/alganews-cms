import { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm, {ConfirmProps} from '../components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: "Deseja realmente sair?"
}