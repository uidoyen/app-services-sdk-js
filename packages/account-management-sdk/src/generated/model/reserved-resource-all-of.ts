/* tslint:disable */
/* eslint-disable */
/**
 * Account Management Service API
 * Manage user subscriptions and clusters
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ObjectReference } from './object-reference';

/**
 * 
 * @export
 * @interface ReservedResourceAllOf
 */
export interface ReservedResourceAllOf {
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'availability_zone_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'billing_model'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReservedResourceAllOf
     */
    'byoc': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReservedResourceAllOf
     */
    'cluster'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReservedResourceAllOf
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'resource_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'resource_type'?: string;
    /**
     * 
     * @type {ObjectReference}
     * @memberof ReservedResourceAllOf
     */
    'subscription'?: ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof ReservedResourceAllOf
     */
    'updated_at'?: string;
}

