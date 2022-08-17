import { Template } from '/.storybook/template.js';
import decorate from './cards.js';
// eslint-disable-next-line no-unused-vars
import style from './cards.css';
import search from './icons/search.svg';

export default {
  title: 'Cards',
  parameters: {
    docs: {
      description: {
        component: 'Cards are lists of (optional) images or icons, and descriptive text. They are used to display information about a product, service, or event.',
      },
    },
  },
  args: {
    host: 'https://main--helix-basic-theme--dylandepass.hlx.page',
  },
  argTypes: {
    host: {
      table: {
        disable: true,
      },
    },
    selector: {
      table: {
        disable: true,
      },
    },
    path: {
      table: {
        disable: true,
      },
    },
    parameters: {
      table: {
        disable: true,
      },
    },
    index: {
      table: {
        disable: true,
      },
    },
    sectionClasses: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
    blockClasses: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
};

export const Three = Template.bind({ decorate, style });
Three.args = {
  path: '/storybook/cards.plain.html',
  selector: '.cards',
  index: 0
};

Three.parameters = {
  iframe: {
    url: 'https://docs.google.com/document/d/e/2PACX-1vTzp7tFJDaIk1E8Amh6xxMhSrWox2PTMqPHLHrRbxpkamXVtnrnVHjpIGqcaIn1EhN92_8Zb2KAHCCR/pub',
  },
  docs: {
    source: {
      format: true,
      language: "html",
      type: "dynamic",
    },
  },
};

Three.storyName = 'Three Cards';

export const Two = Template.bind({ decorate, style });
Two.args = {
  path: '/storybook/cards.plain.html',
  selector: '.cards',
  index: 1,
  parameters: {
    iframe: {
      url: 'https://docs.google.com/document/d/e/2PACX-1vTzp7tFJDaIk1E8Amh6xxMhSrWox2PTMqPHLHrRbxpkamXVtnrnVHjpIGqcaIn1EhN92_8Zb2KAHCCR/pub',
    },
  }
};

Two.parameters = {
  iframe: {
    url: 'https://docs.google.com/document/d/e/2PACX-1vTzp7tFJDaIk1E8Amh6xxMhSrWox2PTMqPHLHrRbxpkamXVtnrnVHjpIGqcaIn1EhN92_8Zb2KAHCCR/pub',
  }
};

Two.storyName = 'Two Cards';
Two.parameters = {
  docs: {
    description: {
      story: 'As you add more or fewer cards, the number of columns will change.',
    },
  },
};

export const Url = Template.bind({ decorate, style });
Url.args = {
  url: '/home',
  selector: '.cards',
  index: 1,
};
Url.storyName = 'From Helix Home Page';
Url.parameters = {
  docs: {
    description: {
      story: 'Content can be loaded from a URL.',
    },
  },
};
