const axios = require('axios');
const core = require("@actions/core");
const axios = require("axios");

(async () => {

    const _method = core.getInput('method');
    const _url = core.getInput('url');

    if (_method == 'POST') {
        await axios.post(_url);
    }

    if (_method == 'GET') {
        await axios.get(_url);
    }

})();