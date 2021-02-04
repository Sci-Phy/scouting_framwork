# scouting_framework

## Project setup

This project requires [node.js](https://nodejs.org), tested with Node 15, although most versions should work.

To setup the development environment, `cd` to where this repository was cloned, and run

```node
npm install
```

That's it.
No really, the one command will fetch all 25,000 dependencies and install em.

### Before Developing

Make sure you have the server running (the backend system) before trying to run the below commands.
The commands below are specfically for the FRONTEND part of the application. To run the server,

```node
(sudo) npm run start
```

I made this a script in `package.json` now
You might need the sudo if you are running on Linux, as the server attempts to bind to port 80, which is the HTTP port.

### Compiles and hot-reloads for development

```node
npm run serve
```

If you want to change the code for the scouting app, this will start a live-reloading server.
Modifying the files within `/src` will cause the webpage to hot-reload.

### Compiles and minifies for production

```node
npm run build
```

This should be done before deploying the code.
What this does is go through all of the files in `/src`, and build them for production.
This includes polyfills for older browsers that may not support all of the fancy Javascript we use.
Building will dump the code into `/dist`, which is what `server.js` looks at to serve files.

## Competition

If you are at a competition and want to run this, you gotta do a few things.
First, find the machine you want to run this on.
Make sure it has node installed.
Run `npm run build` on a developer machine, and push to Github.
Now that the latest built version of the scouting app is in the cloud, go ahead and clone/download it onto the server machine.
Now, run

```node
node server.js
```

and the server will start up. It will print out an IP address: this is the address the server is running on visible to other devices
on the network.
(Side Note:
I handled the networking for the app my freshman and sophomore years, and it sucked.
Make sure that there is someone who actually understands routers better than I did then.)

If you just want to run it off a laptop, start the server, and give everyone who wants to scout the IP address.
If they go to it, the app should load.

## Data Analytics

Coming soon.

### Lints and fixes files

```node
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
