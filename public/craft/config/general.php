<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
    'cpTrigger' => 'admin',
    'enableCsrfProtection' => true,
    'csrfTokenName' => 'CraftCsrfToken'
  ),
  'localhost' => array(
    'siteUrl'    => 'http://localhost:8888/',
    'devMode'    => true,
    'isSystemOn' => true
  ),
  'craft-starter-kit.dev' => array(
    'siteUrl'    => 'http://craft-starter-kit.dev/',
    'devMode'    => true,
    'isSystemOn' => true
  ),
  'craft-starter-kit.beresponsive.co.za' => array(
    'siteUrl'    => 'http://craft-starter-kit.beresponsive.co.za/',
    'isSystemOn' => false
  ),
  'craft-starter-kit.com' => array(
    'siteUrl'    => 'http://craft-starter-kit.com/',
    'isSystemOn' => false
  ),
);
