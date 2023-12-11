self.addEventListener('install', function(e){
    self.skipWaiting();
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
        fetch(e.request).then(function(res) {
            return /(index\.html|\/)$/.test(res.url) ? 
            res : new Response(res.body.pipeThrough(new DecompressionStream('deflate-raw')));
        })
      );
});