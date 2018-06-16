<?php

$terms = urlencode($_GET['s']);
$app_id = 'Y2N7OVVUWU';
$app_key = '7367f7a29848e86610c68b9f09b51dfd';

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://'.$app_id.'-dsn.algolia.net/1/indexes/forestry?query='.$terms.'&hitsPerPage=15&getRankingInfo=1');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true );

curl_setopt($curl, CURLOPT_VERBOSE, true);
$verbose = fopen('test.txt', 'w+');
curl_setopt($curl, CURLOPT_STDERR, $verbose);

$headers =  array(
	'X-Algolia-Application-Id: '.$app_id,
	'X-Algolia-API-Key: '.$app_key
);

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec( $curl );
curl_close( $curl );

echo $response;