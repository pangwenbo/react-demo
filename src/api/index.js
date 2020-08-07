import axios from '../utils/request';
import qs from 'qs';
window.api = {};
window.api.base = 'http://39.106.141.151:20000';

export default {
        /**
         * 日志-分页获取日志
         * @method
         * @name getSyslogPage
         */
        getSyslogPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/syslog"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 点击链接的时候调取，更新为已读
         * @method
         * @name read
         */
        read: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnounceReadInfo/read/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 我收到的通知公告，未读置顶
         * @method
         * @name getSysAnnouncementByUserId
         */
        getSysAnnouncementByUserId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnounceReadInfo/announce/getByUserId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取未读消息数量
         * @method
         * @name countAnnounceReadInfo
         */
        countAnnounceReadInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnounceReadInfo/announce/count"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通告查看浏览情况-获取分页,传值announceId.isRead，参数isRead=0未读  参数isRead=1已读，
         * @method
         * @name getSysAnnounceReadInfoPage
         */
        getSysAnnounceReadInfoPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnounceReadInfo/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-获取列表，用于上拉加载更多
         * @method
         * @name getSysDepartList
         */
        getSysDepartList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/list"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-通过Id查询
         * @method
         * @name getSysDepart
         */
        getSysDepart: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-通过Id删除
         * @method
         * @name deleteSysDepart
         */
        deleteSysDepart: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-导入
         * @method
         * @name importSysDepart
         */
        importSysDepart: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/import"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-获取部门树
         * @method
         * @name getDepartTree
         */
        getDepartTree: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/tree"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-获取分页
         * @method
         * @name getSysDepartPage
         */
        getSysDepartPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-导出
         * @method
         * @name exportSysDepartList
         */
        exportSysDepartList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart/export"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 部门-添加|更新
         * @method
         * @name addOrUpdateSysDepart
         */
        addOrUpdateSysDepart: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysDepart"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度奖励-通过Id查询
         * @method
         * @name getReward
         */
        getReward: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/reward/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度奖励-获取分页（菜单调用）
         * @method
         * @name getRewardPage
         */
        getRewardPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/reward/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度奖励-通过Id删除，支持批量删除
         * @method
         * @name deleteReward
         */
        deleteReward: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/reward/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度奖励-添加|更新
         * @method
         * @name addOrUpdateReward
         */
        addOrUpdateReward: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/reward"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度奖励-获取分页（详情页调用，传参officeId）
         * @method
         * @name getRewardPageByOfficeId
         */
        getRewardPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/reward/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-责任书签署-获取分页（菜单调用）
         * @method
         * @name getResponsibilityPage
         */
        getResponsibilityPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/responsibility/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-责任书签署-获取分页（详情页调用，传参officeId）
         * @method
         * @name getResponsibilityPageByOfficeId
         */
        getResponsibilityPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/responsibility/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-责任书签署-通过Id删除，支持批量删除
         * @method
         * @name deleteResponsibility
         */
        deleteResponsibility: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/responsibility/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-责任书签署-通过Id查询
         * @method
         * @name getResponsibility
         */
        getResponsibility: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/responsibility/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-责任书签署-添加|更新
         * @method
         * @name addOrUpdateResponsibility
         */
        addOrUpdateResponsibility: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/responsibility"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-审核
         * @method
         * @name check
         */
        check: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/check"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-人员信息-获取分页（详情页调用，传officeId）
         * @method
         * @name getEmployPageByOfficeId
         */
        getEmployPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-添加|更新
         * @method
         * @name addOrUpdateEmploy
         */
        addOrUpdateEmploy: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-通过Id查询
         * @method
         * @name getEmploy
         */
        getEmploy: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-员工花名册员工类型态(1全职 2兼职 3实习)统计
         * @method
         * @name employTypeCount
         */
        employTypeCount: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/typeCount"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-通过Id删除，支持批量删除
         * @method
         * @name deleteEmploy
         */
        deleteEmploy: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工花名册管理-获取分页
         * @method
         * @name getEmployPage
         */
        getEmployPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["departId"] !== undefined) {
                        queryParameters["departId"] = params["departId"]
                }

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-员工花名册员工状态(1正式 2试用 3离职)统计
         * @method
         * @name employStateCount
         */
        employStateCount: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/stateCount"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 员工管理-员工审核分页
         * @method
         * @name getEmployCheckPage
         */
        getEmployCheckPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/employ/check/Page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["departId"] !== undefined) {
                        queryParameters["departId"] = params["departId"]
                }

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度经营状况-获取分页（菜单调用）
         * @method
         * @name getBusinessPage
         */
        getBusinessPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/business/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度经营状况-通过Id删除，支持批量删除
         * @method
         * @name deleteBusiness
         */
        deleteBusiness: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/business/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度经营状况-通过Id查询
         * @method
         * @name getBusiness
         */
        getBusiness: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/business/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度经营状况-获取分页（详情页调用，传参officeId）
         * @method
         * @name getBusinessPageByOfficeId
         */
        getBusinessPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/business/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度经营状况-添加|更新
         * @method
         * @name addOrUpdateBusiness
         */
        addOrUpdateBusiness: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/business"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-通过Id查询
         * @method
         * @name getSupplier
         */
        getSupplier: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-添加|更新
         * @method
         * @name addOrUpdateSupplier
         */
        addOrUpdateSupplier: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-通过用户Id获取供应商信息
         * @method
         * @name getSupplierByUserId
         */
        getSupplierByUserId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/getSupplierByUserId/{userId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{userId}", params["userId"])

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-通过Ids批量查询
         * @method
         * @name getSupplierByIds
         */
        getSupplierByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-通过Id删除，支持批量删除
         * @method
         * @name deleteSupplier
         */
        deleteSupplier: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-检查供应商名称是否存在
         * @method
         * @name checkCompanyName
         */
        checkCompanyName: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/checkCompanyName"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["companyName"] !== undefined) {
                        queryParameters["companyName"] = params["companyName"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商管理-获取分页(传参status-0临时，1正式)
         * @method
         * @name getSupplierPage
         */
        getSupplierPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplier/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-注销办理-通过Id查询
         * @method
         * @name getOfficeCancel
         */
        getOfficeCancel: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/officeCancel/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-注销办理-更新（传参id, checkState（1通过2不通过）、reason）
         * @method
         * @name addOrUpdateOfficeCancel
         */
        addOrUpdateOfficeCancel: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/officeCancel"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-注销办理-获取分页
         * @method
         * @name getOfficeCancelPage
         */
        getOfficeCancelPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/officeCancel/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-注销办理-获取列表不分页（获取注销办理进度调用）
         * @method
         * @name getOfficeCancelListByOfficeId
         */
        getOfficeCancelListByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/officeCancel/list/{officeId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{officeId}", params["officeId"])

                if (params["officeId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: officeId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-注销办理-通过Id删除，支持批量删除
         * @method
         * @name deleteOfficeCancel
         */
        deleteOfficeCancel: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/officeCancel/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取message
         * @method
         * @name getMessage
         */
        getMessage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/message/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除message
         * @method
         * @name deleteMessage
         */
        deleteMessage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/message/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取message分页
         * @method
         * @name getMessagePage
         */
        getMessagePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/message"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                if (params["content"] !== undefined) {
                        queryParameters["content"] = params["content"]
                }

                if (params["title"] !== undefined) {
                        queryParameters["title"] = params["title"]
                }

                if (params["receiver"] !== undefined) {
                        queryParameters["receiver"] = params["receiver"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加message
         * @method
         * @name addMessage
         */
        addMessage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/message"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新message
         * @method
         * @name updateMessage
         */
        updateMessage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/message"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取磁盘信息
         * @method
         * @name queryDiskInfo
         */
        queryDiskInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/montior/redis/queryDiskInfo"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取服务器硬件信息
         * @method
         * @name getServerInfos
         */
        getServerInfos: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/montior/getServerInfos"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取Redis详细信息
         * @method
         * @name getRedisInfo
         */
        getRedisInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/montior/redis/info"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取 redis key 数量
         * @method
         * @name getKeysSize
         */
        getKeysSize: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/montior/redis/keysSize"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取 redis 内存信息
         * @method
         * @name getMemoryInfo
         */
        getMemoryInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/montior/redis/memoryInfo"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-网站/网店/新媒体备案-通过Id删除，支持批量删除
         * @method
         * @name deleteRecord
         */
        deleteRecord: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/record/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-网站/网店/新媒体备案-获取分页（菜单调用）
         * @method
         * @name getRecordPage
         */
        getRecordPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/record/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-网站/网店/新媒体备案-通过Id查询
         * @method
         * @name getRecord
         */
        getRecord: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/record/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-网站/网店/新媒体备案-获取分页（详情页调用，传参officeId）
         * @method
         * @name getRecordPageByOfficeId
         */
        getRecordPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/record/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-网站/网店/新媒体备案-添加|更新
         * @method
         * @name addOrUpdateRecord
         */
        addOrUpdateRecord: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/record"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置细则-获取分页
         * @method
         * @name getRewardManageItemPage
         */
        getRewardManageItemPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManageItem/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置细则-添加|更新
         * @method
         * @name addOrUpdateRewardManageItem
         */
        addOrUpdateRewardManageItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManageItem"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置细则-通过Id删除，支持批量删除
         * @method
         * @name deleteRewardManageItem
         */
        deleteRewardManageItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManageItem/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置细则-通过Id查询
         * @method
         * @name getRewardManageItem
         */
        getRewardManageItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManageItem/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-获取企查查企业详情（新增时调用）
         * @method
         * @name qccDetail
         */
        qccDetail: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/qccDetail"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["keyword"] !== undefined) {
                        queryParameters["keyword"] = params["keyword"]
                }

                if (params["keyword"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: keyword"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-获取分页，列表加操作（注销/办理进度）
         * @method
         * @name getOfficePage
         */
        getOfficePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-通过Id查询
         * @method
         * @name getOffice
         */
        getOffice: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-通过Id删除，支持批量删除
         * @method
         * @name deleteOffice
         */
        deleteOffice: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-获取企查查企业详情，并更新到数据库（详情页调用）
         * @method
         * @name qccDetailSync
         */
        qccDetailSync: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/qccDetailSync/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["id"] !== undefined) {
                        queryParameters["id"] = params["id"]
                }

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-申请注销
         * @method
         * @name applyCancelOffice
         */
        applyCancelOffice: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/applyCancel/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-强制注销
         * @method
         * @name forceCancelOffice
         */
        forceCancelOffice: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office/forceCancel"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-添加|更新
         * @method
         * @name addOrUpdateOffice
         */
        addOrUpdateOffice: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/office"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-补缴费用-获取分页（菜单调用）
         * @method
         * @name getPaymentPage
         */
        getPaymentPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/payment/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-补缴费用-通过Id删除，支持批量删除
         * @method
         * @name deletePayment
         */
        deletePayment: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/payment/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-补缴费用-通过Id查询
         * @method
         * @name getPayment
         */
        getPayment: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/payment/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-补缴费用-添加|更新
         * @method
         * @name addOrUpdatePayment
         */
        addOrUpdatePayment: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/payment"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-补缴费用-获取分页（详情页调用，传参officeId）
         * @method
         * @name getPaymentPageByOfficeId
         */
        getPaymentPageByOfficeId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/payment/pageByOfficeId"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 判断角色名称是否可用
         * @method
         * @name judgeRoleName
         */
        judgeRoleName: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/judgeRoleName"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["roleId"] !== undefined) {
                        queryParameters["roleId"] = params["roleId"]
                }

                if (params["roleName"] !== undefined) {
                        queryParameters["roleName"] = params["roleName"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 判断角色编码是否可用
         * @method
         * @name judgeRoleNum
         */
        judgeRoleNum: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/judgeRoleNum"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["roleId"] !== undefined) {
                        queryParameters["roleId"] = params["roleId"]
                }

                if (params["roleNum"] !== undefined) {
                        queryParameters["roleNum"] = params["roleNum"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取拥有该角色的所有用户
         * @method
         * @name getRoleUsers
         */
        getRoleUsers: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/{roleId}/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{roleId}", params["roleId"])

                if (params["roleId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: roleId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取该用户创建的角色-列表
         * @method
         * @name getRoles
         */
        getRoles: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["userId"] !== undefined) {
                        queryParameters["userId"] = params["userId"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加（更新）角色
         * @method
         * @name addOrUpdateRole
         */
        addOrUpdateRole: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除角色
         * @method
         * @name deleteRole
         */
        deleteRole: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/{roleId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{roleId}", params["roleId"])

                if (params["roleId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: roleId"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取用户能分配的角色-列表
         * @method
         * @name getAssignRoles
         */
        getAssignRoles: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/assignRoles"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取角色-分页
         * @method
         * @name getRolesPage
         */
        getRolesPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取所有角色-列表
         * @method
         * @name getAllRoles
         */
        getAllRoles: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/getAllRoles"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取所有角色-分页
         * @method
         * @name getAllRolesPage
         */
        getAllRolesPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/roles/getAllRolesPage"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取process分页
         * @method
         * @name getProcessPage
         */
        getProcessPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加process
         * @method
         * @name addProcess
         */
        addProcess: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                if (params["processname"] !== undefined) {
                        form["processname"] = params["processname"]
                }

                if (params["processname"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: processname"))
                }

                if (params["note"] !== undefined) {
                        form["note"] = params["note"]
                }

                if (params["note"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: note"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新process
         * @method
         * @name updateProcess
         */
        updateProcess: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取流程图
         * @method
         * @name getImageById
         */
        getImageById: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/getImageById"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["deployId"] !== undefined) {
                        queryParameters["deployId"] = params["deployId"]
                }

                if (params["deployId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: deployId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取提交路线
         * @method
         * @name getNextBranches
         */
        getNextBranches: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/getNextBranches"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["taskId"] !== undefined) {
                        queryParameters["taskId"] = params["taskId"]
                }

                if (params["taskId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: taskId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除process
         * @method
         * @name updateProcess
         */
        updateProcess: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取流程历史记录
         * @method
         * @name processHis
         */
        processHis: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/processHis"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["instanceId"] !== undefined) {
                        queryParameters["instanceId"] = params["instanceId"]
                }

                if (params["instanceId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: instanceId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 签收任务
         * @method
         * @name signTask
         */
        signTask: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/signTask"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["taskId"] !== undefined) {
                        queryParameters["taskId"] = params["taskId"]
                }

                if (params["taskId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: taskId"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取流程进度图
         * @method
         * @name processPic
         */
        processPic: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/processPic"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["instanceId"] !== undefined) {
                        queryParameters["instanceId"] = params["instanceId"]
                }

                if (params["instanceId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: instanceId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 发布流程
         * @method
         * @name deploy
         */
        deploy: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/deploy"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["processId"] !== undefined) {
                        queryParameters["processId"] = params["processId"]
                }

                if (params["processId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: processId"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过taskRecord主键ID,单个或批量签收任务
         * @method
         * @name signTaskByRecordId
         */
        signTaskByRecordId: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/process/signTask/patch"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["taskId"] !== undefined) {
                        queryParameters["taskId"] = params["taskId"]
                }

                if (params["taskId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: taskId"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-通过合同编号查询合同使用信息
         * @method
         * @name getContractByNumber
         */
        getContractByNumber: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract/getByNumber"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["contractNumber"] !== undefined) {
                        queryParameters["contractNumber"] = params["contractNumber"]
                }

                if (params["contractNumber"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: contractNumber"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-添加|更新
         * @method
         * @name addOrUpdateContract
         */
        addOrUpdateContract: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-获取分页
         * @method
         * @name getContractPage
         */
        getContractPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-核销/作废合同
         * @method
         * @name setContractById
         */
        setContractById: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract/setState"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["id"] !== undefined) {
                        queryParameters["id"] = params["id"]
                }

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                if (params["contractState"] !== undefined) {
                        queryParameters["contractState"] = params["contractState"]
                }

                if (params["contractState"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: contractState"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-通过Id查询
         * @method
         * @name getContract
         */
        getContract: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 合同管理-通过Id删除，支持批量删除
         * @method
         * @name deleteContract
         */
        deleteContract: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/contract/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取messageTemplate分页
         * @method
         * @name getMessageTemplatePage
         */
        getMessageTemplatePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                if (params["code"] !== undefined) {
                        queryParameters["code"] = params["code"]
                }

                if (params["content"] !== undefined) {
                        queryParameters["content"] = params["content"]
                }

                if (params["title"] !== undefined) {
                        queryParameters["title"] = params["title"]
                }

                if (params["type"] !== undefined) {
                        queryParameters["type"] = params["type"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加messageTemplate
         * @method
         * @name addMessageTemplate
         */
        addMessageTemplate: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新messageTemplate
         * @method
         * @name updateMessageTemplate
         */
        updateMessageTemplate: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取messageTemplate
         * @method
         * @name getMessageTemplate
         */
        getMessageTemplate: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除messageTemplate
         * @method
         * @name deleteMessageTemplate
         */
        deleteMessageTemplate: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 发送消息
         * @method
         * @name sendMessage
         */
        sendMessage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/messageTemplate/send/message"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统角色-添加
         * @method
         * @name add
         */
        add: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRole"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取拥有该角色的所有用户
         * @method
         * @name getSysRoleUsers
         */
        getSysRoleUsers: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRole/{roleId}/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{roleId}", params["roleId"])

                if (params["roleId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: roleId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统角色-获取列表(用户分配角色调用，传用户ID)
         * @method
         * @name getSysRoleList
         */
        getSysRoleList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRole/list/{userId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{userId}", params["userId"])

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统角色-获取分页
         * @method
         * @name getSysRolePage
         */
        getSysRolePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRole/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                if (params["roleName"] !== undefined) {
                        queryParameters["roleName"] = params["roleName"]
                }

                if (params["roleNum"] !== undefined) {
                        queryParameters["roleNum"] = params["roleNum"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过Id获取字典项
         * @method
         * @name getDictItem
         */
        getDictItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除数据字典项
         * @method
         * @name deleteDictItem
         */
        deleteDictItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过Id获取数据字典
         * @method
         * @name getDict
         */
        getDict: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除数据字典
         * @method
         * @name deleteDict
         */
        deleteDict: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 根据字典编码获取字典项
         * @method
         * @name getDictItemList
         */
        getDictItemList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/list/{dictCode}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{dictCode}", params["dictCode"])

                if (params["dictCode"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dictCode"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加/更新字典项
         * @method
         * @name addOrUpdateDictItem
         */
        addOrUpdateDictItem: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 校验字典项值
         * @method
         * @name checkItemValue
         */
        checkItemValue: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/checkItemValue"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["字典项id"] !== undefined) {
                        queryParameters["字典项id"] = params["字典项id"]
                }

                if (params["dictId"] !== undefined) {
                        queryParameters["dictId"] = params["dictId"]
                }

                if (params["dictId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dictId"))
                }

                if (params["value"] !== undefined) {
                        queryParameters["value"] = params["value"]
                }

                if (params["value"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: value"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 校验字典项文本
         * @method
         * @name checkItemText
         */
        checkItemText: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/checkItemText"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["字典项id"] !== undefined) {
                        queryParameters["字典项id"] = params["字典项id"]
                }

                if (params["dictId"] !== undefined) {
                        queryParameters["dictId"] = params["dictId"]
                }

                if (params["dictId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dictId"))
                }

                if (params["text"] !== undefined) {
                        queryParameters["text"] = params["text"]
                }

                if (params["text"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: text"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取字典项-分页
         * @method
         * @name getDictItemPage
         */
        getDictItemPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/item/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 校验字典编码
         * @method
         * @name checkDictCode
         */
        checkDictCode: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/checkDictCode"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["id"] !== undefined) {
                        queryParameters["id"] = params["id"]
                }

                if (params["dictCode"] !== undefined) {
                        queryParameters["dictCode"] = params["dictCode"]
                }

                if (params["dictCode"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dictCode"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取数据字典-分页
         * @method
         * @name getDictPage
         */
        getDictPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加/更新数据字典
         * @method
         * @name addOrUpdateDict
         */
        addOrUpdateDict: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 校验字典名称
         * @method
         * @name checkDictName
         */
        checkDictName: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dict/checkDictName"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["id"] !== undefined) {
                        queryParameters["id"] = params["id"]
                }

                if (params["dictName"] !== undefined) {
                        queryParameters["dictName"] = params["dictName"]
                }

                if (params["dictName"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dictName"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取单个配置
         * @method
         * @name getSetting
         */
        getSetting: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/setting/{key}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{key}", params["key"])

                if (params["key"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: key"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除配置
         * @method
         * @name deleteSetting
         */
        deleteSetting: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/setting/{key}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{key}", params["key"])

                if (params["key"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: key"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加/更新配置
         * @method
         * @name addSetting
         */
        addSetting: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/setting"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded'

                if (params["key"] !== undefined) {
                        form["key"] = params["key"]
                }

                if (params["value"] !== undefined) {
                        form["value"] = params["value"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取配置-分页
         * @method
         * @name getSettingPage
         */
        getSettingPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/setting/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取一个系统全部的菜单按钮树(用于菜单管理）
         * @method
         * @name getMenuTree
         */
        getMenuTree: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/menus/menuTree"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["menuSys"] !== undefined) {
                        queryParameters["menuSys"] = params["menuSys"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取一个菜单详情
         * @method
         * @name getOneMenu
         */
        getOneMenu: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/menus/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除一个菜单
         * @method
         * @name deleteMenu
         */
        deleteMenu: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/menus/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取一个系统全部的菜单按钮树ID（用于数据库添加超级管理员数据）
         * @method
         * @name getMenuIDTree
         */
        getMenuIDTree: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/menus/menuIDTree"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["menuSys"] !== undefined) {
                        queryParameters["menuSys"] = params["menuSys"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加（修改）一个菜单
         * @method
         * @name addMenu
         */
        addMenu: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/menus"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取用户的所有角色
         * @method
         * @name getUserRoles
         */
        getUserRoles: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/roles"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["userId"] !== undefined) {
                        queryParameters["userId"] = params["userId"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加用户角色关系
         * @method
         * @name addUserRole
         */
        addUserRole: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/roles"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["userId"] !== undefined) {
                        form["userId"] = params["userId"]
                }

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                if (params["roleId"] !== undefined) {
                        form["roleId"] = params["roleId"]
                }

                if (params["roleId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: roleId"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除用户角色关系
         * @method
         * @name deleteAuthUserRole
         */
        deleteAuthUserRole: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/roles"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["userId"] !== undefined) {
                        queryParameters["userId"] = params["userId"]
                }

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                if (params["roleId"] !== undefined) {
                        queryParameters["roleId"] = params["roleId"]
                }

                if (params["roleId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: roleId"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取自己所有的权限
         * @method
         * @name getAuthUserPermissions
         */
        getAuthUserPermissions: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/permissions"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["menuSys"] !== undefined) {
                        queryParameters["menuSys"] = params["menuSys"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 重置自己创建的管理员密码
         * @method
         * @name resetAuthUserPassword
         */
        resetAuthUserPassword: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/resetPassword"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["userId"] !== undefined) {
                        form["userId"] = params["userId"]
                }

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                if (params["password"] !== undefined) {
                        form["password"] = params["password"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 修改用户可用状态
         * @method
         * @name updateAuthUserState
         */
        updateAuthUserState: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/state"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["userId"] !== undefined) {
                        form["userId"] = params["userId"]
                }

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                if (params["state"] !== undefined) {
                        form["state"] = params["state"]
                }

                if (params["state"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: state"))
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 修改密码
         * @method
         * @name updateAuthUserPassword
         */
        updateAuthUserPassword: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/updatePassword"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["oldPassword"] !== undefined) {
                        form["oldPassword"] = params["oldPassword"]
                }

                if (params["newPassword"] !== undefined) {
                        form["newPassword"] = params["newPassword"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取管理员
         * @method
         * @name getAuthUsers
         */
        getAuthUsers: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加管理员
         * @method
         * @name addAuthUser
         */
        addAuthUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["username"] !== undefined) {
                        queryParameters["username"] = params["username"]
                }

                if (params["username"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: username"))
                }

                if (params["password"] !== undefined) {
                        queryParameters["password"] = params["password"]
                }

                if (params["password"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: password"))
                }

                if (params["name"] !== undefined) {
                        queryParameters["name"] = params["name"]
                }

                if (params["name"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: name"))
                }

                if (params["mobile"] !== undefined) {
                        queryParameters["mobile"] = params["mobile"]
                }

                if (params["mobile"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: mobile"))
                }

                if (params["userRole"] !== undefined) {
                        queryParameters["userRole"] = params["userRole"]
                }

                if (params["userRole"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userRole"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新管理员
         * @method
         * @name updateAuthUser
         */
        updateAuthUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["userId"] !== undefined) {
                        queryParameters["userId"] = params["userId"]
                }

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                if (params["name"] !== undefined) {
                        queryParameters["name"] = params["name"]
                }

                if (params["name"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: name"))
                }

                if (params["mobile"] !== undefined) {
                        queryParameters["mobile"] = params["mobile"]
                }

                if (params["mobile"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: mobile"))
                }

                if (params["userRole"] !== undefined) {
                        queryParameters["userRole"] = params["userRole"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除管理员（只能删除自己创建的）
         * @method
         * @name deleteUser
         */
        deleteUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["userId"] !== undefined) {
                        queryParameters["userId"] = params["userId"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取用户组合的菜单按钮树
         * @method
         * @name getAuthUserMenus
         */
        getAuthUserMenus: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/menus"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["menuSys"] !== undefined) {
                        queryParameters["menuSys"] = params["menuSys"]
                }

                if (params["parentMenuId"] !== undefined) {
                        queryParameters["parentMenuId"] = params["parentMenuId"]
                }

                if (params["hasButton"] !== undefined) {
                        queryParameters["hasButton"] = params["hasButton"]
                }

                if (params["hasChildren"] !== undefined) {
                        queryParameters["hasChildren"] = params["hasChildren"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取用户-分页
         * @method
         * @name getAuthUserPage
         */
        getAuthUserPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取管理员个人信息
         * @method
         * @name getAuthUser
         */
        getAuthUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/ownInfo"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过idList批量查询用户
         * @method
         * @name getUserByIds
         */
        getUserByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取一个用户的信息
         * @method
         * @name getOneUserInfo
         */
        getOneUserInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/users/{userId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                path = path.replace("{userId}", params["userId"])

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 产品图库-通过Id删除，支持批量删除
         * @method
         * @name deletePhoto
         */
        deletePhoto: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/photo/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 产品图库-添加|更新
         * @method
         * @name addOrUpdatePhoto
         */
        addOrUpdatePhoto: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/photo"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 产品图库-获取分页
         * @method
         * @name getPhotoPage
         */
        getPhotoPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/photo/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-通过Id删除，支持批量删除
         * @method
         * @name deleteSupplierSign
         */
        deleteSupplierSign: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-获取分页
         * @method
         * @name getSupplierSignPage
         */
        getSupplierSignPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-通过Ids批量查询
         * @method
         * @name getSupplierSignByIds
         */
        getSupplierSignByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-通过Id查询
         * @method
         * @name getSupplierSign
         */
        getSupplierSign: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-驳回签约
         * @method
         * @name noPassSign
         */
        noPassSign: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/noPassSign"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 供应商签约-通过签约
         * @method
         * @name passSign
         */
        passSign: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/passSign"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * （新增产品调用，下拉框）供应商签约-获取列表（值为空时，提交提示：无有效的签约信息，无法添加产品）
         * @method
         * @name getSignList
         */
        getSignList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierSign/signList"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["productType"] !== undefined) {
                        queryParameters["productType"] = params["productType"]
                }

                if (params["productType"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: productType"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-设置/取消焦点
         * @method
         * @name setFocus
         */
        setFocus: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation/setFocus/{isFocus}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                path = path.replace("{isFocus}", params["isFocus"])

                if (params["isFocus"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: isFocus"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-通过Id查询
         * @method
         * @name getSysRotation
         */
        getSysRotation: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-发布
         * @method
         * @name setPublish
         */
        setPublish: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation/setPublish/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-添加|更新
         * @method
         * @name addOrUpdateSysRotation
         */
        addOrUpdateSysRotation: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-获取分页，通过参数传值newsCategory获取不同分类，公司新闻publishState=1
         * @method
         * @name getSysRotationPage
         */
        getSysRotationPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 热点新闻-通过Id删除，支持批量删除
         * @method
         * @name deleteSysRotation
         */
        deleteSysRotation: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysRotation/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-添加|更新
         * @method
         * @name addOrUpdateAttendance
         */
        addOrUpdateAttendance: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-通过Ids批量查询
         * @method
         * @name getAttendanceByIds
         */
        getAttendanceByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-获取分页
         * @method
         * @name getAttendancePage
         */
        getAttendancePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-获取列表，用于上拉加载更多
         * @method
         * @name getAttendanceList
         */
        getAttendanceList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/list"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-通过Id删除，支持批量删除
         * @method
         * @name deleteAttendance
         */
        deleteAttendance: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-导出
         * @method
         * @name exportAttendance
         */
        exportAttendance: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/export"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/msexcel;charset=UTF-8'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-导入
         * @method
         * @name importAttendance
         */
        importAttendance: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/import"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 考勤管理-通过Id查询
         * @method
         * @name getAttendance
         */
        getAttendance: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/attendance/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置-通过Id查询
         * @method
         * @name getRewardManage
         */
        getRewardManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManage/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置-添加|更新
         * @method
         * @name addOrUpdateRewardManage
         */
        addOrUpdateRewardManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManage"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置-通过Id删除，支持批量删除
         * @method
         * @name deleteRewardManage
         */
        deleteRewardManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManage/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度奖励设置-获取分页
         * @method
         * @name getRewardManagePage
         */
        getRewardManagePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/rewardManage/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取单个dataSnapshot
         * @method
         * @name getDataSnapshot
         */
        getDataSnapshot: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dataSnapshot/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除dataSnapshot
         * @method
         * @name deleteDataSnapshot
         */
        deleteDataSnapshot: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dataSnapshot/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加dataSnapshot
         * @method
         * @name addDataSnapshot
         */
        addDataSnapshot: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dataSnapshot/addDataSnapshot"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["dataId"] !== undefined) {
                        queryParameters["dataId"] = params["dataId"]
                }

                if (params["dataId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: dataId"))
                }

                if (params["tableName"] !== undefined) {
                        queryParameters["tableName"] = params["tableName"]
                }

                if (params["tableName"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: tableName"))
                }

                if (params["uuId"] !== undefined) {
                        queryParameters["uuId"] = params["uuId"]
                }

                if (params["uuId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: uuId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取dataSnapshot分页
         * @method
         * @name getDataSnapshotPage
         */
        getDataSnapshotPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dataSnapshot/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 数据版本对比
         * @method
         * @name dataVS
         */
        dataVS: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/dataSnapshot/dataVS"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["id1"] !== undefined) {
                        queryParameters["id1"] = params["id1"]
                }

                if (params["id1"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id1"))
                }

                if (params["id2"] !== undefined) {
                        queryParameters["id2"] = params["id2"]
                }

                if (params["id2"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id2"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 百度富文本编辑框获取配置接口
         * @method
         * @name ueditorGetConfig
         */
        ueditorGetConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/ueditor"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'text/html'

                if (params["action"] !== undefined) {
                        queryParameters["action"] = params["action"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 百度富文本编编辑器上传文件接口
         * @method
         * @name ueditorServerUrl
         */
        ueditorServerUrl: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/ueditor"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["upfile"] !== undefined) {
                        form["upfile"] = params["upfile"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 根据年度生成月份列表
         * @method
         * @name getMonths
         */
        getMonths: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/salerKPIManage/getMonths"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["year"] !== undefined) {
                        queryParameters["year"] = params["year"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-业务销售-通过Id查询
         * @method
         * @name getSalerKPIManage
         */
        getSalerKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/salerKPIManage/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-业务销售-获取分页（传参departType-1社内部门2-网点分社）
         * @method
         * @name getSalerKPIManagePage
         */
        getSalerKPIManagePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/salerKPIManage/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-业务销售-添加|更新（传参departType-1社内；2网点分社）
         * @method
         * @name addOrUpdateSalerKPIManage
         */
        addOrUpdateSalerKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/salerKPIManage"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-业务销售-通过Id删除，支持批量删除
         * @method
         * @name deleteSalerKPIManage
         */
        deleteSalerKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/salerKPIManage/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 服务是否活跃
         * @method
         * @name isActive
         */
        isActive: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/active"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 发送指定消息到前台(测试websocket通讯)
         * @method
         * @name testSend
         */
        testSend: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/send/one/{userId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{userId}", params["userId"])

                if (params["userId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: userId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-获取分页,通过参数传值msgCategory获取不同分类
         * @method
         * @name getSysAnnouncementPage
         */
        getSysAnnouncementPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-通过Id发布
         * @method
         * @name publishSysAnnouncement
         */
        publishSysAnnouncement: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/publish/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-通过Id切换无效有效
         * @method
         * @name setSysAnnouncement
         */
        setSysAnnouncement: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/set/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                if (params["isInvalid"] !== undefined) {
                        queryParameters["isInvalid"] = params["isInvalid"]
                }

                if (params["isInvalid"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: isInvalid"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-通过Id删除，支持批量删除
         * @method
         * @name deleteSysAnnouncement
         */
        deleteSysAnnouncement: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-添加|更新
         * @method
         * @name addOrUpdateSysAnnouncement
         */
        addOrUpdateSysAnnouncement: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 系统通告-通过Id查询
         * @method
         * @name getSysAnnouncement
         */
        getSysAnnouncement: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysAnnouncement/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取sysArea
         * @method
         * @name getArea
         */
        getArea: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysArea/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除sysArea
         * @method
         * @name deleteArea
         */
        deleteArea: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysArea/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取区域树形结构
         * @method
         * @name getAreas
         */
        getAreas: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysArea"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["code"] !== undefined) {
                        queryParameters["code"] = params["code"]
                }

                if (params["recursion"] !== undefined) {
                        queryParameters["recursion"] = params["recursion"]
                }

                if (params["queryAll"] !== undefined) {
                        queryParameters["queryAll"] = params["queryAll"]
                }

                if (params["level"] !== undefined) {
                        queryParameters["level"] = params["level"]
                }

                if (params["root"] !== undefined) {
                        queryParameters["root"] = params["root"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加sysArea
         * @method
         * @name addArea
         */
        addArea: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysArea"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新sysArea
         * @method
         * @name updateArea
         */
        updateArea: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysArea"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'PUT',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-通过Id查询
         * @method
         * @name getTrip
         */
        getTrip: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-通过线路Id获取行程列表信息
         * @method
         * @name getTripPage
         */
        getTripPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip/tripList/{routeId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{routeId}", params["routeId"])

                if (params["routeId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: routeId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-通过Id删除，支持批量删除
         * @method
         * @name deleteTrip
         */
        deleteTrip: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-导入
         * @method
         * @name importTrip
         */
        importTrip: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip/import"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-通过Ids批量查询
         * @method
         * @name getTripByIds
         */
        getTripByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程安排-添加|更新
         * @method
         * @name addOrUpdateTrip
         */
        addOrUpdateTrip: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/trip"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-变更记录-获取企查查数据
         * @method
         * @name qccChange
         */
        qccChange: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/change/qccChange/{officeId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{officeId}", params["officeId"])

                if (params["officeId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: officeId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网店分社-变更记录-获取分页（详情页调用），传参officeId,排序changeDate DESC
         * @method
         * @name getChangePage
         */
        getChangePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/change/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 导游管理-通过Id查询
         * @method
         * @name getGuide
         */
        getGuide: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/guide/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 导游管理-导入
         * @method
         * @name importGuide
         */
        importGuide: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/guide/import"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 导游管理-通过Id删除，支持批量删除
         * @method
         * @name deleteGuide
         */
        deleteGuide: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/guide/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 导游管理-添加|更新
         * @method
         * @name addOrUpdateGuide
         */
        addOrUpdateGuide: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/guide"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 导游管理-获取分页
         * @method
         * @name getGuidePage
         */
        getGuidePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/guide/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程配图-通过Id进行主图设置
         * @method
         * @name getBanner
         */
        getBanner: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/banner/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 行程配图-通过Id删除
         * @method
         * @name deleteBanner
         */
        deleteBanner: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/banner/delete/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-获取列表，用于上拉加载更多
         * @method
         * @name getSysUserList
         */
        getSysUserList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/list"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-导入
         * @method
         * @name importSysUser
         */
        importSysUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/import"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-获取分页
         * @method
         * @name getSysUserPage
         */
        getSysUserPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-通过Id查询
         * @method
         * @name getSysUser
         */
        getSysUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-通过Id删除
         * @method
         * @name deleteSysUser
         */
        deleteSysUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-获取个人信息
         * @method
         * @name getSysUserInfo
         */
        getSysUserInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/ownInfo"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-修改个人信息
         * @method
         * @name updateSysUser
         */
        updateSysUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/updateSysUser"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-获取用户树
         * @method
         * @name getUserTree
         */
        getUserTree: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/tree"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-通过Ids批量查询
         * @method
         * @name getSysUserByIds
         */
        getSysUserByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-通过用户名查询
         * @method
         * @name getSysUserByUserName
         */
        getSysUserByUserName: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/username/{username}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{username}", params["username"])

                if (params["username"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: username"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-导出
         * @method
         * @name exportSysUserList
         */
        exportSysUserList: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser/export"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 用户-添加|更新
         * @method
         * @name addOrUpdateSysUser
         */
        addOrUpdateSysUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/sysUser"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取本地文件(默认下载文件）
         * @method
         * @name getFile
         */
        getFile: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/files/{fileName}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                path = path.replace("{fileName}", params["fileName"])

                if (params["fileName"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: fileName"))
                }

                if (params["imageFile"] !== undefined) {
                        queryParameters["imageFile"] = params["imageFile"]
                }

                if (params["filename"] !== undefined) {
                        queryParameters["filename"] = params["filename"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取视频封面图
         * @method
         * @name getVideoFrame
         */
        getVideoFrame: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/files/getVideoFrame"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                if (params["fileName"] !== undefined) {
                        queryParameters["fileName"] = params["fileName"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 上传文件到本地
         * @method
         * @name uploadFile
         */
        uploadFile: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/files/local/upload"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'multipart/form-data'

                if (params["useOriginalFileName"] !== undefined) {
                        form["useOriginalFileName"] = params["useOriginalFileName"]
                }

                if (params["file"] !== undefined) {
                        form["file"] = params["file"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除文件
         * @method
         * @name deleteFile
         */
        deleteFile: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/file/files/files"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                if (params["fileName"] !== undefined) {
                        queryParameters["fileName"] = params["fileName"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户审核
         * @method
         * @name checkSupplierUser
         */
        checkSupplierUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                if (params["status"] !== undefined) {
                        queryParameters["status"] = params["status"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户-添加|更新
         * @method
         * @name addOrUpdateSupplierUser
         */
        addOrUpdateSupplierUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户-通过Id删除，支持批量删除
         * @method
         * @name deleteSupplierUser
         */
        deleteSupplierUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商注册用户列表（审核注册用户）-获取分页
         * @method
         * @name getSupplierUserPage
         */
        getSupplierUserPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户注册
         * @method
         * @name registerSupplierUser
         */
        registerSupplierUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser/registerSupplierUser"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["username"] !== undefined) {
                        form["username"] = params["username"]
                }

                if (params["username"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: username"))
                }

                if (params["password"] !== undefined) {
                        form["password"] = params["password"]
                }

                if (params["password"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: password"))
                }

                if (params["brandName"] !== undefined) {
                        form["brandName"] = params["brandName"]
                }

                if (params["brandName"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: brandName"))
                }

                if (params["companyAddress"] !== undefined) {
                        form["companyAddress"] = params["companyAddress"]
                }

                if (params["companyAddress"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: companyAddress"))
                }

                if (params["companyName"] !== undefined) {
                        form["companyName"] = params["companyName"]
                }

                if (params["companyName"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: companyName"))
                }

                if (params["leader"] !== undefined) {
                        form["leader"] = params["leader"]
                }

                if (params["leader"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: leader"))
                }

                if (params["mobileNumber"] !== undefined) {
                        form["mobileNumber"] = params["mobileNumber"]
                }

                if (params["mobileNumber"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: mobileNumber"))
                }

                if (params["regionalDestination"] !== undefined) {
                        form["regionalDestination"] = params["regionalDestination"]
                }

                if (params["regionalDestination"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: regionalDestination"))
                }

                if (params["businessType"] !== undefined) {
                        form["businessType"] = params["businessType"]
                }

                if (params["businessType"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: businessType"))
                }

                if (params["vcode"] !== undefined) {
                        form["vcode"] = params["vcode"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户-通过Ids批量查询
         * @method
         * @name getSupplierUserByIds
         */
        getSupplierUserByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 综合管理-供应商用户-通过Id查询
         * @method
         * @name getSupplierUser
         */
        getSupplierUser: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/supplierUser/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 添加任务
         * @method
         * @name addQuartzConfig
         */
        addQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/add"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取任务日志分页
         * @method
         * @name getQuartzLogPage
         */
        getQuartzLogPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/log"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                if (params["quartzId"] !== undefined) {
                        queryParameters["quartzId"] = params["quartzId"]
                }

                if (params["name"] !== undefined) {
                        queryParameters["name"] = params["name"]
                }

                if (params["result"] !== undefined) {
                        queryParameters["result"] = params["result"]
                }

                if (params["startTime"] !== undefined) {
                        queryParameters["startTime"] = params["startTime"]
                }

                if (params["endTime"] !== undefined) {
                        queryParameters["endTime"] = params["endTime"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 执行一次任务
         * @method
         * @name runQuartzConfig
         */
        runQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/run/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取任务分页
         * @method
         * @name getQuartzConfigPage
         */
        getQuartzConfigPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["pageIndex"] !== undefined) {
                        queryParameters["pageIndex"] = params["pageIndex"]
                }

                if (params["pageSize"] !== undefined) {
                        queryParameters["pageSize"] = params["pageSize"]
                }

                if (params["name"] !== undefined) {
                        queryParameters["name"] = params["name"]
                }

                if (params["status"] !== undefined) {
                        queryParameters["status"] = params["status"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新任务
         * @method
         * @name updateQuartzConfig
         */
        updateQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过Id获取任务详情
         * @method
         * @name getQuartzConfigById
         */
        getQuartzConfigById: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 恢复任务
         * @method
         * @name resumeQuartzConfig
         */
        resumeQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/resume/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 通过类名获取任务详情
         * @method
         * @name getQuartzConfigByClazz
         */
        getQuartzConfigByClazz: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/getByClazz/{clazz}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{clazz}", params["clazz"])

                if (params["clazz"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: clazz"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 删除任务
         * @method
         * @name deleteQuartzConfig
         */
        deleteQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/delete/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 暂停任务
         * @method
         * @name pauseQuartzConfig
         */
        pauseQuartzConfig: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/quartz/pause/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 团期库存-通过routeId查询
         * @method
         * @name getStock
         */
        getStock: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/stock/getByRouteId/{routeId}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{routeId}", params["routeId"])

                if (params["routeId"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: routeId"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 团期库存-添加|更新
         * @method
         * @name addOrUpdateStock
         */
        addOrUpdateStock: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/stock"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 更新日志-获取分页（传参businessId--对应业务数据id）
         * @method
         * @name getUpdateLogPage
         */
        getUpdateLogPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/updateLog/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-获取分页（传参departType-1社内部门2-网点分社）
         * @method
         * @name getKPIManagePage
         */
        getKPIManagePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/kpiManage/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-通过Id查询
         * @method
         * @name getKPIManage
         */
        getKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/kpiManage/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 网点分社-年度业绩目标管理-通过Id删除，支持批量删除
         * @method
         * @name deleteKPIManage
         */
        deleteKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/kpiManage/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-批量添加
         * @method
         * @name batchAddKPIManage
         */
        batchAddKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/kpiManage/batchAdd"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 年度业绩目标管理-添加|更新（传参departType-1社内；2网点分社）
         * @method
         * @name addOrUpdateKPIManage
         */
        addOrUpdateKPIManage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/kpiManage"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 账号登录
         * @method
         * @name login
         */
        login: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/login"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

                if (params["username"] !== undefined) {
                        form["username"] = params["username"]
                }

                if (params["username"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: username"))
                }

                if (params["password"] !== undefined) {
                        form["password"] = params["password"]
                }

                if (params["password"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: password"))
                }

                if (params["vcode"] !== undefined) {
                        form["vcode"] = params["vcode"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 退出
         * @method
         * @name loginOut
         */
        loginOut: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/login"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 获取图片验证码
         * @method
         * @name generateVcode
         */
        generateVcode: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/auth/login/getVcode"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职进行中－ 获取分页
         * @method
         * @name getLeavingDoingPage
         */
        getLeavingDoingPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/doingList"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职待办页－ 获取分页
         * @method
         * @name getLeavingTodoPage
         */
        getLeavingTodoPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/todoList"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职申请-发起流程
         * @method
         * @name startProcess
         */
        startProcess: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职管理-通过Id删除，支持批量删除
         * @method
         * @name deleteLeaving
         */
        deleteLeaving: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职已完成-获取分页
         * @method
         * @name getLeavingPage
         */
        getLeavingPage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 离职管理-通过Id查询
         * @method
         * @name getLeaving
         */
        getLeaving: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 提交审核任务
         * @method
         * @name submitReportTask
         */
        submitReportTask: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/submit"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 根据登录用户获取员工基本信息，用来基本信息自动补充，不可修改
         * @method
         * @name leaveInfo
         */
        leaveInfo: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/leaving/leaveInfo"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-通过Id审核
         * @method
         * @name check
         */
        check: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/check"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路产品审核信息-获取分页
         * @method
         * @name getCheckRoutePage
         */
        getCheckRoutePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/checkPage"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路产品信息-获取分页
         * @method
         * @name getRoutePage
         */
        getRoutePage: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/page"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-添加|更新
         * @method
         * @name addOrUpdateRoute
         */
        addOrUpdateRoute: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'POST',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-通过Ids批量查询
         * @method
         * @name getRouteByIds
         */
        getRouteByIds: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/findByIds"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-通过Id删除，支持批量删除
         * @method
         * @name deleteRoute
         */
        deleteRoute: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/delete"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                if (params["body"] !== undefined) {
                        body = params["body"]
                }

                let url = domain + path
                let options = {
                        method: 'DELETE',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-判断是否是供应商,如果是供应商特别处理
         * @method
         * @name isSupplier
         */
        isSupplier: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/isSupplier"
                let body = {}
                let queryParameters = params
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
        /**
         * 线路信息-通过Id查询
         * @method
         * @name getRoute
         */
        getRoute: (params = {}) => {

                let domain = window.api.base + `/api`
                let path = "/route/{id}"
                let body = {}
                let queryParameters = {}
                let headers = {}
                let form = {}

                headers["Accept"] = 'application/json'
                headers["Content-Type"] = 'application/json'

                path = path.replace("{id}", params["id"])

                if (params["id"] === undefined) {
                        return Promise.reject(new Error("Missing required  parameter: id"))
                }

                let url = domain + path
                let options = {
                        method: 'GET',
                        url: url,
                        params: queryParameters,
                        data: body,
                        headers: headers
                }
                if (Object.keys(form).length > 0) {
                        options.data = qs.stringify(form);
                        options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
                }

                return axios(options).then(ret => {
                        return ret;
                });
        },
}