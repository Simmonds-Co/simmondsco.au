# simmondsco.au

## Setup (Windows - one time only)

1. Install [Node.js](https://nodejs.org/) (LTS version)
2. Install [AWS CLI](https://aws.amazon.com/cli/)
3. Install [Make for Windows](https://gnuwin32.sourceforge.net/packages/make.htm) (add to PATH)
4. Run `aws configure` (Ben will provide credentials)
5. Run `npm install`

## Update the site

1. Edit files in `/src`
2. Run `npm run dev` to preview at http://localhost:3000
3. Run `npm run build` to generate static files
4. Run `make deploy` to push to S3
