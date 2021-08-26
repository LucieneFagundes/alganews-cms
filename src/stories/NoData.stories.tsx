import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoData, {NoDataProps} from '../components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args = { }

export const FixedHeight = Template.bind({})
FixedHeight.args = { 
    height: 240
}