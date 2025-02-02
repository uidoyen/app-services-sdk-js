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
import { Partition } from './partition';

/**
 * Kafka Topic (A feed where records are stored and published)
 * @export
 * @interface Topic1
 */
export interface Topic1 {
    /**
     * The name of the topic.
     * @type {string}
     * @memberof Topic1
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Topic1
     */
    'isInternal'?: boolean;
    /**
     * Partitions for this topic.
     * @type {Array<Partition>}
     * @memberof Topic1
     */
    'partitions'?: Array<Partition>;
    /**
     * Topic configuration entry.
     * @type {Array<ConfigEntry>}
     * @memberof Topic1
     */
    'config'?: Array<ConfigEntry>;
}

