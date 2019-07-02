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
          ['html/script-async-defer', '<script> 태그 로딩전략'],
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
          ['node.js/update-all-dependencies', 'Update all dependencies'],
        ],
      },
      {
        title: 'React',
        children: [
          ['react/custom-attribute', 'Data attribute'],
          ['react/higher-order-component', 'HOC'],
          ['react/lifecycle', 'Lifecycle'],
          ['react/support-internet-explorer', 'IE 대응'],
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
          ['design-pattern/mvc-mvp-mvvm', 'MVC, MVP, MVVM'],
        ],
      },
      {
        title: 'Docker',
        children: [
          ['docker/docker-command', 'Docker 명령어'],
          ['docker/docker-swarm', 'Docker Swarm'],
          ['docker/enabling-docker-engine-api-on-remote-docker-host', 'Docker engine remote API 활성화'],
          ['docker/local-registry', 'Docker local registry'],
          ['docker/ubuntu-docker-permission-resolve', 'Ubuntu docker permission issue'],

        ],
      },
      {
        title: 'Linux',
        children: [
          ['linux/ubuntu-setting-dns', 'Ubuntu DNS 설정'],

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
