import scrape from 'website-scraper';

const url = 'https://bodyandmindgym.nl/'; // Change this to test different sites

// Plugin to log progress
class LogPlugin {
  apply(registerAction) {
    let saved = 0;
    let requested = 0;

    registerAction('beforeRequest', ({ resource, requestOptions }) => {
      requested++;
      console.log(`⏳ [${requested}] Requesting: ${resource.url}`);
      return { requestOptions };
    });

    registerAction('onResourceSaved', ({ resource }) => {
      saved++;
      console.log(`✅ [${saved}] Saved: ${resource.url}`);
    });

    registerAction('onResourceError', ({ resource, error }) => {
      console.log(`❌ Error: ${resource.url} - ${error.message}`);
    });
  }
}

console.log(`Starting to scrape ${url}...\n`);

const result = await scrape({
  urls: [url],
  directory: './scraped-site',
  recursive: true,
  urlFilter: (u) => u.startsWith(url), // Only follow links on the same domain
  plugins: [new LogPlugin()],
});

console.log(`\nDone! Downloaded ${result.length} resources to ./scraped-site`);
