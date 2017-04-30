<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  '*' => array(
    'tablePrefix' => 'craft_',
  ),
  'localhost' => array(
    'server'   => '192.168.88.85:3307',
    'user'     => 'root',
    'password' => 'weAreResponsive',
    'database' => 'craft_starter_kit',
  ),
  'craft-starter-kit.dev' => array(
    'server'   => '192.168.88.85:3307',
    'user'     => 'root',
    'password' => 'weAreResponsive',
    'database' => 'craft_starter_kit',
  ),
  'craft-starter-kit.beresponsive.co.za' => array(
    'server'   => 'localhost',
    'user'     => 'staging_user',
    'password' => 'staging_password',
    'database' => 'staging_database_name',
  ),
  'craft-starter-kit.com' => array(
    'server'   => 'localhost',
    'user'     => 'production_user',
    'password' => 'production_password',
    'database' => 'production_database_name',
  ),
);
