import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Test/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HTMLElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        fields: {
            heading: {
                value: 'Card Story Test',
            },
            content: {
                value: 'This is test content for a card story test.',
            },
        },
    },
};
