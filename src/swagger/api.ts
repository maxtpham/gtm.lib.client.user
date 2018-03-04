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

/* tslint:disable:no-unused-variable */
export class AccountEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    'userId': string;
    'balance': number;
    'bonus': number;
}

export class AccountView {
    'userId': string;
    'balance': number;
    'bonus': number;
}

export class AttachmentView {
    /**
    * HTML Content-Type: image/png, image/jpeg, image/gif,..  This will be return to browser client to correctly load & show the image  
    */
    'media': string;
    /**
    * Image raw/binary Content-Data will be stramming to browser client 
    */
    'data': Binary;
}

export class Binary {
    'sUBTYPEDEFAULT': number;
    'sUBTYPEFUNCTION': number;
    'sUBTYPEBYTEARRAY': number;
    'sUBTYPEUUIDOLD': number;
    'sUBTYPEUUID': number;
    'sUBTYPEMD5': number;
    'sUBTYPEUSERDEFINED': number;
    'buffer': string;
    'subType': number;
}

export class JwtToken {
    /**
    * User's display name 
    */
    'name': string;
    'session': string;
    'user': string;
    /**
    * List of roles for quicky checking 
    */
    'roles': MapOfBoolean;
    /**
    * List of scope or null is all scope (*) 
    */
    'scope': MapOfBoolean;
    /**
    * Valid until 
    */
    'expires': number;
}

export class LocationView {
    /**
    * longitude 
    */
    'x': number;
    /**
    * latitude 
    */
    'y': number;
}

export class MAccountView {
    'userId': string;
    'balance': number;
}

export class MProfileView {
    'name': string;
    'gender': string;
    'birthday': number;
    'address': string;
    'localtion': LocationView;
    'identityCard': string;
    'phone': string;
    'job': string;
    'bankRate': number;
    'note': string;
    'infos': string;
    'houseHolder': string;
}

export class MUserView {
    'id': string;
    'name': string;
    'phone': string;
}

export class MapOfBoolean extends null<String, boolean> {
}

export class MessageDetailView {
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

export class MessageEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
}

export class MessageView {
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
}

export class MessageViewWithPagination {
    'messages': Array<MessageDetailView>;
    'totalItems': number;
}

export class ProfileView {
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham 
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/.. 
    */
    'provider': string;
    /**
    * Link to [role] table 
    */
    'roles': Array<UserRole>;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process 
    */
    'active': boolean;
    /**
    * UTC tick only date without time component 
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,.. 
    */
    'language': string;
    /**
    * male/female 
    */
    'gender': string;
    /**
    * +/- UTC time 
    */
    'timezone': number;
}

export class RoleDetailView {
    'id': string;
    'code': string;
    'scope': string;
    'created': number;
    'updated': number;
}

export class RoleView {
    /**
    * role code 
    */
    'code': string;
    /**
    * role scope 
    */
    'scope': string;
}

export class RoleViewWithPagination {
    'roles': Array<RoleDetailView>;
    'totalItems': number;
}

export class UserEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham 
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/.. 
    */
    'provider': string;
    /**
    * Link to [role] table 
    */
    'roles': Array<UserRole>;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process 
    */
    'active': boolean;
    /**
    * UTC tick only date without time component 
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,.. 
    */
    'language': string;
    /**
    * male/female 
    */
    'gender': string;
    /**
    * +/- UTC time 
    */
    'timezone': number;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login  
    */
    'avatar': AttachmentView;
}

export class UserRole {
    'id': any;
    'code': string;
}


export enum AccountApiApiKeys {
}

export class AccountApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * add account 
     * @param account 
     */
    public addAccount (account: AccountView) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'account' is not null or undefined
        if (account === null || account === undefined) {
            throw new Error('Required parameter account was null or undefined when calling addAccount.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('POST', '/api/user/v1/account/create',
            queryParameters, headerParams, formParams, isFile, false, account
        );
    }

    /**
     * add balance of account 
     * @param accountView 
     */
    public addBalance (accountView: MAccountView) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'accountView' is not null or undefined
        if (accountView === null || accountView === undefined) {
            throw new Error('Required parameter accountView was null or undefined when calling addBalance.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('POST', '/api/user/v1/account/add-balance',
            queryParameters, headerParams, formParams, isFile, false, accountView
        );
    }

    /**
     * get all account 
     */
    public getAccounts () : Promise<libclient.ApiResponse<Array<AccountEntity>>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<AccountEntity>>('GET', '/api/user/v1/account/get-all',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * get account by id 
     * @param id 
     */
    public getById (id: string) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }
        let queryParameters: any = {};
        if (id !== undefined) queryParameters['id'] = id;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('GET', '/api/user/v1/account/get-by-id',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * get my-account 
     */
    public getMyAccount () : Promise<libclient.ApiResponse<AccountEntity>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('GET', '/api/user/v1/account/my-account',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * remove balance of account 
     * @param accountView 
     */
    public removeBalance (accountView: MAccountView) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'accountView' is not null or undefined
        if (accountView === null || accountView === undefined) {
            throw new Error('Required parameter accountView was null or undefined when calling removeBalance.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('POST', '/api/user/v1/account/remove-balance',
            queryParameters, headerParams, formParams, isFile, false, accountView
        );
    }
}
export enum MessageApiApiKeys {
}

export class MessageApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Create New Message 
     * @param messageView 
     */
    public createEntity (messageView: MessageView) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling createEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('POST', '/api/user/v1/Message',
            queryParameters, headerParams, formParams, isFile, false, messageView
        );
    }

    /**
     * Delete Message 
     * @param id 
     */
    public deleteEntity (id: string) : Promise<libclient.ApiResponse<any>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<any>('DELETE', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Messages 
     * @param query 
     * @param pageNumber 
     * @param itemCount 
     * @param from 
     * @param to 
     */
    public getEntities (query?: string, pageNumber?: number, itemCount?: number, from?: string, to?: string) : Promise<libclient.ApiResponse<MessageViewWithPagination>> {
        let queryParameters: any = {};
        if (query !== undefined) queryParameters['query'] = query;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (from !== undefined) queryParameters['from'] = from;
        if (to !== undefined) queryParameters['to'] = to;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageViewWithPagination>('GET', '/api/user/v1/Message',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Message by Id 
     * @param id 
     */
    public getEntity (id: string) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('GET', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Update Message 
     * @param id 
     * @param messageView 
     */
    public updateEntity (id: string, messageView: MessageView) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEntity.');
        }

        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling updateEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('PUT', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, messageView
        );
    }
}
export enum RoleApiApiKeys {
}

export class RoleApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Create New Role 
     * @param roleView 
     */
    public createEntity (roleView?: RoleView) : Promise<libclient.ApiResponse<RoleDetailView>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleDetailView>('POST', '/api/user/v1/role',
            queryParameters, headerParams, formParams, isFile, false, roleView
        );
    }

    /**
     * Delete Role 
     * @param id 
     */
    public deleteEntity (id: string) : Promise<libclient.ApiResponse<string>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<string>('DELETE', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Roles 
     * @param query 
     * @param pageNumber 
     * @param itemCount 
     */
    public getEntities (query?: string, pageNumber?: number, itemCount?: number) : Promise<libclient.ApiResponse<RoleViewWithPagination>> {
        let queryParameters: any = {};
        if (query !== undefined) queryParameters['query'] = query;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleViewWithPagination>('GET', '/api/user/v1/role',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Role by Id 
     * @param id 
     */
    public getEntity (id: string) : Promise<libclient.ApiResponse<RoleDetailView>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleDetailView>('GET', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Update Role 
     * @param id 
     * @param roleView 
     */
    public updateEntity (id: string, roleView?: RoleView) : Promise<libclient.ApiResponse<RoleDetailView>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleDetailView>('PUT', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, roleView
        );
    }
}
export enum SessionApiApiKeys {
}

export class SessionApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Check current session info 
     */
    public getCurrent () : Promise<libclient.ApiResponse<JwtToken>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<JwtToken>('GET', '/api/user/v1/session/current',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }
}
export enum SystemApiApiKeys {
}

export class SystemApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Check loggedin status 
     */
    public getLoggedin () : Promise<libclient.ApiResponse<boolean>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<boolean>('GET', '/api/user/v1/system/loggedin',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get current system version info 
     */
    public getVersion () : Promise<libclient.ApiResponse<string>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<string>('POST', '/api/user/v1/system/version',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }
}
export enum UserApiApiKeys {
}

export class UserApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Get user by Id 
     * @param id 
     */
    public getById (id: string) : Promise<libclient.ApiResponse<MUserView>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MUserView>('GET', '/api/user/v1/user/getById/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     */
    public getProfileCurrent () : Promise<libclient.ApiResponse<ProfileView>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('GET', '/api/user/v1/user/profile',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     * @param userName 
     */
    public getUserByName (userName: string) : Promise<libclient.ApiResponse<Array<MUserView>>> {

        // verify required parameter 'userName' is not null or undefined
        if (userName === null || userName === undefined) {
            throw new Error('Required parameter userName was null or undefined when calling getUserByName.');
        }
        let queryParameters: any = {};
        if (userName !== undefined) queryParameters['userName'] = userName;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/get-by-user-name',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get all user lite 
     */
    public getUserLite () : Promise<libclient.ApiResponse<Array<MUserView>>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/get-user-lite',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     * @param profileView 
     */
    public updateProfileCurrent (profileView: ProfileView) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'profileView' is not null or undefined
        if (profileView === null || profileView === undefined) {
            throw new Error('Required parameter profileView was null or undefined when calling updateProfileCurrent.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/profile',
            queryParameters, headerParams, formParams, isFile, false, profileView
        );
    }

    /**
     * Update user with profiles 
     * @param profile 
     */
    public updateUserProfiles (profile: MProfileView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'profile' is not null or undefined
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfiles.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-user-profiles',
            queryParameters, headerParams, formParams, isFile, false, profile
        );
    }
}

export function registerIoc(iocContainer: interfaces.Container, basePath: string, token?: string | (() => string)) {
    libclient.registerApiClient(iocContainer, AccountApi, AccountApi, basePath, token);
    libclient.registerApiClient(iocContainer, MessageApi, MessageApi, basePath, token);
    libclient.registerApiClient(iocContainer, RoleApi, RoleApi, basePath, token);
    libclient.registerApiClient(iocContainer, SessionApi, SessionApi, basePath, token);
    libclient.registerApiClient(iocContainer, SystemApi, SystemApi, basePath, token);
    libclient.registerApiClient(iocContainer, UserApi, UserApi, basePath, token);
}
