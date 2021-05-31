/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConsumerGroup } from './consumer-group';

/**
 * A list of consumer groups
 * @export
 * @interface ConsumerGroupList
 */
export interface ConsumerGroupList {
    /**
     * Consumer group list items
     * @type {Array<ConsumerGroup>}
     * @memberof ConsumerGroupList
     */
    items: Array<ConsumerGroup>;
    /**
     * The total number of consumer groups.
     * @type {number}
     * @memberof ConsumerGroupList
     */
    count: number;
    /**
     * The number of consumer groups per page.
     * @type {number}
     * @memberof ConsumerGroupList
     */
    limit: number;
    /**
     * The page offset
     * @type {number}
     * @memberof ConsumerGroupList
     */
    offset: number;
}


