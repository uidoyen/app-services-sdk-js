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


import { ConnectorNamespaceState } from './connector-namespace-state';

/**
 * 
 * @export
 * @interface ConnectorNamespaceStatus
 */
export interface ConnectorNamespaceStatus {
    /**
     * 
     * @type {ConnectorNamespaceState}
     * @memberof ConnectorNamespaceStatus
     */
    'state': ConnectorNamespaceState;
    /**
     * 
     * @type {string}
     * @memberof ConnectorNamespaceStatus
     */
    'version'?: string;
    /**
     * 
     * @type {number}
     * @memberof ConnectorNamespaceStatus
     */
    'connectors_deployed': number;
    /**
     * 
     * @type {string}
     * @memberof ConnectorNamespaceStatus
     */
    'error'?: string;
}

