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
                  buildHookId: '604b38af9b130fa6978095bb',
                  title: 'Sanity Studio',
                  name: 'repobot-pts-studio',
                  apiId: 'bd74b0e8-e186-4845-b4a3-3ccc3f8982fc'
                },
                {
                  buildHookId: '604b38af02627f7d0c950613',
                  title: 'Portfolio Website',
                  name: 'repobot-pts',
                  apiId: '264bdbab-8887-4229-ad77-705370f5386c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adham-ta/repobot-pts',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://repobot-pts.netlify.app',
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
