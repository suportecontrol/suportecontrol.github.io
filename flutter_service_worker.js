'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a0d42fad705a24d4f023777b0d7f629",
"assets/AssetManifest.bin.json": "888c9ac1fd6c3eff2bfefb09efa18766",
"assets/AssetManifest.json": "e5abdbfd7e66f536bfeea58c2f5ec161",
"assets/assets/authenticate/auth_icon.png": "7506b17db528ff68b73c7086690f0ca0",
"assets/assets/authenticate/symbol.png": "3c79c3865da757a1e39d9bcf72dffd00",
"assets/assets/caixa_agua/caixa_dagua_0%2525.png": "252acb47056759fc748ef3a180860ec4",
"assets/assets/caixa_agua/caixa_dagua_10%2525.png": "477400cc323fdfec31d37e7da9def6ee",
"assets/assets/caixa_agua/caixa_dagua_100%2525.png": "112b893fae14a59774cad3f7eb68d8e2",
"assets/assets/caixa_agua/caixa_dagua_20%2525.png": "f3aa716a844642c389e8512c5863cdd4",
"assets/assets/caixa_agua/caixa_dagua_30%2525.png": "1e84c6b9b2b55828f2f985ccac8a0d76",
"assets/assets/caixa_agua/caixa_dagua_40%2525.png": "fe2e4bf0001fb3ba80e75dbc9cd18211",
"assets/assets/caixa_agua/caixa_dagua_50%2525.png": "42edaac41049523f206a9d7082ac0a7a",
"assets/assets/caixa_agua/caixa_dagua_60%2525.png": "fdc70aa169506f1c583775f992e1935c",
"assets/assets/caixa_agua/caixa_dagua_70%2525.png": "3c404e51cf55e4fa8aebc71e0abe270e",
"assets/assets/caixa_agua/caixa_dagua_80%2525.png": "eb9a42ee2df8ff0453290660e499bc0b",
"assets/assets/caixa_agua/caixa_dagua_90%2525.png": "d4c24db4160e6602fb6491fd82672491",
"assets/assets/home/back.png": "ce5f8c47f38bc48e3eb70df5bfcd637a",
"assets/assets/icons/email.png": "294a6c12889ad2ca25751e601da90b3c",
"assets/assets/icons/gamepad.png": "c1240b29ac2467f64839d77838674560",
"assets/assets/icons/vector.png": "5f6dcd15beec539278ab24c885409895",
"assets/assets/icons/whatsapp.png": "1a32630a99163b019019da41d54307d4",
"assets/assets/intro/intro1.svg": "f7943a64e8c3273cd70ddfaed71307f5",
"assets/assets/intro/intro2.svg": "313f68efaf4dc01ed60db134bb3bca24",
"assets/assets/intro/intro3.svg": "c2c549911cf744980248d8ed3be2801a",
"assets/assets/location/location.png": "be919be2ff56addab4f76aece528255c",
"assets/assets/logo/logo.png": "897c12504038697504b08d23c57cdc19",
"assets/assets/markers/center.png": "2eabbee51343bc6f5ba636a3a724406e",
"assets/assets/onboarding/border.png": "283e8e92e57d91ee11582ff3a76fc53a",
"assets/assets/onboarding/ellipse.png": "304190b8526944c317021593135ebe86",
"assets/assets/onboarding/icon1.png": "aae72b4f3ce3fee5f5e488389eb5ecde",
"assets/assets/onboarding/icon2.png": "8ae40ad69c1ccae2fed557aff41f71b8",
"assets/assets/onboarding/icon3.png": "e2b8583bfa46b5e80a5fff0716619672",
"assets/assets/splash/splash.png": "8cbc82aad1476a75b641d505ee95ff57",
"assets/FontManifest.json": "20ebf396dae570aee06a3141d66bbaca",
"assets/fonts/Inter-500.ttf": "5ff1f2a9a78730d7d0c309320ff3c9c7",
"assets/fonts/Inter-regular.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/fonts/MaterialIcons-Regular.otf": "828ff367d8fd7af2cd9b7238db756354",
"assets/fonts/Poppins-300.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins-500.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-600.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/Poppins-700.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins-regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/NOTICES": "934eb38ec51fcb67851033862d0b1120",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "cda194ffd19500e7d111360555f0e32b",
"favicon2.png": "bdb81f83c9c24957038ddd0c5b025243",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "aad5431a5e59d03740065e98207f13c2",
"icons/Icon-192.png": "9ac15de817238700b994be06f27cd706",
"icons/Icon-512.png": "15798ce1e36ff66635018bf9c344c233",
"index.html": "11b3c297081561c9226bfcb7d4d7f866",
"/": "11b3c297081561c9226bfcb7d4d7f866",
"main.dart.js": "1fcca2c8700e94f7a4bb4a10854125d2",
"manifest.json": "438f1a2b17e574b038fdabc1f06b82f3",
"splash/img/dark-1x.png": "cb2fa9699dc43f3843f53ef5bfede3d7",
"splash/img/dark-2x.png": "b16ea185a67107145be7dd9d77767ace",
"splash/img/dark-3x.png": "dd6be045028d6d1040d81e7aa6581fb6",
"splash/img/dark-4x.png": "0bf8cc724ea37be5d5a66b24ba0ae233",
"splash/img/light-1x.png": "cb2fa9699dc43f3843f53ef5bfede3d7",
"splash/img/light-2x.png": "b16ea185a67107145be7dd9d77767ace",
"splash/img/light-3x.png": "dd6be045028d6d1040d81e7aa6581fb6",
"splash/img/light-4x.png": "0bf8cc724ea37be5d5a66b24ba0ae233",
"version.json": "63d2a911266f1a6f51bfcfac3c77f1db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
