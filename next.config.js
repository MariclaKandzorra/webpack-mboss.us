module.exports = {
  images: {
    domains: ["i.ibb.co", "eventective-media.azureedge.net", "images.squarespace-cdn.com"],
  },
  webpack: (
	config,
	{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
		// Important: return the modified config
	return config
	},
env: {
	mapbox_key: 'pk.eyJ1IjoiYW1hcmljYW4iLCJhIjoiY2w0azVrZGF2MDh3ZTNjcXBlMnJ4OThjZSJ9.a8YumpoNOrFMLTeR5kucyQ'
},  
}
