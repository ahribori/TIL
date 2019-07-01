module.exports = {
  base: '/TIL/',
  dest: 'docs',
  title: 'Today I Learned',
  description: 'Daniel\'s TIL',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' }],
  ],

  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'HTML',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'CSS',
        children: [
          ['css/background', 'background'],
          ['css/box-model', 'box model'],
          ['css/cascading', 'cascading'],
          ['css/display', 'display'],
          ['css/flexbox', 'flexbox'],
          ['css/float', 'float'],
          ['css/font-text', 'font & text'],
          ['css/inheritance', 'inheritance'],
          ['css/margin-collapsing', 'margin collapsing'],
          ['css/position', 'position'],
          ['css/print-style', 'print'],
          ['css/selector', 'selector'],
          ['css/syntax', 'syntax'],
          ['css/transition-animation', 'transition & animation'],
          ['css/units', 'units'],
          ['css/whitespace-textoverflow-wordwrap-wordbreak', '줄바꿈과 관련된 속성'],
        ],
      },
      {
        title: 'Javascript',
        children: [
          ['javascript/this', 'this'],
          ['javascript/scope', 'scope'],
          ['javascript/functional-array-methods', 'Array methods'],
          ['javascript/for-of', 'for-of'],
        ],
      },
      {
        title: 'Node.js',
        children: [
          ['node.js/express-async-function-as-middleware', 'Express async wrapper'],
          ['node.js/graceful-shutdown', 'Graceful shutdown'],
          ['node.js/proxying-socket.io', 'Proxying Socket.io'],
          ['node.js/socket.io-cluster', 'Socket.io Cluster'],
          ['node.js/amqp-client', 'AMQP Client'],
        ],
      },
      {
        title: 'React',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'Concept',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'Design pattern',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'Docker',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'Kotlin',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
      {
        title: 'Linux',
        children: [
          ['concept/functional-programing', 'Functional Programming'],
        ],
      },
    ],
  },

  markdown: {
    lineNumbers: true,
  },

  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/medium-zoom': {
      selector: '.theme-default-content img',
      options: {
        background: '#26262B',
        margin: 16,
      },
    },
  },
}
