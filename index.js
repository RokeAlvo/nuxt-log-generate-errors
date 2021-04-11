const fs = require('fs');
const fetch = require('node-fetch');

/**
 * @param moduleOptions {{file?: string, http?: {url: string, method?: any, headers?: any}}}
 */
export default function (moduleOptions={}) {
	this.nuxt.hook('generate:done', async (generator, errors) => {
		if(moduleOptions.file) {
			fs.writeFileSync(moduleOptions.file, JSON.stringify(errors))
		}
		if(moduleOptions.http && moduleOptions.http.url) {
			await fetch(moduleOptions.url, {
				method: moduleOptions.http.method || 'POST',
				headers: moduleOptions.http.headers || {},
				body: JSON.stringify(errors)
			})
		}
	})
}

module.exports.meta = require('./package.json')
