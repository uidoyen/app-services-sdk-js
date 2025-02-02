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



/**
 * 
 * @export
 * @interface ConnectorNamespaceRequestMeta
 */
export interface ConnectorNamespaceRequestMeta {
    /**
     * Namespace name must match pattern `^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$`, or it may be empty to be auto-generated.
     * @type {string}
     * @memberof ConnectorNamespaceRequestMeta
     */
    'name'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ConnectorNamespaceRequestMeta
     */
    'annotations'?: { [key: string]: string; };
}

