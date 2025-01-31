import React from 'react';

export default {
  title: 'Core/Loaders',
  loaders: [async () => new Promise((r) => setTimeout(() => r({ kindValue: 7 }), 3000))],
};

export const Story = (args, { loaded }) => (
  <div>Loaded Value is {JSON.stringify(loaded, null, 2)}</div>
);
Story.loaders = [async () => ({ storyValue: 3 })];

export const ZIndex = (args, { loaded }) => (
  <div
    style={{
      position: 'relative',
      zIndex: 1000,
      width: '100px',
      height: '100px',
      background: 'coral',
    }}
  >
    This story has a very high <code>z-index</code>
  </div>
);
