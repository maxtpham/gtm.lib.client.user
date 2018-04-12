"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const libclient = require("@gtm/lib.client");
/* tslint:disable:no-unused-variable */
class AccountView {
}
exports.AccountView = AccountView;
class AttachmentView {
}
exports.AttachmentView = AttachmentView;
class Binary {
}
exports.Binary = Binary;
class JwtToken {
}
exports.JwtToken = JwtToken;
class LocationView {
}
exports.LocationView = LocationView;
class MAvatarView {
}
exports.MAvatarView = MAvatarView;
class MProfileView {
}
exports.MProfileView = MProfileView;
class MUserView {
}
exports.MUserView = MUserView;
class MapOfBoolean extends null {
}
exports.MapOfBoolean = MapOfBoolean;
class MessageDetailView {
}
exports.MessageDetailView = MessageDetailView;
class MessageDetailViewApp {
}
exports.MessageDetailViewApp = MessageDetailViewApp;
class MessageEntity {
}
exports.MessageEntity = MessageEntity;
class MessageView {
}
exports.MessageView = MessageView;
class MessageViewWithPagination {
}
exports.MessageViewWithPagination = MessageViewWithPagination;
class MessageViewWithPaginationAnUserApp {
}
exports.MessageViewWithPaginationAnUserApp = MessageViewWithPaginationAnUserApp;
class MessageViewWithPaginationApp {
}
exports.MessageViewWithPaginationApp = MessageViewWithPaginationApp;
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
var MessageApiApiKeys;
(function (MessageApiApiKeys) {
})(MessageApiApiKeys = exports.MessageApiApiKeys || (exports.MessageApiApiKeys = {}));
class MessageApi extends libclient.ApiClient {
    constructor(basePath, accessToken) {
        super(basePath, accessToken);
    }
    /**
     * Create New Message
     * @param messageView
     */
    createEntity(messageView) {
        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling createEntity.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/Message', queryParameters, headerParams, formParams, isFile, false, messageView);
    }
    /**
     * Delete Message
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
        return this.execute('DELETE', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get Messages
     * @param from
     * @param to
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(from, to, pageNumber, itemCount, sortName, sortType) {
        let queryParameters = {};
        if (from !== undefined)
            queryParameters['from'] = from;
        if (to !== undefined)
            queryParameters['to'] = to;
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
        return this.execute('GET', '/api/user/v1/Message', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get Message by Id
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
        return this.execute('GET', '/api/user/v1/Message/getbyid/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get List Messages For App
     */
    getListMessageForApp() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/Message/getforapp', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get List Messages with an user for App
     * @param userIdToGetMessage
     */
    getListMessageOfUser(userIdToGetMessage) {
        // verify required parameter 'userIdToGetMessage' is not null or undefined
        if (userIdToGetMessage === null || userIdToGetMessage === undefined) {
            throw new Error('Required parameter userIdToGetMessage was null or undefined when calling getListMessageOfUser.');
        }
        let queryParameters = {};
        if (userIdToGetMessage !== undefined)
            queryParameters['userIdToGetMessage'] = userIdToGetMessage;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/Message/getforanuserapp', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Get Messages to notification
     */
    getMessageToNotification() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/Message/get-message-to-notification', queryParameters, headerParams, formParams, isFile, false, undefined);
    }
    /**
     * Update Message
     * @param id
     * @param messageView
     */
    updateEntity(id, messageView) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEntity.');
        }
        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling updateEntity.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('PUT', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, messageView);
    }
}
exports.MessageApi = MessageApi;
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
     * Create or update User Role
     * @param userRoleView
     */
    createOrUpdateUserRoleMobile(userRoleView) {
        // verify required parameter 'userRoleView' is not null or undefined
        if (userRoleView === null || userRoleView === undefined) {
            throw new Error('Required parameter userRoleView was null or undefined when calling createOrUpdateUserRoleMobile.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/create-or-update-role-mobile', queryParameters, headerParams, formParams, isFile, false, userRoleView);
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
    libclient.registerApiClient(iocContainer, MessageApi, MessageApi, basePath, token);
    libclient.registerApiClient(iocContainer, RoleApi, RoleApi, basePath, token);
    libclient.registerApiClient(iocContainer, SessionApi, SessionApi, basePath, token);
    libclient.registerApiClient(iocContainer, SystemApi, SystemApi, basePath, token);
    libclient.registerApiClient(iocContainer, UserApi, UserApi, basePath, token);
}
exports.registerIoc = registerIoc;
//# sourceMappingURL=api.js.map