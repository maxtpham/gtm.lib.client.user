"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const libclient = require("@gtm/lib.client");
/* tslint:disable:no-unused-variable */
class AccountEntity {
}
exports.AccountEntity = AccountEntity;
class AccountView {
}
exports.AccountView = AccountView;
class AttachmentView {
}
exports.AttachmentView = AttachmentView;
/**
* A class representation of the BSON Binary type.
*/
class Binary {
}
exports.Binary = Binary;
class JwtToken {
}
exports.JwtToken = JwtToken;
class LocationView {
}
exports.LocationView = LocationView;
class MAccountView {
}
exports.MAccountView = MAccountView;
class MAvatarView {
}
exports.MAvatarView = MAvatarView;
class MFCMView {
}
exports.MFCMView = MFCMView;
class MFindUserByPhone {
}
exports.MFindUserByPhone = MFindUserByPhone;
class MProfileView {
}
exports.MProfileView = MProfileView;
class MUserFindByPhone {
}
exports.MUserFindByPhone = MUserFindByPhone;
class MUserView {
}
exports.MUserView = MUserView;
class MapOfBoolean extends null {
}
exports.MapOfBoolean = MapOfBoolean;
class ProfileDefault {
}
exports.ProfileDefault = ProfileDefault;
class ProfileView {
}
exports.ProfileView = ProfileView;
class ProviderSession {
}
exports.ProviderSession = ProviderSession;
class RoleDetailView {
}
exports.RoleDetailView = RoleDetailView;
class RoleStatus {
}
exports.RoleStatus = RoleStatus;
class RoleType {
}
exports.RoleType = RoleType;
class RoleView {
}
exports.RoleView = RoleView;
class RoleViewWithPagination {
}
exports.RoleViewWithPagination = RoleViewWithPagination;
class SessionView {
}
exports.SessionView = SessionView;
class SessionViewWithPagination {
}
exports.SessionViewWithPagination = SessionViewWithPagination;
class StatusFindByPhone {
}
exports.StatusFindByPhone = StatusFindByPhone;
class UserAccount {
}
exports.UserAccount = UserAccount;
class UserAccountView {
}
exports.UserAccountView = UserAccountView;
class UserEntity {
}
exports.UserEntity = UserEntity;
class UserRole {
}
exports.UserRole = UserRole;
class UserRoleView {
}
exports.UserRoleView = UserRoleView;
class UserStatus {
}
exports.UserStatus = UserStatus;
class UserUpdateView {
}
exports.UserUpdateView = UserUpdateView;
class UserViewDetails {
}
exports.UserViewDetails = UserViewDetails;
class UserViewWithPagination {
}
exports.UserViewWithPagination = UserViewWithPagination;
var AccountApiApiKeys;
(function (AccountApiApiKeys) {
})(AccountApiApiKeys = exports.AccountApiApiKeys || (exports.AccountApiApiKeys = {}));
class AccountApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * add account
     * @param userId
     * @param account
     */
    addAccount(userId, account) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addAccount.');
        }
        // verify required parameter 'account' is not null or undefined
        if (account === null || account === undefined) {
            throw new Error('Required parameter account was null or undefined when calling addAccount.');
        }
        let queryParameters = {};
        if (userId !== undefined)
            queryParameters['userId'] = userId;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/account/create', queryParameters, headerParams, formParams, isFile, false, account);
    }
    /**
     * add balance of account
     * @param accountView
     */
    addBalance(accountView) {
        // verify required parameter 'accountView' is not null or undefined
        if (accountView === null || accountView === undefined) {
            throw new Error('Required parameter accountView was null or undefined when calling addBalance.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/account/add-balance', queryParameters, headerParams, formParams, isFile, false, accountView);
    }
    /**
     * get all account
     */
    getAccounts() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/account/get-all', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * get account by id
     * @param id
     */
    getById(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }
        let queryParameters = {};
        if (id !== undefined)
            queryParameters['id'] = id;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/account/get-by-id', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * get account by id
     * @param userId
     */
    getByUserId(userId) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getByUserId.');
        }
        let queryParameters = {};
        if (userId !== undefined)
            queryParameters['userId'] = userId;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/account/get-by-user-id', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * get my-account
     */
    getMyAccount() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/account/my-account', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * remove balance of account
     * @param accountView
     */
    removeBalance(accountView) {
        // verify required parameter 'accountView' is not null or undefined
        if (accountView === null || accountView === undefined) {
            throw new Error('Required parameter accountView was null or undefined when calling removeBalance.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/account/remove-balance', queryParameters, headerParams, formParams, isFile, false, accountView);
    }
}
exports.AccountApi = AccountApi;
var RoleApiApiKeys;
(function (RoleApiApiKeys) {
})(RoleApiApiKeys = exports.RoleApiApiKeys || (exports.RoleApiApiKeys = {}));
class RoleApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * Create New Role
     * @param roleView
     */
    createEntity(roleView) {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/role', queryParameters, headerParams, formParams, isFile, false, roleView);
    }
    /**
     * Delete Role
     * @param id
     */
    deleteEntity(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEntity.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('DELETE', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get all role entities
     */
    getAllEntities() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/role/get-all', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get Roles
     * @param query
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(query, pageNumber, itemCount, sortName, sortType) {
        let queryParameters = {};
        if (query !== undefined)
            queryParameters['query'] = query;
        if (pageNumber !== undefined)
            queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined)
            queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined)
            queryParameters['sortName'] = sortName;
        if (sortType !== undefined)
            queryParameters['sortType'] = sortType;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/role', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get Role by Id
     * @param id
     */
    getEntity(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEntity.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Update Role
     * @param id
     * @param roleView
     */
    updateEntity(id, roleView) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEntity.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, roleView);
    }
}
exports.RoleApi = RoleApi;
var SessionApiApiKeys;
(function (SessionApiApiKeys) {
})(SessionApiApiKeys = exports.SessionApiApiKeys || (exports.SessionApiApiKeys = {}));
class SessionApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * Check current session info
     */
    getCurrent() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/session/current', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get sessions with pagination
     * @param userId
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(userId, pageNumber, itemCount, sortName, sortType) {
        let queryParameters = {};
        if (userId !== undefined)
            queryParameters['userId'] = userId;
        if (pageNumber !== undefined)
            queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined)
            queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined)
            queryParameters['sortName'] = sortName;
        if (sortType !== undefined)
            queryParameters['sortType'] = sortType;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/session/entities', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
}
exports.SessionApi = SessionApi;
var SystemApiApiKeys;
(function (SystemApiApiKeys) {
})(SystemApiApiKeys = exports.SystemApiApiKeys || (exports.SystemApiApiKeys = {}));
class SystemApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * Check loggedin status
     */
    getLoggedin() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/system/loggedin', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get current system version info
     */
    getVersion() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/system/version', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
}
exports.SystemApi = SystemApi;
var UserApiApiKeys;
(function (UserApiApiKeys) {
})(UserApiApiKeys = exports.UserApiApiKeys || (exports.UserApiApiKeys = {}));
class UserApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * Create or update User Role
     * @param userRoleView
     */
    createOrUpdateUserRole(userRoleView) {
        // verify required parameter 'userRoleView' is not null or undefined
        if (userRoleView === null || userRoleView === undefined) {
            throw new Error('Required parameter userRoleView was null or undefined when calling createOrUpdateUserRole.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/create-or-update-role', queryParameters, headerParams, formParams, isFile, false, userRoleView);
    }
    /**
     *
     * @param find
     */
    findUser(find) {
        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling findUser.');
        }
        let queryParameters = {};
        if (find !== undefined)
            queryParameters['find'] = find;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/find-user', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     *
     * @param find
     */
    findUserByPhone(find) {
        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling findUserByPhone.');
        }
        let queryParameters = {};
        if (find !== undefined)
            queryParameters['find'] = find;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/find-user-by-phone', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get user by Id
     * @param id
     */
    getById(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/getById/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get user details by Id
     * @param id
     */
    getDetailViewById(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDetailViewById.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/details/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
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
    getEntities(status, userId, pageNumber, itemCount, sortName, sortType) {
        let queryParameters = {};
        if (status !== undefined)
            queryParameters['status'] = status;
        if (userId !== undefined)
            queryParameters['userId'] = userId;
        if (pageNumber !== undefined)
            queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined)
            queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined)
            queryParameters['sortName'] = sortName;
        if (sortType !== undefined)
            queryParameters['sortType'] = sortType;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/entities', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * getFCMForMobile
     * @param userId
     */
    getFCMForMobile(userId) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getFCMForMobile.');
        }
        let queryParameters = {};
        if (userId !== undefined)
            queryParameters['userId'] = userId;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-fcm-for-mobile', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get lend user for app
     * @param find
     */
    getLenderUserForApp(find) {
        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling getLenderUserForApp.');
        }
        let queryParameters = {};
        if (find !== undefined)
            queryParameters['find'] = find;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-lender-for-app', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     *
     */
    getProfileCurrent() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/profile', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     *
     */
    getProfileCurrentForMobile() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/profile-for-mobile', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get user account
     * @param userId
     */
    getUserAccount(userId) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAccount.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     *
     * @param userName
     */
    getUserByName(userName) {
        // verify required parameter 'userName' is not null or undefined
        if (userName === null || userName === undefined) {
            throw new Error('Required parameter userName was null or undefined when calling getUserByName.');
        }
        let queryParameters = {};
        if (userName !== undefined)
            queryParameters['userName'] = userName;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-by-user-name', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get all user lite
     */
    getUserLite() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-user-lite', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * setFCMForMobile
     * @param fcms
     */
    setFCMForMobile(fcms) {
        // verify required parameter 'fcms' is not null or undefined
        if (fcms === null || fcms === undefined) {
            throw new Error('Required parameter fcms was null or undefined when calling setFCMForMobile.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/set-fcm-for-mobile', queryParameters, headerParams, formParams, isFile, false, fcms);
    }
    /**
     * Update user with profiles
     * @param avatar
     */
    updateAvatar(avatar) {
        // verify required parameter 'avatar' is not null or undefined
        if (avatar === null || avatar === undefined) {
            throw new Error('Required parameter avatar was null or undefined when calling updateAvatar.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/update-avatar', queryParameters, headerParams, formParams, isFile, false, avatar);
    }
    /**
     *
     * @param profileView
     */
    updateProfileCurrent(profileView) {
        // verify required parameter 'profileView' is not null or undefined
        if (profileView === null || profileView === undefined) {
            throw new Error('Required parameter profileView was null or undefined when calling updateProfileCurrent.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/profile', queryParameters, headerParams, formParams, isFile, false, profileView);
    }
    /**
     * Update user account
     * @param userId
     * @param userAccountView
     * @param type
     */
    updateUserAccount(userId, userAccountView, type) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserAccount.');
        }
        // verify required parameter 'userAccountView' is not null or undefined
        if (userAccountView === null || userAccountView === undefined) {
            throw new Error('Required parameter userAccountView was null or undefined when calling updateUserAccount.');
        }
        let queryParameters = {};
        if (type !== undefined)
            queryParameters['type'] = type;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/update-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)), queryParameters, headerParams, formParams, isFile, false, userAccountView);
    }
    /**
     * Update user details
     * @param userId
     * @param userDetails
     */
    updateUserDetail(userId, userDetails) {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserDetail.');
        }
        // verify required parameter 'userDetails' is not null or undefined
        if (userDetails === null || userDetails === undefined) {
            throw new Error('Required parameter userDetails was null or undefined when calling updateUserDetail.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/update-user-details/{userId}'.replace('{' + 'userId' + '}', String(userId)), queryParameters, headerParams, formParams, isFile, false, userDetails);
    }
    /**
     * Update user with profiles
     * @param profile
     */
    updateUserProfiles(profile) {
        // verify required parameter 'profile' is not null or undefined
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfiles.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/update-user-profiles', queryParameters, headerParams, formParams, isFile, false, profile);
    }
}
exports.UserApi = UserApi;
function registerIoc(iocContainer, basePath, token) {
    libclient.registerApiClient(iocContainer, AccountApi, AccountApi, basePath, token);
    libclient.registerApiClient(iocContainer, RoleApi, RoleApi, basePath, token);
    libclient.registerApiClient(iocContainer, SessionApi, SessionApi, basePath, token);
    libclient.registerApiClient(iocContainer, SystemApi, SystemApi, basePath, token);
    libclient.registerApiClient(iocContainer, UserApi, UserApi, basePath, token);
}
exports.registerIoc = registerIoc;
//# sourceMappingURL=api.js.map