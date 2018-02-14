/**
 * @gtm/service.user
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { interfaces } from 'inversify';
import * as libclient from '@gtm/lib.client';
export declare class JwtToken {
    /**
    * User's display name
    */
    'name': string;
    'session': string;
    'user': string;
    /**
    * List of scope or null is all scope (*)
    */
    'scope': MapOfBoolean;
    /**
    * Valid until
    */
    'expires': number;
}
export declare class MUserView {
    'id': ModelString;
    'name': ModelString;
}
export declare class MapOfBoolean extends null<String, boolean> {
}
export declare class MessageDetailView {
    'id': string;
    'userId': string;
    'userName': string;
    'toUserId': string;
    'toUserName': string;
    'content': string;
    'delivered': number;
    'created': number;
    'updated': number;
}
export declare class MessageEntity {
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
}
export declare class MessageView {
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
}
export declare class MessageViewWithPagination {
    'messages': Array<MessageDetailView>;
    'totalItems': number;
}
/**
* Allows manipulation and formatting of text strings and determination and location of substrings within strings.
*/
export declare class ModelString {
}
export declare class RoleDetailView {
    'id': string;
    'code': string;
    'scope': string;
    'created': number;
    'updated': number;
}
export declare class RoleView {
    /**
    * role code
    */
    'code': string;
    /**
    * role scope
    */
    'scope': string;
}
export declare class RoleViewWithPagination {
    'roles': Array<RoleDetailView>;
    'totalItems': number;
}
export declare enum MessageApiApiKeys {
}
export declare class MessageApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Create New Message
     * @param messageView
     */
    createEntity(messageView: MessageView): Promise<libclient.ApiResponse<MessageEntity>>;
    /**
     * Delete Message
     * @param id
     */
    deleteEntity(id: string): Promise<libclient.ApiResponse<any>>;
    /**
     * Get Messages
     * @param query
     * @param pageNumber
     * @param itemCount
     */
    getEntities(query?: string, pageNumber?: number, itemCount?: number): Promise<libclient.ApiResponse<MessageViewWithPagination>>;
    /**
     * Get Message by Id
     * @param id
     */
    getEntity(id: string): Promise<libclient.ApiResponse<MessageEntity>>;
    /**
     * Update Message
     * @param id
     * @param messageView
     */
    updateEntity(id: string, messageView: MessageView): Promise<libclient.ApiResponse<MessageEntity>>;
}
export declare enum RoleApiApiKeys {
}
export declare class RoleApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Create New Role
     * @param roleView
     */
    createEntity(roleView?: RoleView): Promise<libclient.ApiResponse<RoleDetailView>>;
    /**
     * Delete Role
     * @param id
     */
    deleteEntity(id: string): Promise<libclient.ApiResponse<ModelString>>;
    /**
     * Get Roles
     * @param query
     * @param pageNumber
     * @param itemCount
     */
    getEntities(query?: string, pageNumber?: number, itemCount?: number): Promise<libclient.ApiResponse<RoleViewWithPagination>>;
    /**
     * Get Role by Id
     * @param id
     */
    getEntity(id: string): Promise<libclient.ApiResponse<RoleDetailView>>;
    /**
     * Update Role
     * @param id
     * @param roleView
     */
    updateEntity(id: string, roleView?: RoleView): Promise<libclient.ApiResponse<RoleDetailView>>;
}
export declare enum SessionApiApiKeys {
}
export declare class SessionApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Check current session info
     */
    getCurrent(): Promise<libclient.ApiResponse<JwtToken>>;
}
export declare enum SystemApiApiKeys {
}
export declare class SystemApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Check loggedin status
     */
    getLoggedin(): Promise<libclient.ApiResponse<boolean>>;
    /**
     * Get current system version info
     */
    getVersion(): Promise<libclient.ApiResponse<string>>;
}
export declare enum UserApiApiKeys {
}
export declare class UserApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Get user by Id
     * @param id
     */
    getEntity(id: string): Promise<libclient.ApiResponse<MUserView>>;
}
export declare function registerIoc(iocContainer: interfaces.Container, basePath: string, token?: string | (() => string)): void;
