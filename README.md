# Simmonds & Co. Hugo Static Site

Based on [Hugo](https://gohugo.io/) and [Blowfish](https://blowfish.page/docs/installation/).

## Base software needed

**Windows**:

```sh
winget install --id Git.Git -e
winget install OpenJS.NodeJS -e
winget install Hugo.Hugo.Extended -e
winget install Amazon.AWSCLI -e
```

## Setup

```sh
git clone git@github.com:Simmonds-Co/simmondsco.au.git
cd simmondsco.au
npx blowfish-tools
hugo serve
```
