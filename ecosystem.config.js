module.exports = {
  apps: [
    {
      name: 'nuxt-vinyl',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      watch: ['.nuxt'],
      args: 'start',
      ignore_watch: ['node_modules']
    }
  ]
}
