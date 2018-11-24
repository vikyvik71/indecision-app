-- Install NodeJS (site installer)
	Check with: 
		'$ node -v'
		'$ npm -v'

-- Install Yarn (globally)
	'$ npm install -g yarn'
	Check with
		'$ yarn --version'

-- Create a folder project (e.g. ~/react-course-projects/indecision-app)

-- Install live-server (globally):
	'$ yarn global add live-server'
	Check with:
		'$ live-server -v'

-- Create a public folder with dummy index.html in it and launch live-server from project home:
	'$ cd ~/react-course-projects/indecision-app'
	'$ mkdir -p ~/react-course-projects/indecision-app/public'
	'$ touch ~/react-course-projects/indecision-app/public/index.html'
	'$ live-server public'

-- Include script tags in index.html for React and ReactDOM:

	<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script> 

-- Create a script folder under public:
	'$ cd ~/react-course-projects/indecision-app/public'
	'$ mkdir -p scripts'

-- Create a single app.js file in the scripts folder, this is the main script for the app
