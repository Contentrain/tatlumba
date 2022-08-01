
[![Rain Of Change](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/161e2520-980c-4c92-c953-a7080a77a800/public)](https://change-log-red.vercel.app/)

# Tatlumba  [![Netlify Status](https://api.netlify.com/api/v1/badges/c8e5a33c-a7e1-45a0-aa91-8951b3ba209b/deploy-status)](https://app.netlify.com/sites/tatlumba/deploys)

A free Blog template created with [**Nuxt 3.0**](https://nuxtjs.org) & [**Nuxt Content 2.0**](https://content.nuxtjs.org) that you can use for your projects.

We are very pleased to share our second free template. We hope Tatlumba will help anyone who needs a blog page for yourself.

You can customize this template as you wish by copying it to your own repository and pulling it to your local.

[Live Preview](https://tatlumba.netlify.app/)

## Headless CMS

[![Use with Contentrain](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/721c176e-f4b1-4495-1d6c-87a4b9ffa100/public)](https://app.contentrain.io)

To manage the content of this template, we recommend you use [**Contentrain**](Contentrain).

We have created the collection template that you need. You can find and use this collection in “Community Collections”.

After free registration with [Contentrain](**Contentrain**), you need to start a manual project installation and continue the installation by selecting the Tatlumba repo on Github.

During the installation, it is enough to delete the sample collections in the Collections step, select all the Tatlumba collections with exact collection name from the Community Collections section and complete the installation.

This way you can easily manage all your logs with Contentrain.

If you have any question with the installation, you can send us your questions via [Discord](**Discord**).

We will soon publish a video about how to use this template with Contentrain.

### Default

|page|description|
|-|-|
|home|It provides your main informations.|
|services|Allows you to create a hero banner and sections.|
|case studies|Allows you to show your blog articles. |
|contact|Allows you to set and show your contact informations. |
|case studies md|Allows you to write your articles same format. |

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Contentrain/tatlumba) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Contentrain/tatlumba)

### Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
npm run generate
```

The `dist/` directory is ready to be deployed (symlink to `.output/public`), [learn more on Nuxt docs](https://v3.nuxtjs.org/guide/deploy/static-hosting).

### Node server

Build the application for production:

```bash
npm run build
```

Start the server in production:

```bash
node .output/server/index.mjs
```

Learn more on [Nuxt docs](https://v3.nuxtjs.org/guide/deploy/node-server) for more information.
