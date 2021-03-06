'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9fccc174d2b53aa7c9f5fdfe8f4db2fc",
"index.html": "b19219aa05f1b538b55cdfd58965afcf",
"/": "b19219aa05f1b538b55cdfd58965afcf",
"main.dart.js": "fa865ff30960010b6f52b08079965d8b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "336e95a9c08693b7e83618570bb1f2b0",
"assets/asset/images/profile_top_bg.png": "0b454ef19548ae4ab906a28b9ac3d895",
"assets/asset/images/login_phone.png": "3f52d5a4b50002974859e2061485af6f",
"assets/asset/images/home_nav_customer_service.png": "3f0f1ebf7709fee31d29401c30d640e2",
"assets/asset/images/home_top_bg.png": "b8780d2597bfbd625c700f595530d743",
"assets/asset/images/login_logo.png": "204bebb9f91cf12af03c126e2ba3e81e",
"assets/asset/images/profile_comment_grey_star.png": "b3b1d0b91e217129940cc893ad69852a",
"assets/asset/images/bottom_tab_home_selected.png": "53a79c915a5fbfb5500cbd835963be43",
"assets/asset/images/profile_row_comment.png": "b894a44f6b9043ff96dacae7aec24e92",
"assets/asset/images/2.0x/profile_top_bg.png": "a604162ab040752ace1a46fbde78c2bb",
"assets/asset/images/2.0x/login_phone.png": "45fdf60e7c7e40ccfaa032780f8358b2",
"assets/asset/images/2.0x/home_nav_customer_service.png": "a4be04a8a9469bf26e1df129cd83ead4",
"assets/asset/images/2.0x/home_top_bg.png": "c31610cbeb38a1937b76c577042b83eb",
"assets/asset/images/2.0x/login_logo.png": "7f4975a1d61e8f87577ecfea667a38bf",
"assets/asset/images/2.0x/profile_comment_grey_star.png": "efac1df298efc0c9fdf46c6ace88190e",
"assets/asset/images/2.0x/bottom_tab_home_selected.png": "986e0250e305e2c1f9889f3b566410c3",
"assets/asset/images/2.0x/profile_row_comment.png": "a9923ea36d545b1a8b3ab8eaf0803aeb",
"assets/asset/images/2.0x/bottom_tab_home_normal.png": "ac948f41faf2b83470e2b03387c4de73",
"assets/asset/images/2.0x/profile_row_wholesale.png": "f5719d12b91047eb0d7d65d6cac59f40",
"assets/asset/images/2.0x/login_privacy_uncheck.png": "7b7fe81b320515f53ab71a1961a9c521",
"assets/asset/images/2.0x/profile_row_purchase_order.png": "33083b804ae31b7e2138bee4fe777f5f",
"assets/asset/images/2.0x/splash_doctor.png": "ea1eb276182b7293465328f11525bb6f",
"assets/asset/images/2.0x/hello_navigate_next.png": "073d3cf84ab17d958313d4de53e1c8de",
"assets/asset/images/2.0x/profile_row_feedback.png": "1da64b471a4e4ccf82c52b1cec1e1320",
"assets/asset/images/2.0x/home_invite_patient_code.png": "c01d55dd084d854805f57bc71b7e06d9",
"assets/asset/images/2.0x/home_unread_count.png": "936b80dee17ae042cdc4d586204dae51",
"assets/asset/images/2.0x/profile_top_settings.png": "e5f0773287efa7a5f2a5c622b6c47e01",
"assets/asset/images/2.0x/bottom_tab_chat_selected.png": "4237b10e5541ab65ef184981ddb5cf27",
"assets/asset/images/2.0x/user_role_doctor.png": "f699469c103cb9989c046a545a7d9bda",
"assets/asset/images/2.0x/user_role_assistant.png": "efaf6dab1b7d0732dd57cab2b3a4b195",
"assets/asset/images/2.0x/bottom_tab_profile_normal.png": "e364273b202fbb988c92a72cfd6f663e",
"assets/asset/images/2.0x/bottom_tab_chat_normal.png": "bdcfd9c711772b10e21ce8e190d6abd4",
"assets/asset/images/2.0x/login_code.png": "c83d07513befb17c53c239491e81ffcc",
"assets/asset/images/2.0x/data_empty.png": "e08a0a209b7af5bd12c5f0f099e09ef8",
"assets/asset/images/2.0x/bottom_tab_profile_selected.png": "dcde5e4c2d7acbf21d31170ad1a038d1",
"assets/asset/images/2.0x/home_user_audit_status_unauth.png": "cff9bdec227fafade816815bb3becdea",
"assets/asset/images/2.0x/home_user_audit_status_bg.png": "c5c39549d8626f63156b961cae3d69a5",
"assets/asset/images/2.0x/login_privacy_checked.png": "58fdfb024dc62cc0cac096dcaae89776",
"assets/asset/images/2.0x/doctor_default_avatar.png": "5d2170492fccb8e292355bae8a4ad9dd",
"assets/asset/images/2.0x/profile_comment_yellow_star.png": "67dbc1a6022605265fe2ce446a3e7463",
"assets/asset/images/2.0x/profile_row_service.png": "c1610349a3e791b463a36088d76a55af",
"assets/asset/images/2.0x/bottom_tab_live_selected.png": "bbdc78cd0c207ce59cb5d777688182e1",
"assets/asset/images/2.0x/profile_row_note.png": "eeeaf7fcc4450c312edb8da990fe59a2",
"assets/asset/images/2.0x/bottom_tab_live_normal.png": "709d1c7d8676d07b36633e8523a3bffc",
"assets/asset/images/2.0x/splash_logo.png": "aad0221d14161d209bc539eb094e9c63",
"assets/asset/images/2.0x/profile_my_studio_data.png": "95c4629c5c9836ff7ddcfd7e698f5fe4",
"assets/asset/images/2.0x/profile_settings_logo.png": "db15498a9a622263390eb294ddb85903",
"assets/asset/images/2.0x/home_user_audit_status_authing.png": "fdabbc8d78af03dc83f927189b5c3033",
"assets/asset/images/2.0x/profile_row_catalogue.png": "2df4d133a609c6869868de273493243b",
"assets/asset/images/bottom_tab_home_normal.png": "aedc874486e1e4fa6ef53e601cd15aac",
"assets/asset/images/profile_row_wholesale.png": "467f7d897366acb914736f69631c3212",
"assets/asset/images/login_privacy_uncheck.png": "3bda739aa631971ced0991ade4d2d7ea",
"assets/asset/images/profile_row_purchase_order.png": "bca9128543f0c7aa87f04a61f343be53",
"assets/asset/images/splash_doctor.png": "f085c1241bb964b93a1c831fa7965c9a",
"assets/asset/images/hello_navigate_next.png": "5c877f8370d5e0019d419a90c3166146",
"assets/asset/images/3.0x/profile_top_bg.png": "4cc6745374239668d857d257ffec4ac3",
"assets/asset/images/3.0x/login_phone.png": "9a7b5204a658054acb3b012ef2372b68",
"assets/asset/images/3.0x/home_nav_customer_service.png": "b6c5dcd99b1cb31afbaf4f6aeb195b00",
"assets/asset/images/3.0x/home_top_bg.png": "9e198d35f32f15cbea0b7448fe121690",
"assets/asset/images/3.0x/login_logo.png": "d2e7279558996faceac40d5be4ca9392",
"assets/asset/images/3.0x/profile_comment_grey_star.png": "20fe3f115a26e44741a0d7fb2e5b009d",
"assets/asset/images/3.0x/bottom_tab_home_selected.png": "ea8eb1c90bf3670ed56e4953ffed81f9",
"assets/asset/images/3.0x/profile_row_comment.png": "929229cd0fbb647b5be2932fb62a08c9",
"assets/asset/images/3.0x/bottom_tab_home_normal.png": "086590db9a36d62749116df6f3721f58",
"assets/asset/images/3.0x/profile_row_wholesale.png": "543200e0ff409ab61ea3a37a1beadd63",
"assets/asset/images/3.0x/login_privacy_uncheck.png": "edafe3a19c2e473b2965ca9b9483e1cf",
"assets/asset/images/3.0x/profile_row_purchase_order.png": "e0eb1bd7feb18b2da7174f747b4eb398",
"assets/asset/images/3.0x/splash_doctor.png": "c8ee956a46319b4581ea9cbaff6bf289",
"assets/asset/images/3.0x/hello_navigate_next.png": "17c12d35e48c417c62b2912f2dc1e165",
"assets/asset/images/3.0x/profile_row_feedback.png": "6444aa2616f717afae47e6c0b352ef5e",
"assets/asset/images/3.0x/home_invite_patient_code.png": "7aa37bf41e38733d05ceadc838df8a7c",
"assets/asset/images/3.0x/home_unread_count.png": "d1af96483867ec607fb65b2281d3dc6f",
"assets/asset/images/3.0x/profile_top_settings.png": "c32015ae38552e1b1a5b554364b0adc4",
"assets/asset/images/3.0x/bottom_tab_chat_selected.png": "f87fb47ec9943daf6a115bb0b1839eae",
"assets/asset/images/3.0x/user_role_doctor.png": "9f3b6b5e6882310777867585f7fa2ce5",
"assets/asset/images/3.0x/user_role_assistant.png": "47b3c6ce0fa00d672de6a0d1622bfafe",
"assets/asset/images/3.0x/bottom_tab_profile_normal.png": "1ac40d102fb603e6c333b6a739a365b7",
"assets/asset/images/3.0x/bottom_tab_chat_normal.png": "c0b5d2f44db6e10cb66ab8322feaa0ec",
"assets/asset/images/3.0x/login_code.png": "119f820eac6dd231eade898b971c5729",
"assets/asset/images/3.0x/data_empty.png": "a1f65f96bcdb6a54d9b2d9e6cfba5e2d",
"assets/asset/images/3.0x/bottom_tab_profile_selected.png": "5f2cd1742719bf115592bb754daf46b8",
"assets/asset/images/3.0x/home_user_audit_status_unauth.png": "4588d8b885a969bf9b37fc7de57f9d34",
"assets/asset/images/3.0x/home_user_audit_status_bg.png": "e32bae23ce9e13714bcd3ce4a05ee727",
"assets/asset/images/3.0x/login_privacy_checked.png": "23bbe5136e76b24b9ceb441488a3e980",
"assets/asset/images/3.0x/doctor_default_avatar.png": "a2ff174da723fdf9f19d242555e4cfd9",
"assets/asset/images/3.0x/profile_comment_yellow_star.png": "c767b9356dd2cc63814261c91e5411c2",
"assets/asset/images/3.0x/profile_row_service.png": "7c289e7c452c5cf11266482883eae76c",
"assets/asset/images/3.0x/bottom_tab_live_selected.png": "1a2037d0347ca9ee0f8e243834ce9380",
"assets/asset/images/3.0x/profile_row_note.png": "1e05a506707c1e32110d13c8ac201ceb",
"assets/asset/images/3.0x/bottom_tab_live_normal.png": "83e0d84e85ec9fc49ddb3ffd9697f375",
"assets/asset/images/3.0x/splash_logo.png": "161b3e1bfb4a896ea64fbf93088c01e4",
"assets/asset/images/3.0x/profile_my_studio_data.png": "9cc35e3eef58778c5e61ca2b2f3ce12e",
"assets/asset/images/3.0x/profile_settings_logo.png": "022aa16f450dc5d37ff02a80127c431b",
"assets/asset/images/3.0x/home_user_audit_status_authing.png": "51c7d13365bb8f5975405fdd841c6ddb",
"assets/asset/images/3.0x/profile_row_catalogue.png": "3dc984319ec878863fec0c1465f64247",
"assets/asset/images/profile_row_feedback.png": "db18a1518cada2d0851de4fbb2c2acc4",
"assets/asset/images/home_invite_patient_code.png": "3f5601ab8d0f86a1ee5b9489b5ac0404",
"assets/asset/images/home_unread_count.png": "3bed1822751077b12f59a79d0da4ec7f",
"assets/asset/images/profile_top_settings.png": "30651387765c2341e8afbff94bfbbc5c",
"assets/asset/images/bottom_tab_chat_selected.png": "8d54c3d3e2ee38c7e8c09b50c294b91e",
"assets/asset/images/user_role_doctor.png": "7cd1b796a8ece0fdb12ca86d3d00e5a7",
"assets/asset/images/user_role_assistant.png": "34400f2d971906211668047a312e7eaf",
"assets/asset/images/bottom_tab_profile_normal.png": "a11ae7fe05bda8b2783526d1b5d66b67",
"assets/asset/images/bottom_tab_chat_normal.png": "79c08e177efe1d6f1a7a391bee5d25ca",
"assets/asset/images/login_code.png": "08b557abacf5c277de121622c65bb89c",
"assets/asset/images/data_empty.png": "178ed050af834379b64b1fd36c9ca056",
"assets/asset/images/bottom_tab_profile_selected.png": "63dcb54ce1b5a1696a11d54c3db65633",
"assets/asset/images/home_user_audit_status_unauth.png": "77c8095a43b1fa0aa4e78c96b46e2e20",
"assets/asset/images/home_user_audit_status_bg.png": "7c4668536e83f509d6a488d22066a206",
"assets/asset/images/login_privacy_checked.png": "d9596116fee320bbad252a99520c3913",
"assets/asset/images/doctor_default_avatar.png": "a6c5e7189efb2f53db323a8e54d2ddc0",
"assets/asset/images/profile_comment_yellow_star.png": "b081c433df8a3f2516ba9c8e8e6a30c2",
"assets/asset/images/profile_row_service.png": "4d4aac74edfe6bbdc2870646ab29e41c",
"assets/asset/images/bottom_tab_live_selected.png": "03ccfb7e2e4d7a5f3fa18b3c7f838b32",
"assets/asset/images/profile_row_note.png": "ae7398c428357b8dec9915018d12634a",
"assets/asset/images/bottom_tab_live_normal.png": "77d0726cb8b39521203d7a392fbefcb1",
"assets/asset/images/splash_logo.png": "b136eb6d0245ada3a78860349877180e",
"assets/asset/images/profile_my_studio_data.png": "0e528b4e1d39ed794d8a9e487501bf2f",
"assets/asset/images/profile_settings_logo.png": "7cf097db47cee3c746c9e41ed0f66bda",
"assets/asset/images/home_user_audit_status_authing.png": "831e97db7e2c6ac0688e0b8642f03c7c",
"assets/asset/images/profile_row_catalogue.png": "2be4ae0ffee72af43a1bd57153f3b7f2",
"assets/AssetManifest.json": "6b3af6658fd8b86026100400be264a7b",
"assets/NOTICES": "ad10f526ff613cd8b5f1e65e677c1632",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
