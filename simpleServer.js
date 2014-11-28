var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify({
	    user: 123,
	    queries: [
	        {
	            'label': 'nokia',
	            'params': 'http://allegro.pl.jakzmudzinski.dev3.dc2/',
	            'items': [
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '15',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails04.okazje.allegro.pl/5925EECC/526f717b426ae18d260000001383035259.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 115
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '515',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 51
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '325',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '59123',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails04.okazje.allegro.pl/5925EECC/526f717b426ae18d260000001383035259.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails04.okazje.allegro.pl/5925EECC/526f717b426ae18d260000001383035259.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails04.okazje.allegro.pl/5925EECC/526f717b426ae18d260000001383035259.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                }
	            ]
	        },
	        {
	            'label': 'nokia 2',
	            'params': 'http://allegro.pl.jakzmudzinski.dev3.dc2/',
	            'items': [
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 115
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 51
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                }
	            ]
	        },
	        {
	            'label': 'nokia 3',
	            'params': 'http://allegro.pl.jakzmudzinski.dev3.dc2/',
	            'items': [
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 115
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 51
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'true',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails03.okazje.allegro.pl/31CFE362/523962d5030917592f0000041379492565.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5214
	                },
	                {
	                    'allegroStandard': 'false',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5312
	                },
	                {
	                    'allegroStandard': 'true',
	                    'buyNowPrice': '5',
	                    'freeShipping': 'false',
	                    'imageUrl': 'http://thumbnails02.okazje.allegro.pl/4CD20712/527788f5426ae1652700000a1383565557.jpg/170x135',
	                    'url': 'http://allegro.pl/test',
	                    'name': 'Bombki szklane matowe 8cm 6szt - 17 barw',
	                    'price': 5632
	                }
	            ]
	        }
	    ]
	}));
	res.end();
}).listen(3000);
