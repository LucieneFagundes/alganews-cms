import { ComponentStory, ComponentMeta } from '@storybook/react';
import Info, {InfoProps} from '../components/Info/Info';

export default {
  title: 'Example/Info',
  component: Info,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: "Post não encontrado",
    description: "Este post não foi encontrado. Você está sendo direcionado(a) para a lista de posts."
}