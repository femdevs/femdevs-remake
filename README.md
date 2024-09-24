# FemDevs Website

This is the codebase for the official FemDevs homepage. It is built in React using the Next.JS framework to deal with routing and other systems.

For information on exactly what is used, please see the [List of Tools](#list-of-tools) section below.

## How To Run

### Install Node.js and NPM

First, you need to install [Node.js](https://nodejs.org/), [npm](https://npmjs.com), and [pnpm](https://pnpm.io/).

To install Node, either download it from [nodejs.org](https://nodejs.org/), or run one of the following
commands depending on your operating system:

#### Windows PowerShell

```powershell
# Install Git
winget install --id Git.Git -e --source winget

# Install Node.js + NPM
Set-ExecutionPolicy Bypass -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
choco install nodejs

# Install PNPM
iwr https://get.pnpm.io/install.ps1 -UseBasicParsing | iex
```

#### MacOS

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js + NPM
brew install node npm git
```

PNPM:

```bash
# cURL
curl -fsSL https://get.pnpm.io/install.sh | sh -

#wget
wget -qO- https://get.pnpm.io/install.sh | sh -
```

#### Linux

```bash
# Ubuntu
sudo apt update && sudo apt upgrade
sudo apt install nodejs npm git -y

# Fedora / Red Hat
sudo dnf install nodejs npm git -y

# Arch
sudo pacman -Sy nodejs npm git

# openSUSE
sudo zypper install nodejs npm git -y

# CentOS
sudo yum install nodejs npm git -y
```

PNPM:

```bash
# cURL
curl -fsSL https://get.pnpm.io/install.sh | sh -

#wget
wget -qO- https://get.pnpm.io/install.sh | sh -
```

### Clone the Repository

After installing Git, Node, NPM, and PNPM; clone the repository by running the following commands:

> [!TIP]
> It is recommended to use PNPM rather than NPM. Command syntax for both is similar and all npm commands are compatible with pnpm.

```bash
# Cloning the repository
git clone "https://github.com/femdevs/femdevs-remake"
cd femdevs-remake

# Install dependencies
pnpm i
pnpm build
```

### Set Up Environment Variables

Make sure to define the following environment variables in a `.env` file:

> [!IMPORTANT]
> This is the easiest way to set up environment variables. However, it is not recommended for production. For production, use a `.env` file or set the environment variables in your hosting provider's dashboard.
> All of the following environment variables are required for the server to run.

```conf
BETTER_STACK_TOKEN="BETTER_STACK_API_TOKEN"
C_IV='CRYPTO_IV'
C_KEY='CRYPTO_KEY'
CROWDIN_DISTRO_ID="CROWDIN_DISTRO_ID"
DISCORD_TOKEN='DISCORD_BOT_TOKEN'
DISCORD_CLIENT_ID='DISCORD_CLIENT_ID'
DISCORD_CLIENT_SECRET='DISCORD_CLIENT_SECRET'
DISCORD_REDIRECT_URI='DISCORD_AUTH_REDIRECT_URI'
FIREBASE_SA='FIREBASE_SERVICE_ACCOUNT_JSON_DATA'
FIREBASE_SA_TYPE='FIREBASE_ACCOUNT_TYPE'
FIREBASE_SA_PRIVATE_KEY_ID='FIREBASE_PRIV_KEY_ID'
FIREBASE_SA_PRIVATE_KEY='FIREBASE_PRIV_KEY'
FIREBASE_SA_CLIENT_EMAIL='FIREBASE_CLIENT_EMAIL'
FIREBASE_SA_CLIENT_ID='FIREBASE_CLIENT_ID'
FIREBASE_SA_AUTH_URI='FIREBASE_SERVICE_ACCOUNT_AUTH_URI'
FIREBASE_SA_TOKEN_URI='FIREBASE_SERVICE_ACCOUNT_TOKEN_URI'
FIREBASE_SA_AUTH_PROVIDER_X509_CERT_URL='FIREBASE_SERVICE_ACCOUNT_CERT_PROVIDER'
FIREBASE_SA_CLIENT_X509_CERT_URL='FIREBASE_SERVICE_ACCOUNT_CERT_URL'
FIREBASE_API_KEY='FIREBASE_API_KEY'
FIREBASE_AUTH_DOMAIN='FIREBASE_AUTH_URI'
FIREBASE_PROJECT_ID='FIREBASE_PROJECT_ID'
FIREBASE_APP_ID='FIREBASE_APP_ID'
FIREBASE_MEASUREMENT_ID='FIREBASE_MEASUREMENT'
FIREBASE_SA_UNIVERSE_DOMAIN='FIREBASE_GLOBAL_DOMAIN'
GMAPS_API_KEY='GMAPS_API_KEY'
NODE_ENV='production'
STRIPE='STRIPE_API_KEY'
STRIPE_WH_SECRET='STRIPE_WEBHOOK_SECRET'
SPOTIFY_CLIENT_ID='SPOTIFY_CLIENT_ID'
SPOTIFY_CLIENT_SECRET='SPOTIFY_CLIENT_SECRET'
SPOTIFY_REDIRECT_URI='SPOTIFY_AUTH_REDIRECT_URI'
SUPABASE_URL="SUPABASE_URL"
SUPABASE_KEY="SUPABASE_SERVICE_ACCOUNT_KEY"
VERIPHONE_TOKEN='VERIPHONE_API_KEY'
```

### Run the Server

To run the server, enter in the following command:

```bash
# Development Server
pnpm dev

# Production Server
pnpm build
pnpm start
```

Both options will run a server at <http://localhost:3000> where you can view your website.

## Contributing

If you would like to contribute to the project, please read the Contributing Guidelines at <https://thefemdevs.com/oss/contributing>.

We have a list of contributors at <https://thefemdevs.com/oss/contributors>.

If you would like to make a fiscal contribution to the project, please visit <https://opencollective.com/femdevs/projects/femdevs-website>. Any and all contributions are greatly appreciated.

## License

This project is licensed under the Affero General Public License v3.0 - see the License at <https://thefemdevs.com/oss/license> for details.

## Code of Conduct

Please read the Code Of Conduct at <https://thefemdevs.com/oss/code-of-conduct> for details on our code of conduct.

## Contact

If you have any questions, please feel free to reach out to us at <contact@thefemdevs.com>.

## List of Tools

- [Node.js](https://nodejs.org/) => JavaScript runtime
- [TailwindCSS](https://tailwindcss.com/) => Utility-first CSS framework
- [PostCSS](https://postcss.org/) => A tool for transforming CSS with JavaScript
- [Autoprefixer](https://npmjs.com/package/autoprefixer) => A plugin to parse CSS and add vendor prefixes to CSS rules
- [Firebase](https://firebase.google.com/) => A platform developed by Google for creating mobile and web applications
- [Supabase](https://subabase.com) => A Firebase alternative with a free Postgres database, authentication, and storage support.
- [nodemailer](https://nodemailer.com/) => Send e-mails from Node.js
- [node-html-parser](https://npmjs.com/package/node-html-parser) => Fast and forgiving HTML/XML parser
- [html-minifier](https://npmjs.com/package/html-minifier) => A tool to minify HTML
- [@therealbenpai/zdcors](https://npmjs.com/package/@therealbenpai/zdcors) => A simple zero-dependency Web Security middleware for Express.js
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) => A set of web APIs to access Spotify music catalog
- [Google Maps API](https://developers.google.com/maps) => A set of APIs to access Google Maps data
- [Discord API](https://discord.com/developers/docs/intro) => A set of APIs to access Discord data
- [Stripe API](https://stripe.com/docs/api) => A set of APIs to access Stripe data
- [Veriphone API](https://veriphone.io/) => A set of APIs to access phone number data
- [Free APIs](https://free-apis.github.io/) => Free APIs for developers
- [Preline](preline.co) => A TailwindCSS component library service with hundreds of components and templates for free
- [Eslint](https://eslint.org/) => A tool to find and fix problems in your JavaScript code
