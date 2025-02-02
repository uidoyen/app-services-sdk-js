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


import { ConnectorNamespaceStatus } from './connector-namespace-status';
import { ConnectorNamespaceTenant } from './connector-namespace-tenant';

/**
 * 
 * @export
 * @interface ConnectorNamespaceAllOf
 */
export interface ConnectorNamespaceAllOf {
    /**
     * 
     * @type {string}
     * @memberof ConnectorNamespaceAllOf
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorNamespaceAllOf
     */
    'cluster_id': string;
    /**
     * Namespace expiration timestamp in RFC 3339 format
     * @type {string}
     * @memberof ConnectorNamespaceAllOf
     */
    'expiration'?: string;
    /**
     * 
     * @type {ConnectorNamespaceTenant}
     * @memberof ConnectorNamespaceAllOf
     */
    'tenant': ConnectorNamespaceTenant;
    /**
     * 
     * @type {ConnectorNamespaceStatus}
     * @memberof ConnectorNamespaceAllOf
     */
    'status': ConnectorNamespaceStatus;
}

