import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph, {ParagraphProps} from '../components/Typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args ={
    size: "default",
    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque libero beatae pariatur nulla a. Necessitatibus nostrum incidunt possimus voluptatum, alias commodi vero et explicabo odit libero dolorem eveniet asperiores quo."
}

export const Small = Template.bind({});
Small.args = {
    size: "small",
    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque libero beatae pariatur nulla a. Necessitatibus nostrum incidunt possimus voluptatum, alias commodi vero et explicabo odit libero dolorem eveniet asperiores quo."
}
