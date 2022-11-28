export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6384c9403f0ba60cb8192334',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-redux-studio',
                  apiId: 'd5937de9-f898-4981-9681-6268ba0a54d9'
                },
                {
                  buildHookId: '6384c9408cebdf0e9a9a32dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-redux',
                  apiId: '24265b1c-7b37-4574-b870-17b06ad1c79d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melroser/sanity-gatsby-portfolio-redux',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-redux.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
