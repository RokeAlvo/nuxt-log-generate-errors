# Nuxt-module for logging errors during static generation

## Install

```nmp install -D nuxt-logs-generate-errors```
```javascript
// nuxt.config.js
module.exports = {
	buildModules: [
		['nuxt-log-generate-errors', {file: 'generate-errors-log.json'}]
    ],
}
```

## Options

```typescript
interface moduleOptions {
  file?: string
  http?: {
    url: string,
    method?: string // default POST
    headers?: {[key: string]: string}
  }
}
```
