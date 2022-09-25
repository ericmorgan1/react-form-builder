import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TestComponent from './TestComponent';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
} as Meta;
const Template: Story<any> = (args) => <TestComponent {...args} />;

export const Example1 = Template.bind({});
Example1.args = { };