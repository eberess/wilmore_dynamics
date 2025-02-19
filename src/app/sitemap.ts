export default async function sitemap() {
  return [
    {
      url: 'https://wilmoredynamics.com',
      lastModified: new Date(),
    },
    {
      url: 'https://wilmoredynamics.com/apps',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // ... autres URLs
  ];
} 