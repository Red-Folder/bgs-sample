/*
 * Copyright 2013 Red Folder Consultancy Ltd
 *   
 * Licensed under the Apache License, Version 2.0 (the "License");   
 * you may not use this file except in compliance with the License.   
 * You may obtain a copy of the License at       
 * 
 * 	http://www.apache.org/licenses/LICENSE-2.0   
 *
 * Unless required by applicable law or agreed to in writing, software   
 * distributed under the License is distributed on an "AS IS" BASIS,   
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   
 * See the License for the specific language governing permissions and   
 * limitations under the License.
 */

/*
 * Service Name
 * This needs to be full qualified name of your service class
 * This will be the combination of the package & class name in your service java file
 */
var serviceName = 'com.red_folder.phonegap.plugin.backgroundservice.sample.MyService';

/*
 * Get an instance of the background service factory
 * Use it to create a background service wrapper for your service
 */
var factory = require('com.red_folder.phonegap.plugin.backgroundservice.BackgroundService');
module.exports = factory.create(serviceName);
