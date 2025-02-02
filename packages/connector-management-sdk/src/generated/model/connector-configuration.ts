/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { KafkaConnectionSettings } from './kafka-connection-settings';
import { SchemaRegistryConnectionSettings } from './schema-registry-connection-settings';
import { ServiceAccount } from './service-account';

/**
 * 
 * @export
 * @interface ConnectorConfiguration
 */
export interface ConnectorConfiguration {
    /**
     * 
     * @type {KafkaConnectionSettings}
     * @memberof ConnectorConfiguration
     */
    'kafka': KafkaConnectionSettings;
    /**
     * 
     * @type {ServiceAccount}
     * @memberof ConnectorConfiguration
     */
    'service_account': ServiceAccount;
    /**
     * 
     * @type {SchemaRegistryConnectionSettings}
     * @memberof ConnectorConfiguration
     */
    'schema_registry'?: SchemaRegistryConnectionSettings;
    /**
     * 
     * @type {object}
     * @memberof ConnectorConfiguration
     */
    'connector': object;
}

