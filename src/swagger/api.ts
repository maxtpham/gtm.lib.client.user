/**
 * @gtmservice/user
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
    'balanceGold': number;
    'bonus': number;
}

export class AccountView {
    'balance': number;
    'balanceGold': number;
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

/**
* A class representation of the BSON Binary type.
*/
export class Binary {
    'SUBTYPE_DEFAULT': number;
    'SUBTYPE_FUNCTION': number;
    'SUBTYPE_BYTE_ARRAY': number;
    'SUBTYPE_UUID_OLD': number;
    'SUBTYPE_UUID': number;
    'sUBTYPEMD5': number;
    'SUBTYPE_USER_DEFINED': number;
    /**
    * A buffer object containing the binary data
    */
    'buffer': string;
    /**
    * Binary data subtype
    */
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
    'balanceGold': number;
}

export class MAvatarView {
    'media': string;
    'data': string;
}

export class MFCMView {
    'fcmToken': string;
}

export class MFindUserByPhone {
    'user': MUserFindByPhone;
    'status': StatusFindByPhone;
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

export class MUserFindByPhone {
    'id': string;
    'name': string;
    'phone': string;
    'birthday': number;
    'email': string;
    'gender': string;
    'houseHolder': any;
}

export class MUserView {
    'id': string;
    'name': string;
    'phone': string;
    'email': string;
    'houseHolder': any;
}

export class MapOfBoolean extends null<String, boolean> {
}

export class ProfileDefault {
    'bankRate': number;
    'job': string;
    'infos': string;
    'note': string;
    'identityCard': string;
    'houseHolder': string;
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
    * user account
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
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
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
}

export class ProviderSession {
    'name': string;
    'accessToken': string;
    'refreshToken': string;
    'expiresIn': number;
    'tokenType': string;
}

export class RoleDetailView {
    'id': string;
    'code': string;
    'scope': string;
    'status': RoleStatus;
    'created': number;
    'updated': number;
}

export class RoleStatus {
}

export class RoleType {
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
    /**
    * role status
    */
    'status': RoleStatus;
}

export class RoleViewWithPagination {
    'roles': Array<RoleDetailView>;
    'totalItems': number;
}

export class SessionView {
    'id': string;
    'userId': string;
    'code': string;
    'name': string;
    'roles': Array<string>;
    'scope': string;
    'expiresIn': number;
    'provider': ProviderSession;
    'created': number;
    'updated': number;
}

export class SessionViewWithPagination {
    'sessions': Array<SessionView>;
    'totalItems': number;
}

export class StatusFindByPhone {
}

export class UserAccount {
    'balance': number;
    'balanceGold': number;
    'bonus': number;
}

export class UserAccountView {
    'balance': number;
    'balanceGold': number;
    'bonus': number;
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
    * user account
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
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
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
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

export class UserRoleView {
    'userId': string;
    'roleType': RoleType;
}

export class UserStatus {
}

export class UserUpdateView {
    'name': string;
    'phone': string;
    'birthday': number;
    'email': string;
    'gender': string;
    'status': UserStatus;
    'role': Array<UserRole>;
    'address': string;
}

export class UserViewDetails {
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
    * user account
    */
    'account': AccountView;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
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
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login
    */
    'avatar': AttachmentView;
    'id': string;
    'created': number;
    'updated': number;
}

export class UserViewWithPagination {
    'users': Array<UserViewDetails>;
    'totalItems': number;
}


export enum AccountApiApiKeys {
}

export class AccountApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * add account
     * @param userId 
     * @param account 
     */
    public addAccount (userId: string, account: AccountView) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addAccount.');
        }

        // verify required parameter 'account' is not null or undefined
        if (account === null || account === undefined) {
            throw new Error('Required parameter account was null or undefined when calling addAccount.');
        }
        let queryParameters: any = {};
        if (userId !== undefined) queryParameters['userId'] = userId;
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
     * get account by id
     * @param userId 
     */
    public getByUserId (userId: string) : Promise<libclient.ApiResponse<AccountEntity>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getByUserId.');
        }
        let queryParameters: any = {};
        if (userId !== undefined) queryParameters['userId'] = userId;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<AccountEntity>('GET', '/api/user/v1/account/get-by-user-id',
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
     * Get all role entities
     */
    public getAllEntities () : Promise<libclient.ApiResponse<Array<RoleDetailView>>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<RoleDetailView>>('GET', '/api/user/v1/role/get-all',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Roles
     * @param query 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (query?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<RoleViewWithPagination>> {
        let queryParameters: any = {};
        if (query !== undefined) queryParameters['query'] = query;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
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
        return this.execute<RoleDetailView>('POST', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
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

    /**
     * Get sessions with pagination
     * @param userId 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<SessionViewWithPagination>> {
        let queryParameters: any = {};
        if (userId !== undefined) queryParameters['userId'] = userId;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<SessionViewWithPagination>('GET', '/api/user/v1/session/entities',
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
     * Create or update User Role
     * @param userRoleView 
     */
    public createOrUpdateUserRole (userRoleView: UserRoleView) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'userRoleView' is not null or undefined
        if (userRoleView === null || userRoleView === undefined) {
            throw new Error('Required parameter userRoleView was null or undefined when calling createOrUpdateUserRole.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/create-or-update-role',
            queryParameters, headerParams, formParams, isFile, false, userRoleView
        );
    }

    /**
     * 
     * @param find 
     */
    public findUser (find: string) : Promise<libclient.ApiResponse<Array<MUserView>>> {

        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling findUser.');
        }
        let queryParameters: any = {};
        if (find !== undefined) queryParameters['find'] = find;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/find-user',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     * @param find 
     */
    public findUserByPhone (find: string) : Promise<libclient.ApiResponse<MFindUserByPhone>> {

        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling findUserByPhone.');
        }
        let queryParameters: any = {};
        if (find !== undefined) queryParameters['find'] = find;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MFindUserByPhone>('GET', '/api/user/v1/user/find-user-by-phone',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
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
     * Get user details by Id
     * @param id 
     */
    public getDetailViewById (id: string) : Promise<libclient.ApiResponse<UserViewDetails>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDetailViewById.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserViewDetails>('GET', '/api/user/v1/user/details/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get users with pagination
     * @param status 
     * @param userId 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (status?: string, userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<UserViewWithPagination>> {
        let queryParameters: any = {};
        if (status !== undefined) queryParameters['status'] = status;
        if (userId !== undefined) queryParameters['userId'] = userId;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserViewWithPagination>('GET', '/api/user/v1/user/entities',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * getFCMForMobile
     * @param userId 
     */
    public getFCMForMobile (userId: string) : Promise<libclient.ApiResponse<MFCMView>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getFCMForMobile.');
        }
        let queryParameters: any = {};
        if (userId !== undefined) queryParameters['userId'] = userId;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MFCMView>('GET', '/api/user/v1/user/get-fcm-for-mobile',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get lend user for app
     * @param find 
     */
    public getLenderUserForApp (find: string) : Promise<libclient.ApiResponse<Array<MUserView>>> {

        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling getLenderUserForApp.');
        }
        let queryParameters: any = {};
        if (find !== undefined) queryParameters['find'] = find;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/get-lender-for-app',
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
     */
    public getProfileCurrentForMobile () : Promise<libclient.ApiResponse<ProfileView>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('GET', '/api/user/v1/user/profile-for-mobile',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get user account
     * @param userId 
     */
    public getUserAccount (userId: string) : Promise<libclient.ApiResponse<UserAccount>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAccount.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserAccount>('GET', '/api/user/v1/user/get-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)),
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
     * setFCMForMobile
     * @param fcms 
     */
    public setFCMForMobile (fcms: MFCMView) : Promise<libclient.ApiResponse<string>> {

        // verify required parameter 'fcms' is not null or undefined
        if (fcms === null || fcms === undefined) {
            throw new Error('Required parameter fcms was null or undefined when calling setFCMForMobile.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<string>('POST', '/api/user/v1/user/set-fcm-for-mobile',
            queryParameters, headerParams, formParams, isFile, false, fcms
        );
    }

    /**
     * Update user with profiles
     * @param avatar 
     */
    public updateAvatar (avatar: MAvatarView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'avatar' is not null or undefined
        if (avatar === null || avatar === undefined) {
            throw new Error('Required parameter avatar was null or undefined when calling updateAvatar.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-avatar',
            queryParameters, headerParams, formParams, isFile, false, avatar
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
     * Update user account
     * @param userId 
     * @param userAccountView 
     * @param type 
     */
    public updateUserAccount (userId: string, userAccountView: UserAccountView, type?: string) : Promise<libclient.ApiResponse<UserAccount>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserAccount.');
        }

        // verify required parameter 'userAccountView' is not null or undefined
        if (userAccountView === null || userAccountView === undefined) {
            throw new Error('Required parameter userAccountView was null or undefined when calling updateUserAccount.');
        }
        let queryParameters: any = {};
        if (type !== undefined) queryParameters['type'] = type;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserAccount>('POST', '/api/user/v1/user/update-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)),
            queryParameters, headerParams, formParams, isFile, false, userAccountView
        );
    }

    /**
     * Update user details
     * @param userId 
     * @param userDetails 
     */
    public updateUserDetail (userId: string, userDetails: UserUpdateView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserDetail.');
        }

        // verify required parameter 'userDetails' is not null or undefined
        if (userDetails === null || userDetails === undefined) {
            throw new Error('Required parameter userDetails was null or undefined when calling updateUserDetail.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-user-details/{userId}'.replace('{' + 'userId' + '}', String(userId)),
            queryParameters, headerParams, formParams, isFile, false, userDetails
        );
    }

    /**
     * Update user with profiles
     * @param profile 
     */
    public updateUserProfiles (profile: MProfileView) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'profile' is not null or undefined
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfiles.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/update-user-profiles',
            queryParameters, headerParams, formParams, isFile, false, profile
        );
    }
}

export function registerIoc(iocContainer: interfaces.Container, basePath: string, token?: string | (() => string)) {
    libclient.registerApiClient(iocContainer, AccountApi, AccountApi, basePath, token);
    libclient.registerApiClient(iocContainer, RoleApi, RoleApi, basePath, token);
    libclient.registerApiClient(iocContainer, SessionApi, SessionApi, basePath, token);
    libclient.registerApiClient(iocContainer, SystemApi, SystemApi, basePath, token);
    libclient.registerApiClient(iocContainer, UserApi, UserApi, basePath, token);
}
