import { extractComponentDescription, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes } from './extractArgTypes';
import { prepareForInline } from './prepareForInline';
import { sourceDecorator } from './sourceDecorator';

export const parameters = {
  docs: {
    inlineStories: true,
    iframeHeight: 120,
    prepareForInline,
    extractArgTypes,
    extractComponentDescription,
  },
};

export const decorators = [sourceDecorator];

export const argTypesEnhancers = [enhanceArgTypes];
