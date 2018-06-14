import axios from 'axios';

export default class Api {

    static get defaultOptions() {
        return {
            baseUrl: null,
            listUrl: null,
            downloadUrl: null,
            uploadUrl: null,
            deleteUrl: null,
            axiosOptions: {}
        };
    }

    constructor(opts) {
        this.options = { ...this.constructor.defaultOptions, ...opts};

        if (this.options.baseUrl) {
            this.options.axiosOptions.baseURL = this.options.baseUrl;
        }

        this.axios = axios.create(this.options.axiosOptions);
    }

    list(path) {
        return this.axios.get(this.options.listUrl, { params: { path: path } });
    }

    upload(data, config) {
        return this.axios.post(this.options.uploadUrl, data, config);
    }

    deleteFile(file) {
        let formData = new FormData()
        formData.append('path', file.path)

        if (this.options.deleteUrl)

            return this.axios.post(this.options.deleteUrl, formData)
    }

    downloadUrl(file) {
        // TODO : proper
        if (this.options.downloadUrl)
            return this.options.downloadUrl+'?path='+file.path;
    }

}