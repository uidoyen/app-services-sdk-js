/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * schema for a kafka instance type capacity in region
 * @export
 * @interface RegionCapacityListItem
 */
export interface RegionCapacityListItem {
    /**
     * kafka instance type
     * @type {string}
     * @memberof RegionCapacityListItem
     */
    instance_type?: string;
    /**
     * flag indicating whether the capacity for the instance type in the region is reached
     * @type {boolean}
     * @memberof RegionCapacityListItem
     */
    max_capacity_reached: boolean;
}


