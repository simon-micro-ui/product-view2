#References

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://angular.io/guide/aot-compiler


# TODO

1. Revisit what is getting concatentated (via elements-build.js). SHould not be including stuff which should be loaded in the parent, e.g. polyfills.js
2.  

# Revised Instructions (Updates and How to Run/Deploy)

Add the following to package.json

	"dependencies": {
		....
		....
	    "@webcomponents/custom-elements": "^1.1.1",
	    "@webcomponents/webcomponentsjs": "^2.0.0",


	"devDependencies": {
		....
		....
	    "concat": "^1.0.3",
	    "fs-extra": "^6.0.1",

	"build-prod": "ng build --prod --output-hashing=none --verbose && cp src/package.json dist/package.json && node elements-build.js",

Add the following to angular.json (if you want to run in standalone mode).  During the build, this will bundle the included javascript files in a scripts.js file within the dist folder.

        "build": {
            ....
            ....
            "scripts": [
              "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
              {
                "input":
                  "node_modules/document-register-element/build/document-register-element.js"
              }
            ]
            ....
            ....

Then, add the scripts.js file to ./src/index.html, i.e. 

	<body>
	   <script type="text/javascript" src="scripts.js"></script>
	   <app-root></app-root>
	</body>

Install the angular cli:
              
	yarn global add @angular/cli

Install the Dependencies:

	npm install 
	
	npm install --save-dev

Build the project:

	npm run build --prod 
	
Which under the covers calls:
	
	ng build

Run it:

	npm run serve
	
Which under the covers calls:	
	
	ng serve


# Building the Element

https://medium.com/codingthesmartway-com-blog/angular-elements-a-practical-introduction-to-web-components-with-angular-6-52c0b3076c2c

	npm install fs-extra concat -D

Add the following to prod build step in package.json

	node elements-build.js
	
e.g

	"build-prod": "ng build --prod --output-hashing=none --verbose && node elements-build.js",


# Publishing a Artifact to the Respository

https://docs.npmjs.com/cli/publish

npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode]


# Angular 6 Elements To Create MicroFront End Application

Default Angular CLI build

* `npm run build` build the header component
* `node server` to run a standalone header application

Build and publish reusable module like any other Angular module

* `./build.sh` to create reusable package
* `npm publish` publish the package to npm

Building MicroFront End Application using Angular Elements/Web Components
Read the complete walkthrough in the article: 
