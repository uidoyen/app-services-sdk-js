/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConfigEntry } from './config-entry';

/**
 * The settings that are applicable to this topic. This includes partitions, configuration information, and number of replicas.
 * @export
 * @interface TopicSettings
 */
export interface TopicSettings {
    /**
     * Number of partitions for this topic. If not specified, the default for new topics is `1`. Number of partitions may not be reduced when updating existing topics
     * @type {number}
     * @memberof TopicSettings
     */
    'numPartitions'?: number;
    /**
     * Topic configuration entries.
     * @type {Array<ConfigEntry>}
     * @memberof TopicSettings
     */
    'config'?: Array<ConfigEntry>;
}

