var appShellFiles = [
    '/Hector-Cruz-Ramirez-Prueva/article.html',
    '/Hector-Cruz-Ramirez-Prueva/about.html',
    '/Hector-Cruz-Ramirez-Prueva/category.html',
    '/Hector-Cruz-Ramirez-Prueva/docs.html',
    '/Hector-Cruz-Ramirez-Prueva/index.html',
    /*'/Hector-Cruz-Ramirez-Prueva/assets/img/screenshot-mundana-article.png',
    //'/Hector-Cruz-Ramirez-Prueva/assets/js/aos.js',
    //'/Hector-Cruz-Ramirez-Prueva/assets/js/bootstrap-toc.js',
    //'/Hector-Cruz-Ramirez-Prueva/assets/js/jquery.min.js',
    //'/Hector-Cruz-Ramirez-Prueva/assets/js/prism.js',
    '/Hector-Cruz-Ramirez-Prueva/assets/js/share.js',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/1.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/3.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/5.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/avatar2.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/blog4.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/intro.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/blog5.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/blog6.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/blog8.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/home.jpg',
    '/Hector-Cruz-Ramirez-Prueva/assets/img/demo/sal.jpg',*/
];

self.addEventListener('install', event => {

    const endInstall = caches.open('box').then(cache => {
        return cache.addAll(appShellFiles);
    });

    event.waitUntil(endInstall);

    self.skipWaiting();
});

self.addEventListener('fetch', e => {

    const respuesta = caches.open('box').then(cache => {

        fetch(e.request).then(newsRes =>
            cache.put(e.request, newsRes));

        return cache.match(e.request);

    });

    e.respondWith(respuesta);
});
