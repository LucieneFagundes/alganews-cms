import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, {} from '../components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({})
Default.args = {

}