const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const fs = require('fs');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
	
	// src/ entry
    entry: { 
		'/index.js': './src/index.js', 
		'/main.js': './src/main.js',
		'/assets/img/hero.gif': './src/assets/img/hero.gif', 
		'/application/components/Banner.js': './src/application/components/Banner.js',
		'/application/components/Footer.js': './src/application/components/Footer.js',
		'/application/components/Header.js': './src/application/components/Header.js', // will be ./build/application/bundle.js,
		'/application/components/InfoCard.js': './src/application/components/InfoCard.js',
		'/application/components/LargeCard.js': './src/application/components/LargeCard.js',
		'/application/components/MediumCard.js': './src/application/components/MediumCard.js',
		'/application/components/SmallCard.js': './src/application/components/SmallCard.js',
		'/assets/img/hero.gif': './src/assets/img/hero.gif', 
		
		About: [path.resolve(__dirname, "./src/about.js")],
		Contact: [path.resolve(__dirname, "./src/contact.js")],
		Home: [
			'./src/main.js', 
			'./src/index.js',
			
		// Banner
			'./src/application/components/Banner-main.js', 
			'./src/application/components/Banner.js',
				
		// Footer
			'./src/application/components/Footer-main.js', 
			'./src/application/components/Footer.js',
				
		// Header
			'./src/application/components/Header-main.js', 
			'./src/application/components/Header.js',
			
		// InfoCard
			'./src/application/components/InfoCard-main.js', 
			'./src/application/components/InfoCard.js',
		
		// LargeCard
			'./src/application/components/LargeCard-main.js', 
			'./src/application/components/LargeCard.js',
			
		// MediumCard
			'./src/application/components/MediumCard-main.js', 
			'./src/application/components/MediumCard.js',
				
		// SmallCard
			'./src/application/components/SmallCard-main.js', 
			'./src/application/components/SmallCard.js',
			],			
		Search: [
			'./src/find.js', 
			'./src/search.js',
			]
	},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]',
		
    },
	// Optimizations
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}, 
	//developmentServer = npm run dev
	devtool: 'inline-source-map',
	devServer:{
		"port": "5015"
	},
	//loaders, test = npm run build
	module: {  // 'modeule' is an object
		rules: [  // 'rules' is an array
		{
			test: /\.css$/,  // 'test' is a regular expression
			use: [  
					'style-loader', 
					'css-loader',
					'postcss-loader',
			]
		},
		{
			test: /\.html$/,  // 'test' is a regular expression
			use: ['html-loader'] // 'use' is an array without {}, but [] and without "loader:"
		},
		
		{
			test: /\.(svg|ico|png|gif|jpe?g)$/, // '|' as 'or' in regular expression 
			use: { // 'use' is herer an object instead of an array, bc we need options
					loader: 'file-loader',
					options:{
						name:'[name]-[fullhash].[ext]?[query]',
						outputPath: 'assets/img/',
				}	
			},
			type: 'asset/resource',
		},
		{
			test: /\.docx$/, 
			use: ['docx-loader'], 
			type: 'asset/resource'
		},
		{
			test: /\.pdf$/, 
			use: ['pdf-loader'], 
			type: 'asset/resource'
		},
		{
			test: /\.(geojson|json)$/,
			use: [
					'json-loader',
					'raw-loader',
					'json-import-loader'
			]
		},
		{
			test: /\.(js|txt)$/, 
			use: {
				loader: 'babel-loader', 
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			type: 'asset'
		},
		],
	},	
	//plugins
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Landing | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'Home.html',
			template: './src/index-template.html',
			chunks: ['Home']
		}),
		new HtmlWebpackPlugin({
			title: 'Search | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'search.html',
			template: './src/search-template.html',
			chunks: ['search']
		}),
		new HtmlWebpackPlugin({
			title: 'ArcGIS API | mboss-us | Maricla Kandzorra',
			filename: 'mapgl.html',
			template: './src/application/core/homepage/silopages/services/search/mapping/MapGL-template.html',
			chunks: ['mapgl']
		}),
		new HtmlWebpackPlugin({
			title: 'KetchUp! | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'contact.html',
			template: 'src/application/core/homepage/supportingpages/about/contact-template.html',
			chunks: ['contact']
		}),
		new HtmlWebpackPlugin({
			title: 'The Story | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'about.html',
			template: 'src/application/core/homepage/supportingpages/about/about-template.html',
			chunks: ['about']
		}),
		new HtmlWebpackPlugin({
			title: 'Banner | mboss-us | Maricla Kandzorra',
			filename: 'Banner.html',
			template: './src/application/components/Banner.js',
			chunks: ['Banner']
		}),
		new HtmlWebpackPlugin({
			title: 'Footer | mboss-us | Maricla Kandzorra',
			filename: 'Footer.html',
			template: './src/application/components/Footer-template.html',
			chunks: ['Footer']
		}),
		new HtmlWebpackPlugin({
			title: 'Header | mboss-us | Maricla Kandzorra',
			filename: 'Header.html',
			template: './src/application/components/Header-template.html',
			chunks: ['Header']
		}),
		new HtmlWebpackPlugin({
			title: 'InfoCard | mboss-us | Maricla Kandzorra',
			filename: 'InfoCard.html',
			template: './src/application/components/InfoCard-template.html',
			chunks: ['InfoCard']
		}),
		new HtmlWebpackPlugin({
			title: 'LargeCard | mboss-us | Maricla Kandzorra',
			filename: 'LargeCard.html',
			template: './src/application/components/LargeCard-template.html',
			chunks: ['LargeCard']
		}),
		new HtmlWebpackPlugin({
			title: 'MediumCard | mboss-us | Maricla Kandzorra',
			filename: 'MediumCard.html',
			template: './src/application/components/MediumCard-template.html',
			chunks: ['MediumCard']
		}),
		new HtmlWebpackPlugin({
			title: 'SmallCard | mboss-us | Maricla Kandzorra',
			filename: 'SmallCard.html',
			template: './src/application/components/SmallCard-template.html',
			chunks: ['SmallCard']
		}),
		new GenerateJsonPlugin(
		'./library/geojson/VenuesNYaMariKan.geojson', { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": { "img": "CategoryFilter", "location": "CategoryFilter", "title": "CategoryFilter", "address": "MapsTooltip - Hidden - StringFilter", "Latitude": 0, "Longitude": 0, "description": "CategoryFilter", "star": "", "price": "CategoryFilter", "total": "" }, "geometry": { "type": "Point", "coordinates": [ 0, 0 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2274252_md.jpg", "location": "World Yacht Events infron of New York", "title": "Find your ultimate Event Venue on the Ocean and get back to Party", "address": "1 Marina Rd, Queens, NY 11368, United States", "Latitude": 40.761224, "Longitude": -73.857806, "description": "2.500 Max Number of Guests · 30 Max Number of Yachts · 30,000 Max Meeting Room Space (Square Feet) · Full Lounge · Full Equipped · Handicapped Accessable · On Site Catering Service · Outside Catering Allowed · Outdoor Function Area · Valet Parking · Waterfront", "star": 5, "price": "$95.00 to $225.00/ person", "total": "$4298 to $6450/ 50 Guests" }, "geometry": { "type": "Point", "coordinates": [ -73.857806, 40.761224 ] } }, { "type": "Feature", "properties": { "img": "https://images.squarespace-cdn.com/content/v1/5941591cdb29d6b6a4797d77/1581112153916-FFWP4ORF367NZASX3WVU/Runway.jpg?format=750w", "location": "Broadway at street level in the heart of Soho & TriBeCa", "title": "Modular Multi use experience design studios with immersive technology for Events", "address": "W Broadway, New York, NY, United States of America", "Latitude": 40.7200622, "Longitude": -74.005658, "description": "150 Max Number of Guests · 3 studios · 2,400 Max Meeting Room Space (Square Feet) · 16-foot ceilings · 25 customizable screens · 20-foot glass retail facade · three levels featuring a modern white-box gallery finish · Fully immersive walls & floors · Customizable color track lighting · Customizable marquee · Modular Walls · Street-level storefront · Handicapped Accessable · Wifi · Outside Catering Allowed · Art Exhibitions · NFT Events · Digital Art Exhibitions · Film/Photo Shoots · Music Videos", "star": 5, "price": "$2,500 to $4,500/event", "total": "$2,500 to $4,500/event" }, "geometry": { "type": "Point", "coordinates": [ -74.005658, 40.7200622 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3171022_md.jpg", "location": "Raines Law Room at The William | Manhattan | New York City", "title": "The private salon barista club - all around cocktail Events", "address": "24 E 39th St, New York, NY, United States", "Latitude": 40.7504896, "Longitude": -73.9802784, "description": "Full buy-out: private up to 75 guests · Drawing room: private up to 25 guests · indoor dinners · mixology lessons · team building · events Garden: private up to 20 guests · secret garden is weather permitting - semi-private space", "star": 5, "price": "$100/ person", "total": "150 to 7500 $/ event" }, "geometry": { "type": "Point", "coordinates": [ -73.9802784, 40.7504896 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3008012_md.jpg", "location": "Chelsea Industrial between Chelsea, Hudson Yards, and Midtown West", "title": "NYC’S MOST IN DEMAND EVENT SPACE - The perfect event-ready production space for any event needs", "address": "W 28 St, New York, NY, United States of America", "Latitude": 40.7490929, "Longitude": -73.9969488, "description": "50 to 1,100+ Max Number of Guests · 3 studios · 22,000 Max Meeting Room Space (Square Feet) · 18-foot ceilings · Event Spaces: 3 spaces · Multiple/Breakout Spaces Retail Glass Frontage · Back of House Space · Kitchen & Kitchenette · Multiple Entrances · Retractable Privacy Screens · WiFi · LED Screen · Truss Lighting Furniture · Unlimited Branding Potential · Flexible Timing · Street Level Direct Load-In · HVAC · ADA Accessible · Wi-Fi · Unisex Restrooms", "star": 5, "price": "$10,000 to $100,000/ party ", "total": "$5,000–20,000/event" }, "geometry": { "type": "Point", "coordinates": [ -73.9969488, 40.7490929 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3058543_md.jpg", "location": "Luxory loft on 5th is fully furnished", "title": "Uniquely designed private lounge rooms", "address": "20 West 23rd Street, Suffolk County, NY 11729, United States of America", "Latitude": 40.7551215, "Longitude": -73.3491093, "description": "State-of-the-art surround sound speaker system · 55” Samsung QLED picture frame TV with YouTube Premium subscription · 8ft floor mirror · Black-out curtains · Kitchen with island, refrigerator, and microwave for caterers · 11 ft ceilings, exposed brick & hardwood floors · 2 gender-neutral bathrooms · Central heating and AC · Elevator access for easy equipment load-in and out · High-speed WiFi · Fully furnished rooftop with a speaker system and heat lamps", "star": 5, "price": "$38 to $59/ person", "total": "$4,000 to $9,000/ 20 to 80 attendees" }, "geometry": { "type": "Point", "coordinates": [ -73.3491093, 40.7551215 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2617175_md.jpg", "location": "Ascent Lounge, located in the world-famous Time Warner Center, offers stunning views of iconic Central Park and Columbus Circle", "title": "City Nights Hospitality’s one-of-a-kind premier venue", "address": "Per Se, 10 Columbus Circle, New York, NY 10019, United States of America", "Latitude": 40.7682178, "Longitude": -73.9828988, "description": "500 Max Number of Guests · 5,500 Sophisticated Cocktail Lounge (Square Feet) · tall ceilings · Event Spaces: 2 spaces · full premium Lounge/ bar of alcoholic and non-alcoholic beverages · Fully Equipped onsite kitchen · Award-Winning Service Team · flexible furniture plan · WiFi · Handicapped Accessible · On-Site Catering Service · Outdoor Function Area· Outside Catering Allowed · all types of event experiences· Valet Parking ", "star": 5, "price": "$100/ person", "total": "$20,000 to $80,000/event" }, "geometry": { "type": "Point", "coordinates": [ -73.9828988, 40.7682178 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2303561_md.jpg", "location": " In the creative center of New York City, Hell's Kitchen, with sweeping views of the Manhattan skyline and Hudson River", "title": "Celebrate your Rooftop Party and Wedding above the city from the 18th floor", "address": "Ink 48 Hotel, 653 11th Avenue, New York, NY 10036, United States of America", "Latitude": 40.764568, "Longitude": -73.995995, "description": "100 Max Number of Guests · 2,200-square-foot private terrace · Event Spaces: 6 spaces · one of the city's most attractive rooftop full bars/ Lounges · On-Site Catering Service · WiFi · Handicapped Accessible · Outdoor Function Area · Outside Catering Allowed · all types of event experiences · Valet Parking", "star": 5, "price": "$60/ person", "total": "$4,000 plus minim bill of $2,000/ event" }, "geometry": { "type": "Point", "coordinates": [ -73.995995, 40.764568 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3084907_md.jpg", "location": "Sony Hall is located in the heart of New York Midtown Manhattan by Theatre District & Times Square", "title": "5 Star Luxury Apartment", "address": "Paramount Hotel, 235 West 46th Street, New York, NY 10036, United States of America", "Latitude": 40.759535, "Longitude": -73.9870088, "description": "1,000 Max Number of Guests for a standing concert · 100 - 700 guests for a cocktail reception · 100 - 400 for a Seated Dinner · up to 550 for a theatre style engagement · 12,000 Total Meeting Room/ Ballroom Space (Square Feet) · tall ceilings · Event Spaces: 3 spaces · additional center stage · Customizable room for every event · Two Full Bars/Lounges · Fully Equipped Kitchen · open floor plan · Handicapped Accessible · On-Site Catering Service · Outside Catering Allowed · WiFi", "star": 5, "price": "$150/ person", "total": "$15,000 to $200,000/ 34 to 1000 attendees" }, "geometry": { "type": "Point", "coordinates": [ -73.9870088, 40.759535 ] } } ] }
		),
	],
	
};
