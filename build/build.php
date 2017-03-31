<?php
error_reporting(E_ALL & ~E_NOTICE);
$debug = TRUE;
if ($debug) header('Content-Type: application/json');

$dir = dirname(__FILE__);
$in  = file_get_contents($dir . '/emoji_pretty.json');
$d   = json_decode($in, TRUE);


#
# build the catalog
#

$out = array();

foreach ($d as $row)
{
  if (!isset($out[$row['category']]))
    $out[$row['category']] = array();

  $out[$row['category']][] = array(
    'has_img_apple'     => $row['has_img_apple'],
    'has_img_google'    => $row['has_img_google'],
    'has_img_twitter'   => $row['has_img_twitter'],
    'has_img_emojione'  => $row['has_img_emojione'],
    'has_img_facebook'  => $row['has_img_facebook'],
    'has_img_messenger' => $row['has_img_messenger'],

    'name'        => $row['name'],
    'short_name'  => $row['short_name'],
    'short_names' => $row['short_names'],
    'sort_order'  => $row['sort_order']
  );
}

foreach ($out as &$category) {
  sortArrayByKey($category, 'sort_order');
}

function sortArrayByKey(&$array, $key)
{
  usort($array, function ($a, $b) use (&$key, &$asc)
  {
    if ($a[$key] == $b[$key])
    {
      return 0;
    }
    return ($a[$key] < $b[$key]) ? -1 : 1;
  });
}

$encoded = json_encode($out);

$fp = fopen($dir . '/lightweight.json', 'w');
fwrite($fp, $encoded);
fclose($fp);

if ($debug)
{
  echo $encoded;
}
