<?php

// Only doing this because webtasks won't let me authenticate :(
// https://github.com/auth0/wt-cli/issues/212

$terms = urlencode($_GET['s']);
$app_id = 'VP222X0ZZ6';
$app_key = 'd3909cbd70bb4a2fafdd72e9d3bd37e5';

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://'.$app_id.'-dsn.algolia.net/1/indexes/forestry?query='.$terms.'&hitsPerPage=15&getRankingInfo=1');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true );

$headers =  array(
	'X-Algolia-Application-Id: '.$app_id,
	'X-Algolia-API-Key: '.$app_key
);

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec( $curl );
curl_close( $curl );

echo $response;