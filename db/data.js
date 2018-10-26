const users = [
  {
    _id: '000000000000000000000001',
    username: 'msgreen',
    // hash for "password"
    password: '$2a$10$QJCIX42iD5QMxLRgHHBJre2rH6c6nI24UysmSYtkmeFv6X8uS1kgi'
  },
  {
    _id: '000000000000000000000002',
    username: 'alexgutes',
    // hash for "password"
    password: '$2a$10$QJCIX42iD5QMxLRgHHBJre2rH6c6nI24UysmSYtkmeFv6X8uS1kgi'
  },
  {
    _id: '000000000000000000000003',
    username: 'correcthorse',
    // hash for "password"
    password: '$2a$10$QJCIX42iD5QMxLRgHHBJre2rH6c6nI24UysmSYtkmeFv6X8uS1kgi'
  }
];
const questions = [
  {
    _id: '111111111111111111111101',
    title: 'What is the difference between React Native and React?',
    content:
      'I have started to learn React out of curiosity and wanted to know the difference between React and React Native - though could not find a satisfactory answer using Google. React and React Native seems to have the same format. Do they have completely different syntax?',
    userId: '000000000000000000000001'
  },
  {
    _id: '111111111111111111111102',
    title: 'What do these three dots in React do?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000001'
  },
  {
    _id: '111111111111111111111103',
    title: 'React “after render” code?',
    content: `I have an app where I need to set the height of an element (lets say "app-content") dynamically. It takes the height of the "chrome" of the app and subtracts it and then sets the height of the "app-content" to fit 100% within those constraints. This is super simple with vanilla JS, jQuery, or Backbone views, but I'm struggling to figure out what the right process would be for doing this in React? Below is an example component. I want to be able to set app-content's height to be 100% of the window minus the size of the ActionBar and BalanceBar, but how do I know when everything is rendered and where would I put the calculation stuff in this React Class?`,
    userId: '000000000000000000000001'
  },
  {
    _id: '111111111111111111111104',
    title:
      'What is the difference between using constructor vs getInitialState in React / React Native?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000002'
  },
  {
    _id: '111111111111111111111105',
    title: 'How to conditionally add attributes to React components?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000002'
  },
  {
    _id: '111111111111111111111106',
    title:
      'Can you force a React component to rerender without calling setState?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000002'
  },
  {
    _id: '111111111111111111111107',
    title: 'What does the “yield” keyword do?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000003'
  },
  {
    _id: '111111111111111111111108',
    title: 'How do I get started with Node.js',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000003'
  },
  {
    _id: '111111111111111111111109',
    title:
      'How do I completely uninstall Node.js, and reinstall from beginning (Mac OS X)',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: '000000000000000000000003'
  }
];

module.exports = { questions, users };
