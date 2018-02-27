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
class JwtToken {
}
exports.JwtToken = JwtToken;
class LocationView {
}
exports.LocationView = LocationView;
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
class MessageEntity {
}
exports.MessageEntity = MessageEntity;
class MessageView {
}
exports.MessageView = MessageView;
class MessageViewWithPagination {
}
exports.MessageViewWithPagination = MessageViewWithPagination;
class ProfileView {
}
exports.ProfileView = ProfileView;
class RoleDetailView {
}
exports.RoleDetailView = RoleDetailView;
class RoleView {
}
exports.RoleView = RoleView;
class RoleViewWithPagination {
}
exports.RoleViewWithPagination = RoleViewWithPagination;
class UserRole {
}
exports.UserRole = UserRole;
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
     * @param query
     * @param pageNumber
     * @param itemCount
     * @param from
     * @param to
     */
    getEntities(query, pageNumber, itemCount, from, to) {
        let queryParameters = {};
        if (query !== undefined)
            queryParameters['query'] = query;
        if (pageNumber !== undefined)
            queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined)
            queryParameters['itemCount'] = itemCount;
        if (from !== undefined)
            queryParameters['from'] = from;
        if (to !== undefined)
            queryParameters['to'] = to;
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
        return this.execute('GET', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, undefined);
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
     * Get Roles
     * @param query
     * @param pageNumber
     * @param itemCount
     */
    getEntities(query, pageNumber, itemCount) {
        let queryParameters = {};
        if (query !== undefined)
            queryParameters['query'] = query;
        if (pageNumber !== undefined)
            queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined)
            queryParameters['itemCount'] = itemCount;
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
        return this.execute('PUT', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)), queryParameters, headerParams, formParams, isFile, false, roleView);
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
     * Get all user with profiles
     */
    getAllProfiles() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-all-profiles', queryParameters, headerParams, formParams, isFile, false, undefined);
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
     * Get all user with profiles
     * @param id
     */
    getProfileById(id) {
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProfileById.');
        }
        let queryParameters = {};
        if (id !== undefined)
            queryParameters['id'] = id;
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/get-profile-by-id', queryParameters, headerParams, formParams, isFile, false, undefined);
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
        return this.execute('GET', '/api/user/v1/user/getByUserName', queryParameters, headerParams, formParams, isFile, false, undefined);
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
     * Get all userviews
     */
    getUserViews() {
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('GET', '/api/user/v1/user/userviews', queryParameters, headerParams, formParams, isFile, false, undefined);
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
     * Update user with profiles
     * @param profile
     */
    updateUserPhone(profile) {
        // verify required parameter 'profile' is not null or undefined
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserPhone.');
        }
        let queryParameters = {};
        let headerParams = this.defaultHeaders;
        let isFile = false;
        let formParams = {};
        return this.execute('POST', '/api/user/v1/user/update-user-phone', queryParameters, headerParams, formParams, isFile, false, profile);
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