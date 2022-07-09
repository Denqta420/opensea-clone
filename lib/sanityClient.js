import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'worq14t7',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skTQ7dACNUsUtU7L2S96dgxePhflNH46W52BbFmAYixXNwLyHkubAnDbDDrQ0TM4u06WwtPEV6vUA9MnpW8sCd7sqMIzDwFgFImTHTAmaHJTW4Ph3rvRlLVctuAbwjsh8c9GHg1ACo4tA2UliJnbFjtEI2kNk6ejg7Cplpthxy7mLhazFwJx',
  useCdn: false,
})
