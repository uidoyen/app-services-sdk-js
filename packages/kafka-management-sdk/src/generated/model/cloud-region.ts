/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RegionCapacityListItem } from './region-capacity-list-item';

/**
 * Description of a region of a cloud provider.
 * @export
 * @interface CloudRegion
 */
export interface CloudRegion {
    /**
     * Indicates the type of this object. Will be \'CloudRegion\'.
     * @type {string}
     * @memberof CloudRegion
     */
    'kind'?: string;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof CloudRegion
     */
    'id'?: string;
    /**
     * Name of the region for display purposes, for example `N. Virginia`.
     * @type {string}
     * @memberof CloudRegion
     */
    'display_name'?: string;
    /**
     * Whether the region is enabled for deploying an OSD cluster.
     * @type {boolean}
     * @memberof CloudRegion
     */
    'enabled': boolean;
    /**
     * The Kafka instance types supported by this region.  DEPRECATION NOTICE - instance_type will be deprecated
     * @type {Array<string>}
     * @memberof CloudRegion
     * @deprecated
     */
    'supported_instance_types'?: Array<string>;
    /**
     * Indicates whether there is capacity left per instance type
     * @type {Array<RegionCapacityListItem>}
     * @memberof CloudRegion
     */
    'capacity': Array<RegionCapacityListItem>;
}

