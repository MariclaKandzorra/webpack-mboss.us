const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
	//mode: development/production
	// src/ entry
    entry: {
      welcome: path.resolve(__dirname, '../mboss-us/src/main.js'),
      
		'/application/components/Banner': './src/application/components/Banner.js',
		'/application/components/Footer': './src/application/components/Footer.js',
		'/application/components/Header': './src/application/components/Header.js', // will be ./build/application/bundle.js,
		'/application/components/InfoCard': './src/application/components/InfoCard.js',
		'/application/components/LargeCard': './src/application/components/LargeCard.js',
		'/application/components/MediumCard': './src/application/components/MediumCard.js',
		'/application/components/SmallCard': './src/application/components/SmallCard.js',

		'/library/css/globals.css': './src/library/css/globals.css', // for css, geojson, json  will be  ./build/library/bundle.js,
      '/library/geojson/test.geojson': './src/library/geojson/test.geojson', // Should be  ./build/assets/app.core.css,
		'/library/json/test.json': './src/library/json/test.json', 
		'/assets/docs/test.docx': './src/assets/documents/test.docx', // for docs, pdf,
		'/assets/docs/test.pdf': './src/assets/documents/test.pdf', // for docs, pdf, 
		'/assets/docs/test.txt': './src/assets/documents/test.txt', // for docs, pdf, 	
		'/assets/img/test.img': './src/assets/img/test.img', // img,
		'/assets/media/test.mp4': './src/assets/media/test.mp4', // media 
    },
	// dist/ output
	// Optimizations
	//developmentServer = npm run dev
	devtool: 'inline-source-map',
	devServer:{
		static: '../mboss-us/public',
		port: 5001, //default 8080
		open: true,
		hot: true,
	},
	//loaders, test = npm run build
	module: {
		rules: [
		{
			test: /\.css$/, 
			use: {
					loader: 'style-loader', 
					loader: 'css-loader',
					loader: 'postcss-loader',
			}
		},
		
		{
			test: /\.(svg|ico|png|gif|jpe?g)$/, 
			use: {
					loader: 'img-loader', 
					loader: 'url-loader',
					loader: 'file-loader',
					options:{
						name:'[name]?[fullhash][query]',
						outputPath: 'assets/img/',
					}	
			},
			type: 'asset/resource',
		},
		{
			test: /\.docx$/, 
			use: {
					loader: 'docx-loader', 
			},
			type: 'asset/resource',
			
		},
		{
			test: /\.pdf$/, 
			use: {
					loader: 'pdf-loader', 
			},
			type: 'asset/resource',
			
		},
		{
			test: /\.(geojson|json)$/,
			use: {
					loader: 'json-loader',
					loader: 'raw-loader',
					loader: 'json-import-loader',
			}
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
			title: 'ArcGIS API | mboss-us | Maricla Kandzorra',
			filename: 'mapgl.html',
			template: 'src/application/core/homepage/silopages/services/search/mapping/MapGL-template.html',
			chunks: ['mapgl']
		}),
		new HtmlWebpackPlugin({
			title: 'Landing | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'Home.html',
			template: 'src/application/core/homepage/index-template.html',
			chunks: ['mapgl']
		}),
		new HtmlWebpackPlugin({
			title: 'Search | MBOSS-US | Maricla Kandzorra Martelli',
			filename: 'search.html',
			template: 'src/application/core/homepage/silopages/services/search/search-template.html',
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
		new GenerateJsonPlugin(
		'library/geojson/VenuesNYaMariKan.geojson', { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": { "img": "CategoryFilter", "location": "CategoryFilter", "title": "CategoryFilter", "address": "MapsTooltip - Hidden - StringFilter", "Latitude": 0, "Longitude": 0, "description": "CategoryFilter", "star": "", "price": "CategoryFilter", "total": "" }, "geometry": { "type": "Point", "coordinates": [ 0, 0 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2274252_md.jpg", "location": "World Yacht Events infron of New York", "title": "Find your ultimate Event Venue on the Ocean and get back to Party", "address": "1 Marina Rd, Queens, NY 11368, United States", "Latitude": 40.761224, "Longitude": -73.857806, "description": "2.500 Max Number of Guests · 30 Max Number of Yachts · 30,000 Max Meeting Room Space (Square Feet) · Full Lounge · Full Equipped · Handicapped Accessable · On Site Catering Service · Outside Catering Allowed · Outdoor Function Area · Valet Parking · Waterfront", "star": 5, "price": "$95.00 to $225.00/ person", "total": "$4298 to $6450/ 50 Guests" }, "geometry": { "type": "Point", "coordinates": [ -73.857806, 40.761224 ] } }, { "type": "Feature", "properties": { "img": "https://images.squarespace-cdn.com/content/v1/5941591cdb29d6b6a4797d77/1581112153916-FFWP4ORF367NZASX3WVU/Runway.jpg?format=750w", "location": "Broadway at street level in the heart of Soho & TriBeCa", "title": "Modular Multi use experience design studios with immersive technology for Events", "address": "W Broadway, New York, NY, United States of America", "Latitude": 40.7200622, "Longitude": -74.005658, "description": "150 Max Number of Guests · 3 studios · 2,400 Max Meeting Room Space (Square Feet) · 16-foot ceilings · 25 customizable screens · 20-foot glass retail facade · three levels featuring a modern white-box gallery finish · Fully immersive walls & floors · Customizable color track lighting · Customizable marquee · Modular Walls · Street-level storefront · Handicapped Accessable · Wifi · Outside Catering Allowed · Art Exhibitions · NFT Events · Digital Art Exhibitions · Film/Photo Shoots · Music Videos", "star": 5, "price": "$2,500 to $4,500/event", "total": "$2,500 to $4,500/event" }, "geometry": { "type": "Point", "coordinates": [ -74.005658, 40.7200622 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3171022_md.jpg", "location": "Raines Law Room at The William | Manhattan | New York City", "title": "The private salon barista club - all around cocktail Events", "address": "24 E 39th St, New York, NY, United States", "Latitude": 40.7504896, "Longitude": -73.9802784, "description": "Full buy-out: private up to 75 guests · Drawing room: private up to 25 guests · indoor dinners · mixology lessons · team building · events Garden: private up to 20 guests · secret garden is weather permitting - semi-private space", "star": 5, "price": "$100/ person", "total": "150 to 7500 $/ event" }, "geometry": { "type": "Point", "coordinates": [ -73.9802784, 40.7504896 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3008012_md.jpg", "location": "Chelsea Industrial between Chelsea, Hudson Yards, and Midtown West", "title": "NYC’S MOST IN DEMAND EVENT SPACE - The perfect event-ready production space for any event needs", "address": "W 28 St, New York, NY, United States of America", "Latitude": 40.7490929, "Longitude": -73.9969488, "description": "50 to 1,100+ Max Number of Guests · 3 studios · 22,000 Max Meeting Room Space (Square Feet) · 18-foot ceilings · Event Spaces: 3 spaces · Multiple/Breakout Spaces Retail Glass Frontage · Back of House Space · Kitchen & Kitchenette · Multiple Entrances · Retractable Privacy Screens · WiFi · LED Screen · Truss Lighting Furniture · Unlimited Branding Potential · Flexible Timing · Street Level Direct Load-In · HVAC · ADA Accessible · Wi-Fi · Unisex Restrooms", "star": 5, "price": "$10,000 to $100,000/ party ", "total": "$5,000–20,000/event" }, "geometry": { "type": "Point", "coordinates": [ -73.9969488, 40.7490929 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3058543_md.jpg", "location": "Luxory loft on 5th is fully furnished", "title": "Uniquely designed private lounge rooms", "address": "20 West 23rd Street, Suffolk County, NY 11729, United States of America", "Latitude": 40.7551215, "Longitude": -73.3491093, "description": "State-of-the-art surround sound speaker system · 55” Samsung QLED picture frame TV with YouTube Premium subscription · 8ft floor mirror · Black-out curtains · Kitchen with island, refrigerator, and microwave for caterers · 11 ft ceilings, exposed brick & hardwood floors · 2 gender-neutral bathrooms · Central heating and AC · Elevator access for easy equipment load-in and out · High-speed WiFi · Fully furnished rooftop with a speaker system and heat lamps", "star": 5, "price": "$38 to $59/ person", "total": "$4,000 to $9,000/ 20 to 80 attendees" }, "geometry": { "type": "Point", "coordinates": [ -73.3491093, 40.7551215 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2617175_md.jpg", "location": "Ascent Lounge, located in the world-famous Time Warner Center, offers stunning views of iconic Central Park and Columbus Circle", "title": "City Nights Hospitality’s one-of-a-kind premier venue", "address": "Per Se, 10 Columbus Circle, New York, NY 10019, United States of America", "Latitude": 40.7682178, "Longitude": -73.9828988, "description": "500 Max Number of Guests · 5,500 Sophisticated Cocktail Lounge (Square Feet) · tall ceilings · Event Spaces: 2 spaces · full premium Lounge/ bar of alcoholic and non-alcoholic beverages · Fully Equipped onsite kitchen · Award-Winning Service Team · flexible furniture plan · WiFi · Handicapped Accessible · On-Site Catering Service · Outdoor Function Area· Outside Catering Allowed · all types of event experiences· Valet Parking ", "star": 5, "price": "$100/ person", "total": "$20,000 to $80,000/event" }, "geometry": { "type": "Point", "coordinates": [ -73.9828988, 40.7682178 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/2303561_md.jpg", "location": " In the creative center of New York City, Hell's Kitchen, with sweeping views of the Manhattan skyline and Hudson River", "title": "Celebrate your Rooftop Party and Wedding above the city from the 18th floor", "address": "Ink 48 Hotel, 653 11th Avenue, New York, NY 10036, United States of America", "Latitude": 40.764568, "Longitude": -73.995995, "description": "100 Max Number of Guests · 2,200-square-foot private terrace · Event Spaces: 6 spaces · one of the city's most attractive rooftop full bars/ Lounges · On-Site Catering Service · WiFi · Handicapped Accessible · Outdoor Function Area · Outside Catering Allowed · all types of event experiences · Valet Parking", "star": 5, "price": "$60/ person", "total": "$4,000 plus minim bill of $2,000/ event" }, "geometry": { "type": "Point", "coordinates": [ -73.995995, 40.764568 ] } }, { "type": "Feature", "properties": { "img": "https://eventective-media.azureedge.net/3084907_md.jpg", "location": "Sony Hall is located in the heart of New York Midtown Manhattan by Theatre District & Times Square", "title": "5 Star Luxury Apartment", "address": "Paramount Hotel, 235 West 46th Street, New York, NY 10036, United States of America", "Latitude": 40.759535, "Longitude": -73.9870088, "description": "1,000 Max Number of Guests for a standing concert · 100 - 700 guests for a cocktail reception · 100 - 400 for a Seated Dinner · up to 550 for a theatre style engagement · 12,000 Total Meeting Room/ Ballroom Space (Square Feet) · tall ceilings · Event Spaces: 3 spaces · additional center stage · Customizable room for every event · Two Full Bars/Lounges · Fully Equipped Kitchen · open floor plan · Handicapped Accessible · On-Site Catering Service · Outside Catering Allowed · WiFi", "star": 5, "price": "$150/ person", "total": "$15,000 to $200,000/ 34 to 1000 attendees" }, "geometry": { "type": "Point", "coordinates": [ -73.9870088, 40.759535 ] } } ] }
		),
	],
};
