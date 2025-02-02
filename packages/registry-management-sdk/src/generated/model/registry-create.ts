/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry Fleet Manager
 * Service Registry Fleet Manager is a REST API for managing Service Registry instances. Service Registry is a datastore for event schemas and API designs, which is based on the open source Apicurio Registry project.
 *
 * The version of the OpenAPI document: 0.0.6
 * Contact: rhosak-eval-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information used to create a new Service Registry instance in a multi-tenant deployment.
 * @export
 * @interface RegistryCreate
 */
export interface RegistryCreate {
    /**
     * User-defined Registry instance name. Required. Does not have to be unique.
     * @type {string}
     * @memberof RegistryCreate
     */
    'name'?: string;
    /**
     * User-provided description of the new Service Registry instance. Not required.
     * @type {string}
     * @memberof RegistryCreate
     */
    'description'?: string;
}

